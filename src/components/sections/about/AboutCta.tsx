import { CalendarClock } from 'lucide-react';
import { CtaBand } from '../CtaBand';

export function AboutCta() {
  return (
    <CtaBand
      eyebrow="Start With Clarity"
      title="Let’s build something worth being recognized for."
      description="Authority isn’t created overnight. It grows through consistent decisions, strategic visibility, and earned trust."
      primary={{ label: 'Start your free authority assessment', to: '/assessment' }}
      secondary={{ label: 'Talk with our team', to: '/contact', icon: CalendarClock }}
    />
  );
}
