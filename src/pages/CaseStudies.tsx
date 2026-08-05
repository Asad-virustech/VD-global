import { usePageSeo } from '../../lib/usePageSeo';
import { CASE_STUDY_FAQS } from '../../content/caseStudies';
import { CaseStudiesHero } from '../components/sections/casestudies/CaseStudiesHero';
import { WhyCaseStudiesMatter } from '../components/sections/casestudies/WhyCaseStudiesMatter';
import { SelectedEngagements } from '../components/sections/casestudies/SelectedEngagements';
import { CommonThread } from '../components/sections/casestudies/CommonThread';
import { ProblemSolvingFramework } from '../components/sections/casestudies/ProblemSolvingFramework';
import { LessonsLearned } from '../components/sections/casestudies/LessonsLearned';
import { ClosingThought } from '../components/sections/casestudies/ClosingThought';
import { CaseStudiesFaq } from '../components/sections/casestudies/CaseStudiesFaq';
import { CaseStudiesCta } from '../components/sections/casestudies/CaseStudiesCta';

export default function CaseStudies() {
  usePageSeo({ path: '/case-studies', faq: CASE_STUDY_FAQS });

  return (
    <>
      <CaseStudiesHero />
      <WhyCaseStudiesMatter />
      <SelectedEngagements />
      <CommonThread />
      <ProblemSolvingFramework />
      <LessonsLearned />
      <ClosingThought />
      <CaseStudiesFaq />
      <CaseStudiesCta />
    </>
  );
}
