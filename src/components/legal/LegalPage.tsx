import { usePageSeo } from '../../../lib/usePageSeo';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';

export type LegalSection = {
  heading: string;
  body: string;
};

type LegalPageProps = {
  /** Page name, e.g. "Privacy Policy". */
  title: string;
  /** Route path, e.g. "/privacy". Drives SEO metadata from content/seo.ts. */
  path: string;
  /** One-line summary shown under the title. */
  summary: string;
  /** Date the document was last revised, shown at the foot of the page. */
  effectiveDate: string;
  /** Document sections, each a heading and a short paragraph. */
  sections: LegalSection[];
};

/**
 * Shared layout for the legal pages (Privacy, Terms, Cookies). The structure is
 * fixed; each page supplies its own production copy and effective date. Bodies
 * describe the site's actual practices in plain English.
 */
export function LegalPage({ title, path, summary, effectiveDate, sections }: LegalPageProps) {
  usePageSeo({ path });

  return (
    <Section className="surface-base pt-36 sm:pt-44">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Legal</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl text-balance">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{summary}</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-500">{section.body}</p>
              </section>
            ))}
          </div>

          <p className="mt-14 border-t border-ink-100 pt-6 text-sm text-ink-400">
            Last updated: {effectiveDate}.
          </p>
        </div>
      </Container>
    </Section>
  );
}
