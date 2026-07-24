import type { LucideIcon } from 'lucide-react';
import {
  MessageCircle,
  Search,
  Route,
  Mail,
  Linkedin,
  Clock,
  MapPin,
  Timer,
  Inbox,
  ClipboardCheck,
  PhoneCall,
  MessagesSquare,
  FileText,
} from 'lucide-react';
import { FIRM } from './site';

/**
 * Contact content is data-driven so it's easy to update later and can move to a
 * CMS without touching components. Real business details are intentional
 * placeholders during the framework phase (see `placeholder` / `note`).
 */

export type WorkStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const HOW_WE_WORK: WorkStep[] = [
  {
    icon: MessageCircle,
    title: 'Initial Conversation',
    description: 'We start by understanding your business, your goals, and your current authority.',
  },
  {
    icon: Search,
    title: 'Research & Assessment',
    description: 'We review your visibility, credibility, and the authority opportunities available to you.',
  },
  {
    icon: Route,
    title: 'Strategic Recommendations',
    description: 'We present practical recommendations tailored to your business — no pressure, no pitch.',
  },
];

export type ContactMethod = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  /** Small supporting line, e.g. to flag placeholder details. */
  note?: string;
  /** True when the value is a framework-phase placeholder. */
  placeholder?: boolean;
};

export const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: FIRM.email,
    href: `mailto:${FIRM.email}`,
    note: 'We reply personally, usually within a day.',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'VD Global',
    href: '#',
    note: 'Profile link added in production.',
    placeholder: true,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri · 9:00–18:00',
    note: 'Placeholder hours — confirmed in production.',
    placeholder: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: FIRM.location,
    note: 'Working with clients worldwide.',
  },
  {
    icon: Timer,
    label: 'Response Time',
    value: 'Within 24 hours',
    note: 'Most requests receive an initial reply next business day.',
  },
];

export type NextStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const WHAT_HAPPENS_NEXT: NextStep[] = [
  {
    icon: Inbox,
    title: 'Request Received',
    description: 'Your request arrives with us directly — no automated funnel, no queue of salespeople.',
  },
  {
    icon: ClipboardCheck,
    title: 'Review',
    description: 'We read what you shared and get a first sense of where you stand and what would help.',
  },
  {
    icon: PhoneCall,
    title: 'Initial Contact',
    description: 'We reach out to introduce ourselves and find a time that works for a conversation.',
  },
  {
    icon: Search,
    title: 'Assessment',
    description: 'Where useful, we run an Authority Assessment to ground the discussion in evidence.',
  },
  {
    icon: MessagesSquare,
    title: 'Strategy Call',
    description: 'We talk through your goals and current position in plain, practical terms.',
  },
  {
    icon: FileText,
    title: 'Recommendations',
    description: 'You leave with clear, honest recommendations — whether or not we work together.',
  },
];

export type ContactFaq = {
  question: string;
  answer: string;
};

export const CONTACT_FAQS: ContactFaq[] = [
  {
    question: 'How quickly will you respond?',
    answer:
      'Most requests receive an initial response within one business day. We reply personally rather than through an automated sequence.',
  },
  {
    question: 'Is the first consultation free?',
    answer:
      'Yes. The initial conversation and the Authority Assessment are complimentary, with no obligation to continue. Our aim is to help you make an informed decision.',
  },
  {
    question: 'Do you work internationally?',
    answer:
      'Yes. We’re a remote, globally oriented firm and work with founders and businesses across regions. Authority and reputation translate across borders.',
  },
  {
    question: 'Can startups work with VD Global?',
    answer:
      'Often, yes — though the right first step for an early-stage company is usually different from an established one. We’ll be candid about what’s worth doing now and what’s better to revisit later.',
  },
  {
    question: 'Do I need an Authority Assessment first?',
    answer:
      'Not necessarily, but it’s usually the most useful starting point. It grounds our recommendations in evidence rather than assumptions, and it’s free.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'The principles of authority apply broadly, so we work across technology, finance, healthcare, professional services, and with authors and founders. The strategy adapts to your context.',
  },
  {
    question: 'Can engagements be remote?',
    answer:
      'Entirely. Our work is remote by default, and the process — conversation, assessment, strategy — is designed to run smoothly wherever you are.',
  },
  {
    question: 'What information should I prepare?',
    answer:
      'Just a sense of your goals and any relevant links (your site, key profiles, notable coverage). The more context you share, the more specific our recommendations can be.',
  },
];

export const PRIMARY_GOALS: string[] = [
  'I’m not sure yet — I’d like guidance',
  'Authority Assessment',
  'Strategic PR & media',
  'Wikipedia readiness',
  'Digital reputation',
  'Thought leadership',
  'Executive positioning',
  'Something else',
];
