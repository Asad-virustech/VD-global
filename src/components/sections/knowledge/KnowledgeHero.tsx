import { BookOpen } from 'lucide-react';
import { PageHero } from '../PageHero';

export function KnowledgeHero() {
  return (
    <PageHero
      label="Knowledge Hub"
      index="05"
      title={
        <>
          Knowledge builds <span className="text-teal-300">authority</span>.
        </>
      }
      subtitle="Practical insights on reputation, authority, media visibility, Wikipedia readiness, and long-term credibility."
      primary={{ label: 'Browse the insights', href: '#insights' }}
      secondary={{ label: 'Start your free authority assessment', to: '/assessment', icon: BookOpen }}
      meta={['Practical, not promotional', 'Written for decisions', 'Free to read']}
    />
  );
}
