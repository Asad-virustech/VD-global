/**
 * Cookie-consent state and deferred script loading. Google Analytics and
 * Microsoft Clarity set analytics cookies, so they load only after the visitor
 * accepts. The Tidio live chat is treated as a functional tool and loads for
 * everyone (see loadChat). Vercel Analytics is cookieless and runs regardless.
 * Vendor snippets are injected as strings so they stay out of the type-checked
 * app code.
 */

const KEY = 'vdg-cookie-consent';

export type ConsentChoice = 'accepted' | 'declined';

export function getConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(KEY);
    return value === 'accepted' || value === 'declined' ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(KEY, choice);
  } catch {
    /* storage may be unavailable (e.g. private mode); ignore */
  }
}

let loaded = false;

export function trackersLoaded(): boolean {
  return loaded;
}

/** Inject GA + Clarity (analytics). Idempotent, only ever called after consent. */
export function loadTrackers(): void {
  if (loaded || typeof document === 'undefined') return;
  loaded = true;

  // Google Analytics (gtag.js)
  const gaLib = document.createElement('script');
  gaLib.async = true;
  gaLib.src = 'https://www.googletagmanager.com/gtag/js?id=G-3147SPQMKX';
  document.head.appendChild(gaLib);

  const gaInit = document.createElement('script');
  gaInit.textContent =
    "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-3147SPQMKX');";
  document.head.appendChild(gaInit);

  // Microsoft Clarity
  const clarity = document.createElement('script');
  clarity.textContent =
    '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","xxds9pm10p");';
  document.head.appendChild(clarity);
}

let chatLoaded = false;

function injectChat(): void {
  if (chatLoaded) return;
  chatLoaded = true;
  const tidio = document.createElement('script');
  tidio.async = true;
  tidio.src = 'https://code.tidio.co/ukvybkvut4by8himio6nevd5gvsbh5ad.js';
  document.body.appendChild(tidio);
}

/**
 * Load the Tidio live chat for everyone (functional), but deferred: on the
 * first user interaction, or after the browser goes idle. This keeps the heavy
 * chat script off the critical rendering path so it doesn't delay first paint.
 */
export function loadChat(): void {
  if (chatLoaded || typeof document === 'undefined') return;

  const events: Array<keyof WindowEventMap> = ['pointerdown', 'keydown', 'touchstart', 'scroll'];
  const start = () => {
    events.forEach((e) => window.removeEventListener(e, start));
    injectChat();
  };
  events.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));

  // Idle fallback so the widget still appears for a visitor who never interacts.
  const idle = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void })
    .requestIdleCallback;
  if (idle) idle(() => start(), { timeout: 6000 });
  else setTimeout(start, 6000);
}
