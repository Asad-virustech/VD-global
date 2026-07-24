import { CalendarClock } from 'lucide-react';
import { CtaBand } from '../CtaBand';

export function CaseStudiesCta() {
  return (
    <CtaBand
      eyebrow="Start With Clarity"
      title="Let’s Build Your Next Success Story."
      description="Every successful authority journey begins with understanding your current position and creating the right long-term strategy."
      primary={{ label: 'Start Your Free Authority Assessment', to: '/assessment' }}
      secondary={{ label: 'Schedule a Consultation', to: '/contact', icon: CalendarClock }}
    />
  );
}
