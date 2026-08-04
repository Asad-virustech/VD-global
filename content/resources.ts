/**
 * Resource Center assets. Data-driven and CMS-ready: the Knowledge Hub shelf,
 * the resource pages, and the SEO layer all map over this structure and hold no
 * hardcoded resource copy. Every resource has a real, downloadable PDF in
 * /public/resources. All prose follows the VD Globals Editorial Style Guide, and
 * nothing here fabricates statistics, clients, awards, or outcomes.
 *
 * This module is deliberately free of React / lucide imports so it can be
 * consumed by the runtime, the SEO config, and the Vite build alike. Icons are
 * referenced by string key and resolved to components in the UI layer.
 */

export type ResourceBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string };

export type Resource = {
  slug: string;
  /** Library category, e.g. "Guide", "Checklist". */
  type: string;
  /** Icon key, resolved to a lucide component in the UI layer. */
  icon: 'guide' | 'checklist' | 'framework' | 'template' | 'whitepaper';
  title: string;
  /** One-line summary. Used on cards and as the meta description. */
  excerpt: string;
  /** ISO date the resource was first published. */
  publishedDate: string;
  /** ISO date the resource was last revised. */
  updatedDate: string;
  /** Path to the downloadable PDF, served from /public. */
  pdfFile: string;
  /** Page count of the PDF. */
  pages: number;
  /** Estimated reading time of the document, in minutes. */
  readMinutes: number;
  /** Who the resource is written for. */
  audience: string;
  /** Format label shown in the metadata block. */
  format: string;
  featured?: boolean;
  /** On-page explainer: what the resource is and why it exists. */
  intro: ResourceBlock[];
  /** Concrete contents of the document. */
  whatsInside: string[];
};

