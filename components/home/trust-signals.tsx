'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { Shield, Users, Star, MessageCircle, Quote } from 'lucide-react';
import { getTestimonialAvatar, getBlurDataURL } from '@/lib/utils/placeholders';

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

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Expat from USA',
      quote: 'Found a great electrician who spoke English and arrived on time. The verification badge gave me confidence!',
      rating: 5,
    },
    {
      name: 'John Davies',
      role: 'Retired in Cuenca',
      quote: 'The WhatsApp contact made everything so easy. Got responses within hours and quality service.',
      rating: 5,
    },
    {
      name: 'María González',
      role: 'Local Resident',
      quote: 'Excelente plataforma para encontrar profesionales confiables. Muy recomendado!',
      rating: 5,
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

        {/* Social Proof Stats */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-600 mb-2">50+</div>
              <div className="text-gray-600">{t('trust.stat_providers')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-600 mb-2">4.8</div>
              <div className="text-gray-600">{t('trust.stat_rating')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-600 mb-2">1k+</div>
              <div className="text-gray-600">{t('trust.stat_connections')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-600 mb-2">24h</div>
              <div className="text-gray-600">{t('trust.stat_response')}</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              What Our Community Says
            </h3>
            <p className="text-gray-600">
              Real experiences from expats and locals in Cuenca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-accent-200 hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8 w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary-50 to-blue-100">
                    <Image
                      src={getTestimonialAvatar(testimonial.name)}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={getBlurDataURL()}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
