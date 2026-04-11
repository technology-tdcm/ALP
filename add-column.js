require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function addContactTypeColumn() {
  // First check if column exists
  const { data: checkData, error: checkError } = await supabase
    .from('leads')
    .select('contact_type')
    .limit(1);

  if (checkError && checkError.message.includes('contact_type')) {
    // Column doesn't exist, need to add it via raw SQL
    const { error } = await supabase.rpc('exec_sql', { 
      query: "ALTER TABLE leads ADD COLUMN IF NOT EXISTS contact_type TEXT;" 
    });
    
    if (error) {
      console.log('RPC approach failed, trying alternative...');
      // Alternative: Just insert with contact_type, Supabase might handle it
      console.log('Column may need to be added manually in Supabase dashboard');
    } else {
      console.log('Column added successfully!');
    }
  } else {
    console.log('Column already exists or check passed');
  }
}

addContactTypeColumn().then(() => process.exit());