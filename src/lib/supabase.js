
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jpufipopdwvhbevsfoah.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwdWZpcG9wZHd2aGJldnNmb2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MTcxNzAsImV4cCI6MjA2MDA5MzE3MH0.imA6V8q8VZmbd47UnY_etK1YBYcrUB5ZR4o745lrwfc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
