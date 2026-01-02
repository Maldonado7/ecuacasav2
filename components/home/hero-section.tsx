'use client';

import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { SearchBar } from '@/components/shared/search-bar';
import { getLocalizedField } from '@/lib/i18n/helpers';

interface HeroSectionProps {
  services: Array<{
    slug: string;
    name_es: string;
    name_en: string;
  }>;
}

export function HeroSection({ services }: HeroSectionProps) {
  const { t, locale } = useTranslation();

  return (
    <section className="pt-16 relative overflow-hidden">
      {/* Gradient Background with Animated Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trending Badge */}
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <TrendingUp className="w-4 h-4" />
            {t('hero.badge')}
          </div>

          {/* Heading with Gradient Text */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            {t('hero.title')}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('hero.cuenca')}
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* Search Bar - Glassmorphism Style */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-white/50">
              <SearchBar services={services} />
            </div>
          </div>

          {/* Popular Services */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-gray-500">{t('hero.popular')}:</span>
            {services.slice(0, 4).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="px-3 py-1.5 bg-white/80 hover:bg-purple-50 hover:text-purple-700 text-gray-700 text-sm font-medium rounded-full transition-all shadow-sm hover:shadow"
              >
                {getLocalizedField(service, 'name', locale)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
