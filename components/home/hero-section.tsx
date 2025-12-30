'use client';

import { useTranslation } from '@/hooks/use-translation';
import { SearchBar } from '@/components/shared/search-bar';

interface HeroSectionProps {
  services: Array<{
    slug: string;
    name_es: string;
    name_en: string;
  }>;
  locations: Array<{
    slug: string;
    name: string;
  }>;
}

export function HeroSection({ services, locations }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl sm:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            {t('hero.subtitle')}
          </p>
        </div>

        <SearchBar services={services} locations={locations} />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-primary-100">
          <span>{t('hero.popular')}:</span>
          <div className="flex flex-wrap gap-2">
            {services.slice(0, 4).map((service) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                {service.name_en}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
