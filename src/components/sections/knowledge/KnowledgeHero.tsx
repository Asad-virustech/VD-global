import { BookOpen } from 'lucide-react';
import { PageHero } from '../PageHero';

export function KnowledgeHero() {
  return (
    <PageHero
      label="Knowledge Hub"
      ghost="INSIGHTS"
      title={
        <>
          Knowledge Builds <span className="text-teal-300">Authority</span>.
        </>
      }
      subtitle="Explore practical insights on reputation, authority, media visibility, Wikipedia readiness and long-term credibility."
      primary={{ label: 'Explore Articles', href: '#insights' }}
      secondary={{ label: 'Start Your Free Authority Assessment', to: '/assessment', icon: BookOpen }}
      meta={['Practical, not promotional', 'Written for decisions', 'Free to read']}
    />
  );
}
