import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Compass, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

const TRUST_INDICATORS = [
  'Response within 24 hours',
  'Strategic recommendations',
  'No false guarantees',
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

/** The architectural aperture — nested frames receding to a lit teal core. */
function AuthorityPortal() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' as const, delay: 0.25 }}
      className="relative mx-auto aspect-square w-full max-w-md lg:ml-auto lg:mr-0"
    >
      {/* Ambient bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-teal-500/20 blur-[120px]"
      />

      {/* Concentric aperture — frames receding toward the light */}
      <div className="absolute inset-0 rounded-[2.75rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm" />
      <div className="absolute inset-[8%] rounded-[2.4rem] border border-white/[0.09] bg-white/[0.015]" />
      <div className="absolute inset-[18%] rounded-[2rem] border border-white/[0.08]" />
      <div className="absolute inset-[29%] rounded-[1.6rem] border border-teal-300/25" />
      <div className="absolute inset-[40%] rounded-[1.3rem] border border-teal-300/40" />

      {/* Glowing core — the light beyond the door */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-[46%] rounded-full blur-md"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(94,234,212,0.75) 38%, rgba(45,212,191,0.25) 68%, transparent 78%)',
        }}
        animate={reduce ? undefined : { opacity: [0.8, 1, 0.8], scale: [1, 1.12, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' as const }}
      />

      {/* Vertical light shaft through the aperture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[6%] bottom-[6%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-teal-300/30 to-transparent"
      />

      {/* Floating glass chips */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.75 }}
        className="absolute -left-4 top-8 hidden items-center gap-2.5 rounded-xl border border-white/15 bg-ink-900/70 px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:flex"
      >
        <span className="h-2 w-2 rounded-full bg-teal-400" />
        <span className="text-sm font-semibold text-white">Authority Assessment</span>
        <span className="rounded-full border border-teal-400/30 bg-teal-400/10 px-2 py-0.5 text-[10px] font-medium text-teal-200">
          Free
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.9 }}
        className="absolute -right-3 bottom-10 hidden items-center gap-2.5 rounded-xl border border-white/15 bg-ink-900/70 px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:flex"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-teal-300 ring-1 ring-inset ring-white/10">
          <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <span className="text-sm font-medium text-ink-200">Reply within 24 hours</span>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[94vh] flex-col justify-center overflow-hidden bg-ink-950 text-white">
      {/* Cinematic layered background */}
      <div className="pointer-events-none absolute inset-0 -z-20 surface-night" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -z-10 left-[-12%] top-[-18%] h-[640px] w-[640px] rounded-full bg-teal-500/20 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -z-10 right-[6%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-teal-400/12 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-ink-950"
        aria-hidden="true"
      />

      <div className="container-px relative w-full py-24 lg:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
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
              className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl text-balance"
            >
              Build <span className="text-teal-300">Authority</span> That Opens Doors.
            </motion.h1>

            <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-300">
              Strategic PR, media visibility, reputation advisory, and Wikipedia readiness for
              founders, executives, authors, startups, and growing businesses that want long-term
              credibility instead of short-term attention.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="link" to="/assessment" size="lg" variant="primary">
                Start Your Free Authority Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/solutions" size="lg" variant="glass">
                <Compass className="h-4 w-4" />
                Explore Our Process
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — architectural authority portal */}
          <AuthorityPortal />
        </div>

        {/* Full-width trust rail */}
        <motion.ul
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.55 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 sm:mt-20"
        >
          {TRUST_INDICATORS.map((label) => (
            <li key={label} className="flex items-center gap-2.5 text-sm text-ink-300">
              <CheckCircle2 className="h-4 w-4 text-teal-400" strokeWidth={1.75} />
              {label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
