import { motion } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

const OPENING = [
  'Businesses spend years building something exceptional — refining a product, deepening an expertise, earning the quiet respect of the people they serve.',
  'Yet many remain invisible. The quality is real, but the recognition never arrives, because being good at the work and being known for it are two different things.',
];

const CLOSING = [
  'Meanwhile, others attract attention they haven’t earned — louder, faster, and rarely built to last.',
  'VD Global exists to close that gap the right way: to help credible businesses become recognized for the value they already deliver, through reputation that’s earned rather than inflated.',
];

export function WhyWeExist() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why We Exist"
          title="The Best Work Too Often Goes Unseen."
          className="mb-12 sm:mb-14"
        />

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const }}
            className="space-y-5 text-lg leading-relaxed text-ink-600"
          >
            {OPENING.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.05 }}
            className="my-10 border-l-2 border-teal-500 pl-6 text-2xl font-bold leading-snug tracking-tight text-ink-900 sm:my-12 sm:text-[1.75rem] text-balance"
          >
            Recognition should follow substance — not replace it.
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.1 }}
            className="space-y-5 text-lg leading-relaxed text-ink-600"
          >
            {CLOSING.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
