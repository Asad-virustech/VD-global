export type NewsletterRequest = {
  email: string;
  /** ISO timestamp set at submit time; lets the backend add timing/rate checks. */
  submittedAt?: string;
};

/** 'subscribed' for a new signup; 'already' when the address is already on the list. */
export type SubscribeResult = 'subscribed' | 'already';

/**
 * Provider-agnostic newsletter adapter — same architecture as the contact form.
 *
 * The default below is a Formspree endpoint (a public, non-secret URL, safe in
 * client code). It emails each signup to the firm's inbox. To swap to a proper
 * ESP later (Buttondown, ConvertKit, Mailchimp via a route), set
 * `VITE_NEWSLETTER_ENDPOINT`; it overrides the default. A 409 is treated as
 * "already subscribed" so a repeat signup reads as success rather than an error.
 * If the endpoint is ever blank, this throws so the form shows its error state
 * instead of faking a success.
 */
const ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT ?? 'https://formspree.io/f/xbdnnnvz';

export async function subscribeNewsletter(data: NewsletterRequest): Promise<SubscribeResult> {
  if (!ENDPOINT) {
    throw new Error('Newsletter endpoint is not configured (set VITE_NEWSLETTER_ENDPOINT).');
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.status === 409) return 'already';
  if (!response.ok) {
    throw new Error(`Newsletter subscription failed with status ${response.status}.`);
  }
  return 'subscribed';
}
