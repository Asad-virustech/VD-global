import { useDocumentMeta } from '../../lib/useDocumentMeta';
import { FIRM } from '../../content/site';
import { CaseStudiesHero } from '../components/sections/casestudies/CaseStudiesHero';
import { WhyCaseStudiesMatter } from '../components/sections/casestudies/WhyCaseStudiesMatter';
import { FeaturedCaseStudy } from '../components/sections/casestudies/FeaturedCaseStudy';
import { CaseStudyLibrary } from '../components/sections/casestudies/CaseStudyLibrary';
import { ProblemSolvingFramework } from '../components/sections/casestudies/ProblemSolvingFramework';
import { IndustriesWeSupport } from '../components/sections/casestudies/IndustriesWeSupport';
import { LessonsLearned } from '../components/sections/casestudies/LessonsLearned';
import { CaseStudiesFaq } from '../components/sections/casestudies/CaseStudiesFaq';
import { CaseStudiesCta } from '../components/sections/casestudies/CaseStudiesCta';

export default function CaseStudies() {
  useDocumentMeta({
    title: 'Case Studies — VD Global',
    description: `How ${FIRM.name} approaches real authority challenges — the strategic thinking behind strengthening credibility, visibility and long-term reputation. Educational scenarios, no fabricated metrics.`,
  });

  return (
    <>
      <CaseStudiesHero />
      <WhyCaseStudiesMatter />
      <FeaturedCaseStudy />
      <CaseStudyLibrary />
      <ProblemSolvingFramework />
      <IndustriesWeSupport />
      <LessonsLearned />
      <CaseStudiesFaq />
      <CaseStudiesCta />
    </>
  );
}
