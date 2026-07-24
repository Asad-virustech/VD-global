import { useDocumentMeta } from '../../lib/useDocumentMeta';
import { FIRM } from '../../content/site';
import { KnowledgeHero } from '../components/sections/knowledge/KnowledgeHero';
import { FeaturedInsight } from '../components/sections/knowledge/FeaturedInsight';
import { BrowseByTopic } from '../components/sections/knowledge/BrowseByTopic';
import { LatestInsights } from '../components/sections/knowledge/LatestInsights';
import { AuthorityResources } from '../components/sections/knowledge/AuthorityResources';
import { WhyEducationMatters } from '../components/sections/knowledge/WhyEducationMatters';
import { Newsletter } from '../components/sections/knowledge/Newsletter';
import { KnowledgeFaq } from '../components/sections/knowledge/KnowledgeFaq';
import { KnowledgeCta } from '../components/sections/knowledge/KnowledgeCta';

export default function Knowledge() {
  useDocumentMeta({
    title: 'Knowledge Hub — VD Global',
    description: `A curated knowledge library from ${FIRM.name} — practical insights on authority, reputation, media visibility, Wikipedia readiness and long-term credibility. Education-first, free to read.`,
  });

  return (
    <>
      <KnowledgeHero />
      <FeaturedInsight />
      <BrowseByTopic />
      <LatestInsights />
      <AuthorityResources />
      <WhyEducationMatters />
      <Newsletter />
      <KnowledgeFaq />
      <KnowledgeCta />
    </>
  );
}
