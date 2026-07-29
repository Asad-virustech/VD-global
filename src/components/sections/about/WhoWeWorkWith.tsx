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
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cell: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function AudienceCell({ icon: Icon, title, description }: Audience) {
  return (
    <motion.article
      variants={cell}
      className="group bg-white p-6 transition-colors duration-300 hover:bg-ink-50/60 sm:p-8"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100 transition-colors duration-300 group-hover:bg-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <h3 className="mt-5 text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
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

        {/* Editorial "ledger": hairline-divided cells inside one framed block */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="overflow-hidden rounded-3xl border border-ink-100 shadow-card"
        >
          <div className="grid gap-px bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((audience) => (
              <AudienceCell key={audience.title} {...audience} />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
