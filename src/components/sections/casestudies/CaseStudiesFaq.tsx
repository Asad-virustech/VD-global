import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { FaqAccordion } from '../../ui/FaqAccordion';
import { CASE_STUDY_FAQS } from '../../../../content/caseStudies';

export function CaseStudiesFaq() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Frequently Asked Questions"
          title="About Our Case Studies."
          description="Confidentiality, measurement, and what we will — and won't — claim. If your question isn't here, we're glad to answer it directly."
          className="mb-12 sm:mb-14"
        />

        <FaqAccordion items={CASE_STUDY_FAQS} />
      </Container>
    </Section>
  );
}
