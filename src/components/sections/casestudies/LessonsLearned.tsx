import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { LESSONS } from '../../../../content/caseStudies';
import type { Lesson } from '../../../../content/caseStudies';

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function LessonRow({ icon: Icon, title, description }: Lesson) {
  return (
    <motion.li variants={item} className="flex gap-4 border-t border-white/10 pt-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-teal-400 ring-1 ring-inset ring-white/10">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{description}</p>
      </div>
    </motion.li>
  );
}

export function LessonsLearned() {
  return (
    <Section className="relative overflow-hidden bg-ink-900">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[110px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
      />
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' as const }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400"
          >
            Lessons Learned
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.05 }}
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] text-balance"
          >
            What the Work Keeps Teaching Us.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg text-balance"
          >
            Across very different engagements, the same truths keep surfacing. They shape how we
            advise every business that comes to us.
          </motion.p>
        </div>

        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mt-12 grid max-w-4xl gap-x-10 gap-y-6 sm:mt-14 sm:grid-cols-2"
        >
          {LESSONS.map((lesson) => (
            <LessonRow key={lesson.title} {...lesson} />
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}
