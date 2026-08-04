import { usePageSeo } from '../../lib/usePageSeo';
import { CASE_STUDY_FAQS } from '../../content/caseStudies';
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
  usePageSeo({ path: '/case-studies', faq: CASE_STUDY_FAQS });

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
