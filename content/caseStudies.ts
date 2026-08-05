import type { LucideIcon } from 'lucide-react';
import {
  Ear,
  Search,
  Stethoscope,
  Lightbulb,
  Rocket,
  RefreshCw,
  Fingerprint,
  Puzzle,
  Repeat,
  GraduationCap,
  TrendingUp,
} from 'lucide-react';

/**
 * Case Studies content. Every engagement here is real advisory work, told as a
 * consulting summary rather than a marketing story. The structure is deliberate:
 * Situation → Discovery → Real problem → Recommendation → Execution → Outcome →
 * Lesson. Outcomes are qualitative and truthful; no fabricated metrics, no
 * invented clients, no exaggerated claims. Identifying details are withheld
 * where a client is not named.
 */

export type CaseStudy = {
  slug: string;
  industry: string;
  /** How the client is identified publicly (a first name, a company, or withheld). */
  client: string;
  title: string;
  /** One-line framing, used above the detailed narrative. */
  summary: string;
  tags: string[];
  situation: string;
  discovery: string;
  realProblem: string;
  recommendation: string;
  /** The concrete work, as discrete steps. */
  execution: string[];
  outcome: string;
  lesson: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'one-wikipedia-article-should-have-been-two',
    industry: 'Technology Leadership',
    client: 'Stephen',
    title: 'When one Wikipedia article should have been two',
    summary:
      'A client asked for a single Wikipedia article. The research showed that publishing one would have weakened two subjects that each deserved to stand on their own.',
    tags: ['Wikipedia', 'Information Architecture', 'Notability'],
    situation:
      'A technology leader came to us with a specific, well-defined request: a single Wikipedia article covering both himself and his company. On the surface it read as a straightforward notability question, and the obvious task was simply to assess whether the sourcing would support a page.',
    discovery:
      'As we audited the sources, a more interesting picture emerged. The biography leaned heavily on the company; much of what made the individual notable was really the company’s achievement. At the same time, the company had accumulated enough independent coverage to stand as a notable subject in its own right. Two distinct subjects were being compressed into one.',
    realProblem:
      'The real issue was not whether a Wikipedia article was possible. It was information architecture. A single mixed article would have blurred two subjects together and left each weaker than it needed to be: a biography propped up by the company, and a company reduced to a footnote in someone’s profile. The request and the right answer had quietly diverged.',
    recommendation:
      'We recommended against the single article the client had asked for. Instead, we proposed separating the biography from the company into two independent articles, each built on its own sources, and cross-referenced correctly so that each could stand on its own while reinforcing the other.',
    execution: [
      'A full audit of the available independent sources for each subject.',
      'A clear division of which references supported the person and which supported the company.',
      'Two separate article structures, each meeting Wikipedia’s notability expectations independently.',
      'A cross-linking strategy so the two articles referenced each other without either depending on the other.',
    ],
    outcome:
      'The result was two stronger subjects rather than one diluted one. Each article rested on its own independent sourcing and aligned with Wikipedia’s editorial expectations, giving both the person and the company a durable, defensible presence instead of a single fragile one.',
    lesson:
      'Sometimes solving the client’s request means changing the request. The job was not to deliver the article that was asked for, but the structure that was actually correct.',
  },
  {
    slug: 'the-client-wanted-wikipedia-the-business-needed-visibility',
    industry: 'Logistics',
    client: 'Jet Delivery',
    title: 'The client wanted Wikipedia. The business needed visibility.',
    summary:
      'A logistics company believed a Wikipedia article would drive traffic and leads. The audit showed it would not survive, and that Wikipedia was never really the objective.',
    tags: ['Strategic PR', 'Search Credibility', 'Media Visibility'],
    situation:
      'Jet Delivery, a logistics business, approached us convinced that a Wikipedia article was the answer. The reasoning was familiar: a Wikipedia presence would generate website traffic, raise visibility, and bring in leads.',
    discovery:
      'Our Wikipedia audit told a different story. The independent coverage required to sustain a page did not yet exist, and an article created regardless would have been unlikely to survive review. A second, more important discovery sat underneath the first: Wikipedia was never really the objective. Traffic was. Lead generation was. Recognition was. Wikipedia had simply become the proxy the client reached for.',
    realProblem:
      'The real problem was a business one, not a Wikipedia one. The company needed to be found, trusted, and chosen by the right audience. A Wikipedia article, even if it had been viable, was a poor instrument for that goal. Pursuing it would have spent effort on the wrong target while leaving the actual need unmet.',
    recommendation:
      'We advised against pursuing Wikipedia. In its place, we recommended a strategy aimed directly at the business objective: strategic PR, placement in authority publications, editorial coverage built to be found in search, and relevant, credible backlinks that supported both visibility and reputation.',
    execution: [
      'Placement across several credible, industry-relevant authority publications.',
      'Editorial coverage focused on the logistics audience the business actually served.',
      'Credible editorial backlinks that strengthened both search visibility and reputation.',
    ],
    outcome:
      'The business achieved what it had actually wanted all along. Visibility improved, relevant traffic increased, and the company reached its audience, without a Wikipedia article, and without spending effort on a page that would not have lasted.',
    lesson:
      'The requested solution is not always the correct solution. The responsibility is to solve the business problem, not to deliver the requested deliverable.',
  },
  {
    slug: 'the-consultation-that-became-a-client',
    industry: 'Professional Services',
    client: 'Withheld',
    title: 'The consultation that became a client',
    summary:
      'A prospective client wanted Wikipedia but did not meet the notability bar. Instead of selling a service, we gave an honest assessment at no charge. Trust followed.',
    tags: ['Authority Strategy', 'Notability', 'Education'],
    situation:
      'A prospective client in professional services came to us wanting a Wikipedia article. Like many, they were confident it was the right move and ready to proceed.',
    discovery:
      'A notability assessment showed the requirements were not met; the independent sourcing simply was not there yet. Just as importantly, it became clear that the client did not fully understand how Wikipedia works, what notability means, why it matters, or why a page created without it tends not to survive.',
    realProblem:
      'The real gap was not a missing article. It was missing understanding. Selling a service into that gap would have been easy and wrong. What the client needed first was to see their own position clearly enough to make a good decision.',
    recommendation:
      'Rather than sell a service, we chose to educate. We explained each requirement in plain terms, carried out a complete Authority Assessment, documented the findings honestly, and set out what would need to change before Wikipedia became realistic, at no charge.',
    execution: [
      'An honest consultation about how Wikipedia notability actually works.',
      'A complete Authority Assessment of the client’s current standing.',
      'A documented report of the findings, provided at no charge.',
      'A clear roadmap and readiness guidance for what to build first.',
    ],
    outcome:
      'After receiving the report, the client voluntarily paid $100, unprompted, because they felt the advice had created real value. What began as a declined request became a relationship, built on trust rather than a transaction.',
    lesson:
      'Trust is often earned before a contract exists. The honest assessment, given freely, was worth more than the service we chose not to sell.',
  },
];

