import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';

const PARAGRAPHS = [
  'Predefined packages are convenient for the firm selling them, rarely for the business buying them. They assume every company needs the same things, in the same order. Most don’t.',
  'We start from your actual position instead. The Authority Assessment shows us where you stand across credibility, media, search, and reputation, and what would genuinely help most next.',
  'From there we recommend a focused path: sometimes a single area, sometimes a sequence, and occasionally the advice to wait. What we won’t do is sell you more than the moment calls for.',
];

export function WhyNoPackages() {
  return (
    <Section bleed className="relative overflow-hidden surface-night text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-teal-500/15 blur-[130px]"
      />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          {/* Pull-quote */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400"
            >
              Our Approach
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.05 }}
              className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
            >
              We recommend.
              <br />
              We don&rsquo;t <span className="text-teal-300">upsell</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
              className="mt-7 max-w-md text-base leading-relaxed text-ink-300 sm:text-lg"
            >
              Recommendations start with your assessment, not a price list. The strategy follows the
              findings, not the other way around.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.18 }}
              className="mt-9"
            >
              <Button as="link" to="/assessment" size="lg" variant="primary">
                Start your free authority assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Reasoning — numbered editorial list */}
          <motion.ol
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
            className="space-y-8 lg:border-l lg:border-white/10 lg:pl-12"
          >
            {PARAGRAPHS.map((paragraph, i) => (
              <li key={paragraph} className="flex gap-5">
                <span className="font-heading text-lg font-bold tabular-nums text-teal-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="flex-1 text-base leading-relaxed text-ink-300">{paragraph}</p>
              </li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </Section>
  );
}
