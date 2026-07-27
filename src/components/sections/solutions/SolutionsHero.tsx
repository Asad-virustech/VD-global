import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../../ui/Button';

const TRUST_INDICATORS = [
  'Advisory-first, never packages',
  'Strategy before execution',
  'Ethical, honest recommendations',
];

// The page's own table of contents — a meaningful "dossier" panel that replaces
// the removed node/ecosystem wheel.
const CAPABILITY_INDEX = [
  'Authority Strategy',
  'Strategic PR',
  'Wikipedia Advisory',
  'Executive Positioning',
  'Digital Reputation',
  'Thought Leadership',
  'Authority Growth',
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function SolutionsHero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink-950 text-white">
      {/* Cinematic layered background — matches the homepage hero language */}
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
              Strategic Authority Advisory
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl text-balance"
            >
              Solutions Built Around <span className="text-teal-300">Authority</span>.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-300"
            >
              Every business has different authority challenges. Our role is to identify the right
              strategy, prioritize the right opportunities, and help you build long-term credibility
              through ethical advisory and strategic execution.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button as="link" to="/assessment" size="lg" variant="primary">
                Start Your Free Authority Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/contact" size="lg" variant="glass">
                <MessageSquare className="h-4 w-4" />
                Talk With Our Team
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

          {/* Right — the "Capabilities Index" dossier panel (replaces the node wheel) */}
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

            {/* Main bright glass card — the page's table of contents */}
            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/95 p-7 text-ink-900 shadow-2xl backdrop-blur-xl sm:p-8">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                  Capabilities Index
                </span>
                <span className="text-[11px] font-medium text-ink-400">Seven, one system</span>
              </div>

              <h2 className="mt-5 text-xl font-semibold text-ink-900">What we advise on</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                One connected ecosystem — we focus where it moves your credibility most.
              </p>

              <ul className="mt-6 divide-y divide-ink-100">
                {CAPABILITY_INDEX.map((label, i) => (
                  <li key={label} className="flex items-center gap-3 py-2.5">
                    <span className="text-[11px] font-semibold tabular-nums tracking-[0.1em] text-teal-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium text-ink-800">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Overlapping dark-glass accent panel */}
            <div className="absolute -bottom-8 -left-6 hidden w-60 rounded-2xl border border-white/15 bg-ink-900/70 p-5 shadow-xl backdrop-blur-xl sm:block">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-teal-300 ring-1 ring-inset ring-white/10">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="mt-3 text-sm font-semibold leading-snug text-white">
                Advisory-first. Never packages.
              </p>
              <p className="mt-1 text-xs text-ink-400">The strategy follows the findings.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
