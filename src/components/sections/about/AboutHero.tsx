import { MessageSquare } from 'lucide-react';
import { PageHero } from '../PageHero';

export function AboutHero() {
  return (
    <PageHero
      label="About"
      ghost="ABOUT"
      title={
        <>
          Building Authority Begins With <span className="text-teal-300">Trust</span>.
        </>
      }
      subtitle="VD Global was founded on a simple belief: authority should be earned through credibility, expertise and long-term reputation — not manufactured through marketing."
      primary={{ label: 'Start Your Free Authority Assessment', to: '/assessment' }}
      secondary={{ label: 'Talk With Our Team', to: '/contact', icon: MessageSquare }}
      meta={['Advisory over sales', 'Long-term over quick wins', 'Honesty over hype']}
    />
  );
}
