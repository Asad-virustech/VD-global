import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
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
      'Absolutely. Many businesses benefit more from strategic PR, media visibility, guest publications, or credibility building before pursuing Wikipedia. We will recommend the path that best fits your current stage.',
  },
  {
    question: 'How long does the Authority Assessment take?',
    answer:
      'Most assessments are reviewed within 24 hours. You will receive practical recommendations based on your current authority and business goals.',
  },
  {
    question: 'Is the Authority Assessment really free?',
    answer:
      'Yes. Our assessment is completely complimentary and comes with no obligation to work with us. Our goal is to help businesses make informed decisions.',
  },
  {
    question: 'Do you only work with large companies?',
    answer:
      'No. We work with founders, startups, executives, authors, and growing businesses that are serious about building long-term authority.',
  },
];

const BOTTOM_NOTE = {
  title: 'Still have questions?',
  body: 'Our team is happy to help you understand your options before you make any decision.',
  button: 'Start Your Free Authority Assessment',
};

export function Faq() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Frequently Asked Questions"
          title="Questions We Often Receive."
          description="Building authority is an important investment. Here are answers to some of the questions we hear most frequently."
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
          <h3 className="text-xl font-semibold text-ink-900 sm:text-2xl">{BOTTOM_NOTE.title}</h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500 sm:text-base">
            {BOTTOM_NOTE.body}
          </p>
          <div className="mt-7">
            <Button as="link" to="/assessment" size="lg" variant="primary">
              {BOTTOM_NOTE.button}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
