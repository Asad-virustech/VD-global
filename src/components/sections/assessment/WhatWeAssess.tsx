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
    description: 'What someone finds — and in what order — when they search your name or company.',
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
    description: "The depth and consistency of the perspective you're known for in your field.",
  },
];

const sheet: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const, staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const row: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

function DimensionRow({ icon: Icon, title, description, index }: Dimension & { index: number }) {
  return (
    <motion.div
      variants={row}
      className={`group flex items-start gap-4 px-6 py-5 sm:gap-6 sm:px-8 sm:py-6 ${
        index > 0 ? 'border-t border-ink-100' : ''
      }`}
    >
      <span className="w-8 shrink-0 pt-0.5 font-heading text-xl font-bold tabular-nums text-ink-200 transition-colors duration-300 group-hover:text-teal-500 sm:text-2xl">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-ink-900 sm:text-lg">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>
    </motion.div>
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

        {/* The authority model, presented as a diagnostic assessment sheet */}
        <motion.div
          variants={sheet}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card"
        >
          <div className="flex items-center justify-between border-b border-ink-100 bg-ink-50/50 px-6 py-4 sm:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
              The Authority Model
            </span>
            <span className="text-xs font-medium text-ink-400">7 dimensions we examine</span>
          </div>

          {DIMENSIONS.map((dimension, i) => (
            <DimensionRow key={dimension.title} index={i} {...dimension} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
