require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function fixSchema() {
    console.log('Fixing Supabase schema...\n');

    // Add missing columns to programs table
    console.log('Updating programs table...');
    await supabase.rpc('exec_sql', { sql: `
        ALTER TABLE programs ADD COLUMN IF NOT EXISTS slug TEXT;
        ALTER TABLE programs ADD COLUMN IF NOT EXISTS level TEXT DEFAULT 'ug';
        ALTER TABLE programs ADD COLUMN IF NOT EXISTS fees TEXT DEFAULT '';
        ALTER TABLE programs ADD COLUMN IF NOT EXISTS icon TEXT DEFAULT 'fas fa-graduation-cap';
        ALTER TABLE programs ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active';
    `}).catch(() => {
        console.log('  Note: Cannot run DDL via JS. Please run this SQL in Supabase SQL Editor:');
        console.log('  ALTER TABLE programs ADD COLUMN IF NOT EXISTS slug TEXT;');
        console.log('  ALTER TABLE programs ADD COLUMN IF NOT EXISTS level TEXT DEFAULT \'ug\';');
        console.log('  ALTER TABLE programs ADD COLUMN IF NOT EXISTS fees TEXT DEFAULT \'\';');
        console.log('  ALTER TABLE programs ADD COLUMN IF NOT EXISTS icon TEXT DEFAULT \'fas fa-graduation-cap\';');
        console.log('  ALTER TABLE programs ADD COLUMN IF NOT EXISTS status TEXT DEFAULT \'active\';');
    });

    // Add missing columns to universities
    console.log('Updating universities table...');
    await supabase.rpc('exec_sql', { sql: `
        ALTER TABLE universities ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT '';
        ALTER TABLE universities ADD COLUMN IF NOT EXISTS programs TEXT DEFAULT '';
        ALTER TABLE universities ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active';
    `}).catch(() => {
        console.log('  Note: Cannot run DDL via JS. Please run this SQL in Supabase SQL Editor:');
        console.log('  ALTER TABLE universities ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT \'\';');
        console.log('  ALTER TABLE universities ADD COLUMN IF NOT EXISTS programs TEXT DEFAULT \'\';');
        console.log('  ALTER TABLE universities ADD COLUMN IF NOT EXISTS status TEXT DEFAULT \'active\';');
    });

    // Create blog_posts table
    console.log('Creating blog_posts table...');
    await supabase.rpc('exec_sql', { sql: `
        CREATE TABLE IF NOT EXISTS blog_posts (
            id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            title TEXT NOT NULL,
            slug TEXT UNIQUE NOT NULL,
            excerpt TEXT DEFAULT '',
            content TEXT NOT NULL,
            category TEXT DEFAULT 'General',
            image_url TEXT DEFAULT '',
            author TEXT DEFAULT 'ALP Team',
            status TEXT DEFAULT 'published',
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        );
    `}).catch(() => {
        console.log('  Note: Cannot run DDL via JS. Please run this SQL in Supabase SQL Editor:');
        console.log('  CREATE TABLE IF NOT EXISTS blog_posts (...);');
    });

    console.log('\nDone! Check Supabase to verify columns were added.');
}

fixSchema().catch(console.error);
