'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';
import { LucideIcon } from 'lucide-react';

interface Service {
  slug: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  icon: LucideIcon;
  provider_count: number;
}

interface ServiceGridProps {
  services: Service[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  const { t, locale } = useTranslation();

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('services.browse_title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.browse_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {locale === 'en' ? service.name_en : service.name_es}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {locale === 'en' ? service.description_en : service.description_es}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {service.provider_count} {t('services.providers_available')}
                      </span>
                      <span className="text-primary-600 font-medium group-hover:text-primary-700">
                        {t('services.view_providers')} →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            {t('services.view_all')}
          </Link>
        </div>
      </div>
    </section>
  );
}
