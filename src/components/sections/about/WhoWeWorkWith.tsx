import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Rocket, Briefcase, Cpu, Landmark, PenTool, TrendingUp } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

type Audience = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const AUDIENCES: Audience[] = [
  {
    icon: Rocket,
    title: 'Founders',
    description: 'Building a credible public profile alongside the business itself.',
  },
  {
    icon: Briefcase,
    title: 'Executives',
    description: 'Strengthening leadership credibility and the trust it carries.',
  },
  {
    icon: Cpu,
    title: 'Technology Companies',
    description: 'Turning genuine innovation into recognized, verifiable authority.',
  },
  {
    icon: Landmark,
    title: 'Professional Service Firms',
    description: 'Where reputation is the product, and trust wins the engagement.',
  },
  {
    icon: PenTool,
    title: 'Authors',
    description: 'Establishing the notability and credibility their work deserves.',
  },
  {
    icon: TrendingUp,
    title: 'Growing Brands',
    description: 'Ready for recognition that keeps pace with their momentum.',
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function AudienceCard({ icon: Icon, title, description }: Audience) {
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

export function WhoWeWorkWith() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Who We Work With"
          title="Credible People, Ready to Be Recognized."
          description="We work with organizations and individuals whose reputation should reflect the substance behind them."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {AUDIENCES.map((audience) => (
            <AudienceCard key={audience.title} {...audience} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
