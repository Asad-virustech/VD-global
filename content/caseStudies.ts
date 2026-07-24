import type { LucideIcon } from 'lucide-react';
import {
  Cpu,
  Brain,
  Landmark,
  HeartPulse,
  Briefcase,
  Building2,
  PenTool,
  Rocket,
  Ear,
  Search,
  Target,
  Gauge,
  RefreshCw,
  Fingerprint,
  Puzzle,
  Repeat,
  GraduationCap,
  TrendingUp,
} from 'lucide-react';

/**
 * All Case Studies content is data-driven so the page can later be backed by a
 * CMS or Markdown without changing the components. Presentational components
 * map over these structures; they hold no hardcoded copy.
 */

export type CaseStudy = {
  slug: string;
  industry: string;
  /** Headline framed as the authority challenge. */
  title: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  // Long-form fields (used by the featured story). Qualitative only —
  // no invented revenue, percentages, or metrics.
  challenge?: string;
  approach?: string;
  outcome?: string;
  insights?: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'trusted-product-unknown-name',
    industry: 'B2B Technology',
    title: 'Turning a Respected Product Into a Recognized Name',
    summary:
      'Trusted by its customers, invisible to everyone evaluating it for the first time. How we closed the gap between reputation and recognition.',
    tags: ['Search Credibility', 'Strategic PR', 'Positioning'],
    featured: true,
    challenge:
      'A B2B software company was trusted by the customers who already knew it, yet nearly invisible to everyone evaluating it for the first time. Search results were thin, and the coverage that existed didn’t reflect the quality of the product.',
    approach:
      'We began with an Authority Assessment to map the gap between reputation and recognition, then prioritized a consistent public narrative and credible media before considering anything more ambitious.',
    outcome:
      'The company established a credible first page of search, earned coverage in recognized industry publications, and gave prospects verifiable reasons to trust it earlier in the buying process.',
    insights: [
      'Reputation and recognition are two different problems.',
      'Consistency across profiles did more than any single placement.',
      'Credibility shortened the sales conversation.',
    ],
  },
  {
    slug: 'fintech-regulated-trust',
    industry: 'Finance',
    title: 'Building Trust in a Regulated Market',
    summary:
      'A fintech firm needed public credibility that matched the confidence regulators and partners already placed in it behind closed doors.',
    tags: ['Digital Reputation', 'Positioning'],
  },
  {
    slug: 'healthcare-sensitive-expertise',
    industry: 'Healthcare',
    title: 'Establishing Authority Around Sensitive Expertise',
    summary:
      'A healthcare founder’s expertise was real but hard for the public to verify. We focused on credible, responsible visibility.',
    tags: ['Executive Branding', 'Thought Leadership'],
  },
  {
    slug: 'ai-beyond-the-hype',
    industry: 'Artificial Intelligence',
    title: 'Standing Out Beyond the Hype',
    summary:
      'Genuine innovation risked being lost in a noisy category. The work was about earning trust, not adding to the noise.',
    tags: ['Media Visibility', 'Positioning'],
  },
  {
    slug: 'author-notability-bar',
    industry: 'Publishing',
    title: 'Meeting the Notability Bar Honestly',
    summary:
      'An author wanted a Wikipedia presence but wasn’t sure the sourcing supported it yet. We assessed readiness before acting.',
    tags: ['Wikipedia', 'Notability'],
  },
  {
    slug: 'consultancy-reputation-as-product',
    industry: 'Professional Services',
    title: 'When Reputation Is the Product',
    summary:
      'A consultancy’s public reputation lagged behind the caliber of its work. We aligned perception with the substance behind it.',
    tags: ['Authority Strategy', 'Search Credibility'],
  },
  {
    slug: 'real-estate-local-to-recognized',
    industry: 'Real Estate',
    title: 'From Local Reputation to Recognized Brand',
    summary:
      'Well known locally, unproven more broadly. The goal was credible recognition beyond the firm’s immediate market.',
    tags: ['Digital Reputation', 'Strategic PR'],
  },
];