export const RESOURCES: Resource[] = [
  {
    slug: 'authority-readiness-guide',
    type: 'Guide',
    icon: 'guide',
    title: 'The Authority Readiness Guide',
    excerpt:
      'A plain-language walkthrough of how authority actually develops, so you can tell what you are ready for before you invest in it.',
    publishedDate: '2026-08-05',
    updatedDate: '2026-08-05',
    pdfFile: '/resources/authority-readiness-guide.pdf',
    pages: 5,
    readMinutes: 6,
    audience: 'Founders and business leaders weighing their first move on reputation.',
    format: 'PDF · A4',
    featured: true,
    intro: [
      {
        type: 'p',
        text: 'Authority is easy to want and hard to place. Most people know they should be more credible, better known, harder to dismiss. Far fewer can say what stage they are actually at, or what the honest next step looks like.',
      },
      {
        type: 'p',
        text: 'This guide is the plain-language version of the conversation we have at the start of most engagements. It explains what authority is, how it forms over time, and the misconceptions that lead capable businesses to spend on the wrong thing at the wrong moment.',
      },
      {
        type: 'quote',
        text: 'Authority is not bought in a campaign. It is accumulated in public, one verifiable signal at a time.',
      },
      {
        type: 'p',
        text: 'It is educational, not promotional. Read it and you should be able to place yourself on the arc from recognition to durable trust, and know whether your next move is PR, Wikipedia, or simply building the substance those things stand on.',
      },
    ],
    whatsInside: [
      'What authority actually means, and how it differs from visibility and popularity.',
      'The five most common misconceptions that lead to wasted spend.',
      'How credibility compounds, and why timing decides the return on PR.',
      'When Wikipedia helps and when attempting it too early works against you.',
      'A short self-read to place yourself on the authority arc.',
    ],
  },
  {
    slug: 'wikipedia-notability-checklist',
    type: 'Checklist',
    icon: 'checklist',
    title: 'Wikipedia Notability Checklist',
    excerpt:
      'The signals editors actually look for, in a format you can honestly assess yourself against before you consider a page.',
    publishedDate: '2026-08-05',
    updatedDate: '2026-08-05',
    pdfFile: '/resources/wikipedia-notability-checklist.pdf',
    pages: 4,
    readMinutes: 4,
    audience: 'Anyone weighing whether their business is ready for a Wikipedia page.',
    format: 'PDF · A4',
    intro: [
      {
        type: 'p',
        text: 'Most people ask how to get a Wikipedia page. The question that decides the outcome is whether you are notable enough to keep one. Notability is a specific bar: verifiable significance, evidenced by independent, credible sources that have already taken you seriously.',
      },
      {
        type: 'p',
        text: 'This checklist turns that bar into criteria you can score yourself against, honestly and in private. It is an educational self-assessment, not a promise. Meeting the criteria does not guarantee a page, and no one can ethically guarantee one. Falling short is not a failure; it is a clear starting point.',
      },
      {
        type: 'quote',
        text: 'The quickest way to lose credibility is to claim more than you can show. Wikipedia is an unusually public place to make that mistake.',
      },
    ],
    whatsInside: [
      'Independent sources: what counts as coverage you did not commission or control.',
      'Media coverage: depth, editorial standards, and reliability of the outlet.',
      'Awards, books, and formal recognition that a stranger can verify.',
      'Executive reputation and the search footprint that surrounds your name.',
      'Industry recognition, and the sources that do not count however much they feel like they should.',
      'A scored readiness summary with an honest "ready / not yet" read.',
    ],
  },
  {
    slug: 'authority-framework',
    type: 'Framework',
    icon: 'framework',
    title: 'The Authority Framework',
    excerpt:
      'The structured model we use to move a business from recognition to durable, earned trust, laid out stage by stage.',
    publishedDate: '2026-08-05',
    updatedDate: '2026-08-05',
    pdfFile: '/resources/authority-framework.pdf',
    pages: 4,
    readMinutes: 5,
    audience: 'Leaders who want the full methodology behind the assessment.',
    format: 'PDF · A4',
    intro: [
      {
        type: 'p',
        text: 'Authority looks like a single thing from the outside, and it is really five, built in order. This is the model behind everything we do: the way we read where a business stands today and decide what genuinely moves it forward.',
      },
      {
        type: 'p',
        text: 'The framework runs from recognition to long-term growth. Each stage rests on the one before it, which is why the sequence matters as much as the stages. Skip a layer and the structure above it has nothing to stand on.',
      },
      {
        type: 'quote',
        text: 'Recognition. Credibility. Authority. Trust. Long-term growth. In that order, because each one is the ground the next is built on.',
      },
      {
        type: 'p',
        text: 'This document explains each stage in plain terms, the signals that show you are ready to move up, and the failure modes that appear when a business reaches for the top of the model before the base is set.',
      },
    ],
    whatsInside: [
      'Recognition: becoming known to the people who matter, on terms you can verify.',
      'Credibility: earning belief through independent confirmation, not assertion.',
      'Authority: becoming a reference point others cite without being asked.',
      'Trust: the compounding asset that lowers the cost of every conversation.',
      'Long-term growth: how durable reputation returns on itself over years.',
      'The signals that show you are ready to move from one stage to the next.',
    ],
  },
  {
    slug: 'press-positioning-template',
    type: 'Template',
    icon: 'template',
    title: 'Press & Positioning Template',
    excerpt:
      'A practical worksheet for describing yourself consistently and credibly across every platform, in your own words.',
    publishedDate: '2026-08-05',
    updatedDate: '2026-08-05',
    pdfFile: '/resources/press-positioning-template.pdf',
    pages: 5,
    readMinutes: 4,
    audience: 'Founders preparing to describe themselves to press, partners, and the public.',
    format: 'PDF · A4',
    intro: [
      {
        type: 'p',
        text: 'Consistency is one of the quiet signals of authority. When your company description, your founder bio, and your boilerplate all agree with each other, a stranger can build a coherent picture of you. When they contradict, that picture falls apart, and so does the credibility that depends on it.',
      },
      {
        type: 'p',
        text: 'This is a worksheet, not a form to file. It walks through the core pieces of your public positioning with prompts and short examples, so you can write each one carefully once and reuse it everywhere with confidence.',
      },
      {
        type: 'quote',
        text: 'Say the same true thing about yourself in every place someone might look. Agreement is what reads as credible.',
      },
    ],
    whatsInside: [
      'Company description: a clear, verifiable account of what you do and for whom.',
      'Founder bio: short, standard, and long versions written once and reused.',
      'Elevator pitch: the one-sentence version that survives a busy inbox.',
      'Boilerplate: the standard paragraph press can lift without editing.',
      'Media positioning: the angles you are genuinely a credible source on.',
      'Brand messaging: the language, tone, and claims you will keep consistent.',
    ],
  },
  {
    slug: 'why-reputation-precedes-revenue',
    type: 'Whitepaper',
    icon: 'whitepaper',
    title: 'Why Reputation Precedes Revenue',
    excerpt:
      'An executive read on how public credibility shapes decisions long before a conversation begins, and what that means for how you build.',
    publishedDate: '2026-08-05',
    updatedDate: '2026-08-05',
    pdfFile: '/resources/why-reputation-precedes-revenue.pdf',
    pages: 4,
    readMinutes: 5,
    audience: 'Executives and founders thinking about reputation as an asset.',
    format: 'PDF · A4',
    intro: [
      {
        type: 'p',
        text: 'By the time a prospect, a journalist, or an investor speaks to you, they have usually already formed a view. They searched your name, read what independent sources said, and decided how much to trust you before the first exchange. Reputation does its work upstream of revenue, in the space you are not in the room for.',
      },
      {
        type: 'p',
        text: 'This whitepaper makes that case for an executive reader. It argues, from how decisions are actually made rather than from invented figures, why credibility precedes commercial outcomes, and why treating reputation as an asset changes what you invest in and when. Where hard evidence is not available, it explains the mechanism rather than manufacturing a statistic.',
      },
      {
        type: 'quote',
        text: 'The most expensive conversations are the ones that never happen because a search result answered the question first.',
      },
    ],
    whatsInside: [
      'The pre-conversation: how decisions are shaped before you are involved.',
      'Why credibility lowers the cost of every deal, hire, and piece of coverage.',
      'Reputation as a compounding asset rather than a marketing expense.',
      'The failure mode of visibility that outruns substance.',
      'A principled view of measurement, without fabricated research or metrics.',
      'What it means, in practice, to build reputation before you need it.',
    ],
  },
];

/** Estimated total read time (minutes) across all resources — for shelf copy. */
export function getResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}

export function getResourceByPath(path: string): Resource | undefined {
  const slug = path.replace(/^\/resources\//, '');
  return getResource(slug);
}

/** Route path for a resource page. */
export function resourcePath(resource: Resource): string {
  return `/resources/${resource.slug}`;
}

/** The other resources, for a "related resources" rail. Preserves shelf order. */
export function relatedResources(slug: string): Resource[] {
  return RESOURCES.filter((r) => r.slug !== slug);
}
