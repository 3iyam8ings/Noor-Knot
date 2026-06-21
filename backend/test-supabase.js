// test-supabase.js
// Run with: node test-supabase.js
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

console.log('URL loaded:', process.env.SUPABASE_URL ? 'yes' : 'NO - check your .env');
console.log('Key loaded:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'yes' : 'NO - check your .env');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

(async () => {
  const { data, error } = await supabase.from('salons').select('*').limit(5);
  if (error) {
    console.error('❌ Connection failed:', error.message);
  } else {
    console.log('✅ Connected! Found', data.length, 'rows in salons table.');
    console.log(data);
  }
})();
