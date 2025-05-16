import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';   

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;

if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'Missing Supabase configuration. ' +
      'Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment.'
    );
  }
  
export const supabase = createClient(supabaseUrl, supabaseKey);
