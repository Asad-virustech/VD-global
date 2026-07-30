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
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

type GapTileProps = Gap & { wide?: boolean; dark?: boolean };

function GapTile({ icon: Icon, title, description, wide = false, dark = false }: GapTileProps) {
  const surface = dark
    ? 'border-white/10 surface-night'
    : 'border-ink-100 bg-gradient-to-b from-white to-ink-50/60';

  return (
    <motion.article
      variants={cell}
      whileHover={dark ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`group relative overflow-hidden rounded-3xl border p-6 shadow-card transition-shadow duration-300 sm:p-8 ${surface} ${
        dark ? '' : 'hover:shadow-card-hover'
      } ${wide ? 'sm:col-span-2' : ''}`}
    >
      {dark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-teal-500/20 blur-[80px]"
        />
      )}
      <div className={`relative ${wide ? 'flex items-start gap-5' : ''}`}>
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            dark
              ? 'bg-white/5 text-teal-300 ring-1 ring-inset ring-white/10'
              : 'bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100 transition-colors duration-300 group-hover:bg-teal-100'
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div className={wide ? 'flex-1' : ''}>
          <h3
            className={`font-semibold ${dark ? 'text-white' : 'text-ink-900'} ${
              wide ? 'mt-0 text-xl' : 'mt-5 text-base'
            }`}
          >
            {title}
          </h3>
          <p className={`mt-1.5 text-sm leading-relaxed ${dark ? 'text-ink-300' : 'text-ink-500'}`}>
            {description}
          </p>
        </div>
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

        {/* Bento — big cards with a dark feature tile anchoring the findings */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
        >
          {GAPS.map((gap, i) => (
            <GapTile
              key={gap.title}
              {...gap}
              wide={i === 0 || i === GAPS.length - 1}
              dark={i === 0}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
