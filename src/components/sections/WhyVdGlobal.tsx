import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Compass,
  ShieldCheck,
  Hourglass,
  GraduationCap,
  Gem,
  BadgeCheck,
  Target,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { IconTile } from '../ui/IconTile';

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const VALUES: Value[] = [
  {
    icon: Compass,
    title: 'Strategy Before Services',
    description:
      'We recommend the next best step—not simply the next service we can sell.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest Recommendations',
    description:
      'If something isn’t the right fit today, we’ll explain why and help you prepare for the future instead of pushing unnecessary services.',
  },
  {
    icon: Hourglass,
    title: 'Long-Term Authority',
    description:
      'Recognition grows through consistent credibility, not one-time campaigns or shortcuts.',
  },
  {
    icon: GraduationCap,
    title: 'Education Matters',
    description:
      'We believe informed partners make stronger long-term decisions than those buying services without understanding the process.',
  },
  {
    icon: Gem,
    title: 'Quality Over Volume',
    description:
      'We focus on building meaningful long-term partnerships rather than chasing high-volume transactions.',
  },
  {
    icon: BadgeCheck,
    title: 'Trust Is Our Reputation',
    description:
      'Every recommendation reflects our own reputation. That’s why transparency always comes before unrealistic promises.',
  },
];

const CALLOUT = {
  title: 'Our Success Is Measured Differently.',
  body: 'Success isn’t simply getting a publication or creating a page. Success is helping businesses build recognition that continues creating opportunities long after the project is complete.',
};

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function ValueCard({ icon: Icon, title, description }: Value) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-teal-600 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      <IconTile size="md" hover>
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </IconTile>

      <h3 className="mt-5 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{description}</p>
    </motion.article>
  );
}

export function WhyVdGlobal() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why VD Global"
          title="Built on Strategy. Driven by Trust."
          description="Authority isn’t built through shortcuts. It’s built through thoughtful decisions, ethical execution, and long-term consistency. Every recommendation we make is designed to create sustainable credibility instead of temporary attention."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7"
        >
          {VALUES.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </motion.div>

        {/* Premium highlighted callout */}
        <motion.figure
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.05 }}
          className="relative mt-12 overflow-hidden rounded-3xl bg-ink-900 px-6 py-12 sm:mt-14 sm:px-10 sm:py-14"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[100px]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-teal-400 ring-1 ring-inset ring-white/10">
              <Target className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.25rem] text-balance">
              {CALLOUT.title}
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {CALLOUT.body}
            </p>
          </div>
        </motion.figure>
      </Container>
    </Section>
  );
}
