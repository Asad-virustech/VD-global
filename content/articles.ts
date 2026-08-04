/**
 * Knowledge Hub articles. Data-driven and CMS-ready: pages and cards map over
 * this structure and hold no hardcoded article copy. All prose follows the
 * VD Global Editorial Style Guide. Publish dates are real (the date each piece
 * went live), never invented.
 */

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string };

export type Article = {
  slug: string;
  category: string;
  title: string;
  /** One-line summary, used on cards and as the meta description. */
  excerpt: string;
  /** ISO date the article was published. */
  publishedDate: string;
  featured?: boolean;
  body: ArticleBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: 'authority-vs-visibility',
    category: 'Authority',
    title: 'Authority vs. visibility: why being seen isn’t enough',
    excerpt:
      'Visibility gets you noticed. Authority gets you trusted. The difference decides which opportunities reach you, and it is the whole point of the work.',
    publishedDate: '2026-08-04',
    featured: true,
    body: [
      {
        type: 'p',
        text: 'Most businesses that come to us want to be more visible. More traffic, more followers, more coverage. It’s a reasonable instinct, and visibility is worth having. But visibility is rarely the thing holding a credible business back.',
      },
      {
        type: 'p',
        text: 'The thing holding it back is usually authority. And the two are not the same.',
      },
      { type: 'h2', text: 'Visibility is being seen. Authority is being trusted.' },
      {
        type: 'p',
        text: 'Visibility measures attention: how many people encounter your name, your product, your post. It answers a simple question. Are people looking? Authority answers a harder one. When they look, do they believe what they find, and do they act on it?',
      },
      {
        type: 'p',
        text: 'You can be highly visible and have very little authority. A viral post, a burst of ads, a trending moment: all of it puts you in front of people without changing whether those people trust you. The attention is real. The belief isn’t there yet.',
      },
      {
        type: 'p',
        text: 'You can also have real authority with modest visibility. The specialist other specialists quote isn’t usually the loudest voice in the room. They’re the one whose name gets passed along when someone asks who actually knows this.',
      },
      { type: 'h2', text: 'One can be bought. The other has to be earned.' },
      {
        type: 'p',
        text: 'This is the practical difference, and it matters more than it sounds. Visibility is for sale. You can buy attention today, in almost any quantity, if you’re willing to pay for it.',
      },
      {
        type: 'p',
        text: 'Authority isn’t on the market. No amount of spend makes a journalist trust you, a regulator respect you, or a customer believe you before they’ve checked. Those judgments are made by other people, on their own terms, based on what they can independently confirm.',
      },
      {
        type: 'p',
        text: 'That’s why the businesses with the most durable reputations are rarely the ones spending the most on attention. They’ve spent it instead on the slower work of becoming verifiable.',
      },
      { type: 'h2', text: 'Attention fades on a schedule. Trust compounds.' },
      {
        type: 'p',
        text: 'Visibility has a half-life. The campaign ends, the post scrolls away, the traffic returns to its baseline. To keep the number up, you keep paying.',
      },
      {
        type: 'p',
        text: 'Authority behaves differently. Each credible signal, whether a piece of independent coverage, a consistent profile, or a reference that checks out, adds to a foundation that doesn’t reset when you stop. It accumulates quietly, and then it seems to arrive all at once.',
      },
      {
        type: 'p',
        text: 'A strong reputation lowers the cost of every conversation that follows. The introduction lands easier. The sales cycle shortens. Coverage comes because you’re already a credible source, not because you chased it.',
      },
      { type: 'h2', text: 'Visibility without authority ages badly' },
      {
        type: 'p',
        text: 'There’s a failure mode worth naming. A business gets attention it hasn’t earned, through a splashy launch or borrowed hype or a well-placed feature, and the visibility outruns the substance behind it.',
      },
      {
        type: 'p',
        text: 'For a while it works. Then someone checks. A prospect searches your name and finds a headline with nothing underneath it. An investor’s diligence turns up a story that doesn’t hold. Coverage without substance ages badly, and inflated visibility is the fastest way to manufacture that gap.',
      },
      {
        type: 'quote',
        text: 'Being good is a private fact until someone credible confirms it. Attention confirms nothing. It just points more people at whatever is already there.',
      },
      { type: 'h2', text: 'What actually builds authority' },
      {
        type: 'p',
        text: 'If visibility is bought and authority is earned, the obvious question is how you earn it. The short answer is consistency, applied for longer than most are willing to. In practice, a few things do most of the work.',
      },
      {
        type: 'ul',
        items: [
          'Verifiable substance. Something real underneath the claims: work, results, or expertise that holds up when someone looks closely.',
          'Independent confirmation. Credible third parties who reference you, through coverage, citations, and mentions you didn’t write yourself.',
          'Consistency. The same signal, everywhere, over time. A profile, an old article, and a search result that agree with each other rather than contradict.',
        ],
      },
      {
        type: 'p',
        text: 'None of these is fast. All of them compound. That’s the trade authority asks you to make: slower to build, and far harder to lose.',
      },
      { type: 'h2', text: 'The goal isn’t to be seen more' },
      {
        type: 'p',
        text: 'Visibility is worth pursuing once there’s something behind it worth finding. Get the order wrong and you spend to be noticed for a version of yourself that can’t survive scrutiny.',
      },
      {
        type: 'p',
        text: 'So the goal is not to be seen more. It is to be trusted sooner. Visibility gets you into the room. Authority decides whether you’re believed once you’re there.',
      },
      {
        type: 'quote',
        text: 'Being seen is the easy part. The part that lasts is the part worth building.',
      },
    ],
  },
  {
    slug: 'is-your-business-ready-for-wikipedia',
    category: 'Wikipedia',
    title: 'Is your business ready for Wikipedia?',
    excerpt:
      'Most people ask how to get a Wikipedia page. The question that decides the outcome is whether you’re notable enough to keep one.',
    publishedDate: '2026-08-04',
    body: [
      {
        type: 'p',
        text: 'Most people ask the wrong question first. They ask how to get a Wikipedia page. It feels like the practical question, the one with a process behind it.',
      },
      {
        type: 'p',
        text: 'The question that actually decides the outcome is different: are you notable enough to sustain one? Get that answer right and the rest is mechanics. Get it wrong and no amount of effort will hold a page in place.',
      },
      { type: 'h2', text: 'Notability is not fame' },
      {
        type: 'p',
        text: 'Wikipedia has a specific bar, and it isn’t popularity. It’s notability: verifiable significance, evidenced by independent, credible sources that have already taken you seriously.',
      },
      {
        type: 'p',
        text: 'That definition does a lot of work, so it’s worth slowing down on. Notability is not how well-known you are, how large your audience is, or how good your work is. It’s whether independent people with no stake in you, such as journalists, authors, and researchers, have written about you in a way that can be checked.',
      },
      {
        type: 'p',
        text: 'You can be excellent and not yet notable. You can be well-known in your industry and still fall short, if the people who know you haven’t left a paper trail a stranger can follow.',
      },
      { type: 'h2', text: 'The sources are the whole game' },
      {
        type: 'p',
        text: 'Wikipedia is built on sources. A page survives or fails on the quality of the independent references behind it. Before anything else, then, it’s worth taking an honest inventory of yours.',
      },
      { type: 'p', text: 'What counts:' },
      {
        type: 'ul',
        items: [
          'Independent coverage. Articles and features written about you by credible outlets you didn’t commission or control.',
          'Reliable publications. Sources with editorial standards and a reputation of their own, not content farms or pay-to-publish sites.',
          'Substantial mentions. Coverage that discusses you in depth, not a passing name-drop in a list.',
        ],
      },
      { type: 'p', text: 'What doesn’t count, however much it feels like it should:' },
      {
        type: 'ul',
        items: [
          'Your own website, profiles, and press releases. These are you talking about you.',
          'Directory listings and paid placements. Presence isn’t the same as recognition.',
          'Social media reach. A large following is visibility, not verifiable significance.',
        ],
      },
      {
        type: 'p',
        text: 'Strip out everything in the second list, and what remains is the real question. Is there enough left for a stranger to build a credible, independent picture of you?',
      },
      { type: 'h2', text: 'Why trying too early backfires' },
      {
        type: 'p',
        text: 'It’s tempting to treat the bar as an obstacle to get around rather than a threshold to meet. That instinct is where most Wikipedia efforts go wrong.',
      },
      {
        type: 'p',
        text: 'A page created before the sources exist is a page that invites deletion. Editors check. When the references don’t hold up, the page is flagged, challenged, and often removed, sometimes publicly. What’s left behind is worse than silence: a visible record that you reached for recognition you hadn’t earned.',
      },
      {
        type: 'quote',
        text: 'The quickest way to lose credibility is to claim more than you can show. Wikipedia is an unusually public place to make that mistake.',
      },
      { type: 'h2', text: 'What to build first if you’re not ready' },
      {
        type: 'p',
        text: 'If the honest inventory comes up short, the answer isn’t to force it. It’s to build the foundation that makes a page possible later, and makes everything else more effective in the meantime.',
      },
      {
        type: 'p',
        text: 'In most cases that means earning two or three credible, independent reference points before pursuing a page at all. Not a campaign. A small number of genuine, verifiable moments of recognition that a stranger would treat as confirmation.',
      },
      {
        type: 'p',
        text: 'That foundation does double duty. It’s what a future Wikipedia page would stand on, and it’s what makes your coverage, introductions, and search results stronger right now, whether or not a page ever appears.',
      },
      { type: 'h2', text: 'So, are you ready?' },
      {
        type: 'p',
        text: 'You don’t need a formal audit to get a useful first read. A few honest questions get you most of the way.',
      },
      {
        type: 'ul',
        items: [
          'If a stranger searched your name, would they find independent sources, or mostly you?',
          'Has a credible outlet written about you in depth, without being asked or paid?',
          'Could someone reconstruct your significance from sources you don’t control?',
        ],
      },
      {
        type: 'p',
        text: 'If the answer to those is yes, a page is worth exploring, and the process becomes straightforward. If it’s no, that’s not a failure. It’s the real starting point, and a more useful place to begin than a page that won’t survive.',
      },
      {
        type: 'quote',
        text: 'Sometimes the right answer is “not yet.” On Wikipedia more than anywhere, “not yet” is often the answer that protects you.',
      },
    ],
  },
];

/** Estimated reading time in minutes, from the article's own word count. */
export function readMinutes(article: Article): number {
  const words = article.body.reduce((count, block) => {
    if (block.type === 'ul') return count + block.items.join(' ').split(/\s+/).length;
    return count + block.text.split(/\s+/).length;
  }, article.excerpt.split(/\s+/).length);
  return Math.max(3, Math.round(words / 220));
}

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticleByPath(path: string): Article | undefined {
  const slug = path.replace(/^\/knowledge\//, '');
  return getArticle(slug);
}

/** Absolute-ish route path for an article. */
export function articlePath(article: Article): string {
  return `/knowledge/${article.slug}`;
}
