import { useDocumentMeta } from '../../lib/useDocumentMeta';
import { FIRM } from '../../content/site';
import { SolutionsHero } from '../components/sections/solutions/SolutionsHero';
import { AuthorityEcosystem } from '../components/sections/solutions/AuthorityEcosystem';
import { SolutionsFlow } from '../components/sections/solutions/SolutionsFlow';
import { ChoosingStrategy } from '../components/sections/solutions/ChoosingStrategy';
import { WhyNoPackages } from '../components/sections/solutions/WhyNoPackages';
import { SolutionsFaq } from '../components/sections/solutions/SolutionsFaq';
import { SolutionsCta } from '../components/sections/solutions/SolutionsCta';

export default function Solutions() {
  useDocumentMeta({
    title: 'Solutions — VD Global',
    description: `${FIRM.name} helps businesses build long-term authority through strategy, PR, Wikipedia advisory, executive positioning, digital reputation and thought leadership — advisory-first, never predefined packages.`,
  });

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
