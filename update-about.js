require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function updateAboutContent() {
    console.log('Updating About Us page content in Supabase...');

    const updates = [
        { 
            section: 'who-p1', 
            content: 'Advance Learning Path is a career-focused edtech platform designed to help working professionals and students make smarter academic and career decisions.' 
        },
        { 
            section: 'who-p2', 
            content: 'We partner with top universities to provide access to flexible, UGC-recognized online degree programs that align with today’s industry demands. Our goal is simple - to bridge the gap between where you are and where you want to be.<br><br>At ALP, we don’t just guide you toward a degree. We help you choose the right path based on your goals, background, and long-term vision. From program selection to enrollment support, our team ensures a smooth and transparent experience.<br><br>Because career growth isn’t about doing more - it’s about choosing better.' 
        },
        { 
            section: 'mission-desc', 
            content: 'To simplify online degree decisions for working professionals by providing transparent guidance, trusted university options, and end-to-end admission support.' 
        },
        { 
            section: 'vision-desc', 
            content: 'To become India’s most trusted online education counselling platform, helping professionals make confident and career-aligned learning decisions.' 
        }
    ];

    for (const u of updates) {
        const { error } = await supabase
            .from('page_content')
            .update({ content: u.content })
            .eq('page', 'about')
            .eq('section', u.section);
            
        if (error) console.error(`Error updating ${u.section}:`, error.message);
        else console.log(`✓ Updated ${u.section}`);
    }

    console.log('\nDone!');
}

updateAboutContent();
