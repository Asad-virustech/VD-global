import { Linkedin, Compass, Clock, ShieldCheck } from 'lucide-react';
import type { NavItem, FooterColumn, FooterLink, TrustCard, SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', description: 'Overview of VD Global' },
  { label: 'About', href: '/about', description: 'The firm and its approach' },
  { label: 'Solutions', href: '/solutions', description: 'Advisory services' },
  { label: 'Authority Assessment', href: '/assessment', description: 'Evaluate your authority positioning' },
  { label: 'Knowledge Hub', href: '/knowledge', description: 'Insights and education' },
  { label: 'Case Studies', href: '/case-studies', description: 'Selected engagements' },
  { label: 'Contact', href: '/contact', description: 'Start a conversation' },
];

/**
 * Single source of truth for company contact details. Every surface (footer,
 * contact methods, forms) consumes these values — update them here only.
 */
export const FIRM = {
  name: 'VD Global',
  tagline: 'Authority Advisory',
  description:
    'An authority advisory firm helping founders and businesses build recognition, credibility, and trust through ethical PR, media strategy, and Wikipedia advisory.',
  email: 'vdglobals365@gmail.com',
  phone: '+1 (469) 956-5230',
  phoneHref: 'tel:+14699565230',
  location: 'Remote · Global · Texas, USA',
  /** Full label for display. */
  responseTime: 'Within 24–48 hours',
  /** Bare window for embedding in trust chips ("Response within {responseWindow}"). */
  responseWindow: '24–48 hours',
};

export const FINAL_CTA = {
  label: 'Begin with an assessment',
  title: 'Know where you stand.\nBuild from there.',
  description:
    "Every engagement begins with understanding where you stand today.\n\nWhether you're preparing for strategic PR, working toward Wikipedia, or strengthening your credibility, we'll help you find the right next step.",
  primaryButton: 'Start your free authority assessment',
  primaryHref: '/assessment',
  secondaryButton: 'Explore the Knowledge Hub',
  secondaryHref: '/knowledge',
};

export const FINAL_CTA_TRUST: TrustCard[] = [
  {
    icon: Compass,
    title: 'Strategic recommendations',
    description:
      'Every recommendation is grounded in your current position and long-term goals.',
  },
  {
    icon: Clock,
    title: `Response within ${FIRM.responseWindow}`,
    description:
      'Most Authority Assessments receive an initial response within one to two business days.',
  },
  {
    icon: ShieldCheck,
    title: 'No obligation',
    description:
      'The assessment is complimentary, and meant to help you make an informed decision.',
  },
];

export const FOOTER_NAV: FooterColumn = {
  title: 'Navigation',
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Authority Assessment', href: '/assessment' },
    { label: 'Knowledge Hub', href: '/knowledge' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
};

/**
 * Real, public social profiles only. The footer hides the block entirely when
 * this is empty, so no dead links ever ship.
 */
export const FOOTER_SOCIALS: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vdglobals/', icon: Linkedin },
];

/** Legal navigation shown in the footer baseline. Pages are scaffolded routes. */
export const FOOTER_LEGAL: FooterLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
];

export const FOOTER_COPYRIGHT = '© 2026 VD Global. All rights reserved.';
