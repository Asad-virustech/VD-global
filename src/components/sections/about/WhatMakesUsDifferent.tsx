import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  GraduationCap,
  Hourglass,
  Scale,
  Compass,
  MessageSquare,
  BarChart3,
} from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

type Principle = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    icon: GraduationCap,
    title: 'Education Before Sales',
    description:
      'We help you understand your position first. An informed decision is worth more than a fast one.',
  },
  {
    icon: Hourglass,
    title: 'Long-Term Thinking',
    description:
      'We advise for the reputation you’ll want in five years, not the attention you could buy this month.',
  },
  {
    icon: Scale,
    title: 'Ethical Recommendations',
    description:
      'We only recommend what we believe is right for you — including when the honest answer is to wait.',
  },
  {
    icon: Compass,
    title: 'Strategic Advisory',
    description:
      'We start from strategy, not services. The plan follows your goals, stage and reputation.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description:
      'No inflated promises or hidden assumptions. You’ll always understand the reasoning behind our advice.',
  },
  {
    icon: BarChart3,
    title: 'Evidence-Based Decisions',
    description:
      'Recommendations follow from what your public footprint actually shows — not guesswork or trends.',
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

function PrincipleCard({ icon: Icon, title, description }: Principle) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8"
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

export function WhatMakesUsDifferent() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What Makes Us Different"
          title="Advisory Held to a Higher Standard."
          description="These principles decide how we work — and, just as often, what we choose not to do."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {PRINCIPLES.map((principle) => (
            <PrincipleCard key={principle.title} {...principle} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
