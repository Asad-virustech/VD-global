import { PagePlaceholder } from '../components/sections/PagePlaceholder';
import { FIRM } from '../../content/site';

export default function Contact() {
  return (
    <PagePlaceholder
      eyebrow="Start a Conversation"
      title="Tell us about your authority goals."
      description="If you're a founder or business looking to build recognition, credibility, authority and trust, we'd like to hear from you. A proper contact form and intake flow arrive in an upcoming sprint — for now, reach out by email."
      badge="Contact"
      metaTitle="Contact — VD Global"
      metaDescription={`Get in touch with ${FIRM.name}. Email ${FIRM.email} to start a conversation about authority advisory.`}
      ctaTo={`mailto:${FIRM.email}`}
      ctaLabel="Email the team"
    />
  );
}
