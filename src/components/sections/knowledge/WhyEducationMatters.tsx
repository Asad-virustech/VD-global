import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';

const POINTS = [
  {
    term: 'Understanding first',
    note: 'A decision you understand is one you can stand behind later.',
  },
  {
    term: 'Strategy over tactics',
    note: 'Knowing why comes before knowing what — and prevents expensive detours.',
  },
  {
    term: 'Durable results',
    note: 'Informed choices compound; borrowed shortcuts rarely survive contact with scrutiny.',
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function WhyEducationMatters() {
  return (
    <Section className="relative overflow-hidden surface-night-spot">
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' as const }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400"
          >
            Why Education Matters
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] text-balance"
          >
            Education Comes Before Execution.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg text-balance"
          >
            The businesses that build the strongest authority are almost always the ones that
            understand it first. Not because knowledge replaces execution — but because it makes
            execution deliberate. We publish because informed partners make better decisions, and
            better decisions build authority that lasts.
          </motion.p>
        </div>

        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mt-12 grid max-w-4xl gap-y-8 border-t border-white/10 pt-10 sm:mt-14 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-white/10"
        >
          {POINTS.map((point) => (
            <motion.li key={point.term} variants={item} className="px-0 text-center sm:px-8">
              <p className="text-base font-semibold text-white">{point.term}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{point.note}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}
