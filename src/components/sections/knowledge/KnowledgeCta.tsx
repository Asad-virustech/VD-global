import { CalendarClock } from 'lucide-react';
import { CtaBand } from '../CtaBand';

export function KnowledgeCta() {
  return (
    <CtaBand
      eyebrow="Start With Clarity"
      title="Ready to Build Authority With Confidence?"
      description="The strongest authority strategies begin with understanding."
      primary={{ label: 'Start Your Free Authority Assessment', to: '/assessment' }}
      secondary={{ label: 'Schedule a Consultation', to: '/contact', icon: CalendarClock }}
    />
  );
}
