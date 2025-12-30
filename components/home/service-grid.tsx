'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';
import { SERVICE_ICONS, DEFAULT_SERVICE_ICON } from '@/lib/constants';
import { getLocalizedField } from '@/lib/i18n/helpers';

interface Service {
  slug: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
}

interface ServiceGridProps {
  services: Service[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  const { t, locale } = useTranslation();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
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
            const Icon = SERVICE_ICONS[service.slug] || DEFAULT_SERVICE_ICON;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-gray-100 hover:border-accent-200 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-blue-100 rounded-2xl flex items-center justify-center mb-5 group-hover:from-accent-50 group-hover:to-accent-100 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-primary-600 group-hover:text-accent-600 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent-600 transition-colors">
                      {getLocalizedField(service, 'name', locale)}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {getLocalizedField(service, 'description', locale)}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-accent-600 font-semibold group-hover:text-accent-700 flex items-center gap-1">
                        {t('services.view_providers')}
                        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
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
