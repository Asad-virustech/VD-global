import { CalendarClock } from 'lucide-react';
import { CtaBand } from '../CtaBand';

export function AboutCta() {
  return (
    <CtaBand
      eyebrow="Start With Clarity"
      title="Let’s Build Something Worth Being Recognized For."
      description="Authority isn’t created overnight. It grows through consistent decisions, strategic visibility and earned trust."
      primary={{ label: 'Start Your Free Authority Assessment', to: '/assessment' }}
      secondary={{ label: 'Schedule a Consultation', to: '/contact', icon: CalendarClock }}
    />
  );
}
