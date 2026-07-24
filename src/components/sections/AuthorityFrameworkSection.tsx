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
  body: 'Some businesses are ready for strategic PR. Some are preparing for Wikipedia. Others simply need stronger credibility before taking the next step. Our responsibility isn\u2019t to sell every service. It\u2019s to recommend the right next step for your business.',
};

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const lineVariant: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

function StepBody({ index, title, description }: { index: number; title: string; description: string }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{description}</p>
    </>
  );
}

function StepIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <IconTile size="md" ring>
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </IconTile>
  );
}

export function AuthorityFrameworkSection() {
  return (
    <Section className="bg-ink-50/40 bg-aurora">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Methodology"
          title="The Authority Framework\u2122"
          description="Authority isn\u2019t built overnight. It is built through a structured process that strengthens recognition, credibility, trust, and long-term visibility."
          className="mb-12 sm:mb-14"
        />

        {/* Desktop / tablet: horizontal process with connectors */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="hidden md:grid md:grid-cols-5 md:gap-4 lg:gap-6"
          aria-label="The Authority Framework process"
        >
          {STEPS.map((step, i) => (
            <motion.article
              key={step.title}
              variants={cardVariant}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <StepIcon icon={step.icon} />
              <StepBody index={i} title={step.title} description={step.description} />

              {/* Connector to next card */}
              {i < STEPS.length - 1 && (
                <motion.span
                  variants={lineVariant}
                  aria-hidden="true"
                  className="absolute left-full top-12 h-px w-4 origin-left bg-gradient-to-r from-teal-300/70 to-teal-200/40 lg:w-6"
                  style={{ marginLeft: 0 }}
                />
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile: vertical timeline */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative space-y-4 md:hidden"
          aria-label="The Authority Framework process"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-teal-300/70 via-teal-200/50 to-teal-100/30"
          />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              variants={cardVariant}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="relative flex gap-4 pl-0"
            >
              <div className="z-10 shrink-0">
                <StepIcon icon={step.icon} />
              </div>
              <div className="flex-1 rounded-2xl border border-ink-100 bg-white p-5 shadow-card">
                <StepBody index={i} title={step.title} description={step.description} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
          className="relative mt-14 overflow-hidden rounded-2xl border border-teal-200/70 bg-white p-8 shadow-card sm:mt-16 sm:p-10"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal-400 to-teal-600"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-100/40 blur-[90px]"
          />
          <div className="relative max-w-2xl">
            <h3 className="text-xl font-semibold text-ink-900 sm:text-2xl">{CALLOUT.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{CALLOUT.body}</p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
