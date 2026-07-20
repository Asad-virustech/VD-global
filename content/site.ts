import { Linkedin, Twitter, Facebook, Compass, Clock, ShieldCheck } from 'lucide-react';
import type { NavItem, FooterColumn, TrustCard, SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', description: 'Overview of VD Global' },
  { label: 'About', href: '/about', description: 'The firm and its approach' },
  { label: 'Solutions', href: '/solutions', description: 'Advisory services' },
  { label: 'Authority Assessment', href: '/assessment', description: 'Evaluate your authority positioning' },
  { label: 'Knowledge Hub', href: '/knowledge', description: 'Insights and education' },
  { label: 'Case Studies', href: '/case-studies', description: 'Selected engagements' },
  { label: 'Contact', href: '/contact', description: 'Start a conversation' },
];

export const FIRM = {
  name: 'VD Global',
  tagline: 'Authority Advisory',
  description:
    'An Authority Advisory Firm helping founders and businesses build Recognition, Credibility, Authority and Trust through ethical PR, media strategy and Wikipedia advisory.',
  email: 'hello@vdglobals.com',
  location: 'Remote · Global',
};

export const FINAL_CTA = {
  label: 'Ready to Build Your Authority?',
  title: 'Start with Clarity.\nGrow with Confidence.',
  description:
    "Every authority journey begins with understanding where you stand today.\n\nWhether you're preparing for strategic PR, building toward Wikipedia, or strengthening your business credibility, we'll help you identify the right next step.",
  primaryButton: 'Start Your Free Authority Assessment',
  primaryHref: '/assessment',
  secondaryButton: 'Explore the Knowledge Hub',
  secondaryHref: '/knowledge',
};

export const FINAL_CTA_TRUST: TrustCard[] = [
  {
    icon: Compass,
    title: 'Strategic Recommendations',
    description:
      'Every recommendation is tailored to your current position and long-term goals.',
  },
  {
    icon: Clock,
    title: 'Response Within 24 Hours',
    description:
      'Most Authority Assessments receive an initial response within one business day.',
  },
  {
    icon: ShieldCheck,
    title: 'No Obligation',
    description:
      'Our assessment is complimentary and designed to help you make informed decisions.',
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

export const FOOTER_SOCIALS: SocialLink[] = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'X', href: '#', icon: Twitter },
  { label: 'Facebook', href: '#', icon: Facebook },
];

export const FOOTER_COPYRIGHT = '© 2026 VD Global. All Rights Reserved.';
