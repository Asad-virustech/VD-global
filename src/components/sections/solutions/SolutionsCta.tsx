import { CalendarClock } from 'lucide-react';
import { CtaBand } from '../CtaBand';

export function SolutionsCta() {
  return (
    <CtaBand
      eyebrow="Start With Clarity"
      title="Let’s Build the Right Authority Strategy."
      description="Every successful authority journey begins with understanding where you stand today."
      primary={{ label: 'Start Your Free Authority Assessment', to: '/assessment' }}
      secondary={{ label: 'Schedule a Consultation', to: '/contact', icon: CalendarClock }}
    />
  );
}