export type FrameworkStage = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** How every engagement begins — the sequence behind all three stories. */
export const PROBLEM_FRAMEWORK: FrameworkStage[] = [
  { icon: Ear, title: 'Understand', description: 'We start with the situation: the client’s goals, their market, and what recognition should actually mean for them.' },
  { icon: Search, title: 'Research', description: 'We examine how the business appears today across search, media, and the independent public record.' },
  { icon: Stethoscope, title: 'Diagnose', description: 'We identify the real problem beneath the request, which is often not the one the client came in with.' },
  { icon: Lightbulb, title: 'Recommend', description: 'We advise the course that fits the situation, even when it differs from what was originally asked for.' },
  { icon: Rocket, title: 'Execute', description: 'We act on the agreed priorities with ethical, deliberately chosen initiatives.' },
  { icon: RefreshCw, title: 'Review', description: 'We track what genuinely changes in perception, credibility, and visibility, and adjust as things evolve.' },
];

export type Lesson = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const LESSONS: Lesson[] = [
  { icon: Fingerprint, title: 'Every journey is different', description: 'Two businesses rarely start from the same place or need the same next step.' },
  { icon: Puzzle, title: 'No universal solution exists', description: 'The right move depends on context. Copying someone else’s playbook rarely works.' },
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
      'Always. Confidentiality is the default. Nothing about your business is shared publicly without your clear, specific consent, and much of our work is never published at all.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'By meaningful change in how you’re perceived and verified: the quality and consistency of what people find, not vanity metrics. We favour honest, qualitative assessment over inflated numbers.',
  },
  {
    question: 'What kinds of businesses do you work with?',
    answer:
      'The principles of authority apply broadly, so we advise founders, executives, and businesses across a range of sectors. The strategy always adapts to the specific situation rather than following a template.',
  },
];
