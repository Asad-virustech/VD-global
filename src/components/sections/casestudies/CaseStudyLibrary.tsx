import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { CASE_STUDIES } from '../../../../content/caseStudies';
import type { CaseStudy } from '../../../../content/caseStudies';

const library = CASE_STUDIES.filter((study) => !study.featured);

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

function CaseStudyCard({ industry, title, summary, tags }: CaseStudy) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-teal-600 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
        <Building2 className="h-3.5 w-3.5 text-teal-600" strokeWidth={1.75} />
        {industry}
      </span>

      <h3 className="mt-4 text-xl font-semibold leading-snug text-ink-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-ink-100 bg-ink-50 px-2.5 py-1 text-[11px] font-medium text-ink-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-300 group-hover:text-teal-800">
        Read More
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      </span>
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
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {library.map((study) => (
            <CaseStudyCard key={study.slug} {...study} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
