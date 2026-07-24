import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { INDUSTRIES } from '../../../../content/caseStudies';
import type { IndustryItem } from '../../../../content/caseStudies';

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function IndustryCard({ icon: Icon, name, challenge }: IndustryItem) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-colors duration-300 hover:border-teal-200"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-100">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <h3 className="mt-4 text-base font-semibold text-ink-900">{name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{challenge}</p>
    </motion.article>
  );
}

export function IndustriesWeSupport() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Industries We Support"
          title="Different Fields, Familiar Challenges."
          description="Authority works the same way everywhere, but it shows up differently by industry. Here's the challenge we most often help each one solve."
          className="mb-12 sm:mb-14"
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.name} {...industry} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
