import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Compass,
  BookOpen,
  Globe,
  Newspaper,
  BadgeCheck,
  Lightbulb,
  Megaphone,
  Search,
  ArrowUpRight,
} from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

type Topic = {
  icon: LucideIcon;
  label: string;
  count: number;
};

const TOPICS: Topic[] = [
  { icon: Compass, label: 'Authority Strategy', count: 12 },
  { icon: BookOpen, label: 'Wikipedia', count: 9 },
  { icon: Globe, label: 'Digital Reputation', count: 8 },
  { icon: Newspaper, label: 'Strategic PR', count: 11 },
  { icon: BadgeCheck, label: 'Executive Branding', count: 7 },
  { icon: Lightbulb, label: 'Thought Leadership', count: 10 },
  { icon: Megaphone, label: 'Media Visibility', count: 6 },
  { icon: Search, label: 'Search Credibility', count: 5 },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function TopicCard({ icon: Icon, label, count }: Topic) {
  return (
    <motion.button
      type="button"
      variants={item}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      aria-label={`Browse ${label} — ${count} insights`}
      className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 text-left shadow-card transition-colors duration-300 hover:border-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 sm:p-6"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-ink-900">{label}</h3>
        <p className="mt-0.5 text-xs text-ink-400">{count} insights</p>
      </div>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 text-ink-300 transition-all duration-300 group-hover:text-teal-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </motion.button>
  );
}

export function BrowseByTopic() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Browse by Topic"
          title="Find the Thinking You Need."
          description="Every insight is organized around the questions credible businesses actually ask on the way to authority."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {TOPICS.map((topic) => (
            <TopicCard key={topic.label} {...topic} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
