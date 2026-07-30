import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { AuthorityRings } from './AuthorityRings';

/** The authority layers, foundation → compounding outcome, for the ring model. */
const LAYERS = ['Recognition', 'Credibility', 'Authority', 'Trust', 'Long-Term Growth'];

export function AuthorityGap() {
  return (
    <Section className="surface-base">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700"
            >
              The Authority Gap
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] text-balance"
            >
              Great Companies Stay Invisible Every Day.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
              className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              <p>
                Many businesses deliver exceptional work, yet remain overlooked because their
                reputation doesn’t reflect the quality of what they actually do.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Customers trust what they can verify.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Investors research before meetings.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Journalists look for credible sources.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Partners evaluate your public reputation before they ever contact you.
                </li>
              </ul>
              <p className="pt-2 text-ink-700">
                Authority isn’t about ego. It’s about reducing uncertainty and increasing trust.
              </p>
            </motion.div>
          </div>

          <AuthorityRings layers={LAYERS} />
        </div>
      </Container>
    </Section>
  );
}
