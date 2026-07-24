import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { FaqAccordion } from '../../ui/FaqAccordion';
import { CONTACT_FAQS } from '../../../../content/contact';

export function ContactFaq() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Frequently Asked Questions"
          title="Before You Reach Out."
          description="A few things people often want to know first. If your question isn't here, just ask it in the form."
          className="mb-12 sm:mb-14"
        />

        <FaqAccordion items={CONTACT_FAQS} />
      </Container>
    </Section>
  );
}
