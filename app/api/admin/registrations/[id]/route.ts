import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = getSupabaseClient();
  try {
    const { data, error } = await supabase
      .from('registration_requests')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Registration not found' }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching registration:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
