'use client';

import { useTranslation } from '@/hooks/use-translation';
import { Shield, Users, Star, MessageCircle } from 'lucide-react';

export function TrustSignals() {
  const { t } = useTranslation();

  const signals = [
    {
      icon: Shield,
      titleKey: 'trust.verified_title',
      descKey: 'trust.verified_desc',
    },
    {
      icon: Users,
      titleKey: 'trust.local_title',
      descKey: 'trust.local_desc',
    },
    {
      icon: Star,
      titleKey: 'trust.rated_title',
      descKey: 'trust.rated_desc',
    },
    {
      icon: MessageCircle,
      titleKey: 'trust.whatsapp_title',
      descKey: 'trust.whatsapp_desc',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('trust.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('trust.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, idx) => {
            const Icon = signal.icon;
            return (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(signal.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(signal.descKey)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">{t('trust.stat_providers')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4.8</div>
              <div className="text-gray-600">{t('trust.stat_rating')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">1k+</div>
              <div className="text-gray-600">{t('trust.stat_connections')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24h</div>
              <div className="text-gray-600">{t('trust.stat_response')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
