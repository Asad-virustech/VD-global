import { usePageSeo } from '../../lib/usePageSeo';
import { KnowledgeHero } from '../components/sections/knowledge/KnowledgeHero';
import { FeaturedInsight } from '../components/sections/knowledge/FeaturedInsight';
import { BrowseByTopic } from '../components/sections/knowledge/BrowseByTopic';
import { LatestInsights } from '../components/sections/knowledge/LatestInsights';
import { AuthorityResources } from '../components/sections/knowledge/AuthorityResources';
import { WhyEducationMatters } from '../components/sections/knowledge/WhyEducationMatters';
import { Newsletter } from '../components/sections/knowledge/Newsletter';
import { KnowledgeFaq, FAQS } from '../components/sections/knowledge/KnowledgeFaq';
import { KnowledgeCta } from '../components/sections/knowledge/KnowledgeCta';

export default function Knowledge() {
  usePageSeo({ path: '/knowledge', faq: FAQS });

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
