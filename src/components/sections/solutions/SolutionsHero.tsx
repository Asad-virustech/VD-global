import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { EcosystemGraphic } from './EcosystemGraphic';

const TRUST_INDICATORS = [
  'Advisory-first, never packages',
  'Strategy before execution',
  'Ethical, honest recommendations',
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function SolutionsHero() {
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
              <Badge tone="teal">Strategic Authority Advisory</Badge>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700"
            >
              Solutions
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance"
            >
              Solutions Built Around Authority.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              Every business has different authority challenges. Our role is to identify the right
              strategy, prioritize the right opportunities, and help you build long-term credibility
              through ethical advisory and strategic execution.
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

          {/* Right — interconnected authority ecosystem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <EcosystemGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
