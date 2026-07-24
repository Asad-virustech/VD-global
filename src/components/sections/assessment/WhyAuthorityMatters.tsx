import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  ShieldCheck,
  DoorOpen,
  Handshake,
  Newspaper,
  TrendingUp,
  UserCheck,
} from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';

type Influence = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const INFLUENCES: Influence[] = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    description:
      'Before anyone works with you, they look for reasons to believe you. Authority supplies that evidence in advance.',
  },
  {
    icon: DoorOpen,
    title: 'Opportunities',
    description:
      'Invitations, features, and introductions tend to reach the names a field already recognizes.',
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    description:
      'Organizations vet who they associate with. A credible public profile lowers the perceived risk of working with you.',
  },
  {
    icon: Newspaper,
    title: 'Media Coverage',
    description:
      'Journalists cite sources they can stand behind. An established reputation makes you easier to quote.',
  },
  {
    icon: TrendingUp,
    title: 'Investment',
    description:
      'Investors research long before a meeting. What they find shapes the conversation before it begins.',
  },
  {
    icon: UserCheck,
    title: 'Customer Confidence',
    description:
      'Buyers reduce uncertainty by verifying you. Visible credibility shortens the distance to a decision.',
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function InfluenceCard({ icon: Icon, title, description }: Influence) {
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
        <h3 className="text-base font-semibold text-ink-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>
    </motion.article>
  );
}

export function WhyAuthorityMatters() {
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
              Why It Matters
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] text-balance"
            >
              Reputation Decides Before You Enter the Room.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
              className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              <p>
                Authority is not self-description. It is the impression that forms when other
                people — customers, journalists, partners, investors — look you up and decide
                whether to trust what they find.
              </p>
              <p>
                That impression is already influencing outcomes, whether or not you manage it.
                Most decisions about you are made before any direct conversation takes place.
              </p>
              <p className="text-ink-700">
                Understanding how your authority is read is the first step toward strengthening
                it deliberately, rather than leaving it to chance.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {INFLUENCES.map((influence) => (
              <InfluenceCard key={influence.title} {...influence} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
