import { usePageSeo } from '../../lib/usePageSeo';
import { CONTACT_FAQS } from '../../content/contact';
import { ContactHero } from '../components/sections/contact/ContactHero';
import { HowWeWork } from '../components/sections/contact/HowWeWork';
import { ContactForm } from '../components/sections/contact/ContactForm';
import { WaysToReachUs } from '../components/sections/contact/WaysToReachUs';
import { WhatHappensNext } from '../components/sections/contact/WhatHappensNext';
import { ContactFaq } from '../components/sections/contact/ContactFaq';
import { TrustSection } from '../components/sections/contact/TrustSection';
import { ContactCta } from '../components/sections/contact/ContactCta';

export default function Contact() {
  usePageSeo({ path: '/contact', faq: CONTACT_FAQS });

  return (
    <>
      <ContactHero />
      <HowWeWork />
      <ContactForm />
      <WaysToReachUs />
      <WhatHappensNext />
      <ContactFaq />
      <TrustSection />
      <ContactCta />
    </>
  );
}
