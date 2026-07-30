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

type ValueTileProps = Value & { wide?: boolean; feature?: boolean };

function ValueTile({ icon: Icon, title, description, wide = false, feature = false }: ValueTileProps) {
  const surface = feature
    ? 'border-teal-200 bg-gradient-to-br from-teal-50 to-white'
    : 'border-ink-100 bg-gradient-to-b from-white to-ink-50/60';

  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`group rounded-3xl border p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8 ${surface} ${
        wide ? 'sm:col-span-2' : ''
      }`}
    >
      <div className={wide ? 'flex items-start gap-5' : ''}>
        <IconTile size="md" ring={feature} hover>
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </IconTile>
        <div className={wide ? 'flex-1' : ''}>
          <h3 className={`font-semibold text-ink-900 ${wide ? 'mt-0 text-xl' : 'mt-5 text-lg'}`}>
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-500">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function WhyVdGlobal() {
  return (
    <>
      <Section className="surface-alt">
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
            className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          >
            {VALUES.map((value, i) => (
              <ValueTile
                key={value.title}
                {...value}
                wide={i === 0 || i === VALUES.length - 1}
                feature={i === 0}
              />
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Premium highlighted callout — full-width dark band, asymmetric split */}
      <Section bleed className="relative overflow-hidden surface-night">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
        />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.05 }}
            className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16"
          >
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-teal-400 ring-1 ring-inset ring-white/10">
                <Target className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] text-balance">
                {CALLOUT.title}
              </h3>
            </div>
            <p className="text-base leading-relaxed text-ink-300 sm:text-lg lg:border-l lg:border-white/10 lg:pl-16">
              {CALLOUT.body}
            </p>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
