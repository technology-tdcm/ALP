require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const programs = require('./program-data');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'alp-secret-key-2026-change-in-production';

// Supabase client (service role key bypasses RLS)
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(express.json());

// Redirect .html URLs to clean URLs
app.use(function(req, res, next) {
    if (req.path.match(/\.html$/)) {
        return res.redirect(301, req.path.replace(/\.html$/, ''));
    }
    next();
});

// Remove trailing slashes (except for admin)
app.use(function(req, res, next) {
    if (req.path !== '/' && req.path.endsWith('/') && !req.path.startsWith('/admin')) {
        return res.redirect(301, req.path.slice(0, -1) + (req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''));
    }
    next();
});

// Program detail pages (MUST be before express.static)
app.get('/programs/:slug', (req, res) => {
    const prog = programs[req.params.slug];
    if (!prog) return res.status(404).render('layout', { page: '404' });
    res.render('layout', { page: 'program-detail', program: prog });
});

// Admin panel (before static to avoid redirect)
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin', 'index.html')));
app.get('/admin/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin', 'login.html')));
app.get('/admin/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin', 'index.html')));
app.get('/admin/login/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin', 'login.html')));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Auth middleware
function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    try { req.user = jwt.verify(token, JWT_SECRET); next(); } catch (e) { res.status(401).json({ error: 'Invalid token' }); }
}

// ===== HELPER: Get page content =====
async function getPageContent(page) {
    const { data } = await supabase.from('page_content').select('section, content').eq('page', page).order('section');
    const obj = {};
    if (data) data.forEach(r => { obj[r.section] = r.content; });
    return obj;
}

// ===== FRONTEND ROUTES =====
app.get('/', async (req, res) => res.render('layout', { page: 'home', content: await getPageContent('home') }));
app.get('/about', async (req, res) => res.render('layout', { page: 'about', content: await getPageContent('about') }));
app.get('/programs', async (req, res) => res.render('layout', { page: 'programs', content: await getPageContent('programs') }));
app.get('/universities', async (req, res) => res.render('layout', { page: 'universities', content: await getPageContent('universities') }));
app.get('/contact', async (req, res) => res.render('layout', { page: 'contact', content: await getPageContent('contact') }));
app.get('/enquiry', (req, res) => res.render('layout', { page: 'enquiry' }));
app.get('/blog', async (req, res) => res.render('layout', { page: 'blog', content: await getPageContent('blog') }));

// ===== PUBLIC API =====
app.post('/api/leads', async (req, res) => {
    const { name, email, phone, course, university, message, source } = req.body;
    if (!name || !email || !phone) return res.status(400).json({ error: 'Name, email, and phone are required' });
    const { data, error } = await supabase.from('leads').insert([{ name, email, phone, course: course || '', university: university || '', message: message || '', source: source || 'website' }]).select('id').single();
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true, id: data.id });
});

app.get('/api/blog-posts', async (req, res) => {
    const { data } = await supabase.from('blog_posts').select('*').eq('status', 'published').order('created_at', { ascending: false });
    res.json(data || []);
});

app.get('/api/programs', async (req, res) => {
    const level = req.query.level;
    let query = supabase.from('programs').select('*').eq('status', 'active').order('name');
    if (level) query = query.eq('level', level);
    const { data } = await query;
    res.json(data || []);
});

app.get('/api/universities', async (req, res) => {
    const { data } = await supabase.from('universities').select('*').eq('status', 'active').order('name');
    res.json(data || []);
});

app.get('/api/pages', async (req, res) => {
    const { data } = await supabase.from('page_content').select('*').order('page').order('section');
    res.json(data || []);
});

app.get('/api/pages/:page', async (req, res) => {
    const { data } = await supabase.from('page_content').select('*').eq('page', req.params.page).order('section');
    res.json(data || []);
});

// ===== AUTH =====
app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;
    const { data: users } = await supabase.from('users').select('*').eq('username', username).limit(1);
    if (!users || !users.length || !bcrypt.compareSync(password, users[0].password)) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ token: jwt.sign({ id: users[0].id, username: users[0].username }, JWT_SECRET, { expiresIn: '24h' }), username: users[0].username });
});

// ===== ADMIN API =====
app.get('/api/admin/pages', authMiddleware, async (req, res) => {
    const { data } = await supabase.from('page_content').select('*').order('page').order('section');
    res.json(data || []);
});

app.get('/api/admin/pages/:page', authMiddleware, async (req, res) => {
    const { data } = await supabase.from('page_content').select('*').eq('page', req.params.page).order('section');
    res.json(data || []);
});

