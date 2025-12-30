'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RatingStars } from '@/components/shared/rating-stars';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';
import { useTranslation } from '@/hooks/use-translation';
import { getLocalizedField } from '@/lib/i18n/helpers';
import { getProviderPlaceholder, getBlurDataURL } from '@/lib/utils/placeholders';
import { CheckCircle, Clock } from 'lucide-react';

interface Provider {
  id: string;
  slug: string;
  name: string;
  description_es: string;
  description_en: string;
  rating: number;
  review_count: number;
  price_range: string;
  response_time: string;
  verified: boolean;
  speaks_english: boolean;
  phone: string;
  services: Array<{
    name_es: string;
    name_en: string;
  }>;
  neighborhoods: Array<{
    name: string;
  }>;
}

interface FeaturedProvidersProps {
  providers: Provider[];
}

export function FeaturedProviders({ providers }: FeaturedProvidersProps) {
  const { t, locale } = useTranslation();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('providers.featured_title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('providers.featured_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <Card key={provider.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-accent-200">
              <CardContent className="p-0">
                {/* Provider Photo */}
                <Link href={`/providers/${provider.slug}`}>
                  <div className="relative h-48 w-full bg-gradient-to-br from-primary-50 to-blue-100 overflow-hidden">
                    <Image
                      src={getProviderPlaceholder(provider.name)}
                      alt={provider.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      placeholder="blur"
                      blurDataURL={getBlurDataURL()}
                    />
                    {/* Verified Badge Overlay */}
                    {provider.verified && (
                      <div className="absolute top-3 right-3 bg-success text-white px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-medium shadow-lg">
                        <CheckCircle className="w-3.5 h-3.5" />
                        {t('providers.verified')}
                      </div>
                    )}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5">
                  <Link href={`/providers/${provider.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 hover:text-accent-600 transition-colors mb-2">
                      {provider.name}
                    </h3>
                  </Link>

                  {/* Primary Service */}
                  {provider.services.length > 0 && (
                    <p className="text-sm text-gray-600 mb-3">
                      {getLocalizedField(provider.services[0], 'name', locale)}
                      {provider.services.length > 1 && ` +${provider.services.length - 1}`}
                    </p>
                  )}

                  {/* Key Stats - Only 5 data points */}
                  <div className="space-y-2 mb-4">
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <RatingStars rating={provider.rating} size="sm" showValue />
                      <span className="text-sm text-gray-500">({provider.review_count})</span>
                    </div>

                    {/* Response Time & Price */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{provider.response_time}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{provider.price_range}</span>
                    </div>

                    {/* Speaks English Badge */}
                    {provider.speaks_english && (
                      <Badge variant="outline" className="text-xs border-accent-300 text-accent-700 bg-accent-50">
                        {t('providers.speaks_english')}
                      </Badge>
                    )}
                  </div>

                  {/* WhatsApp Button */}
                  <WhatsAppButton
                    providerName={provider.name}
                    phoneNumber={provider.phone}
                    providerId={provider.id}
                    serviceName={provider.services[0]?.name_en}
                    size="sm"
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/providers"
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            {t('providers.view_all')}
          </Link>
        </div>
      </div>
    </section>
  );
}
