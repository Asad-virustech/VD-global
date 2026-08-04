/**
 * Lightweight, invisible spam protection shared by the forms.
 *
 * Two techniques, both without a visible CAPTCHA:
 *   1. Honeypot — a hidden field real users never see or fill. Bots that fill
 *      every field trip it.
 *   2. Time-to-submit — a form completed faster than a human plausibly could
 *      was almost certainly automated.
 *
 * Real rate limiting belongs on the server (the submission endpoint); these are
 * the client-side preparations. Both forms send `submittedAt` so the backend can
 * add timing/rate checks later without a client change.
 */

import type { CSSProperties } from 'react';

/** Name/id for the honeypot input. Innocuous enough that bots will fill it. */
export const HONEYPOT_FIELD = 'company_url';

/** Minimum time (ms) a genuine human takes to complete and submit a form. */
export const MIN_SUBMIT_MS = 1500;

/**
 * Off-screen inline style for the honeypot wrapper. Deliberately an inline style
 * rather than utility classes: this module lives in `lib/`, which Tailwind does
 * not scan, so class-based hiding would never be generated. Inline styles always
 * apply, keeping the honeypot invisible to real users.
 */
export const honeypotStyle: CSSProperties = {
  position: 'absolute',
  left: '-9999px',
  top: '-9999px',
  height: 0,
  width: 0,
  overflow: 'hidden',
};

/**
 * Returns true when a submission looks automated: the honeypot was filled, or it
 * arrived implausibly fast. Callers should silently drop bot submissions.
 */
export function isLikelyBot(honeypotValue: string, mountedAt: number): boolean {
  if (honeypotValue.trim() !== '') return true;
  if (Date.now() - mountedAt < MIN_SUBMIT_MS) return true;
  return false;
}
