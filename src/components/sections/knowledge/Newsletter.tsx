import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Client-side only — no backend. We simply acknowledge the intent locally.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-teal-200/70 bg-ink-50/50 p-8 text-center sm:p-12 lg:p-14"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-100/50 blur-[90px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100">
              <Mail className="h-5 w-5" strokeWidth={1.75} />
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl text-balance">
              Stay Ahead of the Conversation.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              Occasional, considered insights on authority, reputation and credibility — sent only
              when we have something genuinely worth your time.
            </p>

            {submitted ? (
              <p
                role="status"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-5 py-3 text-sm font-medium text-teal-800"
              >
                <CheckCircle2 className="h-4 w-4" strokeWidth={2} />
                Thank you — you&rsquo;re on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                noValidate
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-12 w-full flex-1 rounded-full border border-ink-200 bg-white px-5 text-sm text-ink-900 shadow-soft transition-colors placeholder:text-ink-400 focus:border-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-teal-700 px-6 text-sm font-medium text-white shadow-soft transition-all duration-200 hover:bg-teal-800 hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}

            <p className="mt-5 inline-flex items-center gap-1.5 text-xs text-ink-400">
              <Lock className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              No spam. Unsubscribe anytime. We never share your email.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
