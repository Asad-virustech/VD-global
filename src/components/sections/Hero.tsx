import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Compass, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

const TRUST_INDICATORS = [
  'Response within 24 hours',
  'Strategic recommendations',
  'No false guarantees',
];

const ASSESSMENT_PREVIEW = [
  'Current authority & reputation review',
  'Notability & credibility analysis',
  'Practical, prioritized next steps',
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[94vh] items-center overflow-hidden bg-ink-950 text-white">
      {/* Cinematic layered background */}
      <div className="pointer-events-none absolute inset-0 -z-20 surface-night" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -z-10 left-[-12%] top-[-18%] h-[640px] w-[640px] rounded-full bg-teal-500/20 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -z-10 right-[-6%] bottom-[-24%] h-[560px] w-[560px] rounded-full bg-teal-400/15 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-ink-950"
        aria-hidden="true"
      />

      <div className="container-px relative w-full py-28 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — editorial copy */}
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-teal-300 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Authority Advisory Firm
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl text-balance"
            >
              Build <span className="text-teal-300">Authority</span> That Opens Doors.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-300"
            >
              Strategic PR, media visibility, reputation advisory, and Wikipedia readiness for
              founders, executives, authors, startups, and growing businesses that want long-term
              credibility instead of short-term attention.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button as="link" to="/assessment" size="lg" variant="primary">
                Start Your Free Authority Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/solutions" size="lg" variant="glass">
                <Compass className="h-4 w-4" />
                Explore Our Process
              </Button>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3"
            >
              {TRUST_INDICATORS.map((label) => (
                <li key={label} className="flex items-center gap-2 text-sm text-ink-300">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" />
                  {label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — floating glass authority panels */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.25 }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto"
          >
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-teal-500/15 blur-3xl"
              aria-hidden="true"
            />

            {/* Main bright glass card — assessment preview */}
            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/95 p-7 text-ink-900 shadow-2xl backdrop-blur-xl sm:p-8">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  Authority Assessment
                </span>
                <span className="rounded-full border border-teal-100 bg-teal-50 px-2.5 py-1 text-[11px] font-medium text-teal-700">
                  Complimentary
                </span>
              </div>

              <h2 className="mt-6 text-xl font-semibold text-ink-900">Where you stand today</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                A clear, honest read of the signals people check first.
              </p>

              <ul className="mt-5 space-y-3">
                {ASSESSMENT_PREVIEW.map((entry) => (
                  <li key={entry} className="flex items-start gap-3 text-sm text-ink-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {entry}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-ink-100 pt-4 text-xs text-ink-400">
                Most assessments receive a response within 24 hours.
              </div>
            </div>

            {/* Overlapping dark-glass accent panel */}
            <div className="absolute -bottom-8 -left-6 hidden w-60 rounded-2xl border border-white/15 bg-ink-900/70 p-5 shadow-xl backdrop-blur-xl sm:block">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-teal-300 ring-1 ring-inset ring-white/10">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="mt-3 text-sm font-semibold leading-snug text-white">
                Recognition, Credibility, Authority, Trust.
              </p>
              <p className="mt-1 text-xs text-ink-400">Earned — in that order.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
