require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function updateStats() {
    console.log('Updating achievements stats in Supabase...');

    const updates = [
        // Home Page Stats (3 spots)
        { page: 'home', section: 'stat-1-num', content: '50k+' },
        { page: 'home', section: 'stat-1-label', content: 'Counselling Sessions Delivered' },
        { page: 'home', section: 'stat-2-num', content: '15+' },
        { page: 'home', section: 'stat-2-label', content: 'Partner Universities' },
        { page: 'home', section: 'stat-3-num', content: '98%' },
        { page: 'home', section: 'stat-3-label', content: 'Student Support Satisfaction' },
        
        // About Page Stats (5 spots originally, we have 4 new stats, so we'll use the first 4 and maybe hide/change the 5th)
        { page: 'about', section: 'stat-1-num', content: '50k+' },
        { page: 'about', section: 'stat-1-title', content: 'Counselling Sessions' },
        { page: 'about', section: 'stat-2-num', content: '15+' },
        { page: 'about', section: 'stat-2-title', content: 'Partner Universities' },
        { page: 'about', section: 'stat-3-num', content: '98%' },
        { page: 'about', section: 'stat-3-title', content: 'Support Satisfaction' },
        { page: 'about', section: 'stat-4-num', content: '1500+' },
        { page: 'about', section: 'stat-4-title', content: 'Learners Guided' },
        // For the 5th stat, let's set it to 100% Online Degrees or something similar to fill the grid, or we can just leave it as is if it fits the grid
        { page: 'about', section: 'stat-5-num', content: '100%' },
        { page: 'about', section: 'stat-5-title', content: 'Online Degrees' }
    ];

    for (const u of updates) {
        const { error } = await supabase
            .from('page_content')
            .update({ content: u.content })
            .eq('page', u.page)
            .eq('section', u.section);
            
        if (error) console.error(`Error updating ${u.page} ${u.section}:`, error.message);
        else console.log(`✓ Updated ${u.page} ${u.section}`);
    }

    console.log('\nDone!');
}

updateStats();
