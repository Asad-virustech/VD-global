import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';

const FACETS = [
  { term: 'Credibility', note: 'proof that stands up to scrutiny' },
  { term: 'Trust', note: 'earned quietly, over time' },
  { term: 'Consistency', note: 'the same signal, everywhere' },
  { term: 'Reputation', note: 'what remains when you’re not in the room' },
  { term: 'Patience', note: 'the discipline to let it compound' },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function AboutPhilosophy() {
  return (
    <Section className="relative overflow-hidden bg-ink-900">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[110px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
      />
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' as const }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400"
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[3rem] text-balance"
          >
            Authority Is Built.
            <br />
            <span className="text-teal-300">Not Bought.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg text-balance"
          >
            You cannot purchase a reputation. You can only earn one — through work that holds up,
            recognition that reflects it, and the patience to let both accumulate. Everything we
            recommend serves that longer arc.
          </motion.p>
        </div>

        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mt-12 grid max-w-4xl gap-x-8 gap-y-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FACETS.map((facet) => (
            <motion.li
              key={facet.term}
              variants={item}
              className="flex items-baseline gap-3 border-t border-white/10 pt-4"
            >
              <span className="text-base font-semibold text-white">{facet.term}</span>
              <span className="text-sm leading-relaxed text-ink-400">— {facet.note}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}
