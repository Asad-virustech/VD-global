export type ContactRequest = {
  fullName: string;
  company: string;
  email: string;
  website?: string;
  industry?: string;
  primaryGoal: string;
  challenges?: string;
  referral?: string;
  /** ISO timestamp set at submit time; lets the backend add timing/rate checks. */
  submittedAt?: string;
};

/**
 * Provider-agnostic submission adapter for the consultation form.
 *
 * The form component does not know or care which provider is behind this. Point
 * `VITE_CONTACT_ENDPOINT` at any endpoint that accepts a JSON POST and returns a
 * 2xx on success:
 *
 *   - Formspree:   https://formspree.io/f/<id>
 *   - Web3Forms:   https://api.web3forms.com/submit   (include your access key)
 *   - Custom API:  /api/contact                       (serverless → email/CRM)
 *
 * The default below is a Formspree endpoint (a public, non-secret URL — it is
 * safe in client code, like any HTML form `action`). It emails each submission
 * to the firm's inbox. To swap providers without touching this file, set
 * `VITE_CONTACT_ENDPOINT`; it overrides the default. If the endpoint is ever
 * blank, this throws so the form surfaces its error state and offers the email
 * fallback — it never fakes a success.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT ?? 'https://formspree.io/f/xrennnvo';

export async function submitContactRequest(data: ContactRequest): Promise<void> {
  if (!ENDPOINT) {
    throw new Error('Contact endpoint is not configured (set VITE_CONTACT_ENDPOINT).');
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Contact submission failed with status ${response.status}.`);
  }
}
