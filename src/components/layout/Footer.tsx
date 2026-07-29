import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { FIRM, FOOTER_NAV, FOOTER_SOCIALS, FOOTER_COPYRIGHT } from '../../../content/site';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

/** The three brand pillars, set as a compact inline signature under the mark. */
const PILLARS = ['Authority', 'Recognition', 'Trust'];

const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink-950 text-white">
      {/* Cinematic lighting — faint teal glow + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 surface-night-dawn" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light opacity-30" aria-hidden="true" />
      {/* Polished top edge — teal hairline over a faint highlight */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/55 to-transparent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-px h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
      />

      <Container className="py-12 sm:py-14">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-10 lg:grid-cols-12 lg:gap-8"
        >
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-300">
              {PILLARS.map((pillar, i) => (
                <span key={pillar} className="flex items-center gap-2.5">
                  {pillar}
                  {i < PILLARS.length - 1 && (
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-teal-400/50" />
                  )}
                </span>
              ))}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Building recognition, credibility, authority, and trust through ethical advisory
              and strategic media guidance.
            </p>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-4 lg:col-start-6" aria-label="Footer">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {FOOTER_NAV.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-ink-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + social */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">
              Connect
            </h3>
            <div className="mt-4 space-y-2.5 text-sm text-ink-300">
              <a
                href={`mailto:${FIRM.email}`}
                className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-teal-300"
              >
                <Mail className="h-4 w-4 text-teal-300" strokeWidth={1.75} />
                {FIRM.email}
              </a>
              <p className="flex items-center gap-2 text-ink-400">
                <MapPin className="h-4 w-4 text-teal-300" strokeWidth={1.75} />
                {FIRM.location}
              </p>
            </div>
            <ul className="mt-5 flex gap-2.5">
              {FOOTER_SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-ink-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-teal-300"
                  >
                    <social.icon className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Baseline */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>{FOOTER_COPYRIGHT}</p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 font-medium text-ink-300 transition-colors duration-200 hover:text-teal-300"
          >
            Start a conversation
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
