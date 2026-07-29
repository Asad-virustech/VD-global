import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Search, ClipboardCheck, Map, Rocket, TrendingUp } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    icon: Search,
    title: 'Assess',
    description:
      'Understand your current reputation, digital presence, existing media coverage, and authority level before recommending any service.',
  },
  {
    icon: ClipboardCheck,
    title: 'Evaluate',
    description:
      'Review your notability, credibility signals, online footprint, and available opportunities to determine the strongest path forward.',
  },
  {
    icon: Map,
    title: 'Recommend',
    description:
      'Create a strategic authority roadmap based on your goals, business stage, reputation, and budget.',
  },
  {
    icon: Rocket,
    title: 'Execute',
    description:
      'Implement carefully selected authority-building initiatives using ethical PR, reputation strategies, and media opportunities.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description:
      'Continue strengthening authority over time through consistent credibility, strategic visibility, and long-term reputation management.',
  },
];

const CALLOUT = {
  title: 'Every business follows a different path.',
  body: 'Some businesses are ready for strategic PR. Some are preparing for Wikipedia. Others simply need stronger credibility before taking the next step. Our responsibility isn’t to sell every service. It’s to recommend the right next step for your business.',
};

const track: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const node: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function StepNode({ icon: Icon, title, description, index }: Step & { index: number }) {
  return (
    <motion.div variants={node} className="relative flex gap-5 sm:block sm:text-center">
      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-teal-100 bg-white text-teal-700 shadow-card ring-4 ring-white sm:mx-auto">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="sm:mt-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
          Step {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-ink-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500 sm:mx-auto sm:max-w-[15rem]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function AuthorityFrameworkSection() {
  return (
    <Section className="surface-alt bg-aurora">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Methodology"
          title="The Authority Framework™"
          description="Authority isn’t built overnight. It is built through a structured process that strengthens recognition, credibility, trust, and long-term visibility."
          className="mb-14 sm:mb-16"
        />

        {/* Connected process ribbon — 5 nodes on one ascending line, not cards */}
        <motion.div
          variants={track}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
          aria-label="The Authority Framework process"
        >
          {/* Horizontal spine (desktop) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-7 right-7 top-7 hidden h-px bg-gradient-to-r from-teal-200 via-teal-400 to-teal-600 sm:block"
          />
          {/* Vertical spine (mobile) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-7 left-7 top-7 w-px bg-gradient-to-b from-teal-200 via-teal-400 to-teal-600 sm:hidden"
          />
          <div className="grid gap-10 sm:grid-cols-5 sm:gap-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <StepNode key={step.title} index={i} {...step} />
            ))}
          </div>
        </motion.div>

        {/* Callout — editorial pull-quote, no card chrome */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
          className="mx-auto mt-16 max-w-3xl border-l-2 border-teal-400 pl-6 sm:mt-20 sm:pl-8"
        >
          <h3 className="text-2xl font-semibold leading-snug text-ink-900 sm:text-[1.75rem] text-balance">
            {CALLOUT.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{CALLOUT.body}</p>
        </motion.div>
      </Container>
    </Section>
  );
}
