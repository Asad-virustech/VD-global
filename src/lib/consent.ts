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

/** Inject the Tidio live chat. Loads for everyone (functional), idempotent. */
export function loadChat(): void {
  if (chatLoaded || typeof document === 'undefined') return;
  chatLoaded = true;

  const tidio = document.createElement('script');
  tidio.async = true;
  tidio.src = 'https://code.tidio.co/ukvybkvut4by8himio6nevd5gvsbh5ad.js';
  document.body.appendChild(tidio);
}
