require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const programData = require('./program-data');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function addProgramDetails() {
    console.log('Adding details column to programs table...');

    // We can't run ALTER TABLE easily via JS, but we can try
    try {
        await supabase.rpc('exec_sql', { sql: `ALTER TABLE programs ADD COLUMN IF NOT EXISTS details JSONB DEFAULT '{}'::jsonb;` });
    } catch (e) {
        console.log('Skipping ALTER TABLE via RPC (make sure you added the column manually if needed)');
    }

    console.log('Seeding detailed program data...');
    
    // Get all programs from DB
    const { data: dbPrograms, error } = await supabase.from('programs').select('id, name');
    if (error) {
        console.error('Error fetching programs:', error);
        return;
    }

    for (const p of dbPrograms) {
        const slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        
        // Find corresponding data in program-data.js
        // program-data.js exports an object where keys are slugs
        let details = programData[slug];
        
        if (!details) {
            // fallback - try to find by checking if key is included in slug
            const key = Object.keys(programData).find(k => slug.includes(k));
            if (key) details = programData[key];
        }

        if (details) {
            // Clean up details to only include nested arrays/objects, not basic fields
            const jsonDetails = {
                heroTitle: details.heroTitle,
                heroDesc: details.heroDesc,
                about: details.about,
                benefits: details.benefits || [],
                whoShould: details.whoShould || [],
                eligibilityCriteria: details.eligibilityCriteria || [],
                specializations: details.specializations || [],
                syllabus: details.syllabus || [],
                skills: details.skills || [],
                fees: details.fees || [],
                universities: details.universities || [],
                admissionSteps: details.admissionSteps || [],
                jobs: details.jobs || [],
                recruiters: details.recruiters || [],
                faqs: details.faqs || []
            };

            const { error: updateError } = await supabase
                .from('programs')
                .update({ details: jsonDetails })
                .eq('id', p.id);
                
            if (updateError) {
                console.error(`Failed to update ${p.name}:`, updateError.message);
                if (updateError.message.includes('column "details" of relation "programs" does not exist')) {
                    console.log('\n❌ CRITICAL: You need to run this SQL in your Supabase SQL Editor:');
                    console.log("ALTER TABLE programs ADD COLUMN IF NOT EXISTS details JSONB DEFAULT '{}'::jsonb;");
                    process.exit(1);
                }
            } else {
                console.log(`✓ Updated details for ${p.name}`);
            }
        } else {
            console.log(`- No detail data found in program-data.js for ${p.name} (slug: ${slug})`);
        }
    }

    console.log('\nDone seeding details!');
}

addProgramDetails();
