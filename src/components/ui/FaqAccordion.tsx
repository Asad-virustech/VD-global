import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Plus } from 'lucide-react';

export type FaqItem = {
  question: string;
  answer: string;
};

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItem & { isOpen: boolean; onToggle: () => void }) {
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

type FaqAccordionProps = {
  items: FaqItem[];
  defaultOpen?: number | null;
  className?: string;
};

/**
 * Reusable FAQ accordion. Single-open behaviour, matching the homepage FAQ styling.
 */
export function FaqAccordion({ items, defaultOpen = 0, className = '' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <motion.div
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={`mx-auto max-w-[850px] space-y-4 ${className}`}
    >
      {items.map((faq, i) => (
        <FaqRow
          key={faq.question}
          {...faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </motion.div>
  );
}
