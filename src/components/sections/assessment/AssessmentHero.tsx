import { CalendarClock } from 'lucide-react';
import { PageHero } from '../PageHero';

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
      primary={{ label: 'Start your assessment', to: '/contact' }}
      secondary={{ label: 'Talk with our team', to: '/contact', icon: CalendarClock }}
      meta={[
        'Complimentary and no obligation',
        'Initial response within 24 hours',
        'Practical, honest recommendations',
      ]}
    />
  );
}
