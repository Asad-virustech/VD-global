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
    question: 'Do I need every service?',
    answer:
      'No. The ecosystem shows how the pieces connect, but almost no business needs all of them at once. We recommend the areas that matter most for your goals and stage, and leave the rest for later — or not at all.',
  },
  {
    question: 'How do you recommend the right solution?',
    answer:
      'We start with the Authority Assessment. It shows where you stand across credibility, media, search and reputation, and that evidence — not a sales target — determines what we recommend.',
  },
  {
    question: 'Can I begin with one area?',
    answer:
      'Yes, and many businesses do. Focusing on a single high-impact area is often the strongest way to begin. As it takes hold, we can build outward from there.',
  },
  {
    question: 'How long does authority building take?',
    answer:
      'Authority compounds rather than spikes. Some signals improve within weeks; durable recognition typically develops over months. We set realistic expectations up front rather than promising overnight results.',
  },
  {
    question: 'Is Wikipedia always recommended?',
    answer:
      'No. Wikipedia depends on genuine notability and reliable sources. If you’re not ready, we’ll say so and focus on what strengthens your case first, instead of pursuing a page that won’t hold.',
  },
  {
    question: 'Can strategies evolve over time?',
    answer:
      'They should. As your reputation, goals and market change, the right next step changes too. We revisit the strategy as you grow rather than locking you into a fixed plan.',
  },
  {
    question: 'Is this a pricing or packages page?',
    answer:
      'No. We don’t sell predefined packages. Recommendations are tailored to your assessment, so the scope reflects what your situation actually calls for.',
  },
];

export function SolutionsFaq() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Frequently Asked Questions"
          title="Questions About Our Solutions."
          description="How we advise, where to begin, and how strategies evolve. If something isn’t covered here, we’re glad to talk it through."
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
          <h3 className="text-xl font-semibold text-ink-900 sm:text-2xl">
            Not sure where to start?
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500 sm:text-base">
            The assessment is the simplest first step. It costs nothing and comes with no
            obligation.
          </p>
          <div className="mt-7">
            <Button as="link" to="/assessment" size="lg" variant="primary">
              Start Your Free Authority Assessment
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
