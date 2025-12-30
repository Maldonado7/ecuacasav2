import { createClient } from '@/lib/supabase/server';
import { HeroSection } from '@/components/home/hero-section';
import { ServiceGrid } from '@/components/home/service-grid';
import { FeaturedProviders } from '@/components/home/featured-providers';
import { HowItWorks } from '@/components/home/how-it-works';
import { TrustSignals } from '@/components/home/trust-signals';
import {
  Zap,
  Droplet,
  Wrench,
  Paintbrush,
  Hammer,
  Sparkles,
  Trees,
  Car,
  Shirt,
  Bug
} from 'lucide-react';

// Icon mapping for services
const serviceIcons: Record<string, any> = {
  'electricidad': Zap,
  'plomeria': Droplet,
  'reparaciones-generales': Wrench,
  'pintura': Paintbrush,
  'carpinteria': Hammer,
  'limpieza': Sparkles,
  'jardineria': Trees,
  'mecanica': Car,
  'lavanderia': Shirt,
  'control-de-plagas': Bug,
};

export default async function HomePage() {
  const supabase = await createClient();

  // Fetch services
  const { data: services } = await supabase
    .from('services')
    .select('slug, name_es, name_en, description_es, description_en')
    .eq('status', 'active')
    .order('name_en');

  // Fetch locations
  const { data: locations } = await supabase
    .from('neighborhoods')
    .select('slug, name')
    .eq('status', 'active')
    .order('name');

  // Fetch featured providers
  const { data: featuredProviders } = await supabase
    .from('providers')
    .select(`
      id,
      slug,
      name,
      description_es,
      description_en,
      rating,
      review_count,
      price_range,
      response_time,
      verified,
      speaks_english,
      phone,
      services:provider_services(
        service:services(name_es, name_en)
      ),
      neighborhoods:provider_neighborhoods(
        neighborhood:neighborhoods(name)
      )
    `)
    .eq('status', 'active')
    .eq('featured', true)
    .order('rating', { ascending: false })
    .limit(6);

  // Transform services to include icons and provider counts
  const servicesWithIcons = (services || []).map(service => ({
    ...service,
    icon: serviceIcons[service.slug] || Wrench,
    provider_count: 0, // TODO: Add actual count in Phase 11
  }));

  // Transform providers data
  const transformedProviders = (featuredProviders || []).map(provider => ({
    ...provider,
    services: provider.services?.map((ps: any) => ps.service) || [],
    neighborhoods: provider.neighborhoods?.map((pn: any) => pn.neighborhood) || [],
  }));

  return (
    <>
      <HeroSection
        services={servicesWithIcons.slice(0, 10)}
        locations={locations || []}
      />
      <ServiceGrid services={servicesWithIcons.slice(0, 6)} />
      {transformedProviders.length > 0 && (
        <FeaturedProviders providers={transformedProviders} />
      )}
      <HowItWorks />
      <TrustSignals />
    </>
  );
}
