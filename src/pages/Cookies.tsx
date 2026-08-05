import { LegalPage } from '../components/legal/LegalPage';
import type { LegalSection } from '../components/legal/LegalPage';

const SECTIONS: LegalSection[] = [
  {
    heading: 'What cookies are',
    body: 'Cookies are small text files a website can store on your device to remember information between visits. Similar technologies, such as local storage, work in comparable ways. This page explains how they are, and are not, used on this site.',
  },
  {
    heading: 'The short version',
    body: 'This website does not set cookies of its own, and it does not use analytics, advertising, or tracking cookies. There is no cookie banner because, for our own use, there is nothing to consent to.',
  },
  {
    heading: 'Essential cookies',
    body: 'Essential cookies are the ones a site needs to function or stay secure. This site is served as static pages and does not rely on cookies to work, so it sets no essential cookies of its own. Our host, Vercel, may use limited, strictly necessary measures to deliver the site securely.',
  },
  {
    heading: 'Functional cookies',
    body: 'Functional cookies remember preferences, such as settings or choices you have made. This site does not currently use any functional cookies.',
  },
  {
    heading: 'Analytics cookies',
    body: 'Analytics cookies measure how visitors use a site. We do not use them. There is no Google Analytics or other analytics service running here. If we add analytics in future, we will update this policy and this section first.',
  },
  {
    heading: 'Third-party cookies',
    body: 'Some third parties we rely on may set their own cookies when you interact with their service. In particular, if you submit a form, it is processed by Formspree, which operates under its own cookie and privacy policies. The fonts on this site are served by Google Fonts; this does not set cookies, though Google does receive your IP address when the fonts load.',
  },
  {
    heading: 'Managing cookies and browser controls',
    body: 'Because this site sets no cookies of its own, there is nothing here to turn off. You can still control cookies generally through your browser settings, where you can block or delete cookies from any site. Your browser’s help pages explain how, and doing so will not stop this site from working.',
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
