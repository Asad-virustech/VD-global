import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FIRM, FOOTER_NAV, FOOTER_SOCIALS, FOOTER_COPYRIGHT } from '../../../content/site';
import { Container } from '../ui/Container';

const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50/40">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-12 lg:grid-cols-12 lg:gap-10"
        >
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5" aria-label={`${FIRM.name} home`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-white">
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M9 10.5 L16 22 L23 10.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-heading text-lg font-bold tracking-tight text-ink-900">
                {FIRM.name}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-500">
              Helping businesses build recognition, credibility, authority, and trust through
              ethical advisory and strategic media guidance.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-ink-500">
              <a
                href={`mailto:${FIRM.email}`}
                className="link-underline inline-flex items-center gap-2 hover:text-teal-700"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                {FIRM.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" strokeWidth={1.75} />
                {FIRM.location}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-4 lg:col-start-7" aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
              {FOOTER_NAV.title}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
              {FOOTER_NAV.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="link-underline text-sm text-ink-600 hover:text-teal-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="lg:col-span-3 lg:col-start-11">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
              Connect
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {FOOTER_SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700"
                  >
                    <social.icon className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-200/70 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>{FOOTER_COPYRIGHT}</p>
          <p className="text-ink-400">{FIRM.tagline} · Ethical PR &amp; Media Strategy</p>
        </div>
      </Container>
    </footer>
  );
}
