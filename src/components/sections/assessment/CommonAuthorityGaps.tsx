import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { MicOff, ShieldAlert, Shuffle, SearchX, TrendingDown, Boxes } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

type Gap = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const GAPS: Gap[] = [
  {
    icon: MicOff,
    title: 'No trusted media mentions',
    description: 'Without independent coverage, your credibility rests entirely on your own claims.',
  },
  {
    icon: ShieldAlert,
    title: 'Weak online credibility',
    description:
      'When verification turns up little, uncertainty fills the gap — usually not in your favour.',
  },
  {
    icon: Shuffle,
    title: 'Inconsistent messaging',
    description:
      'Conflicting descriptions across profiles make you harder to trust and easier to overlook.',
  },
  {
    icon: SearchX,
    title: 'Limited search visibility',
    description: "If the right result isn't on the first page, most people never see it.",
  },
  {
    icon: TrendingDown,
    title: 'Poor reputation signals',
    description: 'Outdated, negative, or thin signals shape perception long before you get to explain.',
  },
  {
    icon: Boxes,
    title: 'No authority assets',
    description:
      "Without owned proof — articles, features, references — there's nothing for others to point to.",
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cell: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function GapCell({ icon: Icon, title, description }: Gap) {
  return (
    <motion.div
      variants={cell}
      className="group flex items-start gap-4 bg-white p-6 transition-colors duration-300 hover:bg-ink-50/60 sm:p-7"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100 transition-colors duration-300 group-hover:bg-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-ink-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>
    </motion.div>
  );
}

export function CommonAuthorityGaps() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What We Often Find"
          title="The Gaps That Quietly Hold Businesses Back."
          description="Most credibility problems aren't dramatic — they're small, unmanaged signals that accumulate. These are the ones an assessment surfaces most often."
          className="mb-12 sm:mb-14"
        />

        {/* Findings, gathered into one framed panel rather than scattered cards */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-ink-100 shadow-card"
        >
          <div className="grid gap-px bg-ink-100 sm:grid-cols-2">
            {GAPS.map((gap) => (
              <GapCell key={gap.title} {...gap} />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
