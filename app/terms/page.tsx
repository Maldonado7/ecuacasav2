import Link from 'next/link';

export const metadata = {
  title: 'Términos de Servicio | EcuaCasa',
  description: 'Términos y condiciones de uso de EcuaCasa',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos de Servicio</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Última actualización: Enero 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de términos</h2>
            <p className="text-gray-600">
              Al acceder y utilizar EcuaCasa, usted acepta estos términos de servicio. Si no está
              de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del servicio</h2>
            <p className="text-gray-600">
              EcuaCasa es una plataforma que conecta a residentes de Cuenca, Ecuador con
              profesionales de servicios para el hogar. Actuamos únicamente como intermediarios
              y no somos parte de ningún contrato de servicios entre usuarios y profesionales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registro de profesionales</h2>
            <p className="text-gray-600 mb-4">
              Los profesionales que se registran en EcuaCasa deben:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Proporcionar información veraz y actualizada</li>
              <li>Mantener activo su número de WhatsApp</li>
              <li>Responder a las solicitudes de los clientes de manera profesional</li>
              <li>Cumplir con todas las leyes y regulaciones aplicables</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso aceptable</h2>
            <p className="text-gray-600 mb-4">
              Los usuarios de EcuaCasa se comprometen a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>No usar la plataforma para actividades ilegales</li>
              <li>No publicar contenido falso, engañoso o difamatorio</li>
              <li>Respetar a otros usuarios y profesionales</li>
              <li>No intentar acceder a áreas restringidas del sistema</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitación de responsabilidad</h2>
            <p className="text-gray-600">
              EcuaCasa no es responsable por la calidad, puntualidad o resultados de los servicios
              prestados por los profesionales listados en nuestra plataforma. No garantizamos la
              disponibilidad, exactitud o integridad de la información proporcionada por terceros.
              Los usuarios contratan servicios bajo su propia responsabilidad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Propiedad intelectual</h2>
            <p className="text-gray-600">
              Todo el contenido de EcuaCasa, incluyendo textos, gráficos, logos, y software,
              es propiedad de EcuaCasa o sus licenciantes y está protegido por leyes de
              propiedad intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Suspensión y terminación</h2>
            <p className="text-gray-600">
              Nos reservamos el derecho de suspender o terminar el acceso de cualquier usuario
              que viole estos términos de servicio, sin previo aviso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificaciones</h2>
            <p className="text-gray-600">
              Podemos modificar estos términos en cualquier momento. Los cambios serán efectivos
              inmediatamente después de su publicación. El uso continuado del servicio después
              de los cambios constituye aceptación de los nuevos términos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Ley aplicable</h2>
            <p className="text-gray-600">
              Estos términos se rigen por las leyes de la República del Ecuador. Cualquier
              disputa será resuelta en los tribunales competentes de Cuenca, Ecuador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contacto</h2>
            <p className="text-gray-600">
              Para preguntas sobre estos términos de servicio, puede contactarnos a través
              de nuestra plataforma.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
