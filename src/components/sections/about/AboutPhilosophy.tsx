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
    <Section className="relative overflow-hidden surface-night">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-teal-400/40 to-transparent"
      />
      <Container>
        <div className="relative grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
          <div>
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
              className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] text-balance"
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
              className="mt-6 max-w-lg text-base leading-relaxed text-ink-300 sm:text-lg"
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
            className="space-y-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
          >
            {FACETS.map((facet) => (
              <motion.li
                key={facet.term}
                variants={item}
                className="flex items-baseline justify-between gap-4 px-5 py-4 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-white/10"
              >
                <span className="text-base font-semibold text-white">{facet.term}</span>
                <span className="text-right text-sm leading-relaxed text-ink-400">{facet.note}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}
