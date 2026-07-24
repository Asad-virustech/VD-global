import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';

const TRUST_INDICATORS = [
  'Strategy over showcase',
  'Confidential by default',
  'No inflated numbers',
];

const ARC = [
  { step: 'Recognition', note: 'People discover you' },
  { step: 'Credibility', note: 'People verify you' },
  { step: 'Authority', note: 'People rely on you' },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function CaseStudiesHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink-100 bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-teal" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -z-10 left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-teal-200/30 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -z-10 right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-teal-100/40 blur-[100px]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40" aria-hidden="true" />

      <div className="container-px py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
            <motion.div variants={item}>
              <Badge tone="teal">Case Studies</Badge>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700"
            >
              How We Think
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance"
            >
              Authority Stories That Matter.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              Explore real-world authority challenges, strategic thinking, and the approaches used
              to strengthen credibility, visibility, and long-term reputation.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button as="link" to="/assessment" size="lg" variant="primary">
                Start Your Free Authority Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/contact" size="lg" variant="outline">
                <MessageSquare className="h-4 w-4" />
                Talk With Our Team
              </Button>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2.5"
            >
              {TRUST_INDICATORS.map((label) => (
                <li key={label} className="flex items-center gap-2 text-sm text-ink-600">
                  <CheckCircle2 className="h-4 w-4 text-teal-600" />
                  {label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — editorial "authority arc" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const, delay: 0.3 }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-teal-200/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 shadow-card-hover sm:p-8">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600"
              />

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-ink-900">The Authority Arc</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                  Earned Over Time
                </span>
              </div>

              <ol className="relative mt-7 space-y-5">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-5 left-5 top-5 w-px bg-gradient-to-b from-teal-200 via-teal-300/70 to-teal-500"
                />
                {ARC.map((stage, i) => (
                  <li key={stage.step} className="relative flex items-center gap-4">
                    <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-700 ring-1 ring-inset ring-teal-100">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-ink-900">{stage.step}</p>
                      <p className="text-sm text-ink-400">{stage.note}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
