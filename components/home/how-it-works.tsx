'use client';

import { useTranslation } from '@/hooks/use-translation';
import { Search, MessageCircle, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const { t, locale } = useTranslation();

  const steps = [
    {
      icon: Search,
      titleKey: 'how_it_works.step1_title',
      descKey: 'how_it_works.step1_desc',
      number: 1,
    },
    {
      icon: MessageCircle,
      titleKey: 'how_it_works.step2_title',
      descKey: 'how_it_works.step2_desc',
      number: 2,
    },
    {
      icon: CheckCircle,
      titleKey: 'how_it_works.step3_title',
      descKey: 'how_it_works.step3_desc',
      number: 3,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('how_it_works.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('how_it_works.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector Line - Desktop only */}
                {step.number < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-200" />
                )}

                <div className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#search"
            className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            {t('how_it_works.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
