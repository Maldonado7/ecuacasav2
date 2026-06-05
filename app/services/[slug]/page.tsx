import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ServiceJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/seo/json-ld';
import { ProviderCard } from '@/components/providers/provider-card';
import { servicesRepository, providersRepository } from '@/lib/repositories';
import { SERVICE_ICONS, DEFAULT_SERVICE_ICON } from '@/lib/constants';
import { getServiceContent } from '@/lib/seo/service-content';
import { ChevronRight } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Fallback SEO for services without rich content
const SERVICE_SEO: Record<string, { title: string; description: string }> = {
  limpieza: {
    title: 'Limpieza de Casas en Cuenca Ecuador | Servicio a Domicilio',
    description: 'Servicio de limpieza de casas y departamentos en Cuenca. Personal verificado, limpieza profunda, mantenimiento. Presupuesto sin compromiso.',
  },
  electricidad: {
    title: 'Electricistas en Cuenca Ecuador | Servicio Eléctrico a Domicilio',
    description: 'Electricistas verificados en Cuenca. Instalaciones, reparaciones, emergencias. Contáctalos directamente por WhatsApp. Servicio a domicilio profesional.',
  },
  jardineria: {
    title: 'Jardineros en Cuenca Ecuador | Jardinería y Mantenimiento',
    description: 'Jardineros verificados en Cuenca. Mantenimiento de jardines, paisajismo, poda, limpieza. Servicio a domicilio. Presupuesto sin compromiso.',
  },
  handyman: {
    title: 'Handyman Services in Cuenca Ecuador | Verified Professionals',
    description: 'Verified handyman services in Cuenca. Home repairs, maintenance, installations. Contact them directly on WhatsApp. No commitment.',
  },
};

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await servicesRepository.getBySlug(slug);

  if (!service) {
    return { title: 'Servicio no encontrado | EcuaCasa' };
  }

  const seoContent = getServiceContent(slug);
  const fallback = SERVICE_SEO[slug];

  const title = seoContent?.metaTitle || fallback?.title || `${service.name_es} en Cuenca | EcuaCasa`;
  const description = seoContent?.metaDescription || fallback?.description || service.description_es;

  return {
    title,
    description,
    keywords: seoContent
      ? `${service.name_es}, ${service.name_es} cuenca, ${service.name_es} a domicilio, ecuacasa`
      : undefined,
    openGraph: {
      title,
      description,
      url: `https://ecuacasa.com/services/${slug}`,
    },
    alternates: {
      canonical: `/services/${slug}`,
      languages: {
        'es': `/services/${slug}`,
        'en': `/services/${slug}`,
      },
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const [service, providers] = await Promise.all([
    servicesRepository.getBySlug(slug),
    providersRepository.getByService(slug),
  ]);

  if (!service) {
    notFound();
  }

  const Icon = SERVICE_ICONS[service.slug] || DEFAULT_SERVICE_ICON;
  const seoContent = getServiceContent(slug);

  // Compute aggregate rating from providers
  const ratedProviders = providers.filter((p) => p.review_count > 0);
  const totalReviews = ratedProviders.reduce((sum, p) => sum + p.review_count, 0);
  const avgRating =
    ratedProviders.length > 0
      ? ratedProviders.reduce((sum, p) => sum + p.rating * p.review_count, 0) / totalReviews
      : undefined;

  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://ecuacasa.com' },
    { name: 'Servicios', url: 'https://ecuacasa.com/services' },
    { name: service.name_es, url: `https://ecuacasa.com/services/${slug}` },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <ServiceJsonLd
        name={seoContent?.h1 || service.name_es}
        description={seoContent?.metaDescription || service.description_es}
        slug={service.slug}
        rating={avgRating ? Math.round(avgRating * 10) / 10 : undefined}
        reviewCount={totalReviews > 0 ? totalReviews : undefined}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      {seoContent && <FAQJsonLd faqs={seoContent.faqs} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-accent-600 transition-colors">
                Inicio
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li>
              <Link href="/services" className="hover:text-accent-600 transition-colors">
                Servicios
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-gray-900 font-medium">{service.name_es}</li>
          </ol>
        </nav>

        {/* Direct Contact Banner */}
        <div className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              ¿Necesitas {service.name_es}?
            </h2>
            <p className="text-gray-600 text-sm">
              Contacta directamente a un profesional verificado en Cuenca. Sin intermediarios.
            </p>
          </div>
          <Link
            href={`/providers?service=${service.slug}`}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all whitespace-nowrap"
          >
            Ver profesionales de {service.name_es.toLowerCase()}
          </Link>
        </div>

        {/* Service Header — keyword-rich H1 */}
        <div className="flex items-start gap-6 mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-10 h-10 text-primary-600" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              {seoContent?.h1 || service.name_es}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {service.description_es}
            </p>
          </div>
        </div>

        {/* Rich Content Section */}
        {seoContent && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {service.name_es} profesional en Cuenca
            </h2>
            <div className="prose prose-gray max-w-none">
              {seoContent.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Providers Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{providers.length}</span> profesionales disponibles
          </p>
        </div>

        {/* Providers Grid */}
        {providers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                serviceNameEn={service.name_en}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border-2 border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aún no hay profesionales de {service.name_es.toLowerCase()} en esta categoría
            </h3>
            <p className="text-gray-600 mb-6">
              Explora todos nuestros profesionales verificados en Cuenca y contáctalos directamente por WhatsApp.
            </p>
            <Link
              href="/providers"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-colors"
            >
              Ver todos los profesionales
            </Link>
          </div>
        )}

        {/* FAQ Section */}
        {seoContent && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Preguntas Frecuentes sobre {service.name_es} en Cuenca
            </h2>
            <div className="space-y-4">
              {seoContent.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white border-2 border-gray-100 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    <h3 className="text-left pr-4">{faq.question}</h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related Services */}
        {seoContent && seoContent.relatedServices.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Servicios Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {seoContent.relatedServices.map((related) => {
                const RelatedIcon = SERVICE_ICONS[related.slug] || DEFAULT_SERVICE_ICON;
                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="flex items-center gap-4 p-4 bg-white border-2 border-gray-100 rounded-xl hover:border-accent-200 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <RelatedIcon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">{related.label}</span>
                      <p className="text-sm text-gray-500">Ver profesionales</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
