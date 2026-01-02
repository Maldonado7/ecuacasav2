import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | EcuaCasa',
  description: 'Política de privacidad de EcuaCasa',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Última actualización: Enero 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que recopilamos</h2>
            <p className="text-gray-600 mb-4">
              EcuaCasa recopila información que usted nos proporciona directamente cuando:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Se registra como profesional en nuestra plataforma</li>
              <li>Utiliza nuestro formulario de contacto</li>
              <li>Navega por nuestro sitio web</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de la información</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Facilitar la conexión entre clientes y profesionales</li>
              <li>Mejorar nuestros servicios y experiencia de usuario</li>
              <li>Comunicarnos con usted sobre su cuenta o servicios</li>
              <li>Verificar la identidad de los profesionales registrados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartir información</h2>
            <p className="text-gray-600 mb-4">
              No vendemos ni compartimos su información personal con terceros, excepto:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Cuando es necesario para proveer nuestros servicios (ej: mostrar perfiles de profesionales)</li>
              <li>Cuando la ley lo requiera</li>
              <li>Con su consentimiento explícito</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Seguridad</h2>
            <p className="text-gray-600">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información
              personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sus derechos</h2>
            <p className="text-gray-600 mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Acceder a su información personal</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
            <p className="text-gray-600">
              Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analíticas
              para mejorar nuestros servicios. Puede configurar su navegador para rechazar cookies,
              aunque esto podría afectar algunas funcionalidades del sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contacto</h2>
            <p className="text-gray-600">
              Si tiene preguntas sobre esta política de privacidad, puede contactarnos a través de
              nuestra página de contacto o enviando un mensaje por WhatsApp.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cambios a esta política</h2>
            <p className="text-gray-600">
              Podemos actualizar esta política de privacidad ocasionalmente. La versión más reciente
              siempre estará disponible en esta página con la fecha de última actualización.
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
