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
import { IconTile } from '../ui/IconTile';

type Principle = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    icon: Scale,
    title: 'Honesty Before Revenue',
    description:
      'If we don’t believe a strategy is right for your business, we’ll tell you before asking you to invest.',
  },
  {
    icon: GraduationCap,
    title: 'Education Creates Better Decisions',
    description:
      'An informed partner makes better long-term decisions than someone buying services without understanding the process.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy Before Execution',
    description:
      'The first solution isn’t always the best solution. We evaluate before we recommend.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnerships',
    description:
      'We’re interested in building lasting authority and trusted relationships—not one-time transactions.',
  },
  {
    icon: BadgeCheck,
    title: 'Trust Is Our Reputation',
    description:
      'Every recommendation reflects our own reputation. That’s why we value transparency over unrealistic promises.',
  },
];

const QUOTE = {
  lines: ['We don’t just build authority.', 'We build the trust behind it.'],
  attribution: 'VD Global',
};

const CALLOUT = {
  title: 'Sometimes the right answer is “Not Yet.”',
  body: 'Not every business is immediately ready for strategic PR or Wikipedia. If we believe another path will create better long-term results, we’ll recommend it first. Our goal is sustainable authority—not unnecessary spending.',
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

function PrincipleCard({ icon: Icon, title, description, index }: PrincipleCardProps) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-colors duration-300 hover:border-teal-200 sm:p-7"
    >
      <IconTile size="md" ring hover>
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </IconTile>
      <div className="mt-5 flex items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{description}</p>
    </motion.article>
  );
}

export function Philosophy() {
  return (
    <>
    <Section className="bg-white">
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
              We Believe Authority Should Be Earned.
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
                Our responsibility isn’t to recommend every service we offer. Our responsibility is
                to recommend the right next step for your business—even if that means telling you to
                wait.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-4"
          >
            {PRINCIPLES.map((principle, i) => (
              <PrincipleCard key={principle.title} index={i} {...principle} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>

    {/* Featured quote — full-width dark band */}
    <Section bleed className="relative overflow-hidden bg-ink-900">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[110px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
      />
      <Container>
        <motion.figure
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.05 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <div className="relative mx-auto max-w-3xl">
            <Quote className="mx-auto h-8 w-8 text-teal-400" strokeWidth={1.5} />
            <blockquote className="mt-6 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-[2.5rem] lg:leading-[1.15] text-balance">
              <p className="block">{QUOTE.lines[0]}</p>
              <p className="mt-1 block text-teal-300">{QUOTE.lines[1]}</p>
            </blockquote>
            <figcaption className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-ink-400">
              <span className="text-teal-400">—</span> {QUOTE.attribution}
            </figcaption>
          </div>
        </motion.figure>
      </Container>
    </Section>

    {/* Informational callout — back on white */}
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-ink-100 bg-ink-50/60 p-8 sm:p-10"
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
