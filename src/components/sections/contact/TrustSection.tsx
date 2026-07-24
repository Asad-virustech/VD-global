import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ShieldCheck, Compass, Handshake } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { IconTile } from '../../ui/IconTile';

type Principle = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    icon: ShieldCheck,
    title: 'Not every business needs every service',
    description: 'We start from what you actually need — not from a menu we’re trying to sell.',
  },
  {
    icon: Compass,
    title: 'We’ll point you to the better approach',
    description: 'If another path serves you more, we’ll say so — even when it isn’t ours to deliver.',
  },
  {
    icon: Handshake,
    title: 'Relationships over transactions',
    description: 'A long-term relationship built on trust matters more to us than a short-term sale.',
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

export function TrustSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why It Matters"
          title="Built on Trust. Focused on Long-Term Success."
          description="This is the part that shapes every conversation we have — including this one."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {PRINCIPLES.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              variants={card}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="group rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-colors duration-300 hover:border-teal-200 sm:p-8"
            >
              <IconTile size="md" ring hover>
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </IconTile>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-ink-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
