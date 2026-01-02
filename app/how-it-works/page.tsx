import Link from 'next/link';
import { Search, MessageCircle, CheckCircle, Shield, Star, Clock, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Cómo Funciona | EcuaCasa',
  description: 'Aprende cómo encontrar profesionales de confianza para servicios del hogar en Cuenca, Ecuador',
};

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      number: 1,
      title: 'Busca el servicio que necesitas',
      description: 'Navega por nuestras categorías de servicios o usa la barra de búsqueda para encontrar exactamente lo que necesitas. Filtra por zona, idioma, y más.',
    },
    {
      icon: MessageCircle,
      number: 2,
      title: 'Contacta al profesional',
      description: 'Revisa los perfiles de los profesionales, sus calificaciones y reseñas. Cuando encuentres el indicado, contáctalo directamente por WhatsApp.',
    },
    {
      icon: CheckCircle,
      number: 3,
      title: 'Completa tu proyecto',
      description: 'Discute los detalles del trabajo, acuerda el precio y el horario directamente con el profesional. ¡Listo! Tu proyecto está en buenas manos.',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Profesionales verificados',
      description: 'Todos nuestros profesionales pasan por un proceso de verificación para garantizar calidad y confianza.',
    },
    {
      icon: Star,
      title: 'Calificaciones reales',
      description: 'Las reseñas y calificaciones provienen de clientes reales que han usado el servicio.',
    },
    {
      icon: Clock,
      title: 'Respuesta rápida',
      description: 'La mayoría de profesionales responden en menos de 30 minutos por WhatsApp.',
    },
    {
      icon: MessageCircle,
      title: 'Comunicación directa',
      description: 'Sin intermediarios. Habla directamente con el profesional para acordar todos los detalles.',
    },
  ];

  const faqs = [
    {
      question: '¿Cuánto cuesta usar EcuaCasa?',
      answer: 'EcuaCasa es completamente gratis para los clientes. No cobramos comisiones ni tarifas. El precio del servicio lo acuerdas directamente con el profesional.',
    },
    {
      question: '¿Cómo sé si un profesional es confiable?',
      answer: 'Busca la insignia de "Verificado" en los perfiles. También puedes revisar las calificaciones y reseñas de otros clientes antes de contactar.',
    },
    {
      question: '¿Qué pasa si tengo un problema con el servicio?',
      answer: 'Te recomendamos comunicarte directamente con el profesional para resolver cualquier inconveniente. Si necesitas ayuda adicional, puedes contactarnos.',
    },
    {
      question: '¿Puedo solicitar cotizaciones de varios profesionales?',
      answer: 'Sí, puedes contactar a varios profesionales para comparar precios y disponibilidad antes de tomar una decisión.',
    },
    {
      question: '¿Los profesionales hablan inglés?',
      answer: 'Muchos de nuestros profesionales hablan inglés. Busca el badge "Habla Inglés" en sus perfiles o usa el filtro de idioma.',
    },
    {
      question: '¿Cómo pago por el servicio?',
      answer: 'El pago se acuerda directamente con el profesional. La mayoría acepta efectivo, transferencia o pagos móviles.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ¿Cómo funciona EcuaCasa?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conectamos a residentes de Cuenca con profesionales verificados para
            servicios del hogar. Simple, rápido y confiable.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              3 pasos simples
            </h2>
            <p className="text-lg text-gray-600">
              Encuentra al profesional perfecto en minutos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1">
              <div className="relative max-w-[70%] mx-auto h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-200 via-accent-300 to-accent-200 rounded-full" />
              </div>
            </div>

            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-accent-200 hover:shadow-xl transition-all duration-300 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg z-10">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                      <Icon className="w-10 h-10 text-primary-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué usar EcuaCasa?
            </h2>
            <p className="text-lg text-gray-600">
              Beneficios que hacen la diferencia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-accent-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            Encuentra al profesional perfecto para tu próximo proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explorar servicios
            </Link>
            <Link
              href="/providers"
              className="inline-block px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl transition-all border-2 border-white/30 hover:bg-primary-400"
            >
              Ver profesionales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
