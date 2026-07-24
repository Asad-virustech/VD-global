import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, BookOpen, CheckCircle2, MessagesSquare, Clock } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { IconTile } from '../../ui/IconTile';

const TRUST_INDICATORS = ['Advisors, not salespeople', 'No obligation', 'Reply within 24 hours'];

const AGENDA = [
  'Understand your goals',
  'Review where you stand today',
  'Recommend the right next step',
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function ContactHero() {
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
              <Badge tone="teal">Contact</Badge>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700"
            >
              Let&rsquo;s Talk
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance"
            >
              Let&rsquo;s Start the Conversation.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              Every successful authority strategy begins with understanding your business, your
              goals, and the reputation you want to build.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button as="a" href="#request" size="lg" variant="primary">
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="link" to="/assessment" size="lg" variant="outline">
                <BookOpen className="h-4 w-4" />
                Start Your Free Authority Assessment
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

          {/* Right — editorial strategy-call agenda */}
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
                <span className="inline-flex items-center gap-2.5">
                  <IconTile size="sm">
                    <MessagesSquare className="h-5 w-5" strokeWidth={1.75} />
                  </IconTile>
                  <span className="text-sm font-semibold text-ink-900">Your Strategy Call</span>
                </span>
                <span className="rounded-full border border-teal-100 bg-teal-50 px-2.5 py-1 text-[11px] font-medium text-teal-700">
                  Complimentary
                </span>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-ink-500">
                A focused conversation — here&rsquo;s what we&rsquo;ll cover:
              </p>

              <ul className="mt-4 space-y-3">
                {AGENDA.map((entry) => (
                  <li key={entry} className="flex items-start gap-3 text-sm text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" strokeWidth={2} />
                    {entry}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center justify-between border-t border-ink-100 pt-4 text-xs text-ink-400">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                  About 30 minutes
                </span>
                <span>No pitch, no obligation.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
