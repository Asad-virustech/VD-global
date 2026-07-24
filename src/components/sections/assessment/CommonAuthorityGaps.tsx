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
    description:
      'Without independent coverage, your credibility rests entirely on your own claims.',
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
    description:
      "If the right result isn't on the first page, most people never see it.",
  },
  {
    icon: TrendingDown,
    title: 'Poor reputation signals',
    description:
      'Outdated, negative, or thin signals shape perception long before you get to explain.',
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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function GapCard({ icon: Icon, title, description, index }: Gap & { index: number }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-colors duration-300 hover:border-teal-200 sm:p-6"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-base font-semibold text-ink-900">{title}</h3>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>
    </motion.article>
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

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {GAPS.map((gap, i) => (
            <GapCard key={gap.title} index={i} {...gap} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
