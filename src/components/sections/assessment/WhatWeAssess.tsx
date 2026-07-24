import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  ShieldCheck,
  Newspaper,
  Search,
  BookOpenCheck,
  Globe,
  Target,
  Lightbulb,
} from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

type Dimension = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const DIMENSIONS: Dimension[] = [
  {
    icon: ShieldCheck,
    title: 'Brand Credibility',
    description:
      'How consistently your brand signals trust across the touchpoints people check first.',
  },
  {
    icon: Newspaper,
    title: 'Media Presence',
    description:
      'Where and how your name appears in third-party publications, and what that coverage communicates.',
  },
  {
    icon: Search,
    title: 'Search Visibility',
    description:
      'What someone finds — and in what order — when they search your name or company.',
  },
  {
    icon: BookOpenCheck,
    title: 'Wikipedia Readiness',
    description:
      'Whether your notability and sourcing realistically meet the threshold Wikipedia requires.',
  },
  {
    icon: Globe,
    title: 'Digital Reputation',
    description:
      'The sentiment and signals attached to you across profiles, reviews, and social channels.',
  },
  {
    icon: Target,
    title: 'Industry Positioning',
    description:
      "How clearly you're placed within your category, relative to the names you're measured against.",
  },
  {
    icon: Lightbulb,
    title: 'Thought Leadership',
    description:
      "The depth and consistency of the perspective you're known for in your field.",
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function DimensionCard({ icon: Icon, title, description }: Dimension) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-teal-600 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>

      <h3 className="mt-5 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{description}</p>
    </motion.article>
  );
}

export function WhatWeAssess() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What We Assess"
          title="Seven Dimensions of Public Authority."
          description="Authority isn't a single score. It's the sum of the signals people encounter when they look you up. We review each one and show you where the meaningful gaps are."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {DIMENSIONS.map((dimension) => (
            <DimensionCard key={dimension.title} {...dimension} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
