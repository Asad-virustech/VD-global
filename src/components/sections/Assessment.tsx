import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Compass,
  BookOpenCheck,
  Route,
  ShieldOff,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Compass,
    title: 'Current Authority Review',
    description:
      'Evaluate your online presence, reputation, and authority signals.',
  },
  {
    icon: BookOpenCheck,
    title: 'Notability & Credibility Analysis',
    description:
      'Understand whether you’re currently ready for Wikipedia or what needs improvement first.',
  },
  {
    icon: Route,
    title: 'Strategic Recommendations',
    description:
      'Receive practical next-step recommendations based on your business goals.',
  },
  {
    icon: ShieldOff,
    title: 'No Obligation',
    description:
      'The assessment is educational first. There is absolutely no obligation to work with VD Global afterwards.',
  },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

type FeatureCardProps = Feature & { index: number };

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
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

export function Assessment() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — headline, description, CTA */}
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
              Know Where You Stand Before You Invest.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
              className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink-500 sm:text-lg"
            >
              <p>Every business is different.</p>
              <p>
                Before recommending PR, Wikipedia, or any authority-building strategy, we first
                evaluate your current position.
              </p>
              <p>
                Our complimentary Authority Assessment helps identify your strengths, opportunities,
                and the most effective next steps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.18 }}
              className="mt-8"
            >
              <Button as="link" to="/assessment" size="lg" variant="primary">
                Start Your Free Authority Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500">
                Receive a personalized review of your current authority, credibility, and digital
                presence.
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-ink-400">
                <Clock className="h-4 w-4 text-teal-600" strokeWidth={1.75} />
                Typical response time: Within 24 hours.
              </p>
            </motion.div>
          </div>

          {/* Right — four feature cards */}
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
