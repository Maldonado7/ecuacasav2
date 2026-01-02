import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Generate slug from name
    const slug = data.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Prepend +593 to phone number if not already present
    let fullPhone = data.phone.replace(/\s/g, '');
    if (!fullPhone.startsWith('+')) {
      fullPhone = `+593${fullPhone}`;
    }

    // Create provider
    const { data: provider, error: providerError } = await supabase
      .from('providers')
      .insert({
        name: data.name,
        slug,
        phone: fullPhone,
        email: data.email || null,
        description_es: data.description_es || null,
        description_en: data.description_en || null,
        price_range: data.price_range || null,
        response_time: data.response_time || null,
        rating: data.rating || 5,
        review_count: data.review_count || 0,
        speaks_english: data.speaks_english || false,
        verified: data.verified || false,
        featured: data.featured || false,
        status: 'active',
      })
      .select('id')
      .single();

    if (providerError) {
      console.error('Provider creation error:', providerError);
      return NextResponse.json({ error: providerError.message }, { status: 500 });
    }

    // Get service IDs and create relationships
    if (data.services && data.services.length > 0) {
      const { data: serviceData } = await supabase
        .from('services')
        .select('id, slug')
        .in('slug', data.services);

      if (serviceData && provider) {
        const providerServices = serviceData.map((service) => ({
          provider_id: provider.id,
          service_id: service.id,
        }));

        const { error: servicesError } = await supabase
          .from('provider_services')
          .insert(providerServices);

        if (servicesError) {
          console.error('Provider services error:', servicesError);
        }
      }
    }

    // If registrationId provided, mark registration as approved
    if (data.registrationId) {
      await supabase
        .from('registration_requests')
        .update({ status: 'approved' })
        .eq('id', data.registrationId);
    }

    return NextResponse.json({ success: true, id: provider?.id });
  } catch (error) {
    console.error('Error creating provider:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
