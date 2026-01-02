import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendRegistrationNotification } from '@/lib/resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.phone || !data.services?.length) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into database
    const { error: dbError } = await supabase.from('registration_requests').insert({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      services_interested: data.services,
      speaks_english: data.speaks_english || false,
      message: data.message || null,
      status: 'pending',
    });

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save registration' },
        { status: 500 }
      );
    }

    // Send email notification (non-blocking)
    await sendRegistrationNotification({
      name: data.name,
      phone: data.phone,
      email: data.email,
      services: data.services,
      speaks_english: data.speaks_english || false,
      message: data.message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
