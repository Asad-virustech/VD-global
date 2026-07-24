import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2, Quote } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';

const TRUST_INDICATORS = [
  'Advisory over sales',
  'Long-term over quick wins',
  'Honesty over hype',
];

const PILLARS = ['Recognition', 'Credibility', 'Authority', 'Trust'];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function AboutHero() {
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
              <Badge tone="teal">About VD Global</Badge>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700"
            >
              The Firm
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance"
            >
              Building Authority Begins With Trust.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              VD Global was founded on a simple belief: authority should be earned through
              credibility, expertise and long-term reputation — not manufactured through marketing.
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

          {/* Right — editorial statement */}
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
            <figure className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-8 shadow-card-hover sm:p-10">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal-400 to-teal-600"
              />
              <Quote className="h-9 w-9 text-teal-500" strokeWidth={1.5} aria-hidden="true" />
              <blockquote className="mt-6 text-2xl font-bold leading-snug tracking-tight text-ink-900 sm:text-[1.75rem] text-balance">
                Recognition, credibility, authority and trust.{' '}
                <span className="text-teal-700">Earned — in that order.</span>
              </blockquote>
              <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                The VD Global principle
              </figcaption>
              <div className="mt-8 flex flex-wrap gap-2 border-t border-ink-100 pt-6">
                {PILLARS.map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
