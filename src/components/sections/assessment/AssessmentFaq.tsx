import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { Button } from '../../ui/Button';
import { FaqAccordion } from '../../ui/FaqAccordion';
import type { FaqItem } from '../../ui/FaqAccordion';

const FAQS: FaqItem[] = [
  {
    question: 'What exactly is an Authority Assessment?',
    answer:
      'It is a structured review of how your business is currently perceived across the signals people check — search, media, reputation, positioning, and more — along with practical recommendations. It is educational, not a sales pitch.',
  },
  {
    question: 'Is the assessment really free?',
    answer:
      "Yes. It is complimentary and carries no obligation. Our aim is to help you make an informed decision, whether or not you ever choose to work with us.",
  },
  {
    question: 'How long does it take?',
    answer:
      'Most assessments receive an initial response within one business day. A fuller review depends on the complexity of your public footprint and the goals you share with us.',
  },
  {
    question: 'What do I need to provide?',
    answer:
      'Usually just your name or company and any relevant links. The more context you share about your goals, the more specific and useful the recommendations become.',
  },
  {
    question: "Will you tell me if I'm not ready for something?",
    answer:
      "Often, yes. If a strategy like Wikipedia or PR isn't the right next step, we'll explain why and what to strengthen first. Recommending the wrong thing would only cost you time and trust.",
  },
  {
    question: 'Does an assessment guarantee media coverage or a Wikipedia page?',
    answer:
      'No. No one can ethically guarantee editorial or community outcomes. The assessment clarifies your current position and the realistic paths available to you.',
  },
  {
    question: 'Who is the assessment for?',
    answer:
      'Founders, executives, authors, startups, and growing businesses that want durable credibility rather than short-term visibility.',
  },
  {
    question: 'What happens after the assessment?',
    answer:
      "You receive clear recommendations. If it makes sense to work together, we'll outline how. If not, you still leave with a plan you can act on independently.",
  },
];

export function AssessmentFaq() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Frequently Asked Questions"
          title="Questions About the Assessment."
          description="A few things people often want to understand before they begin. If your question isn't here, we're happy to answer it directly."
          className="mb-12 sm:mb-14"
        />

        <FaqAccordion items={FAQS} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.1 }}
          className="mt-14 flex flex-col items-center text-center sm:mt-16"
        >
          <h3 className="text-xl font-semibold text-ink-900 sm:text-2xl">Still have questions?</h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500 sm:text-base">
            We&rsquo;re happy to help you understand your options before you make any decision.
          </p>
          <div className="mt-7">
            <Button as="link" to="/contact" size="lg" variant="primary">
              Start Your Free Assessment
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
