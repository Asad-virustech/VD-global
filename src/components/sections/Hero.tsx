import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { Button } from '../ui/Button';
import { AuthorityFramework } from './AuthorityFramework';

const TRUST_INDICATORS = [
  { label: 'Response within 24 hours' },
  { label: 'Strategic recommendations' },
  { label: 'No false guarantees' },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* base radial wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-teal" aria-hidden="true" />
      {/* premium grid that dissolves toward the edges */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade opacity-70" aria-hidden="true" />
      {/* layered ambient lighting for atmospheric depth */}
      <div
        className="pointer-events-none absolute -z-10 left-1/2 top-[-10%] h-[560px] w-[780px] -translate-x-1/2 rounded-full bg-teal-300/25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -z-10 right-[-6%] top-1/4 h-[440px] w-[440px] rounded-full bg-teal-200/30 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -z-10 left-[-8%] bottom-[-4%] h-[380px] w-[380px] rounded-full bg-teal-100/40 blur-[120px]"
        aria-hidden="true"
      />
      {/* soft fade that carries the eye into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink-50/60"
        aria-hidden="true"
      />

      <div className="container-px flex min-h-[92vh] flex-col items-center justify-center py-20 lg:py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <motion.p
              variants={item}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700"
            >
              Authority Advisory Firm
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance"
            >
              Build Authority That Opens Doors.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              Strategic PR, media visibility, reputation advisory, and Wikipedia readiness
              for founders, executives, authors, startups, and growing businesses that want
              long-term credibility instead of short-term attention.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button as="link" to="/assessment" size="lg" variant="primary">
                Start Your Free Authority Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/solutions" size="lg" variant="outline">
                <Compass className="h-4 w-4" />
                Explore Our Process
              </Button>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2.5"
            >
              {TRUST_INDICATORS.map((indicator) => (
                <li
                  key={indicator.label}
                  className="flex items-center gap-2 text-sm text-ink-600"
                >
                  <CheckCircle2 className="h-4 w-4 text-teal-600" />
                  {indicator.label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <AuthorityFramework />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
