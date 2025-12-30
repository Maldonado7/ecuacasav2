'use client';

import Link from 'next/link';
import { Facebook, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function Footer() {
  const { t, locale } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: '/how-it-works', label: t('nav.how_it_works') },
      { href: '/for-providers', label: t('nav.for_providers') },
    ],
    browse: [
      { href: '/services', label: t('nav.services') },
      { href: '/providers', label: t('nav.providers') },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">EcuaCasa</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              {t('hero.subtitle')}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com/ecuacasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/593987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              {t('nav.services')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.browse.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Browse Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              {locale === 'en' ? 'Company' : 'Empresa'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} EcuaCasa. {locale === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                {locale === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                {locale === 'en' ? 'Terms of Service' : 'Términos de Servicio'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
