import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { CASE_STUDIES } from '../../../../content/caseStudies';
import type { CaseStudy } from '../../../../content/caseStudies';

const library = CASE_STUDIES.filter((study) => !study.featured);

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function TagRow({ tags, className = '' }: { tags: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center rounded-full border border-ink-200/70 bg-white px-2.5 py-1 text-[11px] font-medium text-ink-600"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function CaseStudyRow({ industry, title, summary, tags }: CaseStudy) {
  return (
    <motion.article variants={row}>
      <div className="group grid gap-x-8 gap-y-4 border-b border-ink-200/70 py-8 sm:py-10 lg:grid-cols-[0.85fr_1.6fr] lg:gap-x-14">
        {/* Left rail — industry + tags */}
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
            <Building2 className="h-3.5 w-3.5" strokeWidth={2} />
            {industry}
          </p>
          <TagRow tags={tags} className="mt-4 hidden lg:flex" />
        </div>

        {/* Story — large editorial headline */}
        <div>
          <h3 className="text-2xl font-bold leading-[1.15] tracking-tight text-ink-900 transition-colors duration-300 group-hover:text-teal-800 sm:text-[1.75rem] text-balance">
            {title}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-500">{summary}</p>
          <TagRow tags={tags} className="mt-5 lg:hidden" />
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800">
            Read More
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function CaseStudyLibrary() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Case Study Library"
          title="A Range of Authority Challenges."
          description="Different industries, different starting points — connected by the same disciplined way of thinking about reputation and trust."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="border-t border-ink-200/70"
        >
          {library.map((study) => (
            <CaseStudyRow key={study.slug} {...study} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
