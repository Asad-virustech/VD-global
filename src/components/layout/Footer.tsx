import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { FIRM, FOOTER_NAV, FOOTER_SOCIALS, FOOTER_LEGAL, FOOTER_COPYRIGHT } from '../../../content/site';
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
      {/* Footer atmosphere — its OWN ring signature: rings rise from the base
          (a mirror of the top-radiating rings on CTAs and dark sections), with a
          warm glow at the bottom, so the footer reads as a distinct moment. */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-50" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'repeating-radial-gradient(circle at 50% 122%, rgba(45,212,191,0.08) 0px, rgba(45,212,191,0.08) 1.5px, transparent 1.5px, transparent 154px)',
          WebkitMaskImage: 'radial-gradient(ellipse 92% 108% at 50% 100%, #000 24%, transparent 86%)',
          maskImage: 'radial-gradient(ellipse 92% 108% at 50% 100%, #000 24%, transparent 86%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72"
        style={{ background: 'radial-gradient(65% 100% at 50% 100%, rgba(20,184,166,0.13) 0%, transparent 72%)' }}
      />
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
            {FOOTER_SOCIALS.length > 0 && (
              <ul className="mt-5 flex gap-2.5">
                {FOOTER_SOCIALS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-ink-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-teal-300"
                    >
                      <social.icon className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>

        {/* Baseline */}
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/10 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <p>{FOOTER_COPYRIGHT}</p>
            <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {FOOTER_LEGAL.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="transition-colors duration-200 hover:text-teal-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
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
