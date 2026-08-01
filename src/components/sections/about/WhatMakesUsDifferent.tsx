import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

type Principle = {
  title: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    title: 'Education before sales',
    description:
      'We help you understand your position first. An informed decision is worth more than a fast one.',
  },
  {
    title: 'Long-term thinking',
    description:
      'We advise for the reputation you’ll want in five years, not the attention you could buy this month.',
  },
  {
    title: 'Ethical recommendations',
    description:
      'We only recommend what we believe is right for you, including when the honest answer is to wait.',
  },
  {
    title: 'Strategic advisory',
    description:
      'We start from strategy, not services. The plan follows your goals, stage, and reputation.',
  },
  {
    title: 'Transparent communication',
    description:
      'No inflated promises or hidden assumptions. You’ll always understand the reasoning behind our advice.',
  },
  {
    title: 'Evidence-based decisions',
    description:
      'Recommendations follow from what your public footprint shows, not guesswork or trends.',
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function WhatMakesUsDifferent() {
  return (
    <Section className="surface-base">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="What Makes Us Different"
              title="Advisory held to a higher standard."
              description="These principles decide how we work, and just as often, what we choose not to do."
            />
          </div>

          {/* Right — numbered editorial principles (no cards) */}
          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="border-t border-ink-100"
          >
            {PRINCIPLES.map((principle, i) => (
              <motion.li key={principle.title} variants={row}>
                <div className="group flex gap-5 border-b border-ink-100 py-6 sm:gap-8 sm:py-7">
                  <span className="w-10 shrink-0 font-heading text-2xl font-bold tabular-nums text-ink-200 transition-colors duration-300 group-hover:text-teal-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-ink-900">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500 sm:text-base">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}
