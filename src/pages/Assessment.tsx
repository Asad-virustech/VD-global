import { useDocumentMeta } from '../../lib/useDocumentMeta';
import { FIRM } from '../../content/site';
import { AssessmentHero } from '../components/sections/assessment/AssessmentHero';
import { WhyAuthorityMatters } from '../components/sections/assessment/WhyAuthorityMatters';
import { WhatWeAssess } from '../components/sections/assessment/WhatWeAssess';
import { AssessmentFramework } from '../components/sections/assessment/AssessmentFramework';
import { CommonAuthorityGaps } from '../components/sections/assessment/CommonAuthorityGaps';
import { AssessmentFaq } from '../components/sections/assessment/AssessmentFaq';
import { AssessmentCta } from '../components/sections/assessment/AssessmentCta';

export default function Assessment() {
  useDocumentMeta({
    title: 'Authority Assessment — VD Global',
    description: `Understand how your business is currently perceived. ${FIRM.name}'s complimentary Authority Assessment evaluates your credibility, media presence, search visibility and reputation — with practical, honest recommendations.`,
  });

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
