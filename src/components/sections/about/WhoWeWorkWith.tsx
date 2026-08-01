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
    title: 'Technology companies',
    description: 'Turning genuine innovation into recognized, verifiable authority.',
  },
  {
    icon: Landmark,
    title: 'Professional service firms',
    description: 'Where reputation is the product, and trust wins the engagement.',
  },
  {
    icon: PenTool,
    title: 'Authors',
    description: 'Establishing the notability and credibility their work deserves.',
  },
  {
    icon: TrendingUp,
    title: 'Growing brands',
    description: 'Ready for recognition that keeps pace with their momentum.',
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cell: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

type AudienceTileProps = Audience & { wide?: boolean; feature?: boolean };

function AudienceTile({ icon: Icon, title, description, wide = false, feature = false }: AudienceTileProps) {
  const surface = feature
    ? 'border-teal-200 bg-gradient-to-br from-teal-50 to-white'
    : 'border-ink-100 bg-gradient-to-b from-white to-ink-50/60';

  return (
    <motion.article
      variants={cell}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`group rounded-3xl border p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8 ${surface} ${
        wide ? 'sm:col-span-2' : ''
      }`}
    >
      <div className={wide ? 'flex items-start gap-5' : ''}>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100 transition-colors duration-300 group-hover:bg-teal-100">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div className={wide ? 'flex-1' : ''}>
          <h3 className={`font-semibold text-ink-900 ${wide ? 'mt-0 text-xl' : 'mt-5 text-base'}`}>
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function WhoWeWorkWith() {
  return (
    <Section className="surface-base">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Who We Work With"
          title="Credible people, ready to be recognized."
          description="We work with organizations and individuals whose reputation should reflect the substance behind them."
          className="mb-12 sm:mb-14"
        />

        {/* Bento — big cards, a teal feature tile + a wide tile at opposite corners */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
        >
          {AUDIENCES.map((audience, i) => (
            <AudienceTile
              key={audience.title}
              {...audience}
              wide={i === 0 || i === AUDIENCES.length - 1}
              feature={i === 0}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
