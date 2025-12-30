/**
 * Generates a URL-friendly slug from a string
 * @param text - Text to slugify
 * @returns URL-safe slug
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '');         // Trim - from end of text
}

/**
 * Generates a unique slug by appending a number if needed
 * @param text - Text to slugify
 * @param existingSlugs - Array of existing slugs to check against
 * @returns Unique slug
 */
export function generateUniqueSlug(text: string, existingSlugs: string[]): string {
  let slug = slugify(text);
  let counter = 1;

  while (existingSlugs.includes(slug)) {
    slug = `${slugify(text)}-${counter}`;
    counter++;
  }

  return slug;
}
