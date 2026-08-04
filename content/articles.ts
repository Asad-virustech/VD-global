/**
 * Knowledge Hub articles. Data-driven and CMS-ready: pages and cards map over
 * this structure and hold no hardcoded article copy. All prose follows the
 * VD Globals Editorial Style Guide. Publish dates are real (the date each piece
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
  /** Slugs of related articles, surfaced as "Related reading". Natural, curated. */
  related?: string[];
  /** Slugs of Resource Center resources this article references. */
  resources?: string[];
  body: ArticleBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: 'authority-vs-visibility',
    category: 'Authority Strategy',
    title: 'Authority vs. visibility: why being seen isn’t enough',
    excerpt:
      'Visibility gets you noticed. Authority gets you trusted. The difference decides which opportunities reach you, and it is the whole point of the work.',
    publishedDate: '2026-08-04',
    featured: true,
    related: [
      'choosing-the-right-press-strategy',
      'the-right-kind-of-visible',
      'when-the-right-answer-is-not-yet',
    ],
    resources: ['authority-framework', 'authority-readiness-guide'],
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
    related: [
      'when-the-right-answer-is-not-yet',
      'credibility-beyond-the-company',
      'authority-vs-visibility',
    ],
    resources: ['wikipedia-notability-checklist', 'authority-readiness-guide'],
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
  {
    slug: 'choosing-the-right-press-strategy',
    category: 'Strategic PR',
    title: 'Choosing the right press strategy',
    excerpt:
      'Coverage is not the goal, and reach is not the same as credibility. The press that builds authority is chosen for what it proves, not how many people it reaches.',
    publishedDate: '2026-08-05',
    related: [
      'authority-vs-visibility',
      'owning-the-first-page-of-your-name',
      'having-a-point-of-view-worth-following',
    ],
    resources: ['press-positioning-template', 'authority-framework'],
    body: [
      {
        type: 'p',
        text: 'Ask most businesses what they want from press, and the answer is some version of “more.” More coverage, more mentions, more names in more places. It is a natural instinct, and it is the wrong starting point. Coverage is a means, and a fairly specific one. Treated as an end, it produces activity that looks like progress and rarely becomes authority.',
      },
      {
        type: 'p',
        text: 'The businesses that get durable value from press are unusually clear about what they are buying. They are not buying reach. They are buying proof: independent confirmation, from a credible source, that they are who they say they are. Once you see press that way, almost every decision about it changes.',
      },
      { type: 'h2', text: 'Press is not distribution' },
      {
        type: 'p',
        text: 'The first and most expensive confusion is between press and distribution. Distribution is about getting a message in front of as many people as possible. You control it, you pay for it, and its value scales with volume. Advertising is distribution. So is most of what happens on your own channels.',
      },
      {
        type: 'p',
        text: 'Press is different in kind, not degree. Its value comes from the fact that you do not control it. When an independent outlet writes about you, the words carry weight precisely because they are not yours. A journalist with a reputation of their own is lending a little of it to you, on the strength of their own judgment. That transfer of credibility is the entire point, and it is the thing distribution cannot manufacture.',
      },
      {
        type: 'quote',
        text: 'The value of coverage is not the audience it reaches. It is the credibility of the person willing to put their name next to yours.',
      },
      {
        type: 'p',
        text: 'This is why a single article in a respected, relevant publication can be worth more than a hundred syndicated mentions. The mentions distribute a message. The article confirms a fact. Only one of those builds authority.',
      },
      { type: 'h2', text: 'Earned, not placed' },
      {
        type: 'p',
        text: 'There is a spectrum in press, and where a piece of coverage sits on it decides how much it is worth. At one end is earned media: coverage a journalist chose to write because they judged you worth writing about. At the other end is placed media: coverage you arranged, paid for, or effectively wrote yourself. The two can look identical on the page and mean opposite things to a careful reader.',
      },
      {
        type: 'p',
        text: 'Earned coverage is credible because it survived an independent judgment. Someone with no stake in you decided you were worth their readers’ attention. Placed coverage skips that judgment, which is exactly what makes it weak. The moment a reader senses that a piece was bought rather than earned, its credibility does not just drop to zero. It goes negative, because now they are wondering what else was arranged.',
      },
      {
        type: 'p',
        text: 'None of this means placement is dishonest by definition. Sponsored content, clearly labelled, has its place. It simply is not authority, and it should never be mistaken for it. The work of a real press strategy is to earn the coverage that cannot be bought.',
      },
      { type: 'h2', text: 'Media quality over media quantity' },
      {
        type: 'p',
        text: 'Once you are optimizing for proof rather than reach, quality becomes the only sensible metric, and quality has a specific meaning here. A high-quality outlet is one whose own credibility is high enough that its judgment means something. It has editorial standards, a reputation it protects, and readers who trust it to be selective.',
      },
      {
        type: 'p',
        text: 'Quantity, by contrast, is cheap and getting cheaper. It is trivial to generate a long list of mentions across outlets no one respects. That list may look impressive in a report. It does nothing for a prospect who checks, because the prospect is not counting your mentions. They are weighing the credibility of the sources behind them.',
      },
      {
        type: 'ul',
        items: [
          'One substantial piece in a respected outlet outweighs a page of thin mentions in outlets no one trusts.',
          'Depth beats breadth: coverage that examines you seriously proves more than a passing name-drop.',
          'Relevance compounds: recognition from sources your audience already respects carries further than reach into audiences that do not know the field.',
        ],
      },
      { type: 'h2', text: 'The exception that proves the rule: niche press' },
      {
        type: 'p',
        text: 'One clarification keeps this from being misread as snobbery about outlet size. The most valuable outlet is often not the largest or the most famous. It is the one your specific audience already trusts. A respected trade publication, a well-regarded niche newsletter, or a specialist journal can carry more weight with the people who matter to you than a mention in a household-name outlet whose readers will never be your clients.',
      },
      {
        type: 'p',
        text: 'This is because relevance and credibility, not raw reach, are what transfer. Recognition from a source your audience already respects is recognition they will actually register and believe. A large general audience that does not know your field, and will never buy from you, is a number on a report and little more. When the trade press in your world takes you seriously, the people whose judgment decides your business see it, and it counts.',
      },
      {
        type: 'p',
        text: 'None of this is an argument against ambition. A place in a major, credible outlet is worth pursuing when it is genuinely relevant and genuinely earned. The point is only that size is not the measure. The right question is never simply how large the outlet is, but whether its readers are the people whose belief you need, and whether its judgment is one they trust.',
      },
      { type: 'h2', text: 'Why reach is a tempting proxy' },
      {
        type: 'p',
        text: 'If reach is the wrong measure, it is worth asking why it is so persistent. The answer is that it is easy. Reach is countable. It produces a number that goes up, fits in a report, and feels like progress. Credibility is none of those things. It is diffuse, slow, and hard to attribute, which makes it easy to neglect in favour of the metric that is simply easier to see.',
      },
      {
        type: 'p',
        text: 'This is the quiet trap of press. The wrong strategy is not just tolerable; it is actively comfortable, because it generates visible activity. The right strategy often looks like doing less: fewer outlets, fewer mentions, more patience. It takes some conviction to prefer a single earned article to a page of numbers, especially when someone is asking what the press budget produced this quarter.',
      },
      {
        type: 'quote',
        text: 'Reach is easy to count, which is exactly why it is so often counted instead of the thing that matters.',
      },
      { type: 'h2', text: 'A simple framework for choosing publications' },
      {
        type: 'p',
        text: 'Faced with an opportunity, or deciding where to aim, four questions settle most of the decision. They are worth asking in order, because a failure on an earlier one is rarely rescued by a later one.',
      },
      {
        type: 'ul',
        items: [
          'Is it independent? Would a reader see this as the outlet’s own judgment, or as something you arranged? If the latter, its authority value is close to zero, whatever its traffic.',
          'Is it credible? Does the outlet have a reputation of its own worth borrowing? A credible source lends credibility; a disreputable one lends its disrepute.',
          'Is it relevant? Does it reach and impress the specific people whose belief matters to your business? Recognition in front of the wrong audience is a vanity metric.',
          'Is it substantial? Does the coverage engage with you seriously, or mention you in passing? Depth is what a careful reader weighs.',
        ],
      },
      {
        type: 'p',
        text: 'An opportunity that clears all four is rare and worth real effort. One that fails the first two is usually not worth pursuing at any price, no matter how large the audience attached to it.',
      },
      { type: 'h2', text: 'What this looks like in practice' },
      {
        type: 'p',
        text: 'Consider two founders with the same news to share. The first treats press as distribution. They push the announcement everywhere it will go, collect a long list of mentions, and report the total. The coverage is wide, shallow, and interchangeable. Six months later, a prospect searching the founder’s name finds a scatter of near-identical posts and learns nothing that changes their mind.',
      },
      {
        type: 'p',
        text: 'The second founder treats press as proof. They target a small number of credible, relevant outlets, invest in giving one of them a genuine story, and earn a single substantial piece. The list is shorter. But that one article does work the long list never could: it is the thing a prospect finds, reads, and trusts, and it is the reference the founder’s other claims now stand on.',
      },
      {
        type: 'p',
        text: 'Neither founder invented anything or exaggerated. The difference was entirely in what they were optimizing for. One bought reach. The other earned credibility. Only the second has something that compounds.',
      },
      { type: 'h2', text: 'Common mistakes' },
      {
        type: 'ul',
        items: [
          'Chasing volume. Measuring success by the number of mentions rather than the credibility of the sources behind them.',
          'Paying for the appearance of authority. Buying placements that look like earned coverage, which a careful reader will eventually see through.',
          'Confusing relevance with size. Preferring a large irrelevant audience over a smaller one whose belief actually matters.',
          'Leading with no story. Approaching press with an announcement rather than something genuinely worth an independent journalist’s time.',
          'Timing it wrong. Pursuing coverage before there is substance for it to confirm, so the coverage ages badly the moment someone checks.',
        ],
      },
      { type: 'h2', text: 'Practical recommendations' },
      {
        type: 'p',
        text: 'A press strategy built for authority tends to share a few habits. None of them is complicated. All of them require the discipline to want the right thing.',
      },
      {
        type: 'ul',
        items: [
          'Decide what you are proving before you decide where to appear. The claim comes first; the outlet is chosen to confirm it.',
          'Prefer one credible, relevant, substantial piece to a dozen thin ones. Curate ruthlessly.',
          'Earn the coverage you cannot buy, and never dress up the coverage you did buy as something it is not.',
          'Give journalists a real story, not a request for attention. The stronger the story, the more independent the judgment behind the coverage.',
          'Keep your positioning consistent everywhere, so a journalist and their readers find an account of you that holds together. A worksheet like the Press & Positioning Template is a practical way to get that consistency in place before you approach anyone.',
        ],
      },
      { type: 'h2', text: 'The point of press' },
      {
        type: 'p',
        text: 'Press is not a volume game, and it is not a distribution channel. It is the mechanism by which credible outsiders confirm what you cannot credibly say about yourself. Chosen well, a small amount of it does more for your authority than any quantity of self-published reach.',
      },
      {
        type: 'p',
        text: 'So the question is not how to get more coverage. It is what you need proven, who is credible enough to prove it, and whether you have given them something worth their name. Get that right, and the coverage takes care of itself.',
      },
      {
        type: 'quote',
        text: 'The best press does not tell people you are credible. It shows them someone credible already decided you were.',
      },
    ],
  },
  {
    slug: 'owning-the-first-page-of-your-name',
    category: 'Search Credibility',
    title: 'Owning the first page of your name',
    excerpt:
      'For most people who matter, the first page of your search results is your reputation. What it says, and who is saying it, is decided long before you enter the room.',
    publishedDate: '2026-08-05',
    related: [
      'choosing-the-right-press-strategy',
      'credibility-beyond-the-company',
      'managing-your-digital-reputation',
    ],
    resources: ['authority-readiness-guide', 'press-positioning-template'],
    body: [
      {
        type: 'p',
        text: 'Before almost any consequential interaction with your business, someone types your name into a search box. A prospect doing diligence, a journalist deciding whether to call, a candidate weighing an offer, a partner assessing risk. What they find on the first page of results is, for practical purposes, your reputation. Not your website. Not your pitch. The composite picture a stranger assembles in thirty seconds from whatever the search engine chose to show them.',
      },
      {
        type: 'p',
        text: 'That page is doing more work than any single asset you own, and most businesses have never seriously looked at it as an outsider would. They know their homepage. They have not read their own search results the way the person deciding about them will.',
      },
      { type: 'h2', text: 'The first page is the interview you never attend' },
      {
        type: 'p',
        text: 'There is a version of every important conversation that happens without you. It is the search that precedes the meeting. You are not present for it, you cannot explain yourself in it, and its conclusions are unusually durable, because first impressions formed in private are rarely revised later.',
      },
      {
        type: 'p',
        text: 'This is why the first page of your name matters out of all proportion to how little attention it usually gets. It is not a marketing surface. It is the evidence a serious person uses to decide whether you are worth their time before they have spent any.',
      },
      {
        type: 'quote',
        text: 'The first page of your name is a conversation about you that you are not invited to. The only way to influence it is to have prepared for it.',
      },
      { type: 'h2', text: 'Branded search is a credibility test' },
      {
        type: 'p',
        text: 'A search for your own name, what is sometimes called branded search, is a specific and revealing thing. The person doing it already knows you exist; that is why they are searching. What they are really asking is whether the reality holds up. Are you what you appear to be? Does the independent record agree with your own account of yourself?',
      },
      {
        type: 'p',
        text: 'This makes branded search a credibility test more than a discovery one. And it is a test you can fail in two directions. You can fail by absence, where a search returns almost nothing, and the emptiness reads as insignificance. Or you can fail by contradiction, where the results tell a story that does not match your claims, and the mismatch reads as something worse.',
      },
      { type: 'h2', text: 'What a credible first page looks like' },
      {
        type: 'p',
        text: 'A first page that builds trust has a recognizable shape. It is not about ranking tricks; it is about what the results collectively say to a careful reader. A few properties do most of the work.',
      },
      {
        type: 'ul',
        items: [
          'Independent sources are present. Not just your own pages, but coverage, references, and profiles from parties with no stake in you.',
          'The picture is consistent. The results agree with each other and with your own account, rather than contradicting either.',
          'There is substance. Someone could reconstruct who you are and why you matter from what they find, without taking your word for it.',
          'There are no unexplained gaps or surprises. Nothing on the page raises a question you would not want asked in the meeting.',
        ],
      },
      {
        type: 'p',
        text: 'Notice that none of these is about being everywhere or ranking first for competitive terms. Branded search is a lower bar and a more important one: when someone looks for you specifically, does what they find confirm you are a safe, credible choice?',
      },
      { type: 'h2', text: 'Owning versus renting your footprint' },
      {
        type: 'p',
        text: 'Your digital footprint divides into two kinds of assets, and confusing them is a common and costly mistake. Owned assets are the ones you control: your site, your profiles, your published work. Independent assets are the ones you do not: coverage, citations, third-party references, the record other people have made of you.',
      },
      {
        type: 'p',
        text: 'Owned assets are necessary. They are also, on their own, insufficient, because a careful reader discounts them automatically. They know your website will say flattering things; that is what websites do. What moves their judgment is the independent layer, the parts of the page you did not write. A first page that is entirely owned assets reads as a monologue. A credible one reads as a conversation, where independent voices confirm what you say about yourself.',
      },
      {
        type: 'quote',
        text: 'Anyone can fill their own website with claims. A credible search result is the part of the page you did not get to write.',
      },
      { type: 'h2', text: 'Absence is its own message' },
      {
        type: 'p',
        text: 'It is worth dwelling on the failure of absence, because it is the one businesses underestimate most. When a search for a serious business returns almost nothing, people do not read it as neutral. They read it as a signal. In a world where anyone credible tends to leave some independent trace, the absence of one suggests either that you are too small to have registered, or that there is a reason you are hard to find. Neither impression helps you.',
      },
      {
        type: 'p',
        text: 'This is why doing nothing is not a safe default for your first page. A blank or thin result is not the absence of a reputation; it is a reputation, and usually not the one you want. The businesses that treat their search presence as something to be earned, rather than something that will take care of itself, are responding to a judgment that is being made whether or not they participate in it.',
      },
      {
        type: 'p',
        text: 'This reframes the work. The goal of tending your first page is not to look impressive; it is to make sure the story it tells is a true and independent one, rather than an accidental one assembled from whatever happened to surface. Left alone, the page still says something. The only choice you have is whether it says what you would want a careful stranger to conclude.',
      },
      { type: 'h2', text: 'A framework for reading your own results' },
      {
        type: 'p',
        text: 'To assess your first page honestly, you have to stop being its owner and become its most skeptical reader. Search your name in a fresh, logged-out window, and work through the page as a stranger deciding whether to trust you would.',
      },
      {
        type: 'ul',
        items: [
          'What is here? Catalogue what actually appears, separating what you control from what you do not.',
          'What is missing? A credible business of your standing would expect certain kinds of independent confirmation. Which are absent?',
          'What contradicts? Does anything on the page undercut your claims, your consistency, or your credibility?',
          'What would a skeptic conclude? Reading only this page, would a careful outsider come away convinced, unconvinced, or concerned?',
        ],
      },
      {
        type: 'p',
        text: 'The gaps this exercise reveals are the real work. They are almost always in the independent layer, and they are almost never fixed by adding another owned page.',
      },
      { type: 'h2', text: 'What this looks like in practice' },
      {
        type: 'p',
        text: 'Take a capable specialist whose first page is entirely their own doing: their website, their social profiles, a directory listing or two. Nothing is wrong, exactly. But a prospect doing diligence finds only the specialist talking about themselves, and comes away unsure. The absence of any independent confirmation is not neutral; it quietly reads as a lack of significance.',
      },
      {
        type: 'p',
        text: 'Now take the same specialist a year later, after the first page has acquired a few independent references: a piece of genuine coverage, a citation in someone else’s work, a profile they did not write. The owned assets are unchanged. What changed is that the page now contains other voices, and the prospect’s private verdict flips from unsure to convinced. Same person, same work, different reputation, because the independent layer finally existed.',
      },
      { type: 'h2', text: 'Common mistakes' },
      {
        type: 'ul',
        items: [
          'Treating the homepage as the reputation. The first page of search, not your website, is what most people actually judge you on.',
          'Filling the page with owned assets only. More self-published content does not fix an absence of independent confirmation.',
          'Never looking as an outsider. Assessing your results while logged in, or not at all, hides exactly what a stranger sees.',
          'Chasing competitive rankings while neglecting branded search. Being findable for your own name matters more than ranking for generic terms.',
          'Ignoring contradictions. An unaddressed inconsistency on the page does more damage than a missing asset.',
        ],
      },
      { type: 'h2', text: 'Practical recommendations' },
      {
        type: 'p',
        text: 'Owning your first page is less about manipulation than about making sure the independent record exists and agrees with you. A few principles guide the work.',
      },
      {
        type: 'ul',
        items: [
          'Audit as a stranger, regularly. Read your logged-out results the way the person deciding about you will, and note the gaps.',
          'Build the independent layer deliberately. The parts of the page you did not write are the parts that persuade, so those are where effort belongs.',
          'Keep every owned asset consistent. Your profiles and pages should agree with each other and with the independent record, so nothing contradicts. A positioning worked out once prevents most of these mismatches.',
          'Fix contradictions before adding anything. A clean, coherent page is worth more than a crowded, conflicting one.',
          'Be patient. A credible first page is accumulated over time, not assembled in a week.',
        ],
      },
      {
        type: 'p',
        text: 'This is slow work, and it is the same work that builds authority everywhere else: earning independent confirmation rather than asserting your own case. The first page of your name is simply where that work becomes most visible, and most consequential.',
      },
      { type: 'h2', text: 'It is never finished' },
      {
        type: 'p',
        text: 'A final property of the first page is worth naming: it is never finished. Search results change as new sources appear and old ones fade, and the picture a stranger sees this year is not the one they will see next. This is a reason for steadiness rather than anxiety. The work is not a one-time cleanup but a habit of periodically looking as an outsider, noticing what has shifted, and continuing to build the independent record.',
      },
      {
        type: 'p',
        text: 'Practically, this means building a light habit rather than running a project. A periodic look as an outsider, an eye on what new sources have appeared, a continued investment in the independent record: these keep the page working. The businesses whose search presence quietly strengthens over years are not the ones who fixed it once. They are the ones who never stopped treating it as something worth attention.',
      },
      { type: 'h2', text: 'The page that speaks for you' },
      {
        type: 'p',
        text: 'You will not be in the room for the most important judgment made about your business this year. It will happen in a search box, in your absence, and it will be shaped by whatever the first page of your name happens to say. The only question is whether you have prepared that page to make your case, or left it to make someone else’s.',
      },
      {
        type: 'quote',
        text: 'You cannot attend the search that decides about you. You can only make sure that what it finds is true, independent, and on your side.',
      },
    ],
  },
  {
    slug: 'credibility-beyond-the-company',
    category: 'Executive Branding',
    title: 'Credibility beyond the company',
    excerpt:
      'People trust people before they trust organizations. When a founder or leader carries verifiable authority of their own, it becomes the company’s most durable asset.',
    publishedDate: '2026-08-05',
    related: [
      'having-a-point-of-view-worth-following',
      'owning-the-first-page-of-your-name',
      'authority-vs-visibility',
    ],
    resources: ['press-positioning-template', 'authority-framework'],
    body: [
      {
        type: 'p',
        text: 'Organizations do not earn trust. People do, and then organizations borrow it. Behind almost every credible company is a person, or a small number of people, whose own reputation vouches for it. Strip that away, and the company’s claims are just claims, made by an entity that cannot itself be trusted or doubted, only assessed through the humans behind it.',
      },
      {
        type: 'p',
        text: 'This is why the credibility of a founder or leader is not a vanity project or a personal indulgence. It is often the single most important credibility asset a business has, and one of the few that cannot be replicated by a competitor with a larger budget.',
      },
      { type: 'h2', text: 'Why people trust people' },
      {
        type: 'p',
        text: 'Trust is a judgment we evolved to make about individuals, not institutions. We read faces, track records, and reputations. Faced with a company, we instinctively look for the person to hold accountable, the human whose name is on the work. A leader with a visible, credible record gives us someone to trust. A faceless organization gives us only a brand to be wary of.',
      },
      {
        type: 'p',
        text: 'The practical consequence is that a leader’s authority transfers to the company in a way the reverse rarely does. A trusted founder makes their company credible. A well-known company does not automatically make an anonymous executive trusted. The credibility flows from the person outward.',
      },
      {
        type: 'p',
        text: 'This is not a modern quirk of branding; it is how reputation has always worked. Long before companies existed, trust attached to names and to the people who carried them. The instinct survives intact. Put a credible person in front of a claim and it becomes believable; leave the claim to stand alone, attributed only to an organization, and even a fair-minded audience holds something back. We are, in the end, persuaded by people.',
      },
      {
        type: 'quote',
        text: 'We do not trust organizations. We trust the people we believe are standing behind them.',
      },
      { type: 'h2', text: 'Executive authority is not personal branding' },
      {
        type: 'p',
        text: 'There is a version of this idea that has been thoroughly cheapened, and it is worth separating from the real thing. Personal branding, in its worst form, is self-promotion: performing expertise, accumulating followers, and optimizing for visibility. It produces the appearance of authority without the substance, and careful people see through it quickly.',
      },
      {
        type: 'p',
        text: 'Executive authority is the opposite discipline. It is not about being seen more; it is about being verifiably good, in public, over time. It rests on genuine expertise, independent recognition, and a consistent record, not on presence for its own sake. The distinction is the same one that separates visibility from authority everywhere: one is performed and bought, the other is demonstrated and earned.',
      },
      {
        type: 'p',
        text: 'The test is simple. Take away the follower count and the self-published posts. Is there still a credible, independent record of this person being good at what they claim? If yes, that is authority. If no, it was branding all along.',
      },
      { type: 'h2', text: 'The components of leadership credibility' },
      {
        type: 'p',
        text: 'A leader’s authority, like a company’s, is assembled from a few kinds of evidence. Each is more persuasive to the degree that it comes from outside the leader’s own control.',
      },
      {
        type: 'ul',
        items: [
          'Demonstrated expertise. A real, checkable track record of doing the thing they claim to be good at.',
          'Independent recognition. Being quoted, cited, invited, or profiled by credible parties who chose to, not because they were asked.',
          'A consistent public record. Profiles, coverage, and statements that agree with each other across time and place.',
          'A point of view. A considered, distinctive perspective on their field that others find worth engaging with.',
        ],
      },
      {
        type: 'p',
        text: 'The last of these deserves its own attention, and it does most of the work of turning a competent leader into a recognized authority. Expertise makes you credible. A point of view makes you followed.',
      },
      { type: 'h2', text: 'Visibility is not authority, for a person either' },
      {
        type: 'p',
        text: 'The same distinction that governs companies applies, even more sharply, to individuals. A leader can be highly visible, active, and well-followed, and still have little genuine authority. Presence is not proof. A large audience assembled through consistent posting is a real audience, but it confirms attention, not expertise. The people whose judgment matters, the serious buyer, the credible journalist, the careful partner, discount raw visibility quickly and look for the independent record underneath it.',
      },
      {
        type: 'p',
        text: 'This is why the pursuit of a following, for its own sake, so often disappoints. It produces reach without weight. A leader with a large audience and no independent recognition is less credible, to a discerning observer, than one with a modest profile and a genuine record of being cited, quoted, and relied upon by people who did not have to. Authority is measured by who vouches for you, not by how many are watching.',
      },
      {
        type: 'p',
        text: 'The distinction is not academic. It decides which leaders a market actually trusts, and it consistently favours the verifiable over the merely visible.',
      },
      { type: 'h2', text: 'How leader and company reinforce each other' },
      {
        type: 'p',
        text: 'Handled well, the credibility of a leader and the credibility of their company compound. The leader’s independent standing lends the company legitimacy it could not manufacture. The company’s work, in turn, gives the leader something real to be authoritative about. Each is evidence for the other, and a careful outsider reading both comes away more convinced than either could achieve alone.',
      },
      {
        type: 'p',
        text: 'Handled badly, the same link becomes a liability. A leader who claims authority the record does not support drags the company’s credibility down with their own. Because the two are connected in the audience’s mind, the leader’s overreach becomes the company’s problem. The connection is an asset only when the underlying substance is real.',
      },
      { type: 'h2', text: 'The founder’s dilemma: exposure and risk' },
      {
        type: 'p',
        text: 'There is a real tension worth acknowledging. Building a leader’s public authority also concentrates the company’s credibility in a single person, and people are fallible in ways institutions can diffuse. A visible founder who errs, or whose judgment is questioned, exposes the whole business to the consequence. This is the price of the asset, and it is not trivial.',
      },
      {
        type: 'p',
        text: 'The answer is not to hide the leadership, which forfeits the credibility entirely, but to build it on substance solid enough to withstand scrutiny. A reputation grounded in a genuine record is resilient; it can survive mistakes, because it was never a performance in the first place. A reputation built on visibility and claim is brittle, and the same exposure that amplified it will amplify its collapse. The exposure is manageable in exact proportion to how real the underlying authority is.',
      },
      {
        type: 'p',
        text: 'Handled with that in mind, the concentration of credibility in a leader is a risk worth taking, because the alternative, a faceless company no one can quite bring themselves to trust, carries a quieter but larger cost of its own.',
      },
      { type: 'h2', text: 'What this looks like in practice' },
      {
        type: 'p',
        text: 'Consider two firms of similar quality. At the first, the leadership is invisible: no public record, no independent recognition, no articulated point of view. The firm’s claims stand alone, unvouched-for, and a prospect doing diligence finds no person to trust, only an organization to be cautious about.',
      },
      {
        type: 'p',
        text: 'At the second, a founder has spent years building genuine, independent authority in the field: cited by peers, quoted by credible outlets, known for a distinctive and defensible perspective. When a prospect researches the firm, they find that person, and the firm inherits their credibility. The firms may do comparable work. The second is trusted faster, and at lower cost, because it has a human being whose reputation answers for it.',
      },
      {
        type: 'p',
        text: 'Nothing here was fabricated. The second founder did not perform authority; they earned it, and the company became the beneficiary. That is the asset executive credibility creates, and it is one a competitor cannot simply buy.',
      },
      { type: 'h2', text: 'Common mistakes' },
      {
        type: 'ul',
        items: [
          'Hiding the leadership. Keeping the people behind the company invisible, and leaving it with no human credibility to draw on.',
          'Mistaking visibility for authority. Building a following and a personal brand without the independent substance underneath.',
          'Claiming more than the record shows. Asserting expertise or recognition a skeptic could not verify, which endangers the company too.',
          'Inconsistency across surfaces. A leader whose bio, coverage, and statements do not agree undermines their own credibility.',
          'Neglecting a point of view. Having expertise but no distinctive perspective, and so remaining competent but unremarkable.',
        ],
      },
      { type: 'h2', text: 'Practical recommendations' },
      {
        type: 'p',
        text: 'Building leadership credibility is the same disciplined work as building any authority, applied to a person. It is slow, it is earned, and it cannot be faked for long.',
      },
      {
        type: 'ul',
        items: [
          'Make the people visible. Give the company human beings whose reputations can be assessed and trusted.',
          'Earn recognition, do not perform it. Prioritize independent confirmation over self-published presence.',
          'Develop and hold a point of view. Decide what you genuinely think about your field, and say it consistently.',
          'Keep the record consistent. A leader’s public account of themselves should agree everywhere someone might check. Writing the core bio and positioning once, carefully, is a practical way to guarantee that.',
          'Let leader and company vouch for each other, honestly. Connect the two only where the underlying substance is real.',
        ],
      },
      {
        type: 'p',
        text: 'Notice that none of this is a shortcut. Every item is a form of the same slow, earned work that builds authority anywhere: substance first, independent confirmation over self-assertion, consistency over time. Applied to a person rather than a company, it is simply more personal, and therefore harder to delegate or fake. The leaders who build real credibility do so the way anyone builds anything that lasts, and that is precisely why competitors cannot copy it.',
      },
      { type: 'h2', text: 'What this asks of a leader' },
      {
        type: 'p',
        text: 'None of this is comfortable for the many capable leaders who would rather let the work speak for itself. Building personal authority means being visible, taking positions, and accepting a degree of exposure that private competence never required. It asks a fundamentally private preference to yield, a little, to a public need. That trade is a real one, and not everyone will want to make it.',
      },
      {
        type: 'p',
        text: 'But the leaders who do make it, on their own terms and grounded in something real, hand their businesses an advantage that is unusually hard to compete with. Not because they became famous, but because they became verifiable: a person a stranger can check, and, having checked, decide to trust. In a market full of organizations asking to be believed, that is a rare and durable thing.',
      },
      { type: 'h2', text: 'The person behind the promise' },
      {
        type: 'p',
        text: 'In the end, someone has to be accountable for a company’s claims, and audiences instinctively look for who. A leader with real, independent authority answers that question before it is asked, and hands the business a credibility no brand exercise can produce. It is patient work, and it is personal, which is exactly why it is so hard for anyone else to copy.',
      },
      {
        type: 'quote',
        text: 'A company can promise anything. A person with a reputation to lose is the reason anyone believes it.',
      },
    ],
  },
  {
    slug: 'having-a-point-of-view-worth-following',
    category: 'Thought Leadership',
    title: 'Having a point of view worth following',
    excerpt:
      'Expertise makes you credible. A point of view makes you followed. The difference between being competent and being an authority is having something considered to say.',
    publishedDate: '2026-08-05',
    related: [
      'credibility-beyond-the-company',
      'choosing-the-right-press-strategy',
      'authority-vs-visibility',
    ],
    resources: ['authority-framework', 'authority-readiness-guide'],
    body: [
      {
        type: 'p',
        text: 'The phrase thought leadership has been worn smooth by overuse, to the point where it now often describes its opposite: a steady output of safe, agreeable content that leads no one anywhere. Real thought leadership is rarer and more demanding. It is the willingness to have a considered point of view, to say it clearly, and to be identified with it.',
      },
      {
        type: 'p',
        text: 'This matters because expertise alone, however genuine, does not make you an authority. Plenty of deeply competent people remain invisible in their fields, known to no one beyond their immediate work. What separates the recognized authority from the equally capable unknown is usually not more expertise. It is a point of view worth following.',
      },
      { type: 'h2', text: 'Competence is not authority' },
      {
        type: 'p',
        text: 'It is tempting to assume that being good enough is eventually its own reward, that quality will be noticed. Sometimes it is. Often it is not. Competence is common, quiet, and hard to see from the outside. There are far more excellent practitioners than there are recognized authorities, and the gap between the two is rarely a gap in ability.',
      },
      {
        type: 'p',
        text: 'The gap is one of articulation. The authority is the competent person who also made their thinking visible, took a position, and gave others something to engage with, agree with, or argue against. Competence you keep to yourself is a private fact. A point of view is what makes it public and referable.',
      },
      {
        type: 'quote',
        text: 'There are many more excellent practitioners than recognized authorities. The difference is rarely ability. It is having said something worth repeating.',
      },
      { type: 'h2', text: 'What a point of view actually is' },
      {
        type: 'p',
        text: 'A point of view is not a hot take, and it is not contrarianism for its own sake. It is a considered position on a question that matters in your field, one you have thought through carefully enough to defend and hold consistently. It has a few properties that distinguish it from mere content.',
      },
      {
        type: 'ul',
        items: [
          'It takes a position. It says something specific enough that a reasonable person could disagree with it.',
          'It is considered. It rests on real thinking and experience, not on whatever is currently fashionable to say.',
          'It is distinctive. It offers a perspective the audience could not get from everyone else in the field.',
          'It is consistent. It is held over time, not adjusted to suit each audience or trend.',
        ],
      },
      {
        type: 'p',
        text: 'The requirement that a reasonable person could disagree is the one most safe content fails. Anything everyone already accepts is not a point of view; it is a platitude. A real position accepts the risk of being wrong, which is exactly what makes it worth following.',
      },
      { type: 'h2', text: 'Where a point of view comes from' },
      {
        type: 'p',
        text: 'If a point of view is so valuable, the obvious question is where to find one. The reassuring answer is that you rarely have to invent it. If you have real experience in your field, you almost certainly already hold views that are more considered than the consensus, formed by watching what actually works and what reliably fails. The task is usually not invention but excavation: noticing what you genuinely believe, especially where it departs from what everyone says, and having the confidence to articulate it.',
      },
      {
        type: 'p',
        text: 'The views worth building on tend to share a source. They come from friction: the places where your experience contradicts the received wisdom, where the standard advice struck you as wrong, or where you learned something the hard way that others still get wrong. Those points of friction are not distractions from your expertise; they are the most valuable part of it, and the raw material of a perspective worth following.',
      },
      { type: 'h2', text: 'Why a point of view compounds' },
      {
        type: 'p',
        text: 'A distinctive, consistent perspective does something a stream of neutral content never can: it accumulates into a reputation for thinking, not just doing. Each time you apply your view to a new question, it reinforces the last time, and over months and years it becomes the thing you are known for. People start to seek out what you think, because they know it will be considered and consistent, and different from what they would hear elsewhere.',
      },
      {
        type: 'p',
        text: 'Neutral content, by contrast, resets each time. A post that could have been written by anyone is forgotten as quickly as it is read, because there is no through-line, no accumulating identity, nothing to follow. It fills a feed without building a reputation. The difference is the difference between having an output and having a voice.',
      },
      {
        type: 'p',
        text: 'There is a compounding effect on the audience’s side too. The first time someone encounters your view, it is just an opinion. By the tenth, applied consistently to different questions, it has become a way of thinking they can anticipate and rely on, and that reliability is what turns readers into followers. They are no longer evaluating each piece in isolation; they are following a mind. That relationship cannot be bought or accelerated. It is earned one consistent position at a time, which is exactly why it is so durable once it exists.',
      },
      { type: 'h2', text: 'Differentiation is the point' },
      {
        type: 'p',
        text: 'In a crowded field, competence is table stakes and sameness is fatal. When everyone offers similar services and makes similar claims, the deciding factor is often simply which voice the audience recognizes and trusts, and recognition requires being different in some legible way. A point of view is the most durable form of differentiation available, because it cannot be copied without being obviously borrowed.',
      },
      {
        type: 'p',
        text: 'This is why the safest-seeming strategy, saying only what is uncontroversial and agreeable, is quietly the riskiest. It guarantees you will be indistinguishable, and indistinguishable is invisible. The businesses and leaders who stand out are, almost without exception, the ones willing to be known for a particular way of thinking, at the acceptable cost of not appealing to absolutely everyone.',
      },
      {
        type: 'quote',
        text: 'The safest content is the least memorable. To be followed, you have to be willing to be disagreed with.',
      },
      { type: 'h2', text: 'The discipline of saying less, better' },
      {
        type: 'p',
        text: 'A common misreading of thought leadership is that it demands constant output, that having a point of view means producing a great deal of content. The opposite is closer to the truth. A single, well-argued position, returned to and developed over time, does more than a stream of forgettable posts. The discipline is not to say more; it is to say fewer things, better, and to mean them.',
      },
      {
        type: 'p',
        text: 'This matters because volume and voice pull in different directions. The pressure to publish frequently rewards the safe, the quick, and the generic, exactly the qualities that dissolve a distinctive perspective. Slowing down enough to say something considered, and then standing behind it, is harder and rarer, which is precisely why it registers. In a field crowded with content, a real point of view is distinguished as much by restraint as by insight.',
      },
      { type: 'h2', text: 'What this looks like in practice' },
      {
        type: 'p',
        text: 'Picture two advisors with equal expertise. The first produces steady, sensible content that carefully offends no one and commits to nothing. It is competent and completely forgettable. After a year, no one could say what this advisor uniquely thinks, because they have never quite said. They remain one credible option among many.',
      },
      {
        type: 'p',
        text: 'The second advisor has spent the same year applying a clear, consistent perspective to the questions in their field. They have taken positions, some of which not everyone shares. But their audience now knows exactly how this person thinks, seeks out their view on new questions, and refers others to it. Same expertise, same effort, and yet only the second has become a reference point, because only the second was willing to say something specific enough to be worth following.',
      },
      { type: 'h2', text: 'Common mistakes' },
      {
        type: 'ul',
        items: [
          'Mistaking output for authority. Producing constant content that takes no position and builds no distinct identity.',
          'Optimizing for agreement. Saying only what is safe, and so becoming indistinguishable from everyone else.',
          'Chasing trends. Adjusting your view to whatever is currently popular, which destroys the consistency a real perspective requires.',
          'Confusing volume with voice. Assuming that publishing more often is the same as having something to say.',
          'Hiding behind expertise. Believing that being good is enough, and never doing the harder work of articulating what you think.',
        ],
      },
      { type: 'h2', text: 'Practical recommendations' },
      {
        type: 'p',
        text: 'A point of view is not manufactured on demand; it is clarified and then committed to. The work is more about honesty and consistency than about production.',
      },
      {
        type: 'ul',
        items: [
          'Decide what you actually think. Do the hard work of forming a considered position on the questions that matter in your field.',
          'Say it specifically. Make claims concrete enough that a reasonable person could disagree, and accept that some will.',
          'Hold it consistently. Apply the same perspective across audiences and over time, so it accumulates into a recognizable voice.',
          'Ground it in substance. Let your point of view rest on genuine expertise and experience, so it holds up under challenge.',
          'Be patient with it. A reputation for thinking is built slowly, one considered position at a time.',
        ],
      },
      {
        type: 'p',
        text: 'This is the same trade authority always asks for: slower to build, and far harder for anyone else to copy. A point of view earned this way is not a marketing asset you can switch on. It is a reputation, and it belongs to you.',
      },
      { type: 'h2', text: 'On the fear of being wrong' },
      {
        type: 'p',
        text: 'The deepest obstacle to having a point of view is rarely a lack of ideas. It is the fear of being wrong in public. Taking a position means accepting that you might be mistaken, that someone more expert might disagree, that a view you hold today might look naive later. That risk is real, and it is the reason most people retreat into safe, unfalsifiable statements no one could object to.',
      },
      {
        type: 'p',
        text: 'But the fear, followed, guarantees the outcome it is trying to avoid. A perspective that cannot be wrong cannot be right either; it says nothing, and is followed by no one. The willingness to be wrong is not a flaw in thought leadership; it is the entry fee. The authorities in any field are not the people who were never mistaken. They are the ones who thought carefully, said what they believed, and were willing to be corrected, which is a far more credible posture than never having committed to anything at all.',
      },
      { type: 'h2', text: 'Worth following' },
      {
        type: 'p',
        text: 'Being good at what you do earns you the right to have a point of view. Actually having one, and saying it clearly and consistently, is what turns that competence into authority. The field is full of capable people who never quite said what they thought. The ones who are followed are the ones who did.',
      },
      {
        type: 'quote',
        text: 'Expertise earns you the right to an opinion. Having the courage to state it is what makes you an authority.',
      },
    ],
  },
  {
    slug: 'when-the-right-answer-is-not-yet',
    category: 'Authority Strategy',
    title: 'When the right answer is “not yet”',
    excerpt:
      'The most valuable advice in building authority is often to wait. Restraint is not the absence of strategy. On the way to credibility, timing decides the return.',
    publishedDate: '2026-08-05',
    related: [
      'is-your-business-ready-for-wikipedia',
      'authority-vs-visibility',
      'choosing-the-right-press-strategy',
    ],
    resources: ['authority-readiness-guide', 'authority-framework'],
    body: [
      {
        type: 'p',
        text: 'Most advice about building authority is about doing more: more coverage, more content, more visibility, more of everything, sooner. There is a quieter and often more valuable answer, and it is the one people least want to hear. Sometimes the right move is to wait. Not forever, and not out of timidity, but because the thing you are reaching for will only work once the ground beneath it is ready.',
      },
      {
        type: 'p',
        text: 'Restraint is one of the hardest disciplines in this work, precisely because it looks like inaction. But choosing not to pursue something yet, for good reasons, is a strategic decision, not the absence of one. Some of the most consequential advice we give is a well-reasoned “not yet.”',
      },
      { type: 'h2', text: 'Why “not yet” is so hard to hear' },
      {
        type: 'p',
        text: 'The instinct to act is strong, and usually well-intentioned. A founder who has decided to build their authority wants to begin, visibly, now. Waiting feels like falling behind, like watching competitors move while you stand still. And there is often someone, internally or externally, asking what is being done this quarter, for whom “we are deliberately waiting” is an unsatisfying answer.',
      },
      {
        type: 'p',
        text: 'So businesses act prematurely, not because it is wise but because acting is comfortable and waiting is not. They pursue the coverage, the page, the campaign before the foundation exists to support it. The activity feels like progress. Often it is the opposite: effort spent building something that cannot yet stand, on ground that is not ready to hold it.',
      },
      {
        type: 'quote',
        text: 'Waiting feels like losing. Acting before you are ready is how you actually lose.',
      },
      { type: 'h2', text: 'Authority has a maturity' },
      {
        type: 'p',
        text: 'Authority is not built all at once; it develops in stages, and each stage depends on the one before it. Recognition comes before credibility. Credibility comes before authority. Authority becomes trust only when it has been sustained. This sequence is not a formality. It is the structure of how belief is actually earned, and it cannot be reordered by wanting it badly enough.',
      },
      {
        type: 'p',
        text: 'The practical implication is that many actions are not right or wrong in themselves; they are right or wrong for the stage you are at. Pursuing high-profile press is a strong move when there is substance to confirm and a foundation to amplify. The same move, made before either exists, is not merely wasted. It can be actively harmful, because it draws scrutiny to a claim that cannot yet survive it.',
      },
      { type: 'h2', text: 'Impatience has a source' },
      {
        type: 'p',
        text: 'It is worth understanding where the pressure to act early comes from, because naming it makes it easier to resist. Some of it is competitive: the sense that rivals are moving and that waiting cedes ground. Some of it is internal: the need to show activity, to justify a budget, to feel that something is being done. And some of it is simply psychological, the discomfort of a plan whose main instruction, for now, is patience.',
      },
      {
        type: 'p',
        text: 'None of these pressures is about whether acting is actually the right move. They are about how waiting feels. That is the trap. The decision to act prematurely is almost never made on the merits; it is made to relieve a discomfort. Recognizing that the urge to act is coming from anxiety rather than analysis is often enough to pause it long enough to ask the harder question: is the foundation actually there?',
      },
      { type: 'h2', text: 'The cost of acting too early' },
      {
        type: 'p',
        text: 'Premature action in authority-building is uniquely costly, because the currency involved is credibility, and credibility is far easier to lose than to rebuild. When you reach for recognition you have not earned, and someone checks, they do not simply find nothing. They find evidence that you claimed more than you could show, and that discovery is itself a mark against you.',
      },
      {
        type: 'p',
        text: 'The clearest example is the one people are most tempted by. A Wikipedia page pursued before the independent sources exist does not sit quietly as a harmless attempt. It invites review, fails it, and often leaves a public record of the failure. What could have been a neutral absence becomes an active negative: a visible sign of overreach. The same logic applies to coverage that outruns substance, or a point of view asserted before there is expertise to back it. In each case, acting too early does not just fail to help. It manufactures a gap between claim and proof, and that gap is the damage.',
      },
      {
        type: 'quote',
        text: 'The quickest way to lose credibility is to claim more than you can show. Patience is how you avoid ever having to.',
      },
      { type: 'h2', text: 'A framework for deciding whether to wait' },
      {
        type: 'p',
        text: 'The question is not whether to build authority; it is whether the specific move in front of you is ready to be made. A few honest questions usually settle it.',
      },
      {
        type: 'ul',
        items: [
          'Is the foundation there? Does the substance, or the independent evidence, that this action depends on actually exist yet?',
          'Would it survive scrutiny? If this move drew attention and someone checked closely, would what they find confirm the claim or undermine it?',
          'Is this the next stage, or a later one? Are you reaching for the step that follows where you are, or skipping past unbuilt stages to a more impressive one?',
          'What does waiting cost, honestly? Is the cost of waiting real, or mainly the discomfort of not acting?',
        ],
      },
      {
        type: 'p',
        text: 'If the foundation is missing, the move would not survive scrutiny, or you are skipping stages, the answer is almost always “not yet.” And “not yet” is not a rejection of the goal. It is a decision about sequence, which is often the difference between the goal succeeding and failing.',
      },
      {
        type: 'p',
        text: 'It is worth being honest about the one case where waiting is the wrong answer. Sometimes the foundation is there, the move would survive scrutiny, and the hesitation is just fear dressed up as prudence. Patience can curdle into avoidance, an excuse never to take the risk that authority eventually requires. The discipline cuts both ways: act before you are ready and you squander credibility, but wait long after you are ready and you squander opportunity. The skill is telling the two apart, and answering honestly which one you are actually doing.',
      },
      { type: 'h2', text: 'What to do while you wait' },
      {
        type: 'p',
        text: 'The crucial point is that “not yet” is not “do nothing.” It is a redirection of effort from the premature move to the foundation that will make it possible, and effective, later. Waiting to pursue a page, or a campaign, or a public position is time spent earning the substance those things will eventually stand on.',
      },
      {
        type: 'ul',
        items: [
          'Build the independent evidence. Earn the genuine, verifiable reference points that the later move will depend on.',
          'Strengthen the substance. Do the work, and get the results, that recognition is supposed to confirm.',
          'Get consistent. Make sure your public record agrees with itself, so that when scrutiny comes, it holds.',
          'Prepare, so you can move decisively when the moment arrives. Readiness is what turns a well-timed action into an easy one.',
        ],
      },
      {
        type: 'p',
        text: 'Done this way, the waiting period is not lost time. It is the most productive part of the process, because it is where the foundation is actually built. The visible move, when it finally comes, is just the confirmation of work already done.',
      },
      { type: 'h2', text: 'What this looks like in practice' },
      {
        type: 'p',
        text: 'Consider a founder eager for a Wikipedia page, convinced it will make the business legitimate. The honest assessment is that the independent sources do not yet exist to sustain one. The tempting answer is to try anyway. The right answer is “not yet,” paired with a clear plan: earn a small number of genuine, credible reference points first, and revisit the page once they exist.',
      },
      {
        type: 'p',
        text: 'A year later, having done that patient work, the founder is not only ready for the page; they may no longer need it in the way they thought, because the foundation they built to qualify for it has already strengthened their coverage, their search results, and their credibility everywhere else. The “not yet” did not cost them the goal. It routed them through the work that made the goal achievable, and useful, instead of hollow.',
      },
      { type: 'h2', text: 'Common mistakes' },
      {
        type: 'ul',
        items: [
          'Treating action as progress. Assuming that doing something visible is always better than deliberately waiting.',
          'Skipping stages. Reaching for authority or trust before recognition and credibility are in place.',
          'Forcing the bar. Treating a threshold like notability as an obstacle to get around, rather than a standard to meet.',
          'Confusing waiting with inaction. Reading “not yet” as “do nothing,” instead of “build the foundation first.”',
          'Underestimating the cost of overreach. Forgetting that a failed premature attempt can leave a lasting, visible mark.',
        ],
      },
      { type: 'h2', text: 'Practical recommendations' },
      {
        type: 'ul',
        items: [
          'Judge each move against your actual stage, not your ambition. Ask what the next real step is, not the most impressive one.',
          'Let scrutiny be your test. If a move would not survive someone checking, it is not ready, and neither are you.',
          'Use waiting to build, not to stall. Redirect the energy into the foundation the later move requires.',
          'Respect thresholds. Meet the bar rather than trying to get around it; the bar is usually there for a reason.',
          'Move decisively when it is time. Patience earns the right to act with confidence later; take it when it comes.',
        ],
      },
      { type: 'h2', text: 'Patience is not passivity' },
      {
        type: 'p',
        text: 'The word patience can suggest a kind of passivity, a waiting for conditions to change on their own. That is not what this is. Strategic patience is active and demanding. It means doing the unglamorous foundational work while resisting the more visible, more satisfying moves that are not yet ready. It is harder than acting, not easier, because it asks you to build without the reward of being seen to build.',
      },
      {
        type: 'p',
        text: 'This is why “not yet” is a discipline rather than a default. The default, under pressure, is to act. Choosing to wait, and then filling the wait with real work rather than idle hope, takes more conviction than pressing ahead. The businesses capable of it are not the timid ones. They are the ones secure enough in where they are going to refuse the shortcuts that would undermine the destination.',
      },
      { type: 'h2', text: 'The strategy of restraint' },
      {
        type: 'p',
        text: 'In a discipline that constantly rewards visible activity, choosing to wait for the right reasons is one of the hardest and most valuable things a business can do. Authority is slow to build and quick to lose, and much of the losing comes from acting before the building is done. “Not yet” is not the absence of a strategy. Very often, it is the strategy.',
      },
      {
        type: 'quote',
        text: 'Sometimes the most authoritative thing you can do is refuse to claim authority you have not yet earned.',
      },
    ],
  },
  {
    slug: 'the-right-kind-of-visible',
    category: 'Media Visibility',
    title: 'The right kind of visible',
    excerpt:
      'Visibility is not the enemy of authority; the wrong kind is. Being present in the right places, consistently, is what keeps a credible business top of mind when it matters.',
    publishedDate: '2026-08-05',
    related: [
      'authority-vs-visibility',
      'choosing-the-right-press-strategy',
      'managing-your-digital-reputation',
    ],
    resources: ['authority-readiness-guide', 'press-positioning-template'],
    body: [
      {
        type: 'p',
        text: 'It is easy, in a firm that talks constantly about authority over attention, to leave the impression that visibility is something to be avoided. It is not. Being seen is not the problem. Being seen for the wrong things, in the wrong places, or in place of having any substance, is the problem. Handled well, media visibility is not the opposite of authority. It is one of the ways authority is kept alive.',
      },
      {
        type: 'p',
        text: 'The distinction that matters is between visibility that compounds your credibility and visibility that merely spends attention. Both put your name in front of people. Only one of them leaves you more trusted afterward than before. This is about how to pursue the first kind, and how to recognize the second before it costs you.',
      },
      { type: 'h2', text: 'Invisible expertise is a real cost' },
      {
        type: 'p',
        text: 'Start with the failure most credible businesses actually suffer, which is not too much visibility but too little. There are excellent firms and capable founders who are almost unknown outside their immediate circle. Their work is real, their expertise genuine, and yet when the relevant audience looks up, they are nowhere to be found. In a field where others are present and they are absent, that absence has a price.',
      },
      {
        type: 'p',
        text: 'The price is not just missed attention. It is missed credibility by association. When your name never appears in the places your audience trusts, the quiet inference is that you are not part of the conversation that matters. Being invisible is not neutral. It reads, to the people deciding, as being minor.',
      },
      {
        type: 'quote',
        text: 'Being unknown is not the same as being modest. To the people who matter, it often reads as being unimportant.',
      },
      { type: 'h2', text: 'What media visibility is actually for' },
      {
        type: 'p',
        text: 'If visibility is worth having, it is worth being clear about what it does. Media visibility, done well, serves a few specific purposes, none of which is applause for its own sake.',
      },
      {
        type: 'ul',
        items: [
          'It keeps you present. Appearing consistently in the places your audience pays attention to means you are considered when decisions are made, not forgotten between them.',
          'It reinforces credibility. Each appearance in a respected context is a small, repeated signal that you belong in it.',
          'It compounds recognition. Familiarity, built honestly over time, lowers the resistance a stranger brings to a first encounter.',
        ],
      },
      {
        type: 'p',
        text: 'Notice what is missing from that list: raw reach, follower counts, and viral moments. Those are the metrics of visibility pursued as an end. The purposes above are all about supporting something more durable. Visibility, in this frame, is not the goal. It is the maintenance of a reputation that already has substance behind it.',
      },
      { type: 'h2', text: 'Visibility maintains; it does not create' },
      {
        type: 'p',
        text: 'One distinction prevents a common and expensive error. Visibility maintains authority; it does not create it. The substance, the independent confirmation, the record: those are what make you credible. Visibility keeps that credibility in view, reminds the market it exists, and carries it to new people. But pointing a spotlight at an empty stage does not fill it.',
      },
      {
        type: 'p',
        text: 'This is why visibility works only in proportion to what it reveals. The more real your substance, the more every appearance returns; the thinner it is, the faster visibility exposes the gap. Pursued in the right order, visibility is amplification. Pursued in place of substance, it is exposure of the wrong kind.',
      },
      { type: 'h2', text: 'The three questions that separate signal from noise' },
      {
        type: 'p',
        text: 'Not all visibility is worth having, and some of it actively works against you. Three questions sort the visibility that builds authority from the kind that merely makes noise.',
      },
      {
        type: 'ul',
        items: [
          'The right places? Are you visible where your audience actually forms its judgments, or simply wherever it was easy to appear? Presence in a respected, relevant context is worth many times presence in an irrelevant one.',
          'The right association? Does being seen here reflect well on you? Visibility borrows the character of its context, and appearing in the wrong company subtracts credibility rather than adding it.',
          'The right substance? Is there something real behind the appearance, or are you visible for being visible? Attention with nothing underneath it ages into a liability.',
        ],
      },
      {
        type: 'p',
        text: 'Visibility that passes all three compounds quietly into authority. Visibility that fails them is, at best, forgettable, and at worst, the kind of noise a careful audience learns to discount.',
      },
      { type: 'h2', text: 'Owned, earned, and the space between' },
      {
        type: 'p',
        text: 'It helps to be concrete about where media visibility comes from, because the sources differ in how much they are worth. Broadly, there are three. There is what you publish yourself, the content on your own channels. There is what others say about you, the earned coverage and independent mentions. And there is the middle ground, the contributed piece, the interview, the quoted comment, where you provide the substance but an independent outlet lends its platform and judgment.',
      },
      {
        type: 'p',
        text: 'These are not equal. What you publish yourself is useful but discounted, because everyone knows it is you talking about you. Earned coverage carries the most weight, because it survived someone else’s judgment. The middle ground is often the most practical place to build, because it pairs your genuine expertise with an independent outlet’s credibility, and it is more attainable than pure earned coverage while being far more persuasive than self-publishing.',
      },
      {
        type: 'p',
        text: 'A healthy visibility mixes all three, weighted toward the independent end. Owned channels keep you current and consistent; contributed and earned appearances are what actually move your standing. The mistake is to pour everything into the channel you control, because it is the easiest, and then wonder why the visibility never quite converts into credibility.',
      },
      { type: 'h2', text: 'Consistency beats intensity' },
      {
        type: 'p',
        text: 'A single burst of media attention, however large, rarely changes how a business is perceived. What changes perception is presence sustained over time. A steady, modest visibility in the right places does more than an occasional spike, because it is the pattern, not the peak, that a watching audience registers.',
      },
      {
        type: 'p',
        text: 'This is the opposite of how visibility is usually pursued. The instinct is to chase the big moment, the major feature, the viral post. But intensity fades on a schedule, and an audience that saw you once and never again concludes little. Consistency, by contrast, accumulates. Appearing reliably, in relevant contexts, over months and years, is what turns a name people have heard of into a name people trust.',
      },
      {
        type: 'quote',
        text: 'The audience remembers the pattern, not the peak. Being reliably present matters more than being briefly loud.',
      },
      { type: 'h2', text: 'The compounding of familiarity' },
      {
        type: 'p',
        text: 'There is a subtle mechanism worth understanding, because it explains why steady visibility repays patience. Familiarity lowers resistance. The first time someone encounters your name, they assess it from scratch, with all the skepticism a stranger brings. The fifth time, in a credible context, the name is already faintly known, and known-ness, even mild, makes the next judgment easier. People trust the familiar more readily than the unfamiliar, provided the familiarity was earned in the right places.',
      },
      {
        type: 'p',
        text: 'This is why the returns on visibility are not linear. Early on, each appearance seems to do little; the name is still new, the recognition thin. But familiarity compounds, and past some threshold the same effort begins to return much more, because you are no longer introducing yourself each time. You are confirming something the audience already half-knew. Give up before that threshold, as many do, and the earlier work is largely wasted. Persist past it, and visibility starts to pay for itself.',
      },
      { type: 'h2', text: 'What this looks like in practice' },
      {
        type: 'p',
        text: 'Consider a specialist who is genuinely expert and almost entirely invisible. Their peers know them; the wider market does not. When a prospect researches the field, this specialist does not appear in any of the places that shape the prospect’s view, and so, despite the quality of their work, they are not considered. The absence is quietly deciding outcomes against them.',
      },
      {
        type: 'p',
        text: 'Now consider the same specialist after a period of deliberate, honest visibility: an occasional contribution to a respected industry outlet, a consistent and credible presence where their audience already looks, a name that now surfaces in the right contexts. Nothing was exaggerated, and no substance was faked. What changed is that they became part of the conversation, and being part of it, they are now considered when it counts. The expertise was always there. The visibility is what let it be found.',
      },
      {
        type: 'p',
        text: 'The lesson is not that visibility substitutes for substance. It is that substance no one can see does not do the work it should. The right kind of visibility is how good work gets the credit it has already earned.',
      },
      { type: 'h2', text: 'Common mistakes' },
      {
        type: 'ul',
        items: [
          'Mistaking noise for presence. Chasing reach and volume rather than consistent presence in relevant, respected places.',
          'Visibility without substance. Becoming known for being visible, with nothing durable underneath, which eventually reads as hollow.',
          'The wrong company. Appearing in low-quality or irrelevant contexts that subtract credibility rather than adding it.',
          'Chasing peaks. Betting on the occasional big moment instead of building steady, compounding presence.',
          'Going quiet. Treating visibility as a one-time campaign, then disappearing, and letting recognition decay.',
        ],
      },
      { type: 'h2', text: 'Practical recommendations' },
      {
        type: 'p',
        text: 'Pursuing the right kind of visibility is less about volume than about discipline: being present, deliberately, where it counts, and letting it accumulate.',
      },
      {
        type: 'ul',
        items: [
          'Be visible where your audience already looks, not wherever is easiest. Choose relevance over reach every time.',
          'Protect your associations. Be selective about the contexts you appear in; they lend you their character.',
          'Keep substance ahead of visibility. Make sure there is always something real behind every appearance.',
          'Favour consistency over intensity. Steady, credible presence beats the occasional spike.',
          'Stay present. Treat visibility as ongoing maintenance of a reputation, not a campaign with an end date.',
        ],
      },
      { type: 'h2', text: 'Seen for the right reasons' },
      {
        type: 'p',
        text: 'Visibility deserves neither the worship it gets in marketing nor the suspicion it gets from those who prize authority above all. It is a tool, and like any tool its value depends entirely on how it is used. Used to amplify real substance, in the right places, consistently, it is one of the ways credibility stays alive and reaches the people it should. Used as a substitute for substance, it is noise that eventually costs more than it returns.',
      },
      {
        type: 'p',
        text: 'So the aim is not to be more visible, or less. It is to be visible for the right reasons, in the right places, backed by something real. Get that right, and being seen stops competing with being trusted, and starts serving it.',
      },
      {
        type: 'quote',
        text: 'The goal was never to be seen more. It was to be seen for the things that are actually true about you.',
      },
    ],
  },
  {
    slug: 'managing-your-digital-reputation',
    category: 'Digital Reputation',
    title: 'The reputation the internet keeps for you',
    excerpt:
      'Your digital reputation is the sum of everything the internet says about you, most of which you did not write. Managing it is less about control than about consistency and care.',
    publishedDate: '2026-08-05',
    related: [
      'owning-the-first-page-of-your-name',
      'credibility-beyond-the-company',
      'the-right-kind-of-visible',
    ],
    resources: ['authority-readiness-guide', 'press-positioning-template'],
    body: [
      {
        type: 'p',
        text: 'Somewhere out there is a version of your business assembled entirely by other people. It lives across search results, profiles, reviews, mentions, old articles, and passing references, most of which you did not write and cannot delete. Added together, it is your digital reputation, and for anyone who checks you online, it is simply the truth about you until something changes their mind.',
      },
      {
        type: 'p',
        text: 'This is uncomfortable, because it means your reputation is partly out of your hands. But out of your hands is not the same as out of your influence. Managing a digital reputation is not about controlling what exists, which is mostly impossible, but about shaping it through consistency, presence, and care over time.',
      },
      { type: 'h2', text: 'Reputation is bigger than search' },
      {
        type: 'p',
        text: 'It is tempting to reduce digital reputation to the first page of a search for your name, and that page matters enormously. But reputation is broader. It is the whole scattered record: the profiles on platforms you barely visit, the review left years ago, the directory entry with outdated details, the mention in someone else’s article, the comment in a forum. A careful person assessing you may encounter any of these, and each contributes to the impression they form.',
      },
      {
        type: 'p',
        text: 'The defining feature of this record is that it is distributed and largely authored by others. No single page tells the whole story, and you did not write most of it. That is precisely why it is credible to outsiders, and precisely why it is hard to manage. You are not editing a document. You are tending a reputation that exists in many places at once.',
      },
      {
        type: 'quote',
        text: 'Your digital reputation is not a page you own. It is a picture other people assemble from pieces you mostly did not place.',
      },
      { type: 'h2', text: 'The audit you keep avoiding' },
      {
        type: 'p',
        text: 'Before any of this can be managed, it has to be seen, and the first practical step is the one businesses most often skip: actually looking. Not the reassuring glance at your own homepage, but a deliberate audit of what a stranger finds. Search your name and your business in a fresh, logged-out window. Read the results as an outsider deciding whether to trust you. Check the profiles you forgot you had. Look at the reviews, the directory entries, the old mentions.',
      },
      {
        type: 'p',
        text: 'The reason this step gets skipped is that it is uncomfortable. It surfaces the outdated bio, the profile you abandoned, the detail that no longer fits, and it turns a vague unease into a concrete list. But the discomfort is the point. You cannot manage a reputation you have never honestly examined, and the gap between what you assume is out there and what actually is tends to be wider than anyone expects.',
      },
      {
        type: 'p',
        text: 'What you are looking for is not perfection but coherence and currency: whether the pieces agree, and whether they reflect who you are now. Note the contradictions, the outdated details, and the gaps where independent confirmation should exist and does not. That list becomes the plan. Most of it will be unglamorous maintenance, and most reputational strength is built from exactly that.',
      },
      { type: 'h2', text: 'Consistency is the whole game' },
      {
        type: 'p',
        text: 'If you cannot control every piece, what can you do? The single most powerful lever is consistency. When the picture is consistent across every place someone might look, a stranger can assemble a coherent, trustworthy account of you. When the pieces contradict, that trust collapses, regardless of how flattering any individual piece may be.',
      },
      {
        type: 'p',
        text: 'Contradiction is more damaging than any single weak entry. A bio that says one thing and a profile that says another, a description that has moved on while an old page insists on the past, details that do not line up: each mismatch forces the observer to wonder which version is true, and a reputation that raises that question has already lost something. The work of consistency is unglamorous, but it is where most reputational damage is quietly prevented.',
      },
      {
        type: 'ul',
        items: [
          'Your profiles, everywhere, tell the same story about who you are and what you do.',
          'Your current positioning is reflected in the places you control, not contradicted by neglected ones.',
          'The details a stranger can check, names, roles, and facts, agree with each other.',
        ],
      },
      { type: 'h2', text: 'The parts you control, and the parts you don’t' },
      {
        type: 'p',
        text: 'A useful way to think about the work is to divide the record into what you can change directly and what you cannot. The two demand different responses.',
      },
      {
        type: 'p',
        text: 'The parts you control, your own site, your profiles, your published presence, are your responsibility to keep current, consistent, and credible. Neglect here is inexcusable, because it is the one part of the record entirely in your hands, and a stale or contradictory owned presence undermines everything else.',
      },
      {
        type: 'p',
        text: 'The parts you do not control, independent coverage, third-party mentions, reviews, and old references, cannot be edited, and trying to force them tends to backfire. What you can do is influence the balance over time: by building a strong, current, independent record, you ensure that the picture as a whole reflects who you are now, even where individual old pieces linger. You do not erase the past. You out-weigh it with an accurate present.',
      },
      { type: 'h2', text: 'Handling the negative and the outdated, honestly' },
      {
        type: 'p',
        text: 'Sooner or later, most businesses find something in their digital record they wish were not there: an outdated description, an unfair review, a piece that no longer reflects reality. The instinct is to make it disappear. That instinct is usually wrong, and occasionally dangerous.',
      },
      {
        type: 'p',
        text: 'Attempts to scrub or suppress honest information tend to be discovered, and the discovery is worse than the original. The credible response to the outdated is to make the current record so clearly accurate that the old piece reads as old. The credible response to genuine criticism is to address it openly, not to bury it. Reputation is not protected by hiding the truth; it is protected by making sure the fullest, most current, most verifiable version of the truth is easy to find.',
      },
      {
        type: 'quote',
        text: 'You cannot delete your way to a good reputation. You build one that is truer and more current than the thing you wish would disappear.',
      },
      {
        type: 'p',
        text: 'There is a narrow exception worth naming. Genuinely false, defamatory, or unlawful material is a different matter, and there are legitimate channels for addressing it. But that is a small and specific category, not a licence to suppress anything unflattering. For the ordinary case, the outdated, the fair criticism, the piece you have simply outgrown, the answer is not removal but a stronger, truer, more current record that puts the old material in its proper context. The instinct to delete is almost always stronger than the situation warrants, and acting on it tends to create the very impression you were trying to avoid.',
      },
      { type: 'h2', text: 'What this looks like in practice' },
      {
        type: 'p',
        text: 'Take a business whose digital record has simply drifted. Nothing scandalous, just entropy: a profile two roles out of date, a bio that predates a change in direction, a directory listing with an old address, a description that no longer matches the current one on the website. Individually, each is trivial. Together, they tell a prospect that the business is either careless or hard to pin down, and both impressions cost trust.',
      },
      {
        type: 'p',
        text: 'Now take the same business after a deliberate pass: every controlled profile updated to one consistent story, the current positioning reflected everywhere it can be, the independent record strengthened so recent, accurate material outweighs the old. Nothing was deleted or faked. The scattered contradictions simply gave way to a coherent picture, and a prospect checking now finds a business that is exactly what it says it is, everywhere they look. That coherence is the reputation.',
      },
      { type: 'h2', text: 'Common mistakes' },
      {
        type: 'ul',
        items: [
          'Ignoring the record. Never looking at what the internet actually says about you, and being surprised by what a prospect finds.',
          'Letting owned assets drift. Allowing your own profiles and pages to fall out of date and contradict each other.',
          'Trying to delete the truth. Attempting to scrub honest but unflattering information, which usually backfires.',
          'Fighting individual pieces. Obsessing over one old entry instead of strengthening the overall, current picture.',
          'Treating it as one-time. Cleaning up once and then letting the record drift again.',
        ],
      },
      { type: 'h2', text: 'Practical recommendations' },
      {
        type: 'p',
        text: 'Managing a digital reputation is ongoing tending, not a one-off project. A few habits do most of the work.',
      },
      {
        type: 'ul',
        items: [
          'Look, regularly, as an outsider. Know what the internet says about you before the people deciding about you do.',
          'Keep everything you control consistent and current. Your own presence is the part you have no excuse to neglect.',
          'Out-weigh the old with an accurate present, rather than trying to erase the past.',
          'Meet criticism and outdated information with openness and current truth, not suppression.',
          'Treat it as maintenance. A reputation, once coherent, stays coherent only if it is tended.',
        ],
      },
      { type: 'h2', text: 'Reputation compounds, in both directions' },
      {
        type: 'p',
        text: 'A reputation, like the authority it supports, compounds, and it does so in both directions. A coherent, current, well-tended digital presence makes each new positive signal land more easily; the picture is already credible, so an addition simply confirms it. A neglected, contradictory one does the reverse, making even good news harder to believe, because it arrives into a story that does not hold together.',
      },
      {
        type: 'p',
        text: 'This is why small, consistent care matters more than occasional large effort. The business that keeps its record coherent as it goes rarely faces a reputational crisis, because there is no accumulated mess to unravel. The one that ignores it until something goes wrong discovers that a reputation is far harder to repair under pressure than to maintain in calm. The cheapest time to tend a reputation is always now, before you need it to be strong.',
      },
      { type: 'h2', text: 'The reputation that holds together' },
      {
        type: 'p',
        text: 'You will never fully control your digital reputation, and the effort to do so is both futile and revealing. What you can do is take responsibility for the parts that are yours, keep the whole picture consistent, and make sure the truest, most current version of yourself is the easiest one to find. Do that steadily, and the scattered record other people keep of you settles into something coherent, accurate, and quietly in your favour.',
      },
      {
        type: 'p',
        text: 'The internet will always keep its own version of you. The work is simply to make sure that version tells the truth, and that the truth it tells is current. A reputation tended that way does not need to be controlled. It holds together on its own.',
      },
      {
        type: 'quote',
        text: 'You cannot own everything the internet says about you. You can make sure that, taken together, it is true.',
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
