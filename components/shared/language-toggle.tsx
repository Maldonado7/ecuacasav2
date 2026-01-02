'use client';

import { useTranslation } from '@/hooks/use-translation';

interface LanguageToggleProps {
  variant?: 'button' | 'link' | 'icon' | 'dropdown';
  className?: string;
}

export function LanguageToggle({ variant = 'dropdown', className = '' }: LanguageToggleProps) {
  const { locale, setLocale } = useTranslation();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'es' : 'en');
  };

  // New default: dropdown style with flag
  if (variant === 'dropdown') {
    return (
      <button
        onClick={toggleLanguage}
        className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 ${className}`}
        aria-label="Toggle language"
      >
        <span className="text-base">{locale === 'en' ? '🇺🇸' : '🇪🇨'}</span>
        <span>{locale === 'en' ? 'EN' : 'ES'}</span>
      </button>
    );
  }

  if (variant === 'link') {
    return (
      <button
        onClick={toggleLanguage}
        className={`inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors ${className}`}
      >
        <span>{locale === 'en' ? '🇺🇸' : '🇪🇨'}</span>
        <span>{locale === 'en' ? 'EN' : 'ES'}</span>
      </button>
    );
  }

  if (variant === 'icon') {
    return (
      <button
        onClick={toggleLanguage}
        className={`inline-flex items-center justify-center w-10 h-10 text-lg hover:bg-gray-100 rounded-full transition-colors ${className}`}
        aria-label="Toggle language"
        title={locale === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      >
        {locale === 'en' ? '🇺🇸' : '🇪🇨'}
      </button>
    );
  }

  // Button variant with full text
  return (
    <button
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 ${className}`}
    >
      <span className="text-base">{locale === 'en' ? '🇪🇨' : '🇺🇸'}</span>
      <span>{locale === 'en' ? 'Español' : 'English'}</span>
    </button>
  );
}
