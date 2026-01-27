'use client';

import { useTranslation } from '@/hooks/use-translation';
import { Shield, Users, Star, MessageCircle } from 'lucide-react';
import Link from 'next/link';

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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
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

        {/* Community CTA instead of fake testimonials */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-accent-500" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Be Our First Reviewer!
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              We&apos;re a new platform building trust one connection at a time. 
              Used our service? We&apos;d love to hear about your experience.
            </p>
            <Link
              href="mailto:info@ecuacasa.com?subject=My EcuaCasa Experience"
              className="inline-block px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Share Your Experience
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
