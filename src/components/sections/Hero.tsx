import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { Button } from '../ui/Button';

const TRUST_INDICATORS = [
  'Response within 24 hours',
  'Strategic recommendations',
  'No false guarantees',
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-ink-950 text-white">
      {/* Clean cinematic background — a smooth wash + subtle grain, no ribbing */}
      <div className="pointer-events-none absolute inset-0 -z-30 surface-night" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(120% 90% at 78% 8%, rgba(20,184,166,0.16) 0%, transparent 55%), radial-gradient(90% 80% at 0% 100%, rgba(13,148,136,0.10) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Light arc — a single large faint teal ring, mostly off-screen right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 -right-[30%] top-1/2 h-[1200px] w-[1200px] -translate-y-1/2 rounded-full border border-teal-300/12"
        style={{ boxShadow: 'inset 0 0 160px rgba(45,212,191,0.12)' }}
      />

      {/* Orb — a soft teal-lit sphere, upper-right */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' as const, delay: 0.2 }}
        className="pointer-events-none absolute -z-10 right-[8%] top-[14%] hidden h-52 w-52 rounded-full lg:block xl:h-60 xl:w-60"
        style={{
          background:
            'radial-gradient(circle at 34% 30%, rgba(153,246,228,0.55), rgba(13,148,136,0.28) 42%, rgba(2,6,23,0.85) 76%)',
          boxShadow: '0 0 120px 10px rgba(45,212,191,0.18)',
        }}
      >
        <motion.span
          className="absolute inset-0 rounded-full"
          animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const }}
          style={{ boxShadow: 'inset 0 0 60px rgba(94,234,212,0.28)' }}
        />
      </motion.div>

      {/* Bottom fade into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink-950"
        aria-hidden="true"
      />

      {/* Main — headline left, supporting detail right */}
      <div className="container-px relative flex flex-1 items-center pb-14 pt-44">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid w-full gap-14 lg:grid-cols-12 lg:items-end lg:gap-10"
        >
          {/* Left — status + headline */}
          <div className="lg:col-span-8">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-teal-200 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              Authority Advisory Firm
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-10 text-[3.25rem] font-bold leading-[0.98] tracking-[-0.02em] text-white sm:text-7xl lg:text-[4.75rem]"
            >
              Build <span className="text-teal-300">Authority</span>
              <br />
              That Opens Doors.
            </motion.h1>
          </div>

          {/* Right — supporting detail */}
          <motion.div variants={item} className="lg:col-span-4 lg:pb-3">
            <span aria-hidden="true" className="block h-px w-12 bg-teal-400/50" />
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-300 sm:text-lg">
              Strategic PR, media visibility, reputation advisory, and Wikipedia readiness for
              founders and businesses that want long-term credibility — not short-term attention.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border-line — CTAs on the left, trust on the right */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.55 }}
        className="container-px relative"
      >
        <div className="flex flex-col gap-6 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as="link" to="/assessment" size="md" variant="primary">
              Start Your Free Assessment
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as="link" to="/solutions" size="md" variant="glass">
              <Compass className="h-4 w-4" />
              Explore Our Process
            </Button>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-400">
            {TRUST_INDICATORS.map((label) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
