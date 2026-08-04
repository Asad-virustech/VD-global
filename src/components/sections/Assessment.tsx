import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Compass, BookOpenCheck, Route, ShieldOff, Clock } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { FIRM } from '../../../content/site';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Compass,
    title: 'Current authority review',
    description: 'A read of your online presence, reputation, and the signals that shape how you’re seen.',
  },
  {
    icon: BookOpenCheck,
    title: 'Notability and credibility',
    description:
      'Whether you’re ready for Wikipedia today, or what would need to change first.',
  },
  {
    icon: Route,
    title: 'Strategic recommendations',
    description: 'Practical next steps, grounded in your business goals rather than a template.',
  },
  {
    icon: ShieldOff,
    title: 'No obligation',
    description:
      'The assessment is educational first. There is no obligation to work with VD Global afterwards.',
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

type FeatureCardProps = Feature & { index: number };

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex items-start gap-4 rounded-3xl border border-ink-100 bg-gradient-to-b from-white to-ink-50/60 p-5 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-6"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100 transition-colors duration-300 group-hover:bg-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-300">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-base font-semibold text-ink-900">{title}</h3>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>
    </motion.article>
  );
}

export function Assessment() {
  return (
    <Section className="relative surface-base">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — headline, description (educate; the finale below converts) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700"
            >
              Free Authority Assessment
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] text-balance"
            >
              Know where you stand before you invest.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
              className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              <p>Every business starts somewhere different.</p>
              <p>
                Before recommending PR, Wikipedia, or any authority-building strategy, we start with
                an honest read of where you stand today.
              </p>
              <p>
                The complimentary Authority Assessment names your strengths, the opportunities worth
                pursuing, and the most useful next step.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.18 }}
              className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-ink-400"
            >
              <Clock className="h-4 w-4 text-teal-600" strokeWidth={1.75} />
              Typical response time: within {FIRM.responseWindow}.
            </motion.p>
          </div>

          {/* Right — four things the assessment covers */}
          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-4"
          >
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.title} index={i} {...feature} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