export type IndustryItem = {
  icon: LucideIcon;
  name: string;
  challenge: string;
};

export const INDUSTRIES: IndustryItem[] = [
  { icon: Cpu, name: 'Technology', challenge: 'Turning proven products into recognized, trusted names.' },
  { icon: Brain, name: 'Artificial Intelligence', challenge: 'Earning credibility in a category crowded with claims.' },
  { icon: Landmark, name: 'Finance', challenge: 'Building public trust that matches regulatory rigor.' },
  { icon: HeartPulse, name: 'Healthcare', challenge: 'Communicating sensitive expertise responsibly and credibly.' },
  { icon: Briefcase, name: 'Professional Services', challenge: 'Making reputation reflect the quality of the work.' },
  { icon: Building2, name: 'Real Estate', challenge: 'Extending local standing into broader recognition.' },
  { icon: PenTool, name: 'Authors', challenge: 'Establishing the notability serious work deserves.' },
  { icon: Rocket, name: 'Founders', challenge: 'Building personal authority alongside the business.' },
];

export type FrameworkStage = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const PROBLEM_FRAMEWORK: FrameworkStage[] = [
  { icon: Ear, title: 'Understand', description: 'We start with the situation — goals, market, and what recognition should mean here.' },
  { icon: Search, title: 'Research', description: 'We examine how the business appears today across search, media, and the public record.' },
  { icon: Target, title: 'Strategy', description: 'We define the path that fits the position — what to prioritize, and what to hold.' },
  { icon: Rocket, title: 'Execution', description: 'We act on the agreed priorities with ethical, deliberately chosen initiatives.' },
  { icon: Gauge, title: 'Measurement', description: 'We track what genuinely changes in perception, credibility, and visibility.' },
  { icon: RefreshCw, title: 'Continuous Improvement', description: 'We refine the approach as reputation, goals, and the market evolve.' },
];

export type Lesson = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const LESSONS: Lesson[] = [
  { icon: Fingerprint, title: 'Every journey is different', description: 'Two businesses rarely start from the same place or need the same next step.' },
  { icon: Puzzle, title: 'No universal solution exists', description: 'The right move depends on context — copying someone else’s playbook rarely works.' },
  { icon: Repeat, title: 'Long-term consistency wins', description: 'Steady, credible signals outperform any single burst of attention.' },
  { icon: GraduationCap, title: 'Education creates better decisions', description: 'Clients who understand the reasoning make stronger long-term choices.' },
  { icon: TrendingUp, title: 'Trust compounds over time', description: 'Reputation built honestly keeps returning value long after the work is done.' },
];

export type CaseStudyFaq = {
  question: string;
  answer: string;
};

export const CASE_STUDY_FAQS: CaseStudyFaq[] = [
  {
    question: 'Can my business become a case study?',
    answer:
      'Sometimes, and only ever with your explicit permission. Many engagements stay entirely confidential. When a client is open to sharing, we focus on the thinking and approach rather than exposing sensitive details.',
  },
  {
    question: 'Are results guaranteed?',
    answer:
      'No. Media coverage, search outcomes, and Wikipedia depend on independent parties, so no one can ethically guarantee them. What we guarantee is honest assessment, sound strategy, and ethical execution.',
  },
  {
    question: 'How long do authority strategies take?',
    answer:
      'Authority compounds rather than spikes. Some signals shift within weeks; durable recognition usually develops over months. We set realistic expectations from the start.',
  },
  {
    question: 'Can sensitive information remain confidential?',
    answer:
      'Always. Confidentiality is the default. Nothing about your business is shared publicly without your clear, specific consent — and much of our work is never published at all.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'By meaningful change in how you’re perceived and verified — the quality and consistency of what people find, not vanity metrics. We favour honest, qualitative assessment over inflated numbers.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'The principles of authority apply broadly, so we work across technology, finance, healthcare, professional services, real estate, and with authors and founders. The strategy adapts to each context.',
  },
];