app.put('/api/admin/pages/:id', authMiddleware, async (req, res) => {
    const { error } = await supabase.from('page_content').update({ content: req.body.content }).eq('id', req.params.id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
});

app.get('/api/admin/stats', authMiddleware, async (req, res) => {
    const [{ count: totalLeads }, { count: newLeads }, { count: todayLeads }, { count: totalPosts }, { count: totalPrograms }, { count: totalUnis }] = await Promise.all([
        supabase.from('leads').select('*', { count: 'exact', head: true }),
        supabase.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('leads').select('*', { count: 'exact', head: true }).gte('created_at', new Date().toISOString().split('T')[0]),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('programs').select('*', { count: 'exact', head: true }),
        supabase.from('universities').select('*', { count: 'exact', head: true })
    ]);
    const { data: leadsByStatus } = await supabase.from('leads').select('status, count:status').order('status');
    const { data: leadsBySource } = await supabase.from('leads').select('source, count:source').order('source');
    const { data: recentLeads } = await supabase.from('leads').select('id, name, email, phone, course, university, source, status, created_at').order('created_at', { ascending: false }).limit(10);

    // Aggregate counts
    const statusCounts = {};
    if (leadsByStatus) leadsByStatus.forEach(r => { statusCounts[r.status] = (statusCounts[r.status] || 0) + 1; });
    const sourceCounts = {};
    if (leadsBySource) leadsBySource.forEach(r => { sourceCounts[r.source] = (sourceCounts[r.source] || 0) + 1; });

    res.json({
        totalLeads: totalLeads || 0,
        newLeads: newLeads || 0,
        todayLeads: todayLeads || 0,
        totalPosts: totalPosts || 0,
        totalPrograms: totalPrograms || 0,
        totalUnis: totalUnis || 0,
        leadsByStatus: Object.entries(statusCounts).map(([status, c]) => ({ status, c })),
        leadsBySource: Object.entries(sourceCounts).map(([source, c]) => ({ source, c })).sort((a, b) => b.c - a.c),
        recentLeads: recentLeads || []
    });
});

app.get('/api/admin/leads', authMiddleware, async (req, res) => {
    const { status, search, page = 1, limit = 20 } = req.query;
    let query = supabase.from('leads').select('*', { count: 'exact' }).order('created_at', { ascending: false });
    if (status && status !== 'all') query = query.eq('status', status);
    if (search) query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`);
    const from = (Number(page) - 1) * Number(limit);
    const to = from + Number(limit) - 1;
    query = query.range(from, to);
    const { data: leads, count: total } = await query;
    res.json({ leads: leads || [], total: total || 0, page: Number(page), limit: Number(limit) });
});

app.put('/api/admin/leads/:id', authMiddleware, async (req, res) => {
    const { error } = await supabase.from('leads').update({ status: req.body.status, notes: req.body.notes }).eq('id', req.params.id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
});

app.delete('/api/admin/leads/:id', authMiddleware, async (req, res) => {
    const { error } = await supabase.from('leads').delete().eq('id', req.params.id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
});

app.get('/api/admin/blog-posts', authMiddleware, async (req, res) => {
    const { data } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    res.json(data || []);
});

app.post('/api/admin/blog-posts', authMiddleware, async (req, res) => {
    const { title, slug, excerpt, content, category, image_url, author, status } = req.body;
    if (!title || !slug || !content) return res.status(400).json({ error: 'Title, slug, and content are required' });
    const { data, error } = await supabase.from('blog_posts').insert([{ title, slug, excerpt: excerpt || '', content, category: category || 'General', image_url: image_url || '', author: author || 'ALP Team', status: status || 'draft' }]).select('id').single();
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true, id: data.id });
});

app.put('/api/admin/blog-posts/:id', authMiddleware, async (req, res) => {
    const { title, slug, excerpt, content, category, image_url, author, status } = req.body;
    const { error } = await supabase.from('blog_posts').update({ title, slug, excerpt, content, category, image_url, author, status }).eq('id', req.params.id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
});

app.delete('/api/admin/blog-posts/:id', authMiddleware, async (req, res) => {
    const { error } = await supabase.from('blog_posts').delete().eq('id', req.params.id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
});

// Helper function to map program schema
function mapProgram(p) {
    if (!p) return p;
    return {
        id: p.id,
        name: p.name,
        slug: p.slug || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        level: p.level || (p.degree_level?.toLowerCase() === 'undergraduate' ? 'ug' : 'pg'),
        duration: p.duration || '',
        fees: p.fees || (p.tuition_fee ? (p.tuition_fee / 100000).toFixed(1) + 'L' : ''),
        eligibility: p.eligibility || '',
        description: p.description || '',
        icon: p.icon || 'fas fa-graduation-cap',
        status: p.status || 'active'
    };
}

// Helper function to map university schema
function mapUniversity(u) {
    if (!u) return u;
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

app.get('/api/admin/programs', authMiddleware, async (req, res) => {
    const { data } = await supabase.from('programs').select('*').order('name');
    res.json((data || []).map(mapProgram));
});

app.post('/api/admin/programs', authMiddleware, async (req, res) => {
    const { name, slug, level, duration, fees, eligibility, description, icon, status } = req.body;
    if (!name || !slug || !level) return res.status(400).json({ error: 'Name, slug, and level are required' });
    
    // Check if we are using the new schema or old schema
    const { data: cols } = await supabase.from('programs').select('status').limit(1).catch(() => ({ data: null }));
    
    let insertData;
    if (cols) {
        // New schema
        insertData = { name, slug, level, duration: duration || '', fees: fees || '', eligibility: eligibility || '', description: description || '', icon: icon || 'fas fa-graduation-cap', status: status || 'active' };
    } else {
        // Old schema mapping
        insertData = {
            name,
            degree_level: level === 'ug' ? 'Undergraduate' : 'Postgraduate',
            duration: duration || '',
            tuition_fee: fees ? parseInt(fees.replace(/[^0-9]/g, '')) * 100000 : 0,
            eligibility: eligibility || '',
            description: description || ''
        };
    }
    
    const { data, error } = await supabase.from('programs').insert([insertData]).select('id').single();
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true, id: data.id });
});

app.put('/api/admin/programs/:id', authMiddleware, async (req, res) => {
    const { name, slug, level, duration, fees, eligibility, description, icon, status } = req.body;
    
    const { data: cols } = await supabase.from('programs').select('status').limit(1).catch(() => ({ data: null }));
    
    let updateData;
    if (cols) {
        updateData = { name, slug, level, duration, fees, eligibility, description, icon, status };
    } else {
        updateData = {
            name,
            degree_level: level === 'ug' ? 'Undergraduate' : 'Postgraduate',
            duration,
            tuition_fee: fees ? parseInt(fees.replace(/[^0-9]/g, '')) * 100000 : 0,
            eligibility,
            description
        };
    }
    
    const { error } = await supabase.from('programs').update(updateData).eq('id', req.params.id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
});

app.delete('/api/admin/programs/:id', authMiddleware, async (req, res) => {
    const { error } = await supabase.from('programs').delete().eq('id', req.params.id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
});

app.get('/api/admin/universities', authMiddleware, async (req, res) => {
    const { data } = await supabase.from('universities').select('*').order('name');
    res.json((data || []).map(mapUniversity));
});

app.post('/api/admin/universities', authMiddleware, async (req, res) => {
    const { name, slug, badge, description, programs, logo_url, status } = req.body;
    if (!name || !slug) return res.status(400).json({ error: 'Name and slug are required' });
    const { data, error } = await supabase.from('universities').insert([{ name, slug, badge: badge || '', description: description || '', programs: programs || '', logo_url: logo_url || '', status: status || 'active' }]).select('id').single();
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true, id: data.id });
});

app.put('/api/admin/universities/:id', authMiddleware, async (req, res) => {
    const { name, slug, badge, description, programs, logo_url, status } = req.body;
    const { error } = await supabase.from('universities').update({ name, slug, badge, description, programs, logo_url, status }).eq('id', req.params.id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
});

app.delete('/api/admin/universities/:id', authMiddleware, async (req, res) => {
    const { error } = await supabase.from('universities').delete().eq('id', req.params.id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
});

app.get('/api/admin/leads/export', authMiddleware, async (req, res) => {
    const { data: leads } = await supabase.from('leads').select('id, name, email, phone, course, university, message, source, status, notes, created_at').order('created_at', { ascending: false });
    let csv = ['ID','Name','Email','Phone','Course','University','Message','Source','Status','Notes','Created At'].join(',') + '\n';
    (leads || []).forEach(l => { csv += [l.id, l.name, l.email, l.phone, l.course || '', l.university || '', l.message || '', l.source, l.status, l.notes || '', l.created_at].map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',') + '\n'; });
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=leads.csv');
    res.send(csv);
});

// Start server
app.listen(PORT, () => {
    console.log('ALP CMS running at http://localhost:' + PORT);
    console.log('Admin panel: http://localhost:' + PORT + '/admin');
    console.log('Database: Supabase');
    if (!process.env.SUPABASE_URL || process.env.SUPABASE_URL === 'your_supabase_project_url') {
        console.log('\n⚠️  Supabase not configured!');
        console.log('1. Copy .env.example to .env');
        console.log('2. Add your SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
        console.log('3. Run the SQL in supabase-migration.sql');
        console.log('4. Run: npm run seed');
        console.log('5. Restart the server\n');
    }
});
