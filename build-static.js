require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const DIST_DIR = path.join(__dirname, 'dist');

// Clean and create dist
if (fs.existsSync(DIST_DIR)) fs.rmSync(DIST_DIR, { recursive: true });
fs.mkdirSync(DIST_DIR, { recursive: true });

async function getPageContent(page) {
    const { data } = await supabase.from('page_content').select('section, content').eq('page', page).order('section');
    const obj = {};
    if (data) data.forEach(r => { obj[r.section] = r.content; });
    return obj;
}

function renderPage(pageName, extraData = {}) {
    const layoutPath = path.join(__dirname, 'views', 'layout.ejs');
    const layoutTemplate = fs.readFileSync(layoutPath, 'utf-8');
    const data = { page: pageName, content: extraData.content || {}, ...extraData };
    return ejs.render(layoutTemplate, data, { filename: layoutPath });
}

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
        const s = path.join(src, entry.name);
        const d = path.join(dest, entry.name);
        entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
    });
}

// Map existing Supabase schema to what templates expect
function mapProgram(p) {
    const slug = p.slug || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Check if we have dynamic details from Supabase or fallback to program-data.js for now
    let details = p.details;
    if (!details || Object.keys(details).length === 0) {
        // Fallback for build process if details column empty or doesn't exist
        try {
            const programData = require('./program-data.js');
            details = programData[slug] || Object.values(programData).find(x => slug.includes(x.slug)) || {};
        } catch (e) {
            details = {};
        }
    }
    
    const feesStr = p.fees || (p.tuition_fee ? (p.tuition_fee / 100000).toFixed(1) + 'L' : '');
    const durationStr = p.duration || '';
    const eligibilityStr = p.eligibility || '';
    const nameStr = p.name;

    return {
        id: p.id,
        name: nameStr,
        slug: slug,
        level: p.level || (p.degree_level?.toLowerCase() === 'undergraduate' ? 'ug' : 'pg'),
        duration: durationStr,
        fees: feesStr,
        eligibility: eligibilityStr,
        description: p.description || '',
        icon: p.icon || 'fas fa-graduation-cap',
        status: p.status || 'active',
        
        // Detailed page content (with fallbacks if empty)
        fullName: details.fullName || nameStr,
        heroTitle: details.heroTitle || `Advance Your Career with an ${nameStr}`,
        heroDesc: details.heroDesc || p.description || `Explore our flexible ${nameStr} program tailored for you.`,
        feesRange: details.feesRange || feesStr,
        about: details.about || p.description || `The ${nameStr} program is designed to provide you with the best industry skills.`,
        benefits: details.benefits || [],
        whoShould: details.whoShould || [],
        eligibilityCriteria: details.eligibilityCriteria || [eligibilityStr],
        specializations: details.specializations || [],
        syllabus: details.syllabus || [],
        skills: details.skills || [],
        universities: details.universities || [],
        admissionSteps: details.admissionSteps || [
            { title: 'Online Registration', desc: 'Fill the application form.', icon: 'fas fa-file-signature' },
            { title: 'Upload Documents', desc: 'Submit required documents.', icon: 'fas fa-cloud-upload-alt' },
            { title: 'Pay Fee', desc: 'Complete payment process.', icon: 'fas fa-credit-card' },
            { title: 'Get Confirmation', desc: 'Receive admission confirmation.', icon: 'fas fa-check-circle' }
        ],
        jobs: details.jobs || [],
        recruiters: details.recruiters || ['Top Industry Partners'],
        faqs: details.faqs || [
            { q: `Is the ${nameStr} valid?`, a: `Yes, it is fully accredited and recognised by UGC/AICTE.` }
        ]
    };
}

function mapUniversity(u) {
    return {
        id: u.id,
        name: u.name,
        slug: u.slug || u.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        badge: u.badge || u.name.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase(),
        description: u.description || '',
        programs: u.programs || '',
        logo_url: u.logo_url || '',
        status: u.status || 'active'
    };
}

async function build() {
    console.log('🔨 Building static site...\n');

    console.log('📁 Copying static assets...');
    copyDir(path.join(__dirname, 'public'), DIST_DIR);

    console.log('\n📊 Fetching data from Supabase...');
    const [{ data: rawPrograms }, { data: rawUnis }, { data: blogPosts }] = await Promise.all([
        supabase.from('programs').select('*'),
        supabase.from('universities').select('*'),
        supabase.from('blog_posts').select('*').eq('status', 'published').order('created_at', { ascending: false })
    ]);

    const programs = (rawPrograms || []).map(mapProgram);
    const universities = (rawUnis || []).map(mapUniversity);
    console.log(`   ✓ ${programs.length} programs, ${universities.length} universities, ${blogPosts?.length || 0} blog posts`);

    const pages = [
        { name: 'home', file: 'index.html', content: await getPageContent('home') },
        { name: 'about', file: 'about/index.html', content: await getPageContent('about') },
        { name: 'programs', file: 'programs/index.html', content: await getPageContent('programs'), programs },
        { name: 'universities', file: 'universities/index.html', content: await getPageContent('universities'), universities },
        { name: 'contact', file: 'contact/index.html', content: await getPageContent('contact') },
        { name: 'enquiry', file: 'enquiry/index.html' },
        { name: 'blog', file: 'blog/index.html', content: await getPageContent('blog'), blogPosts: blogPosts || [] },
    ];

    for (const page of pages) {
        console.log(`   📄 ${page.file}`);
        const html = renderPage(page.name, {
            content: page.content,
            programs: page.programs || [],
            universities: page.universities || [],
            blogPosts: page.blogPosts || []
        });
        const out = path.join(DIST_DIR, page.file);
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, html, 'utf-8');
    }

    // Program detail pages
    for (const prog of programs) {
        const dir = path.join(DIST_DIR, 'programs', prog.slug);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), renderPage('program-detail', { program: prog }), 'utf-8');
    }

    const size = (getDirSize(DIST_DIR) / 1024 / 1024).toFixed(2);
    console.log(`\n✅ Build complete! dist/ (${size} MB)`);
}

function getDirSize(dir) {
    let size = 0;
    fs.readdirSync(dir, { withFileTypes: true }).forEach(e => {
        const p = path.join(dir, e.name);
        size += e.isDirectory() ? getDirSize(p) : fs.statSync(p).size;
    });
    return size;
}

build().catch(err => { console.error('Build failed:', err); process.exit(1); });
