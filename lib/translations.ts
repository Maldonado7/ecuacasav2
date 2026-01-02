import { TRANSLATIONS } from './constants';

export type Locale = 'en' | 'es';

export const translations = TRANSLATIONS;

export function getTranslation(key: string, locale: Locale = 'en'): string {
  const localeTranslations = translations[locale];
  return localeTranslations[key as keyof typeof localeTranslations] || key;
}
