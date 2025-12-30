import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'noreply@ecuacasa.com';

/**
 * Send registration notification email to admin
 */
export async function sendRegistrationNotification(data: {
  name: string;
  phone: string;
  email?: string;
  services: string[];
  areas: string[];
  speaks_english: boolean;
  message?: string;
  requestId: string;
}) {
  const { name, phone, email, services, areas, speaks_english, message, requestId } = data;

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1f2937; }
          .value { color: #4b5563; }
          .badge { display: inline-block; padding: 4px 12px; background: #dbeafe; color: #1e40af; border-radius: 12px; font-size: 14px; margin-right: 8px; }
          .badge.success { background: #d1fae5; color: #065f46; }
          .admin-link { display: inline-block; margin-top: 20px; padding: 12px 24px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">New Provider Registration</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">EcuaCasa - Provider Registration Request</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Provider Name:</div>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <div class="label">Phone (WhatsApp):</div>
              <div class="value">${phone}</div>
            </div>

            ${email ? `
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            ` : ''}

            <div class="field">
              <div class="label">Services Interested:</div>
              <div class="value">
                ${services.map(s => `<span class="badge">${s}</span>`).join('')}
              </div>
            </div>

            <div class="field">
              <div class="label">Areas Served:</div>
              <div class="value">
                ${areas.map(a => `<span class="badge">${a}</span>`).join('')}
              </div>
            </div>

            <div class="field">
              <div class="label">Speaks English:</div>
              <div class="value">
                <span class="badge ${speaks_english ? 'success' : ''}">${speaks_english ? 'Yes ✓' : 'No'}</span>
              </div>
            </div>

            ${message ? `
            <div class="field">
              <div class="label">Message:</div>
              <div class="value" style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #2563eb;">
                ${message}
              </div>
            </div>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px 0; color: #6b7280;">Request ID: <code>${requestId}</code></p>
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/registrations" class="admin-link">
                View in Admin Panel →
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const result = await resend.emails.send({
      from: `EcuaCasa <${NOTIFICATION_EMAIL}>`,
      to: process.env.NOTIFICATION_EMAIL || 'maldonado7@hotmail.com',
      subject: `New Provider Registration: ${name}`,
      html: emailHtml,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send registration notification:', error);
    return { success: false, error };
  }
}
