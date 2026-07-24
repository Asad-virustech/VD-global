import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';

const PARAGRAPHS = [
  'Predefined packages are convenient for the firm selling them — rarely for the business buying them. They assume every company needs the same things, in the same order. Most don’t.',
  'We start from your actual position instead. The Authority Assessment shows us where you stand across credibility, media, search and reputation, and what would genuinely move the needle next.',
  'From there we recommend a focused path — sometimes a single area, sometimes a sequence, and occasionally the advice to wait. What we won’t do is sell you more than the moment calls for.',
];

export function WhyNoPackages() {
  return (
    <Section className="bg-white">
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
              Our Approach
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] text-balance"
            >
              We Recommend. We Don&rsquo;t Upsell.
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

          {/* Trust-reinforcing callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-ink-100 bg-ink-50/60 p-8 sm:p-10 lg:self-center"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal-400 to-teal-600"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-100/40 blur-[90px]"
            />
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-teal-700 ring-1 ring-inset ring-teal-100">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-xl font-semibold leading-snug text-ink-900 sm:text-2xl text-balance">
                Recommendations start with your assessment — not a price list.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                Every engagement begins by understanding where you stand. The strategy follows the
                findings, not the other way around.
              </p>
              <div className="mt-7">
                <Button as="link" to="/assessment" size="lg" variant="primary">
                  Start Your Free Authority Assessment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
