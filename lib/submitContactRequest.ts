export type ContactRequest = {
  fullName: string;
  company: string;
  email: string;
  website?: string;
  industry?: string;
  primaryGoal: string;
  challenges?: string;
  referral?: string;
};

/**
 * Submission seam for the consultation form.
 *
 * No backend is wired up during the framework phase — this simulates a network
 * round-trip so the UI can move through submitting → success. To connect a
 * provider later, replace the body below; the form component does not need to
 * change:
 *
 *   - Formspree:  await fetch('https://formspree.io/f/<id>', { method: 'POST',
 *                   headers: { 'Content-Type': 'application/json' },
 *                   body: JSON.stringify(data) });
 *   - Resend:     POST to your serverless route that calls the Resend SDK.
 *   - HubSpot:    POST to the HubSpot Forms submission endpoint.
 *   - Zoho:       POST to the Zoho CRM / Forms webhook.
 *   - Custom API: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
 *
 * Return normally on success; throw to let the form surface an error state.
 */
export async function submitContactRequest(data: ContactRequest): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  // Framework phase: nothing is sent anywhere.
  void data;
}
