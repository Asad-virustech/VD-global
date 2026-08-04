import { usePageSeo } from '../../lib/usePageSeo';
import { SolutionsHero } from '../components/sections/solutions/SolutionsHero';
import { AuthorityEcosystem } from '../components/sections/solutions/AuthorityEcosystem';
import { SolutionsFlow } from '../components/sections/solutions/SolutionsFlow';
import { ChoosingStrategy } from '../components/sections/solutions/ChoosingStrategy';
import { WhyNoPackages } from '../components/sections/solutions/WhyNoPackages';
import { SolutionsFaq, FAQS } from '../components/sections/solutions/SolutionsFaq';
import { SolutionsCta } from '../components/sections/solutions/SolutionsCta';

export default function Solutions() {
  usePageSeo({ path: '/solutions', faq: FAQS });

  return (
    <>
      <SolutionsHero />
      <AuthorityEcosystem />
      <SolutionsFlow />
      <ChoosingStrategy />
      <WhyNoPackages />
      <SolutionsFaq />
      <SolutionsCta />
    </>
  );
}
