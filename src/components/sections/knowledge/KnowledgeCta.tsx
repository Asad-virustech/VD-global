import { CalendarClock } from 'lucide-react';
import { CtaBand } from '../CtaBand';

export function KnowledgeCta() {
  return (
    <CtaBand
      eyebrow="Start With Clarity"
      title="Turn understanding into authority."
      description="The strongest authority strategies begin with understanding."
      primary={{ label: 'Start your free authority assessment', to: '/assessment' }}
      secondary={{ label: 'Talk with our team', to: '/contact', icon: CalendarClock }}
    />
  );
}
