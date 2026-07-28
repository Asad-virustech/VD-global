import { CalendarClock } from 'lucide-react';
import { PageHero } from '../PageHero';

export function AssessmentHero() {
  return (
    <PageHero
      label="Assessment"
      ghost="ASSESSMENT"
      title={
        <>
          Authority <span className="text-teal-300">Assessment</span>.
        </>
      }
      subtitle="Understand how your business is currently perceived, identify credibility gaps, and discover practical opportunities to strengthen your public authority."
      primary={{ label: 'Start Your Free Assessment', to: '/contact' }}
      secondary={{ label: 'Schedule a Consultation', to: '/contact', icon: CalendarClock }}
      meta={[
        'Complimentary & no obligation',
        'Initial response within 24 hours',
        'Practical, honest recommendations',
      ]}
    />
  );
}
