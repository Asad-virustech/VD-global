import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Scale,
  GraduationCap,
  Lightbulb,
  Handshake,
  BadgeCheck,
  Quote,
  Hourglass,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';

type Principle = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    icon: Scale,
    title: 'Honesty before revenue',
    description:
      'If we don’t believe a strategy is right for your business, we’ll tell you before asking you to invest.',
  },
  {
    icon: GraduationCap,
    title: 'Education creates better decisions',
    description:
      'An informed partner makes better long-term decisions than someone buying services without understanding the process.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy before execution',
    description:
      'The first idea is rarely the best one. We evaluate before we recommend.',
  },
  {
    icon: Handshake,
    title: 'Long-term partnerships',
    description:
      'We’re interested in building lasting authority and trusted relationships, not one-time transactions.',
  },
  {
    icon: BadgeCheck,
    title: 'Trust is our reputation',
    description:
      'Every recommendation reflects our own reputation. That’s why we value candour over unrealistic promises.',
  },
];

const QUOTE = {
  lines: ['Anyone can chase attention.', 'We build the trust that outlasts it.'],
  attribution: 'VD Global',
};

const CALLOUT = {
  title: 'Sometimes the right answer is “not yet.”',
  body: 'Not every business is ready for strategic PR or Wikipedia today. If another path will create better long-term results, we’ll recommend it first. The goal is durable authority, not unnecessary spending.',
};

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

type PrincipleCardProps = Principle & { index: number };

function PrincipleCard({ title, description, index }: PrincipleCardProps) {
  return (
    <motion.article
      variants={item}
      className="group flex gap-5 border-t border-ink-900/10 py-6 first:border-t-0 first:pt-0 sm:gap-8"
    >
      <span className="font-heading text-2xl font-bold tabular-nums text-teal-600/70 transition-colors duration-300 group-hover:text-teal-600">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>
    </motion.article>
  );
}

export function Philosophy() {
  return (
    <>
    <Section className="surface-base">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700"
            >
              Our Philosophy
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] text-balance"
            >
              Authority should be earned, not manufactured.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
              className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              <p>Authority isn’t something you can purchase overnight.</p>
              <p>It’s built through credibility, recognition, consistency, and trust.</p>
              <p>
                Our responsibility isn’t to recommend every service we offer. It’s to recommend the
                right next step for your business, even if that means telling you to wait.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:pt-1"
          >
            {PRINCIPLES.map((principle, i) => (
              <PrincipleCard key={principle.title} index={i} {...principle} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>

    {/* Featured quote — full-width dark band, left editorial pull-quote */}
    <Section bleed className="relative overflow-hidden surface-night">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-teal-400/40 to-transparent"
      />
      <Container>
        <motion.figure
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.05 }}
          className="relative max-w-4xl"
        >
          <Quote
            aria-hidden="true"
            className="pointer-events-none absolute -left-2 -top-10 h-28 w-28 text-white/[0.04] sm:-left-6 sm:-top-14 sm:h-40 sm:w-40"
            strokeWidth={1}
            fill="currentColor"
          />
          <blockquote className="relative text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.08] text-balance">
            <span className="block">{QUOTE.lines[0]}</span>
            <span className="mt-1 block text-teal-300">{QUOTE.lines[1]}</span>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-400">
            <span className="h-px w-8 bg-teal-400/60" aria-hidden="true" />
            {QUOTE.attribution}
          </figcaption>
        </motion.figure>
      </Container>
    </Section>

    {/* Informational callout — back on white */}
    <Section className="surface-base">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-ink-100 bg-ink-50/60 p-8 sm:p-10"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal-400 to-teal-600"
          />
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-teal-700 ring-1 ring-inset ring-teal-100">
              <Hourglass className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold text-ink-900 sm:text-2xl">{CALLOUT.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{CALLOUT.body}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
    </>
  );
}
