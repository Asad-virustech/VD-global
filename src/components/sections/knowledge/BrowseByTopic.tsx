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
import { ARTICLES } from '../../../../content/articles';

/**
 * Topics map to article categories. Counts are computed live from the article
 * data, never hardcoded, so the numbers are always real. A topic with no
 * articles yet is simply not shown.
 */
const TOPIC_ICONS: { icon: LucideIcon; label: string }[] = [
  { icon: Compass, label: 'Authority Strategy' },
  { icon: BookOpen, label: 'Wikipedia' },
  { icon: Newspaper, label: 'Strategic PR' },
  { icon: BadgeCheck, label: 'Executive Branding' },
  { icon: Lightbulb, label: 'Thought Leadership' },
  { icon: Search, label: 'Search Credibility' },
  { icon: Megaphone, label: 'Media Visibility' },
  { icon: Globe, label: 'Digital Reputation' },
];

const TOPICS = TOPIC_ICONS.map((t) => ({
  ...t,
  count: ARTICLES.filter((a) => a.category === t.label).length,
})).filter((t) => t.count > 0);

const wrap: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const pill: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

function TopicPill({ icon: Icon, label, count }: { icon: LucideIcon; label: string; count: number }) {
  return (
    <motion.span
      variants={pill}
      className="group inline-flex items-center gap-2.5 rounded-full border border-ink-200 bg-white py-2.5 pl-4 pr-3 text-sm font-medium text-ink-700 shadow-soft"
    >
      <Icon className="h-4 w-4 text-teal-600" strokeWidth={1.75} aria-hidden="true" />
      {label}
      <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[11px] font-semibold text-ink-500">
        {count}
      </span>
    </motion.span>
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
