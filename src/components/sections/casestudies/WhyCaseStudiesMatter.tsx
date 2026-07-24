import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';

const PARAGRAPHS = [
  'Every business arrives with a different authority challenge. A trusted product that no one can find. Deep expertise the public can’t verify. Genuine innovation lost in a noisy category.',
  'The temptation is to reach for a tactic — a press release, a profile, a campaign. But the same tactic produces very different results depending on where a business actually stands.',
  'So we don’t start with solutions. We start by understanding the situation, then recommend a strategy that fits it. These stories are less about outcomes to admire and more about how that thinking works in practice.',
];

const POINTS = [
  { term: 'Situation first', note: 'We understand before we recommend.' },
  { term: 'Strategy, not templates', note: 'The approach is shaped by context.' },
  { term: 'Education over promotion', note: 'The point is how we think, not who we impress.' },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function WhyCaseStudiesMatter() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700"
            >
              Why Case Studies Matter
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] text-balance"
            >
              The Same Tactic, Very Different Outcomes.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
              className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              {PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>
          </div>

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-4 lg:self-center"
          >
            {POINTS.map((point) => (
              <motion.li
                key={point.term}
                variants={item}
                className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card sm:p-7"
              >
                <p className="text-base font-semibold text-ink-900">{point.term}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 sm:text-base">{point.note}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}
