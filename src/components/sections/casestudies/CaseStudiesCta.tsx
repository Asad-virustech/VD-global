import { CalendarClock } from 'lucide-react';
import { CtaBand } from '../CtaBand';

export function CaseStudiesCta() {
  return (
    <CtaBand
      eyebrow="Start With Clarity"
      title="Let’s build your next success story."
      description="Every engagement begins with understanding where you stand and building the right long-term strategy."
      primary={{ label: 'Start your free authority assessment', to: '/assessment' }}
      secondary={{ label: 'Talk with our team', to: '/contact', icon: CalendarClock }}
    />
  );
}
