require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const programData = require('./program-data');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function seedRelational() {
    console.log('Seeding relational program data...\n');

    const { data: dbPrograms, error } = await supabase.from('programs').select('id, name');
    if (error) {
        console.error('Error fetching programs:', error.message);
        return;
    }

    for (const p of dbPrograms) {
        const slug = p.slug || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        let details = programData[slug];
        
        if (!details) {
            const key = Object.keys(programData).find(k => slug.includes(k));
            if (key) details = programData[key];
        }

        if (!details) {
            console.log(`- No data found for ${p.name} (slug: ${slug})`);
            continue;
        }

        console.log(`Processing ${p.name}...`);

        // 1. Details
        await supabase.from('program_details').upsert({
            program_id: p.id,
            full_name: details.fullName,
            hero_title: details.heroTitle,
            hero_desc: details.heroDesc,
            fees_range: details.feesRange,
            about: details.about
        }, { onConflict: 'program_id' });

        // First clean up old related data to prevent duplicates
        await supabase.from('program_features').delete().eq('program_id', p.id);
        await supabase.from('program_syllabus').delete().eq('program_id', p.id);
        await supabase.from('program_jobs').delete().eq('program_id', p.id);
        await supabase.from('program_faqs').delete().eq('program_id', p.id);
        await supabase.from('program_list_items').delete().eq('program_id', p.id);

        // 2. Features (Benefits, WhoShould, Specializations, AdmissionSteps)
        const features = [];
        (details.benefits || []).forEach((b, i) => features.push({ program_id: p.id, type: 'benefit', title: b.title, description: b.desc, icon: b.icon, sort_order: i }));
        (details.whoShould || []).forEach((w, i) => features.push({ program_id: p.id, type: 'who_should', title: w.title, description: w.desc, sort_order: i }));
        (details.specializations || []).forEach((s, i) => features.push({ program_id: p.id, type: 'specialization', title: s.name, description: s.desc, icon: s.icon, sort_order: i }));
        (details.admissionSteps || []).forEach((a, i) => features.push({ program_id: p.id, type: 'admission_step', title: a.title, description: a.desc, icon: a.icon, sort_order: i }));
        
        if (features.length) await supabase.from('program_features').insert(features);

        // 3. Syllabus
        const syllabus = (details.syllabus || []).map((s, i) => ({
            program_id: p.id,
            semester: s.semester,
            title: s.title,
            subjects: s.subjects.join(', '),
            sort_order: i
        }));
        if (syllabus.length) await supabase.from('program_syllabus').insert(syllabus);

        // 4. Jobs
        const jobs = (details.jobs || []).map((j, i) => ({
            program_id: p.id,
            role: j.role,
            salary: j.salary,
            sort_order: i
        }));
        if (jobs.length) await supabase.from('program_jobs').insert(jobs);

        // 5. FAQs
        const faqs = (details.faqs || []).map((f, i) => ({
            program_id: p.id,
            question: f.q,
            answer: f.a,
            sort_order: i
        }));
        if (faqs.length) await supabase.from('program_faqs').insert(faqs);

        // 6. List Items (Skills, Recruiters, Eligibility)
        const listItems = [];
        (details.skills || []).forEach((s, i) => listItems.push({ program_id: p.id, type: 'skill', content: s, sort_order: i }));
        (details.recruiters || []).forEach((r, i) => listItems.push({ program_id: p.id, type: 'recruiter', content: r, sort_order: i }));
        (details.eligibilityCriteria || []).forEach((e, i) => listItems.push({ program_id: p.id, type: 'eligibility', content: e, sort_order: i }));
        
        if (listItems.length) await supabase.from('program_list_items').insert(listItems);
    }

    console.log('\nRelational seed complete!');
}

seedRelational().catch(console.error);