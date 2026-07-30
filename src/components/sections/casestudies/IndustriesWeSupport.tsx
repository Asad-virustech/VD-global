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
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

type IndustryTileProps = IndustryItem & { wide?: boolean; feature?: boolean };

function IndustryTile({ icon: Icon, name, challenge, wide = false, feature = false }: IndustryTileProps) {
  const surface = feature
    ? 'border-teal-200 bg-gradient-to-br from-teal-50 to-white'
    : 'border-ink-100 bg-gradient-to-b from-white to-ink-50/60';

  return (
    <motion.article
      variants={row}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`group rounded-3xl border p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-7 ${surface} ${
        wide ? 'sm:col-span-2' : ''
      }`}
    >
      <div className={wide ? 'flex items-start gap-5' : ''}>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100 transition-colors duration-300 group-hover:bg-teal-100">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div className={wide ? 'flex-1' : ''}>
          <h3 className={`font-semibold text-ink-900 ${wide ? 'mt-0 text-xl' : 'mt-5 text-base'}`}>
            {name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{challenge}</p>
        </div>
      </div>
    </motion.article>
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

        {/* Bento — a wide teal feature tile leading a grid of big cards */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {INDUSTRIES.map((industry, i) => (
            <IndustryTile key={industry.name} {...industry} wide={i === 0} feature={i === 0} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
