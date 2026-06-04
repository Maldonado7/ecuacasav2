import { redirect } from 'next/navigation';

// The email-relay request flow has been retired. In the hands-off model the
// customer contacts the provider directly (WhatsApp). This route is kept only
// so existing links/SEO don't 404 — it now redirects to the providers listing.
// The form component and /api/solicitar are intentionally left in place for now.
export default function SolicitarPage() {
  redirect('/providers');
}
