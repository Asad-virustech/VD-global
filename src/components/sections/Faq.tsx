import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
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

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function FaqRow({ question, answer, isOpen, onToggle }: Faq & { isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div variants={item} className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
      >
        <span className="text-base font-semibold text-ink-900 sm:text-lg">{question}</span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-100 text-teal-700 transition-colors duration-300 ${
            isOpen ? 'bg-teal-50 border-teal-200' : 'bg-white'
          }`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' as const }}
          >
            <Plus className="h-4 w-4" strokeWidth={2} />
          </motion.span>
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' as const }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-sm leading-relaxed text-ink-500 sm:px-7 sm:pb-7 sm:text-base">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-[850px] space-y-4"
        >
          {FAQS.map((faq, i) => (
            <FaqRow
              key={faq.question}
              {...faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Bottom note */}
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
