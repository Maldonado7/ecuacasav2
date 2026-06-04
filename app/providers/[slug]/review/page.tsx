import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { providersRepository } from '@/lib/repositories';
import { ReviewForm } from '@/components/providers/review-form';

interface ReviewPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ReviewPageProps) {
  const { slug } = await params;
  const provider = await providersRepository.getBySlug(slug);
  return {
    title: provider ? `Califica a ${provider.name} | EcuaCasa` : 'Dejar una reseña | EcuaCasa',
    // Review links are shared 1:1 with customers after a job — keep them out of search.
    robots: { index: false, follow: false },
  };
}

// Per-provider review link the operator can send a customer over WhatsApp
// after a job: /providers/<slug>/review
export default async function ProviderReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const provider = await providersRepository.getBySlug(slug);

  if (!provider) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Link
          href={`/providers/${slug}`}
          className="inline-flex items-center text-gray-600 hover:text-accent-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Ver perfil
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            ¿Cómo fue tu experiencia con {provider.name}?
          </h1>
          <p className="text-gray-600">
            Tu reseña ayuda a otros vecinos a elegir con confianza.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <ReviewForm providerId={provider.id} />
        </div>
      </div>
    </div>
  );
}
