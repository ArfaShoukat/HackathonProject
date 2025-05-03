import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qhwucuekhesfoeeydmcw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFod3VjdWVraGVzZm9lZXlkbWN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyNDgyNTEsImV4cCI6MjA2MTgyNDI1MX0.RSxJ0wAs3DYpNwAAsY4PqclYept-cT8rGkrhTgXA9TI'
export const supabase = createClient(supabaseUrl, supabaseKey);

