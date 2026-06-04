'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import {
  MessageCircle,
  Shield,
  Star,
  DollarSign,
  UserPlus,
  ClipboardCheck,
  Send,
  TrendingUp,
} from 'lucide-react';

export default function ForProvidersPage() {
  const { t, locale } = useTranslation();

  const benefits = [
    { icon: MessageCircle, titleKey: 'for_providers.benefit1_title', descKey: 'for_providers.benefit1_desc' },
    { icon: Shield, titleKey: 'for_providers.benefit2_title', descKey: 'for_providers.benefit2_desc' },
    { icon: Star, titleKey: 'for_providers.benefit3_title', descKey: 'for_providers.benefit3_desc' },
    { icon: DollarSign, titleKey: 'for_providers.benefit4_title', descKey: 'for_providers.benefit4_desc' },
  ];

  const steps = [
    { icon: UserPlus, titleKey: 'for_providers.step1_title', descKey: 'for_providers.step1_desc', number: 1 },
    { icon: ClipboardCheck, titleKey: 'for_providers.step2_title', descKey: 'for_providers.step2_desc', number: 2 },
    { icon: Send, titleKey: 'for_providers.step3_title', descKey: 'for_providers.step3_desc', number: 3 },
    { icon: TrendingUp, titleKey: 'for_providers.step4_title', descKey: 'for_providers.step4_desc', number: 4 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t('for_providers.title')}
            </h1>
            <p className="text-xl text-purple-100 mb-10">
              {t('for_providers.subtitle')}
            </p>
            <Link
              href="/register"
              className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 text-lg"
            >
              {t('for_providers.cta')}
            </Link>
            <p className="mt-4 text-purple-200 text-sm">
              {locale === 'en' ? 'No commissions • No monthly fees • 100% free' : 'Sin comisiones • Sin cuotas mensuales • 100% gratis'}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('for_providers.why_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all group text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                    <Icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t(benefit.titleKey)}</h3>
                  <p className="text-gray-600 text-sm">{t(benefit.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('for_providers.how_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t(step.titleKey)}</h3>
                  <p className="text-gray-600 text-sm">{t(step.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing tiers (Task 7). The fee is not live yet — these describe the
          plans. Free stays a real basic listing; paid plans are optional. */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Plans' : 'Planes'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Start free. Upgrade when you want more visibility and trust signals.'
                : 'Empieza gratis. Mejora cuando quieras más visibilidad y señales de confianza.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="rounded-2xl border-2 border-gray-100 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">{locale === 'en' ? 'Free' : 'Gratis'}</h3>
              <p className="mt-2 text-3xl font-black text-gray-900">$0</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600 flex-1">
                <li>✓ {locale === 'en' ? 'Basic public listing' : 'Perfil público básico'}</li>
                <li>✓ {locale === 'en' ? 'Direct WhatsApp contact' : 'Contacto directo por WhatsApp'}</li>
                <li>✓ {locale === 'en' ? 'Customer reviews' : 'Reseñas de clientes'}</li>
              </ul>
            </div>

            {/* Listed */}
            <div className="rounded-2xl border-2 border-purple-200 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">{locale === 'en' ? 'Listed' : 'Listado'}</h3>
              <p className="mt-2 text-3xl font-black text-gray-900">{locale === 'en' ? 'Paid' : 'De pago'}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600 flex-1">
                <li>✓ {locale === 'en' ? 'Everything in Free' : 'Todo lo del plan Gratis'}</li>
                <li>✓ {locale === 'en' ? 'Eligible for the Verified badge' : 'Elegible para el badge Verificado'}</li>
                <li>✓ {locale === 'en' ? '"Speaks English" tag' : 'Etiqueta "Habla inglés"'}</li>
              </ul>
            </div>

            {/* Featured */}
            <div className="rounded-2xl border-2 border-pink-300 p-8 flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {locale === 'en' ? 'Most visibility' : 'Más visibilidad'}
              </span>
              <h3 className="text-xl font-bold text-gray-900">{locale === 'en' ? 'Featured' : 'Destacado'}</h3>
              <p className="mt-2 text-3xl font-black text-gray-900">{locale === 'en' ? 'Paid' : 'De pago'}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600 flex-1">
                <li>✓ {locale === 'en' ? 'Everything in Listed' : 'Todo lo del plan Listado'}</li>
                <li>✓ {locale === 'en' ? 'Top placement in search' : 'Posición destacada en búsquedas'}</li>
                <li>✓ {locale === 'en' ? 'Homepage feature' : 'Aparece en la página de inicio'}</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            {locale === 'en'
              ? 'Paid plans are rolling out soon. For now, list for free — we will reach out when plans go live.'
              : 'Los planes de pago se activarán pronto. Por ahora, regístrate gratis — te contactaremos cuando estén disponibles.'}
          </p>
        </div>
      </section>

    </div>
  );
}
