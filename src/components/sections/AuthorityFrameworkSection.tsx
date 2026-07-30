import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Search, ClipboardCheck, Map, Rocket, TrendingUp } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { IconTile } from '../ui/IconTile';

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

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const tile: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

/** The tall dark "feature" tile that anchors the bento (step 01). */
function FeatureTile({ icon: Icon, title, description, index }: Step & { index: number }) {
  return (
    <motion.article
      variants={tile}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 surface-night p-8 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.06)] sm:p-9 lg:row-span-2"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-500/20 blur-[90px]"
      />
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-teal-300 ring-1 ring-inset ring-white/10">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <span className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
        Step {String(index + 1).padStart(2, '0')} · Where it begins
      </span>
      <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h3>
      <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-300 lg:mt-auto lg:pt-8">
        {description}
      </p>
    </motion.article>
  );
}

/** A big light bento card for the remaining steps. */
function StepTile({ icon: Icon, title, description, index }: Step & { index: number }) {
  return (
    <motion.article
      variants={tile}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-b from-white to-ink-50/60 p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8"
    >
      <div className="flex items-center justify-between">
        <IconTile size="md" ring hover>
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </IconTile>
        <span className="font-heading text-2xl font-bold tabular-nums text-ink-200 transition-colors duration-300 group-hover:text-teal-200">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink-900">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{description}</p>
    </motion.article>
  );
}

export function AuthorityFrameworkSection() {
  const [feature, ...rest] = STEPS;

  return (
    <Section className="surface-alt">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Methodology"
          title="The Authority Framework™"
          description="Authority isn’t built overnight. It is built through a structured process that strengthens recognition, credibility, trust, and long-term visibility."
          className="mb-14 sm:mb-16"
        />

        {/* Bento — one tall dark feature tile + a 2×2 of big light cards */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2"
          aria-label="The Authority Framework process"
        >
          <FeatureTile index={0} {...feature} />
          {rest.map((step, i) => (
            <StepTile key={step.title} index={i + 1} {...step} />
          ))}
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
