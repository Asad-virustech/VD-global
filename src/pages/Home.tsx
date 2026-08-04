import { usePageSeo } from '../../lib/usePageSeo';
import { Hero } from '../components/sections/Hero';
import { AuthorityGap } from '../components/sections/AuthorityGap';
import { Solutions } from '../components/sections/Solutions';
import { AuthorityFrameworkSection } from '../components/sections/AuthorityFrameworkSection';
import { Philosophy } from '../components/sections/Philosophy';
import { WhyVdGlobal } from '../components/sections/WhyVdGlobal';
import { Assessment } from '../components/sections/Assessment';
import { KnowledgeHubPreview } from '../components/sections/KnowledgeHubPreview';
import { Faq, FAQS } from '../components/sections/Faq';
import { FinalCta } from '../components/sections/FinalCta';

export default function Home() {
  usePageSeo({ path: '/', faq: FAQS });

  return (
    <>
      <Hero />
      <AuthorityGap />
      <Solutions />
      <AuthorityFrameworkSection />
      <Philosophy />
      <WhyVdGlobal />
      <KnowledgeHubPreview />
      <Faq />
      <Assessment />
      <FinalCta />
    </>
  );
}
