import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, CalendarClock, CheckCircle2 } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';

const TRUST_INDICATORS = [
  'Complimentary & no obligation',
  'Initial response within 24 hours',
  'Practical, honest recommendations',
];

// Illustrative snapshot rows — purely decorative, static Tailwind widths so the
// content scanner picks them up.
const SNAPSHOT = [
  { label: 'Brand Credibility', bar: 'w-4/5' },
  { label: 'Media Presence', bar: 'w-2/5' },
  { label: 'Search Visibility', bar: 'w-3/5' },
  { label: 'Wikipedia Readiness', bar: 'w-1/4' },
  { label: 'Digital Reputation', bar: 'w-3/4' },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function AssessmentHero() {
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
              <Badge tone="teal">Complimentary · No obligation</Badge>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700"
            >
              Engage
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance"
            >
              Authority Assessment
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              Understand how your business is currently perceived, identify credibility gaps,
              and discover practical opportunities to strengthen your public authority.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button as="link" to="/contact" size="lg" variant="primary">
                Start Your Free Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/contact" size="lg" variant="outline">
                <CalendarClock className="h-4 w-4" />
                Schedule a Consultation
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

          {/* Right — illustrative authority snapshot */}
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
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  VD Global
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                  Authority Snapshot
                </span>
              </div>

              <h2 className="mt-6 text-lg font-semibold text-ink-900">Where you stand today</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                A clear, honest read of the signals people check first.
              </p>

              <ul className="mt-6 space-y-4" aria-hidden="true">
                {SNAPSHOT.map((row) => (
                  <li key={row.label}>
                    <div className="flex items-center justify-between text-sm text-ink-600">
                      <span>{row.label}</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-600 ${row.bar}`}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-7 border-t border-ink-100 pt-4 text-xs leading-relaxed text-ink-400">
                Illustrative example. Your assessment reflects your own public footprint.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
