import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { INDUSTRIES } from '../../../../content/caseStudies';
import type { IndustryItem } from '../../../../content/caseStudies';

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

function IndustryRow({ icon: Icon, name, challenge }: IndustryItem) {
  return (
    <motion.li
      variants={row}
      className="flex items-start gap-4 border-b border-ink-200/70 py-5 sm:gap-5"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 sm:flex sm:items-baseline sm:gap-4">
        <h3 className="shrink-0 text-base font-semibold text-ink-900 sm:w-52">{name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-500 sm:mt-0">{challenge}</p>
      </div>
    </motion.li>
  );
}

export function IndustriesWeSupport() {
  return (
    <Section className="surface-alt">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Industries We Support"
          title="Different Fields, Familiar Challenges."
          description="Authority works the same way everywhere, but it shows up differently by industry. Here's the challenge we most often help each one solve."
          className="mb-12 sm:mb-14"
        />

        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-3xl border-t border-ink-200/70"
        >
          {INDUSTRIES.map((industry) => (
            <IndustryRow key={industry.name} {...industry} />
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}
