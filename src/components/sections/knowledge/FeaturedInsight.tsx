import { motion } from 'framer-motion';
import { ArrowRight, Clock, Star } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { Button } from '../../ui/Button';
import { ARTICLES, readMinutes, articlePath } from '../../../../content/articles';

const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];

export function FeaturedInsight() {
  if (!featured) return null;

  return (
    <Section className="surface-alt">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Featured Insight"
          title="Start here."
          className="mb-12 sm:mb-14"
        />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600"
          />
          <div className="grid lg:grid-cols-5">
            {/* Editorial panel — the "authority ripple": concentric rings radiating
                from a bright teal core, the brand motif as a stunning thumbnail. */}
            <div className="relative hidden overflow-hidden bg-ink-950 p-10 lg:col-span-2 lg:flex lg:flex-col lg:justify-between">
              {/* Bold concentric rings */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    'repeating-radial-gradient(circle at 50% 33%, rgba(45,212,191,0.20) 0px, rgba(45,212,191,0.20) 2px, transparent 2px, transparent 56px)',
                  WebkitMaskImage: 'radial-gradient(circle at 50% 33%, #000 22%, transparent 82%)',
                  maskImage: 'radial-gradient(circle at 50% 33%, #000 22%, transparent 82%)',
                }}
              />
              {/* Bright teal core bloom */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(50% 42% at 50% 30%, rgba(20,184,166,0.55) 0%, rgba(13,148,136,0.16) 42%, transparent 72%)',
                }}
              />
              {/* Secondary glow for depth */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-teal-500/20 blur-[80px]"
              />
              {/* Film grain */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-noise opacity-40" />

              <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-ink-950/40 px-3 py-1 text-xs font-medium text-teal-200 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-md">
                <Star className="h-3.5 w-3.5" strokeWidth={2} />
                Editor’s Pick
              </span>
              <p className="relative mt-8 text-lg font-semibold leading-snug text-white text-balance drop-shadow-[0_1px_12px_rgba(2,6,23,0.5)]">
                “Authority is what remains after the attention fades.”
              </p>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 lg:col-span-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                  {featured.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-400">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {readMinutes(featured)} min read
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold leading-snug tracking-tight text-ink-900 sm:text-3xl text-balance">
                {featured.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                {featured.excerpt}
              </p>

              <div className="mt-8">
                <Button as="link" to={articlePath(featured)} size="lg" variant="primary">
                  Continue reading
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.article>
      </Container>
    </Section>
  );
}
