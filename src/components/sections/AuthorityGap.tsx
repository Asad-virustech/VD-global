import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { EyeOff, ShieldCheck, Newspaper, Award, TrendingUp } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { IconTile } from '../ui/IconTile';

type GapCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

const cards = [
  {
    icon: EyeOff,
    title: 'Recognition',
    description: 'Being great isn’t enough if nobody knows you exist.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust',
    description: 'People trust businesses they can verify.',
  },
  {
    icon: Newspaper,
    title: 'Credibility',
    description: 'Media coverage and reputation create confidence before conversations begin.',
  },
  {
    icon: Award,
    title: 'Authority',
    description: 'Become the company people reference instead of compare.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Growth',
    description: 'Authority compounds over time and creates opportunities that advertising alone cannot.',
  },
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function GapCard({ icon: Icon, title, description, index }: GapCardProps) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-colors duration-300 hover:border-teal-200 sm:p-6"
    >
      <IconTile size="sm" shrink hover>
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </IconTile>
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

export function AuthorityGap() {
  return (
    <Section className="bg-ink-50/40">
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
              The Authority Gap
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] text-balance"
            >
              Great Companies Stay Invisible Every Day.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
              className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              <p>
                Many businesses deliver exceptional work, yet remain overlooked because their
                reputation doesn’t reflect the quality of what they actually do.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Customers trust what they can verify.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Investors research before meetings.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Journalists look for credible sources.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  Partners evaluate your public reputation before they ever contact you.
                </li>
              </ul>
              <p className="pt-2 text-ink-700">
                Authority isn’t about ego. It’s about reducing uncertainty and increasing trust.
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
            {cards.map((card, i) => (
              <GapCard key={card.title} index={i} {...card} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
