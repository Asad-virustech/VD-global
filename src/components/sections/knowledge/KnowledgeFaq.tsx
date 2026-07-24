import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { FaqAccordion } from '../../ui/FaqAccordion';
import type { FaqItem } from '../../ui/FaqAccordion';

const FAQS: FaqItem[] = [
  {
    question: 'How often are new insights published?',
    answer:
      'We publish on a considered cadence rather than a fixed schedule. The Knowledge Hub is a curated library, not a news feed — new pieces go up when they add something genuinely useful, not to hit a quota.',
  },
  {
    question: 'Are the resources free?',
    answer:
      'Yes. Everything in the Knowledge Hub is free to read and use. We believe better-informed businesses make better decisions, whether or not they ever become clients.',
  },
  {
    question: 'Who writes the content?',
    answer:
      'It’s written by the VD Global advisory team — the same people who do the work — and grounded in real engagements rather than generic marketing theory.',
  },
  {
    question: 'Can I suggest topics?',
    answer:
      'Absolutely. If there’s a question you keep running into, we’d like to hear it. Reader questions frequently shape what we write next.',
  },
  {
    question: 'Do you provide downloadable guides?',
    answer:
      'Yes. Alongside articles, we publish guides, checklists, frameworks and templates you can download and apply directly to your own situation.',
  },
  {
    question: 'What industries do you cover?',
    answer:
      'The principles of authority and reputation apply broadly, so our writing spans founders, executives, technology companies, professional services, authors and growing brands.',
  },
];

export function KnowledgeFaq() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Frequently Asked Questions"
          title="About the Knowledge Hub."
          description="How the library works, who writes it, and how to get the most from it. If your question isn’t here, we’re glad to answer it directly."
          className="mb-12 sm:mb-14"
        />

        <FaqAccordion items={FAQS} />
      </Container>
    </Section>
  );
}
