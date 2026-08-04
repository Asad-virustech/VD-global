import { useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, ChevronDown } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { Button } from '../../ui/Button';
import { PRIMARY_GOALS } from '../../../../content/contact';
import { FIRM } from '../../../../content/site';
import { submitContactRequest } from '../../../../lib/submitContactRequest';
import type { ContactRequest } from '../../../../lib/submitContactRequest';
import { isEmail, isFilled, isUrl } from '../../../../lib/validation';
import { HONEYPOT_FIELD, honeypotStyle, isLikelyBot } from '../../../../lib/spamGuard';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type FieldErrors = Partial<Record<keyof ContactRequest, string>>;

const EMPTY: ContactRequest = {
  fullName: '',
  company: '',
  email: '',
  website: '',
  industry: '',
  primaryGoal: '',
  challenges: '',
  referral: '',
};

const inputBase =
  'h-12 w-full rounded-xl border border-ink-200 bg-white px-4 text-sm text-ink-900 shadow-soft transition-colors placeholder:text-ink-400 focus:border-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2';

function Field({
  label,
  htmlFor,
  required,
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-ink-700">
        {label}
        {required && (
          <span className="text-teal-600" aria-hidden="true">
            {' '}
            *
          </span>
        )}
        {optional && <span className="font-normal text-ink-400"> (optional)</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactRequest>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [honeypot, setHoneypot] = useState('');
  const mountedAt = useRef(Date.now());

  function update<K extends keyof ContactRequest>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    // Clear a field's error as soon as the user edits it.
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function validate(): boolean {
    const next: FieldErrors = {};
    if (!isFilled(values.fullName)) next.fullName = 'Please enter your name.';
    if (!isFilled(values.company)) next.company = 'Please enter your company.';
    if (!isFilled(values.email)) next.email = 'Please enter your email.';
    else if (!isEmail(values.email)) next.email = 'That email doesn’t look right. Mind checking it?';
    if (values.website && !isUrl(values.website)) {
      next.website = 'Please enter a valid URL, including https://.';
    }
    if (!isFilled(values.primaryGoal)) next.primaryGoal = 'Please choose a goal.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Invisible spam checks — silently drop and show success so bots don't retry.
    if (isLikelyBot(honeypot, mountedAt.current)) {
      setStatus('success');
      return;
    }

    if (!validate()) {
      setStatus('idle');
      return;
    }

    setStatus('submitting');
    try {
      await submitContactRequest({ ...values, submittedAt: new Date().toISOString() });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const firstName = values.fullName.trim().split(' ')[0];
  const describedBy = (key: keyof ContactRequest) => (errors[key] ? `${key}-error` : undefined);

  return (
    <Section id="request" className="surface-base">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Consultation Request"
          title="Tell us about your business."
          description="Share a little context and we'll take it from there, personally, and usually within a business day."
          className="mb-12 sm:mb-14"
        />

        <div className="mx-auto max-w-3xl">
          {status === 'success' ? (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="flex flex-col items-center rounded-3xl border border-teal-200/70 bg-ink-50/50 p-10 text-center sm:p-14"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100">
                <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-ink-900">
                Request received{firstName ? `, ${firstName}` : ''}.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-500 sm:text-base">
                Thank you. We&rsquo;ve got your details and will reply personally, usually within
                one business day. No automated sequence. Just a real conversation.
              </p>
              <div className="mt-7">
                <Button as="link" to="/assessment" size="lg" variant="outline">
                  Explore the Authority Assessment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8 lg:p-10"
            >
              {/* Honeypot — hidden from real users; bots that fill it are dropped. */}
              <div style={honeypotStyle} aria-hidden="true">
                <label htmlFor={HONEYPOT_FIELD}>Company URL</label>
                <input
                  id={HONEYPOT_FIELD}
                  name={HONEYPOT_FIELD}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                <Field label="Full name" htmlFor="fullName" required error={errors.fullName}>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={values.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    placeholder="Jane Doe"
                    aria-invalid={errors.fullName ? true : undefined}
                    aria-describedby={describedBy('fullName')}
                    className={inputBase}
                  />
                </Field>

                <Field label="Company" htmlFor="company" required error={errors.company}>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={values.company}
                    onChange={(e) => update('company', e.target.value)}
                    placeholder="Acme Inc."
                    aria-invalid={errors.company ? true : undefined}
                    aria-describedby={describedBy('company')}
                    className={inputBase}
                  />
                </Field>

                <Field label="Business email" htmlFor="email" required error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="jane@company.com"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={describedBy('email')}
                    className={inputBase}
                  />
                </Field>

                <Field label="Website" htmlFor="website" optional error={errors.website}>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    autoComplete="url"
                    value={values.website}
                    onChange={(e) => update('website', e.target.value)}
                    placeholder="https://company.com"
                    aria-invalid={errors.website ? true : undefined}
                    aria-describedby={describedBy('website')}
                    className={inputBase}
                  />
                </Field>

                <Field label="Industry" htmlFor="industry" optional>
                  <input
                    id="industry"
                    name="industry"
                    type="text"
                    value={values.industry}
                    onChange={(e) => update('industry', e.target.value)}
                    placeholder="e.g. Technology"
                    className={inputBase}
                  />
                </Field>

                <Field label="Primary goal" htmlFor="primaryGoal" required error={errors.primaryGoal}>
                  <div className="relative">
                    <select
                      id="primaryGoal"
                      name="primaryGoal"
                      value={values.primaryGoal}
                      onChange={(e) => update('primaryGoal', e.target.value)}
                      aria-invalid={errors.primaryGoal ? true : undefined}
                      aria-describedby={describedBy('primaryGoal')}
                      className={`${inputBase} appearance-none pr-11 ${
                        values.primaryGoal ? 'text-ink-900' : 'text-ink-400'
                      }`}
                    >
                      <option value="" disabled>
                        Select a goal…
                      </option>
                      {PRIMARY_GOALS.map((goal) => (
                        <option key={goal} value={goal} className="text-ink-900">
                          {goal}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                </Field>
              </div>

              <div className="mt-5 sm:mt-6">
                <Field label="Current challenges" htmlFor="challenges" optional>
                  <textarea
                    id="challenges"
                    name="challenges"
                    rows={4}
                    value={values.challenges}
                    onChange={(e) => update('challenges', e.target.value)}
                    placeholder="What are you hoping to solve or improve?"
                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 shadow-soft transition-colors placeholder:text-ink-400 focus:border-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                  />
                </Field>
              </div>

              <div className="mt-5 sm:mt-6">
                <Field label="How did you hear about us?" htmlFor="referral" optional>
                  <input
                    id="referral"
                    name="referral"
                    type="text"
                    value={values.referral}
                    onChange={(e) => update('referral', e.target.value)}
                    placeholder="A referral, search, social…"
                    className={inputBase}
                  />
                </Field>
              </div>

              {status === 'error' && (
                <p role="alert" className="mt-6 text-sm font-medium text-red-600">
                  Something went wrong sending your request. Please try again, or email us directly
                  at{' '}
                  <a href={`mailto:${FIRM.email}`} className="underline hover:text-red-700">
                    {FIRM.email}
                  </a>
                  .
                </p>
              )}

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button as="button" type="submit" size="lg" variant="primary" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send request
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
                <p className="text-xs leading-relaxed text-ink-400">
                  Complimentary and no obligation. We reply personally.
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </Container>
    </Section>
  );
}
