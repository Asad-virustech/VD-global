import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FaqAccordion } from '../ui/FaqAccordion';
import type { FaqItem } from '../ui/FaqAccordion';

const FAQS: FaqItem[] = [
  {
    question: 'Do you guarantee Wikipedia approval?',
    answer:
      "No. Wikipedia is an independent community platform. No agency can ethically guarantee approval or long-term survival. Our role is to evaluate your readiness, create a well-researched article, follow Wikipedia's guidelines, and maximize the chances of long-term success.",
  },
  {
    question: 'How do I know which service I need?',
    answer:
      "That's exactly why we begin with an Authority Assessment. We first understand your goals, reputation, and current authority before recommending the right strategy.",
  },
  {
    question: "Can I work with VD Global if I'm not ready for Wikipedia?",
    answer:
      "Yes. Many businesses benefit more from strategic PR, media visibility, guest publications, or credibility building before pursuing Wikipedia. We'll recommend the path that fits your current stage.",
  },
  {
    question: 'How long does the Authority Assessment take?',
    answer:
      'Most assessments are reviewed within 24 hours. You will receive practical recommendations based on your current authority and business goals.',
  },
  {
    question: 'Is the Authority Assessment really free?',
    answer:
      'Yes. The assessment is complimentary and comes with no obligation to work with us. The aim is to help you make an informed decision.',
  },
  {
    question: 'Do you only work with large companies?',
    answer:
      'No. We work with founders, startups, executives, authors, and growing businesses that are serious about building long-term authority.',
  },
];

export function Faq() {
  return (
    <Section className="surface-alt">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Frequently Asked Questions"
          title="Questions we hear often."
          description="Building authority is a considered decision. Here are the questions we hear most, answered plainly."
          className="mb-12 sm:mb-14"
        />

        <FaqAccordion items={FAQS} />
      </Container>
    </Section>
  );
}
