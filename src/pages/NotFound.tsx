import { ArrowRight, Compass } from 'lucide-react';
import { usePageSeo } from '../../lib/usePageSeo';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  usePageSeo({
    path: '/404',
    title: 'Page not found — VD Globals',
    description: 'The page you were looking for does not exist.',
    noindex: true,
  });

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden surface-night text-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[120px]"
      />
      <Container>
        <div className="relative mx-auto max-w-2xl py-24 text-center">
          <p className="font-heading text-6xl font-bold tracking-tight text-teal-300 sm:text-7xl">
            404
          </p>
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] text-balance">
            This page doesn&rsquo;t exist.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-300 sm:text-lg">
            The link may be out of date, or the page may have moved. Here is the way back.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button as="link" to="/" size="lg" variant="primary">
              Return home
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as="link" to="/assessment" size="lg" variant="glass">
              <Compass className="h-4 w-4" />
              Start your assessment
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
