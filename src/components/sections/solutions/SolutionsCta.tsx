import { CalendarClock } from 'lucide-react';
import { CtaBand } from '../CtaBand';

export function SolutionsCta() {
  return (
    <CtaBand
      eyebrow="Start With Clarity"
      title="Let’s build the right authority strategy."
      description="Every engagement begins with understanding where you stand today."
      primary={{ label: 'Start your free authority assessment', to: '/assessment' }}
      secondary={{ label: 'Talk with our team', to: '/contact', icon: CalendarClock }}
    />
  );
}
