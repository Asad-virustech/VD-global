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

const band: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
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

        {/* An editorial trio divided by hairlines — a confident statement, not cards */}
        <motion.div
          variants={band}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto grid max-w-5xl gap-10 border-y border-ink-100 py-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink-100 sm:py-12"
        >
          {PRINCIPLES.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="sm:px-8 sm:first:pl-0 sm:last:pr-0 lg:px-10"
            >
              <IconTile size="md" ring>
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </IconTile>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-ink-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
