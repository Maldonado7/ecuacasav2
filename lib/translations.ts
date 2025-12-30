import { TRANSLATIONS } from './constants';

export type Locale = 'en' | 'es';

export const translations = TRANSLATIONS;

export function getTranslation(key: string, locale: Locale = 'en'): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
}
