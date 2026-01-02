import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function POST(request: Request) {
  const supabase = getSupabaseClient();
  try {
    const body = await request.json();
    const { provider_id, service_type, referrer } = body;

    if (!provider_id) {
      return NextResponse.json(
        { success: false, error: 'Provider ID is required' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('contact_logs')
      .insert({
        provider_id,
        service_type: service_type || null,
        referrer: referrer || null,
        contacted_at: new Date().toISOString(),
      } as any);

    if (error) {
      console.error('Error logging contact:', error);
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact log API error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to log contact' },
      { status: 500 }
    );
  }
}
