import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { FaqAccordion } from '../../ui/FaqAccordion';
import type { FaqItem } from '../../ui/FaqAccordion';

const FAQS: FaqItem[] = [
  {
    question: 'How do engagements begin?',
    answer:
      'Almost always with the Authority Assessment. It’s a complimentary review of where you stand today, and it gives us the evidence to recommend a genuinely useful next step — with no obligation to continue.',
  },
  {
    question: 'Do you work internationally?',
    answer:
      'Yes. We’re a remote, globally oriented firm and work with founders and businesses across regions. Authority and reputation translate across borders, and so does our advisory.',
  },
  {
    question: 'Can you help early-stage companies?',
    answer:
      'Often, yes — though the right first step for an early-stage company is usually different from an established one. We’ll be candid about what’s worth building now and what’s better to revisit later.',
  },
  {
    question: 'What if I’m not ready?',
    answer:
      '“Not yet” is a legitimate recommendation, and we make it when it’s true. We’ll explain what to strengthen first so that any later effort has a real chance of holding.',
  },
  {
    question: 'How long do advisory relationships last?',
    answer:
      'It varies. Some engagements are a single focused piece of advice; others become long-term relationships as reputation compounds. We don’t lock you into a fixed term — the relationship lasts as long as it’s useful.',
  },
  {
    question: 'Do you guarantee outcomes?',
    answer:
      'No. Media coverage, Wikipedia, and public recognition depend on independent parties, and no one can ethically guarantee them. What we guarantee is honest assessment, sound strategy, and ethical execution.',
  },
];

export function AboutFaq() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Frequently Asked Questions"
          title="A Few Things Worth Knowing."
          description="How we work, who we work with, and what we will — and won’t — promise. If your question isn’t here, we’re glad to answer it directly."
          className="mb-12 sm:mb-14"
        />

        <FaqAccordion items={FAQS} />
      </Container>
    </Section>
  );
}
