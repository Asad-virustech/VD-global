import { useDocumentMeta } from '../../lib/useDocumentMeta';
import { FIRM } from '../../content/site';
import { ContactHero } from '../components/sections/contact/ContactHero';
import { HowWeWork } from '../components/sections/contact/HowWeWork';
import { ContactForm } from '../components/sections/contact/ContactForm';
import { WaysToReachUs } from '../components/sections/contact/WaysToReachUs';
import { WhatHappensNext } from '../components/sections/contact/WhatHappensNext';
import { ContactFaq } from '../components/sections/contact/ContactFaq';
import { TrustSection } from '../components/sections/contact/TrustSection';
import { ContactCta } from '../components/sections/contact/ContactCta';

export default function Contact() {
  useDocumentMeta({
    title: 'Contact — VD Global',
    description: `Start a conversation with ${FIRM.name}. Request a complimentary consultation to discuss your authority goals — advisory-first, no obligation.`,
  });

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
