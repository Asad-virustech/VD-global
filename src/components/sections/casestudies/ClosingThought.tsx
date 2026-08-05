import { motion } from 'framer-motion';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';

const PARAGRAPHS = [
  'Sometimes Wikipedia is exactly right. Sometimes the answer is strategic PR. Sometimes the most valuable advice is to wait, and build the foundation first. The tool is never the point; the situation decides.',
  'The responsibility of an advisory firm is to choose correctly, not to sell the largest engagement. It is easy to give clients the thing they asked for. It is harder, and far more valuable, to tell them what they actually need, even when that means a smaller engagement, a different direction, or no engagement at all.',
  'That is the standard these stories are meant to show. Not the services we delivered, but the judgment behind them.',
];

export function ClosingThought() {
  return (
    <Section className="surface-alt">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Choosing correctly"
            title="The best outcome isn’t always the one the client expected."
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
            className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink-600 sm:text-lg"
          >
            {PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
