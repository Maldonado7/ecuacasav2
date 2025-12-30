'use client';

import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';

interface LanguageToggleProps {
  variant?: 'button' | 'link' | 'icon';
  className?: string;
}

export function LanguageToggle({ variant = 'button', className = '' }: LanguageToggleProps) {
  const { locale, setLocale } = useTranslation();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'es' : 'en');
  };

  if (variant === 'link') {
    return (
      <button
        onClick={toggleLanguage}
        className={`text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors ${className}`}
      >
        {locale === 'en' ? 'ES' : 'EN'}
      </button>
    );
  }

  if (variant === 'icon') {
    return (
      <button
        onClick={toggleLanguage}
        className={`inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors ${className}`}
        aria-label="Toggle language"
      >
        {locale === 'en' ? '🇪🇸' : '🇺🇸'}
      </button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className={className}
    >
      {locale === 'en' ? 'Español' : 'English'}
    </Button>
  );
}
