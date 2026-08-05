import { motion } from 'framer-motion';

import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';

const PARAGRAPHS = [
  'Read together, the three engagements have almost nothing in common on the surface. A technology leader, a logistics company, a professional services firm. A structural Wikipedia question, a visibility problem dressed as a Wikipedia request, and a page that could not yet exist. Different industries, different goals, different answers.',
  'What connects them is the way each one began. None started with a service to sell. Every one started with an attempt to understand: what the client actually had, what they actually needed, and whether the two matched the request in front of us. In all three cases, they did not.',
  'And in all three, the recommendation followed the client’s real problem rather than the deliverable they came asking for. One request became two articles. One became a PR strategy instead of a Wikipedia page. One became an honest assessment and no sale at all. The through-line is not a method or a service. It is a refusal to solve the wrong problem well.',
];

export function CommonThread() {
  return (
    <Section bleed className="relative overflow-hidden surface-night text-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-teal-500/15 blur-[130px]"
      />
      <Container>
        <div className="relative mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400"
          >
            What these stories have in common
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.05 }}
            className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] text-balance"
          >
            Three different businesses.
            <br />
            One consistent <span className="text-teal-300">way of thinking</span>.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' as const, delay: 0.12 }}
            className="mt-7 space-y-5 text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            {PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.15 }}
            className="mt-12 border-l-2 border-teal-400 pl-6 text-2xl font-bold leading-[1.2] tracking-tight text-white sm:mt-14 sm:pl-8 sm:text-3xl lg:text-[2.25rem] text-balance"
          >
            We don’t measure success by the number of Wikipedia pages we publish. We measure success
            by whether the recommendation was the right one.
          </motion.blockquote>
        </div>
      </Container>
    </Section>
  );
}
