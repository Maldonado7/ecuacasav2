import { Resend } from 'resend';

interface RegistrationData {
  name: string;
  phone: string;
  email?: string | null;
  services: string[];
  speaks_english: boolean;
  message?: string | null;
}

export async function sendRegistrationNotification(data: RegistrationData) {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!apiKey) {
    console.warn('RESEND_API_KEY not set, skipping email notification');
    return;
  }

  if (!adminEmail) {
    console.warn('ADMIN_EMAIL not set, skipping email notification');
    return;
  }

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'EcuaCasa <noreply@ecuacasa.com>',
      to: adminEmail,
      subject: `🏠 Nuevo profesional: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #9333ea, #ec4899); padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nueva Solicitud de Registro</h1>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #6b7280;">Nombre:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  ${data.name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #6b7280;">WhatsApp:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #9333ea; text-decoration: none;">
                    ${data.phone}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #6b7280;">Email:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  ${data.email || 'No proporcionado'}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #6b7280;">Servicios:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  ${data.services.join(', ')}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #6b7280;">Habla inglés:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  ${data.speaks_english ? '✅ Sí' : '❌ No'}
                </td>
              </tr>
              ${data.message ? `
              <tr>
                <td style="padding: 12px 0;">
                  <strong style="color: #6b7280;">Mensaje:</strong>
                </td>
                <td style="padding: 12px 0; color: #111827;">
                  ${data.message}
                </td>
              </tr>
              ` : ''}
            </table>
            <div style="margin-top: 24px; text-align: center;">
              <a href="https://ecuacasa.com/admin/registrations"
                 style="display: inline-block; background: linear-gradient(135deg, #9333ea, #ec4899); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
                Ver en Admin
              </a>
            </div>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">
            EcuaCasa - Servicios para el hogar en Cuenca
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error('Resend API error:', result.error);
    } else {
      console.log('Email sent successfully, ID:', result.data?.id);
    }
  } catch (error) {
    console.error('Failed to send registration email:', error);
    // Don't throw - email is non-critical
  }
}
