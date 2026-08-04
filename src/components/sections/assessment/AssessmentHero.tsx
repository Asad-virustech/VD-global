import { PageHero } from '../PageHero';
import { FIRM } from '../../../../content/site';

export function AssessmentHero() {
  return (
    <PageHero
      label="Assessment"
      index="03"
      title={
        <>
          Authority <span className="text-teal-300">Assessment</span>.
        </>
      }
      subtitle="Understand how your business is currently perceived, identify credibility gaps, and discover practical opportunities to strengthen your public authority."
      primary={{ label: 'Talk with our team', to: '/contact' }}
      meta={[
        'Complimentary and no obligation',
        `Initial response within ${FIRM.responseWindow}`,
        'Practical, honest recommendations',
      ]}
    />
  );
}
