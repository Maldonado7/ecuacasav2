import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Lazy initialization to avoid build-time errors
let _supabaseClient: ReturnType<typeof createSupabaseClient> | null = null;

export async function createClient() {
  if (_supabaseClient) {
    return _supabaseClient;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }

  _supabaseClient = createSupabaseClient(supabaseUrl, supabaseAnonKey);
  return _supabaseClient;
}
