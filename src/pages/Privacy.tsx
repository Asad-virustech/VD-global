import { LegalPage } from '../components/legal/LegalPage';
import type { LegalSection } from '../components/legal/LegalPage';

const SECTIONS: LegalSection[] = [
  {
    heading: 'Introduction',
    body: 'VD Globals is an authority advisory firm based in Texas, United States. This policy explains what information we collect when you visit vdglobals.com or contact us, how we use it, and the choices you have. It applies to this website and to people who get in touch with us through it.',
  },
  {
    heading: 'Information you provide',
    body: 'When you use the contact form or subscribe to the newsletter, you give us the details you choose to enter: typically your name, email address, and any message you write. We only ask for what we need to respond to you or to send what you signed up for.',
  },
  {
    heading: 'Information collected automatically',
    body: 'Like most websites, our host records basic technical information when you visit, such as your IP address, browser type, and the pages you view. This is standard server logging used to keep the site running and secure. We do not use it to build a profile of you.',
  },
  {
    heading: 'Analytics',
    body: 'We use analytics to understand how visitors use the site so we can improve it: Google Analytics, Vercel Analytics, and Microsoft Clarity. These services collect information such as the pages you visit, how you arrived, your approximate location, and your device and browser. Microsoft Clarity may also record anonymised session activity, such as mouse movement and clicks, to produce heatmaps. We use this information in aggregate to improve the site, not to identify you personally. We do not use advertising or cross-site tracking.',
  },
  {
    heading: 'Cookies',
    body: 'This site uses cookies and similar technologies, including analytics cookies and cookies set by our live chat widget. It does not use advertising cookies. Our full approach, including how to control them, is described in the Cookie Policy.',
  },
  {
    heading: 'How we use your information',
    body: 'We use what you share to respond to your enquiry, provide the advisory information you ask for, send the newsletter if you subscribed, keep a reasonable record of our correspondence, and understand how the site is used so we can improve it. We do not sell your information, and we do not share it for advertising.',
  },
  {
    heading: 'Form submissions and Formspree',
    body: 'Our contact and newsletter forms are handled by Formspree, a third-party form service. When you submit a form, the information you entered is processed and stored by Formspree and forwarded to us by email. Formspree handles that data under its own privacy policy.',
  },
  {
    heading: 'Newsletter subscriptions',
    body: 'If you subscribe to our newsletter, we keep your email address so we can send you the updates you asked for. You can unsubscribe at any time, and we will remove your address when you do.',
  },
  {
    heading: 'Email communication',
    body: 'When you email us or send an enquiry, your message and email address reach us through our email provider and are kept there so we can respond and maintain a record of our correspondence.',
  },
  {
    heading: 'Live chat',
    body: 'Our website offers a live chat widget, provided by Tidio. If you use it, the messages you send and basic technical details are processed by Tidio so we can talk with you and follow up. Tidio handles that information under its own privacy policy.',
  },
  {
    heading: 'Third-party services',
    body: 'A number of third parties help us run the site and understand how it is used. Formspree processes form submissions; Vercel hosts the website and provides analytics; Google Analytics and Microsoft Clarity provide website analytics; and Tidio powers the live chat. Each service receives only what it needs to do its job, and each operates under its own privacy terms. Our fonts are served from our own domain, so no third party receives your information through them.',
  },
  {
    heading: 'Search engines',
    body: 'We allow search engines such as Google to index this site so people can find us. That involves the public pages of the website, not the information you send us privately through a form or email.',
  },
  {
    heading: 'Data storage and international users',
    body: 'The services we use, including Formspree, Vercel, and our email provider, are based in the United States, so your information may be stored and processed there. If you contact us from outside the US, please be aware that this is where your information will be handled.',
  },
  {
    heading: 'Data retention',
    body: 'We keep enquiry and correspondence information for as long as we need it to respond to you and maintain reasonable business records. Newsletter details are kept until you unsubscribe. You can ask us to delete your information at any time.',
  },
  {
    heading: 'Security',
    body: 'We take reasonable steps to protect the information you share, and we rely on established providers with their own security practices. No method of transmission over the internet is completely secure, so we cannot promise absolute security, but we work to keep your information safe.',
  },
  {
    heading: 'Your rights',
    body: 'Depending on where you live, you may have rights over your personal information, such as to access it, correct it, or ask us to delete it. To exercise any of these, email us and we will help. We will not charge you for a reasonable request.',
  },
  {
    heading: 'Children’s privacy',
    body: 'This site is intended for businesses and professionals. It is not directed at children, and we do not knowingly collect information from anyone under the age of 16.',
  },
  {
    heading: 'Changes to this policy',
    body: 'We may update this policy as our practices or the law change. When we do, we will revise the date shown at the bottom of this page. Meaningful changes will be reflected here rather than announced individually.',
  },
  {
    heading: 'Contact',
    body: 'If you have any questions about this policy or the information we hold, email us at vdglobals365@gmail.com.',
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      summary="What information we collect when you use this site or contact us, how we use it, and the choices you have."
      effectiveDate="August 2026"
      sections={SECTIONS}
    />
  );
}
