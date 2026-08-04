import { AlertCircle } from 'lucide-react';
import { usePageSeo } from '../../../lib/usePageSeo';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { FIRM } from '../../../content/site';

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
  /** Structural sections. Bodies are neutral scaffolding, not binding policy. */
  sections: LegalSection[];
};

/**
 * Shared layout for the scaffolded legal pages. It deliberately contains no
 * fabricated policy language: a clear draft notice, the section structure a real
 * document of this kind will use, and a neutral placeholder line per section.
 * Replace the section bodies with counsel-reviewed copy before launch.
 */
export function LegalPage({ title, path, summary, sections }: LegalPageProps) {
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

          {/* Draft notice — honest about status, no invented policy. */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-teal-200/70 bg-teal-50/60 p-5 text-sm leading-relaxed text-ink-600">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" strokeWidth={1.75} />
            <p>
              This page is a working draft. The final {title.toLowerCase()} is being prepared with
              legal counsel and will be published before launch. It is not yet a binding document.
              Questions in the meantime? Email{' '}
              <a
                href={`mailto:${FIRM.email}`}
                className="font-medium text-teal-700 underline hover:text-teal-800"
              >
                {FIRM.email}
              </a>
              .
            </p>
          </div>

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
            Status: draft, pending legal review. Last updated on publication.
          </p>
        </div>
      </Container>
    </Section>
  );
}
