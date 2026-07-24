import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';

export function OurPromise() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-teal-200/70 bg-white p-8 shadow-card sm:p-12 lg:p-16"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-teal-400 to-teal-600"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-100/50 blur-[90px]"
          />

          <div className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100">
              <Handshake className="h-5 w-5" strokeWidth={1.75} />
            </span>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              Our Promise
            </p>

            <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-ink-900 sm:text-3xl lg:text-[2.5rem] lg:leading-[1.15] text-balance">
              If we believe something isn&rsquo;t in your best interest, we&rsquo;ll tell you —
              <span className="text-teal-700"> even if it means recommending you wait.</span>
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
              We would rather earn your trust with an honest answer than win a project with a
              convenient one. That standard is the whole point of an advisory firm — and it is the
              reason clients come back.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
