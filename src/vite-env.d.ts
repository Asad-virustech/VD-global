/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** POST endpoint for the consultation form (Formspree, Web3Forms, or a custom /api route). */
  readonly VITE_CONTACT_ENDPOINT?: string;
  /** POST endpoint for newsletter signups (ESP or a custom /api route). */
  readonly VITE_NEWSLETTER_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
