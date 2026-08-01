import { MessageSquare } from 'lucide-react';
import { PageHero } from '../PageHero';

export function AboutHero() {
  return (
    <PageHero
      label="About"
      index="01"
      title={
        <>
          Building authority begins with <span className="text-teal-300">trust</span>.
        </>
      }
      subtitle="VD Global was founded on a simple belief: authority should be earned through credibility, expertise, and long-term reputation, not manufactured through marketing."
      primary={{ label: 'Start your free authority assessment', to: '/assessment' }}
      secondary={{ label: 'Talk with our team', to: '/contact', icon: MessageSquare }}
      meta={['Advice before sales', 'Built for the long term', 'Honest about the odds']}
    />
  );
}
