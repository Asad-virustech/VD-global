import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Download, FileText, Users, CalendarDays, Check } from 'lucide-react';
import { usePageSeo } from '../../lib/usePageSeo';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Prose } from '../components/ui/Prose';
import { ReadingProgress } from '../components/ui/ReadingProgress';
import { HeroBackdrop } from '../components/sections/HeroBackdrop';
import { CtaBand } from '../components/sections/CtaBand';
import { ResourceShelf } from '../components/sections/resources/ResourceShelf';
import {
  RESOURCES,
  getResource,
  resourcePath,
  relatedResources,
} from '../../content/resources';
import NotFound from './NotFound';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

export default function Resource() {
  const { slug } = useParams();
  const resource = slug ? getResource(slug) : undefined;

  // Hooks must run unconditionally; guard the SEO call with a safe fallback.
  usePageSeo(
    resource
      ? {
          path: resourcePath(resource),
          resource: {
            title: resource.title,
            excerpt: resource.excerpt,
            type: resource.type,
            publishedDate: resource.publishedDate,
            updatedDate: resource.updatedDate,
            pdfFile: resource.pdfFile,
          },
        }
      : { path: '/knowledge', noindex: true },
  );

  if (!resource) return <NotFound />;

  const coverVariant = Math.max(0, RESOURCES.findIndex((r) => r.slug === resource.slug));
  const related = relatedResources(resource.slug);

  const meta = [
    { icon: FileText, label: 'Format', value: `${resource.format}, ${resource.pages} pages` },
    { icon: Clock, label: 'Reading time', value: `${resource.readMinutes} min` },
    { icon: Users, label: 'Written for', value: resource.audience },
    {
      icon: CalendarDays,
      label: 'Last updated',
      value: new Date(resource.updatedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    },
  ];

  return (
    <div>
      <ReadingProgress />
      {/* Cinematic cover — the brand's concentric-ring motif on deep night */}
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <HeroBackdrop variant={coverVariant} />
        <div className="container-px relative pb-16 pt-36 sm:pb-20 sm:pt-44">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="mx-auto max-w-3xl"
          >
            <div>
              <Link
                to="/knowledge"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-300 transition-colors hover:text-teal-200"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                Knowledge Hub
              </Link>
            </div>

            <div className="mt-7">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-200 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                {resource.type}
              </span>
            </div>

            <h1 className="mt-6 text-[2.25rem] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-[3rem] lg:text-[3.5rem] text-balance">
              {resource.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
              {resource.excerpt}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button as="a" href={resource.pdfFile} download size="lg" variant="primary">
                <Download className="h-4 w-4" />
                Download the PDF
              </Button>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-ink-300">
                <Clock className="h-4 w-4 text-teal-400" strokeWidth={1.75} />
                {resource.pages} pages · {resource.readMinutes} min read · Free
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body — clean, readable measure on white */}
      <Section className="surface-base">
        <Container>
          <div className="mx-auto max-w-2xl">
            <motion.div {...fadeUp}>
              <Prose blocks={resource.intro} />
            </motion.div>

            {/* What's inside */}
            <motion.div
              {...fadeUp}
              className="mt-14 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card"
            >
              <div className="border-b border-ink-100 px-7 py-5 sm:px-8">
                <h2 className="text-lg font-semibold tracking-tight text-ink-900">
                  What&apos;s inside
                </h2>
              </div>
              <ul className="divide-y divide-ink-100">
                {resource.whatsInside.map((item) => (
                  <li key={item} className="flex items-start gap-4 px-7 py-4 sm:px-8">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-base leading-relaxed text-ink-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resource metadata */}
            <motion.dl
              {...fadeUp}
              className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 sm:grid-cols-2"
            >
              {meta.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white p-6 sm:p-7">
                  <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                    <Icon className="h-4 w-4 text-teal-600" strokeWidth={1.75} />
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-700">{value}</dd>
                </div>
              ))}
            </motion.dl>

            {/* Download CTA card */}
            <motion.div
              {...fadeUp}
              className="mt-8 flex flex-col items-start gap-5 rounded-3xl border border-teal-100 bg-teal-50/60 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8"
            >
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-ink-900">
                  Download {resource.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  Free, no sign-up required. {resource.format}, {resource.pages} pages.
                </p>
              </div>
              <Button as="a" href={resource.pdfFile} download size="lg" variant="primary" className="shrink-0">
                <Download className="h-4 w-4" />
                Download the PDF
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Related resources */}
      {related.length > 0 && (
        <Section className="surface-alt">
          <Container>
            <SectionHeading
              align="center"
              eyebrow="More resources"
              title="Keep going."
              description="Other practical tools from the same body of thinking, free to download."
              className="mb-12 sm:mb-14"
            />
            <ResourceShelf resources={related} />
          </Container>
        </Section>
      )}

      <CtaBand
        eyebrow="Where authority begins"
        title="See where you stand today."
        description="An honest read of your authority across reputation, search, credibility, and media, with a clear next step. Complimentary, no obligation."
        primary={{ label: 'Start your free authority assessment', to: '/assessment' }}
        secondary={{ label: 'Talk with our team', to: '/contact' }}
      />
    </div>
  );
}
