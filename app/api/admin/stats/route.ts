import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabaseClient() {
  return createClient(
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function GET() {
  const supabase = getSupabaseClient();

  try {
    // Fetch provider stats
    const { count: totalProviders, error: totalError } = await supabase
      .from('providers')
      .select('*', { count: 'exact', head: true });

    if (totalError) {
      console.error('Error fetching total providers:', totalError);
    }

    const { count: activeProviders, error: activeError } = await supabase
      .from('providers')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active');

    if (activeError) {
      console.error('Error fetching active providers:', activeError);
    }

    const { count: pendingRegistrations, error: pendingError } = await supabase
      .from('registration_requests')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');

    if (pendingError) {
      console.error('Error fetching pending registrations:', pendingError);
    }

    const { data: ratingData, error: ratingError } = await supabase
      .from('providers')
      .select('rating')
      .eq('status', 'active');

    if (ratingError) {
      console.error('Error fetching ratings:', ratingError);
    }

    const avgRating = ratingData?.length
      ? ratingData.reduce((acc, p) => acc + (p.rating || 0), 0) / ratingData.length
      : 0;

    return NextResponse.json({
      totalProviders: totalProviders || 0,
      activeProviders: activeProviders || 0,
      pendingRegistrations: pendingRegistrations || 0,
      averageRating: Math.round(avgRating * 10) / 10,
    });
  } catch (error: any) {
    console.error('Stats API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
