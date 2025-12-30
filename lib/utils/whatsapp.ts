/**
 * Generates a WhatsApp web link with pre-filled message
 * @param phoneNumber - Phone number in E.164 format (e.g., +593987654321)
 * @param providerName - Name of the service provider
 * @param serviceName - Optional service name for context
 * @returns WhatsApp web URL
 */
export function generateWhatsAppLink(
  phoneNumber: string,
  providerName: string,
  serviceName?: string
): string {
  // Remove all non-numeric characters from phone number
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');

  // Create Spanish message
  const message = serviceName
    ? `Hola ${providerName}, encontré tu perfil en EcuaCasa. Necesito ayuda con ${serviceName}. ¿Estás disponible?`
    : `Hola ${providerName}, encontré tu perfil en EcuaCasa. Necesito ayuda con un servicio. ¿Estás disponible?`;

  // Generate WhatsApp link
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Validates if a phone number is in correct Ecuador format
 * @param phoneNumber - Phone number to validate
 * @returns true if valid Ecuador phone number
 */
export function isValidEcuadorPhone(phoneNumber: string): boolean {
  // Ecuador phone numbers: +593 followed by 9 digits
  const ecuadorPhoneRegex = /^\+593[0-9]{9}$/;
  return ecuadorPhoneRegex.test(phoneNumber);
}

/**
 * Formats a phone number for display
 * @param phoneNumber - Phone number in E.164 format
 * @returns Formatted phone number (e.g., +593 98 765 4321)
 */
export function formatPhoneNumber(phoneNumber: string): string {
  const cleanPhone = phoneNumber.replace(/[^0-9+]/g, '');

  if (cleanPhone.startsWith('+593') && cleanPhone.length === 13) {
    // Format as +593 98 765 4321
    return `${cleanPhone.slice(0, 4)} ${cleanPhone.slice(4, 6)} ${cleanPhone.slice(6, 9)} ${cleanPhone.slice(9)}`;
  }

  return phoneNumber;
}
