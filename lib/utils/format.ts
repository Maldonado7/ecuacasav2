/**
 * Formats a date to a readable string
 * @param date - Date string or Date object
 * @param locale - Locale for formatting (default: 'es-EC')
 * @returns Formatted date string
 */
export function formatDate(date: string | Date, locale: string = 'es-EC'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Formats a date to relative time (e.g., "2 days ago")
 * @param date - Date string or Date object
 * @param locale - Locale for formatting (default: 'es-EC')
 * @returns Relative time string
 */
export function formatRelativeTime(date: string | Date, locale: string = 'es-EC'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, 'second');
  } else if (diffInSeconds < 3600) {
    return rtf.format(-Math.floor(diffInSeconds / 60), 'minute');
  } else if (diffInSeconds < 86400) {
    return rtf.format(-Math.floor(diffInSeconds / 3600), 'hour');
  } else if (diffInSeconds < 604800) {
    return rtf.format(-Math.floor(diffInSeconds / 86400), 'day');
  } else if (diffInSeconds < 2592000) {
    return rtf.format(-Math.floor(diffInSeconds / 604800), 'week');
  } else if (diffInSeconds < 31536000) {
    return rtf.format(-Math.floor(diffInSeconds / 2592000), 'month');
  } else {
    return rtf.format(-Math.floor(diffInSeconds / 31536000), 'year');
  }
}

/**
 * Formats a price range to display format
 * @param priceRange - Price range identifier ($, $$, $$$)
 * @returns Price range display string
 */
export function formatPriceRange(priceRange: string): string {
  const ranges: Record<string, string> = {
    '$': '$ (Económico)',
    '$$': '$$ (Moderado)',
    '$$$': '$$$ (Premium)',
  };

  return ranges[priceRange] || priceRange;
}

/**
 * Formats a number with proper localization
 * @param num - Number to format
 * @param locale - Locale for formatting (default: 'es-EC')
 * @returns Formatted number string
 */
export function formatNumber(num: number, locale: string = 'es-EC'): string {
  return new Intl.NumberFormat(locale).format(num);
}
