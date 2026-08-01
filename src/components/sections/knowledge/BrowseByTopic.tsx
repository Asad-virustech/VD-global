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

const wrap: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const pill: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

function TopicPill({ icon: Icon, label, count }: Topic) {
  return (
    <motion.button
      type="button"
      variants={pill}
      aria-label={`Browse ${label}, ${count} insights`}
      className="group inline-flex items-center gap-2.5 rounded-full border border-ink-200 bg-white py-2.5 pl-4 pr-3 text-sm font-medium text-ink-700 shadow-soft transition-colors duration-300 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
    >
      <Icon className="h-4 w-4 text-teal-600" strokeWidth={1.75} aria-hidden="true" />
      {label}
      <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[11px] font-semibold text-ink-500 transition-colors duration-300 group-hover:bg-teal-100 group-hover:text-teal-700">
        {count}
      </span>
    </motion.button>
  );
}

export function BrowseByTopic() {
  return (
    <Section className="surface-base">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Browse by Topic"
          title="Find the thinking you need."
          description="Every insight is organized around the questions credible businesses actually ask on the way to authority."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {TOPICS.map((topic) => (
            <TopicPill key={topic.label} {...topic} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
