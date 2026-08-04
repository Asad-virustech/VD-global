/**
 * Small, dependency-free validation helpers shared by the site's forms.
 * Kept provider-agnostic: pure functions, no framework coupling.
 */

/** True when the value is a plausibly valid email address. */
export function isEmail(value: string): boolean {
  const v = value.trim();
  // Pragmatic check: one @, a dot in the domain, no whitespace. Not RFC-exhaustive
  // by design — the server/provider is the source of truth for deliverability.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/** True when the value is an http(s) URL. Empty is treated as valid (use for optional fields). */
export function isUrl(value: string): boolean {
  const v = value.trim();
  if (v === '') return true;
  try {
    const url = new URL(v);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

/** True when a required value has non-whitespace content. */
export function isFilled(value: string): boolean {
  return value.trim().length > 0;
}
