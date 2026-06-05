'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProviderRating } from '@/components/shared/provider-rating';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';
import { useTranslation } from '@/hooks/use-translation';
import { getLocalizedField } from '@/lib/i18n/helpers';
import { getProviderPlaceholder, getBlurDataURL } from '@/lib/utils/placeholders';
import { CheckCircle, Clock } from 'lucide-react';

export interface ProviderCardData {
  id: string;
  slug: string;
  name: string;
  photo_url?: string | null;
  rating: number;
  review_count: number;
  price_range: string;
  response_time: string;
  verified: boolean;
  speaks_english: boolean;
  featured?: boolean;
  phone: string;
  services: Array<{ slug: string; name_es: string; name_en: string }>;
}

interface ProviderCardProps {
  provider: ProviderCardData;
  /** Optional English service name used for WhatsApp message context. */
  serviceNameEn?: string;
}

/**
 * Shared provider card used on the providers listing and on service pages.
 * Renders the conditional "Verificado" badge, the honest "Nuevo" pill at zero
 * reviews, and a direct "Contactar por WhatsApp" button (wa.me link).
 */
export function ProviderCard({ provider, serviceNameEn }: ProviderCardProps) {
  const { locale, t } = useTranslation();

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-accent-200">
      <CardContent className="p-0">
        <Link href={`/providers/${provider.slug}`}>
          <div className="relative h-48 w-full bg-gradient-to-br from-primary-50 to-blue-100 overflow-hidden">
            {provider.photo_url ? (
              <img
                src={`/api/providers/${provider.id}/photo`}
                alt={provider.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <Image
                src={getProviderPlaceholder(provider.name)}
                alt={provider.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                placeholder="blur"
                blurDataURL={getBlurDataURL()}
              />
            )}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              {provider.verified && (
                <div
                  title={t('providers.verified_tooltip')}
                  className="bg-success text-white px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-medium shadow-lg cursor-help"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verificado
                </div>
              )}
              {provider.featured && (
                <div className="bg-accent-500 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg">
                  Destacado
                </div>
              )}
            </div>
          </div>
        </Link>

        <div className="p-5">
          <Link href={`/providers/${provider.slug}`}>
            <h3 className="text-xl font-bold text-gray-900 hover:text-accent-600 transition-colors mb-2">
              {provider.name}
            </h3>
          </Link>

          {provider.services.length > 0 && (
            <p className="text-sm text-gray-600 mb-3">
              {getLocalizedField(provider.services[0], 'name', locale)}
              {provider.services.length > 1 && ` +${provider.services.length - 1}`}
            </p>
          )}

          <div className="space-y-2 mb-4">
            <ProviderRating
              rating={provider.rating}
              reviewCount={provider.review_count}
              newLabel={t('providers.new')}
            />

            <div className="flex items-center justify-between text-sm">
              {provider.response_time && (
                <div className="flex items-center gap-1.5 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{provider.response_time}</span>
                </div>
              )}
              {provider.price_range && (
                <span className="font-semibold text-gray-900">{provider.price_range}</span>
              )}
            </div>

            {provider.speaks_english && (
              <Badge variant="outline" className="text-xs border-accent-300 text-accent-700 bg-accent-50">
                Habla Inglés
              </Badge>
            )}
          </div>

          <WhatsAppButton
            providerName={provider.name}
            phoneNumber={provider.phone}
            providerId={provider.id}
            serviceName={serviceNameEn ?? provider.services[0]?.name_en}
            size="sm"
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
