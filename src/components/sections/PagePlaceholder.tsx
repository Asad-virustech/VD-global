import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';
import { PageHeader } from '../sections/PageHeader';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { useDocumentMeta } from '../../../lib/useDocumentMeta';

type PagePlaceholderProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  badge?: string;
  metaTitle: string;
  metaDescription: string;
  ctaTo?: string;
  ctaLabel?: string;
};

export function PagePlaceholder({
  eyebrow,
  title,
  description,
  badge,
  metaTitle,
  metaDescription,
  ctaTo = '/contact',
  ctaLabel = 'Talk to the team',
}: PagePlaceholderProps) {
  useDocumentMeta({ title: metaTitle, description: metaDescription });

  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description} badge={badge} />
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-dashed border-ink-200 bg-ink-50/50 p-10 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
              <Construction className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-xl font-semibold text-ink-900">Content arriving soon</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">
              This page is part of an upcoming sprint. The structure, navigation and design
              system are in place — the full content lands next.
            </p>
            <div className="mt-6">
              {ctaTo.startsWith('http') || ctaTo.startsWith('mailto:') ? (
                <Button as="a" href={ctaTo} size="md" variant="primary">
                  {ctaLabel}
                </Button>
              ) : (
                <Button as="link" to={ctaTo} size="md" variant="primary">
                  {ctaLabel}
                </Button>
              )}
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
