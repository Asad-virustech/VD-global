import { usePageSeo } from '../../lib/usePageSeo';
import { AssessmentHero } from '../components/sections/assessment/AssessmentHero';
import { WhyAuthorityMatters } from '../components/sections/assessment/WhyAuthorityMatters';
import { WhatWeAssess } from '../components/sections/assessment/WhatWeAssess';
import { AssessmentFramework } from '../components/sections/assessment/AssessmentFramework';
import { CommonAuthorityGaps } from '../components/sections/assessment/CommonAuthorityGaps';
import { AssessmentFaq, FAQS } from '../components/sections/assessment/AssessmentFaq';
import { AssessmentCta } from '../components/sections/assessment/AssessmentCta';

export default function Assessment() {
  usePageSeo({ path: '/assessment', faq: FAQS });

  return (
    <>
      <AssessmentHero />
      <WhyAuthorityMatters />
      <WhatWeAssess />
      <AssessmentFramework />
      <CommonAuthorityGaps />
      <AssessmentFaq />
      <AssessmentCta />
    </>
  );
}
