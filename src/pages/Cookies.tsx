import { LegalPage } from '../components/legal/LegalPage';
import type { LegalSection } from '../components/legal/LegalPage';

const SECTIONS: LegalSection[] = [
  {
    heading: 'What cookies are',
    body: 'Cookies are small text files a website can store on your device to remember information between visits. Similar technologies, such as local storage, work in comparable ways. This page explains how they are, and are not, used on this site.',
  },
  {
    heading: 'The short version',
    body: 'This website uses a small number of cookies and similar technologies: analytics cookies that help us understand how the site is used, and cookies set by our live chat widget. It does not use advertising or cross-site tracking cookies.',
  },
  {
    heading: 'Essential cookies',
    body: 'Essential cookies are the ones a site needs to function or stay secure. This site is served as static pages and does not rely on cookies of its own to work. Our host, Vercel, and our live chat provider may use limited, strictly necessary items to deliver the site and the chat securely.',
  },
  {
    heading: 'Functional cookies',
    body: 'Functional cookies remember preferences and enable features. Our live chat widget, provided by Tidio, may set cookies so it can function and remember your conversation. Without them, the chat may not work properly.',
  },
  {
    heading: 'Analytics cookies',
    body: 'We use analytics cookies to understand how visitors use the site. Google Analytics, Vercel Analytics, and Microsoft Clarity set cookies or similar identifiers to measure visits, traffic sources, and how people interact with pages, including anonymised session activity for heatmaps. We use this in aggregate to improve the site, not to identify you.',
  },
  {
    heading: 'Third-party cookies',
    body: 'Several of the services above are third parties that set their own cookies: Google Analytics, Microsoft Clarity, and Tidio. If you submit a form, it is processed by Formspree under its own policies. Our fonts are served from our own domain, so they set no cookies and involve no third party. Each third party’s cookies are governed by its own policy.',
  },
  {
    heading: 'Your choice',
    body: 'When you first visit, we ask before loading cookie-based analytics: Google Analytics and Microsoft Clarity load only if you accept, and are not loaded at all if you decline. Vercel Analytics is cookieless and runs either way, and the live chat is a functional tool available to everyone. You can change your choice at any time using the “Cookie settings” link in the footer.',
  },
  {
    heading: 'Managing cookies and browser controls',
    body: 'Beyond the choice above, you can control cookies through your browser settings, where you can block or delete cookies from any site. You can also opt out of Google Analytics specifically using Google’s browser add-on. Blocking analytics or chat cookies will not stop the site from working, though the live chat may not function without them.',
  },
  {
    heading: 'Changes to this policy',
    body: 'If our use of cookies changes, we will update this page and the date shown below. We would rather tell you plainly than track you quietly.',
  },
  {
    heading: 'Contact',
    body: 'If you have any questions about cookies, email us at vdglobals365@gmail.com.',
  },
];

export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookies"
      summary="How this site uses cookies and similar technologies. In short: it sets none of its own."
      effectiveDate="August 2026"
      sections={SECTIONS}
    />
  );
}
