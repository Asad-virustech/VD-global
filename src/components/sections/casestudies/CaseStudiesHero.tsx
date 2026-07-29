import { MessageSquare } from 'lucide-react';
import { PageHero } from '../PageHero';

export function CaseStudiesHero() {
  return (
    <PageHero
      label="Case Studies"
      index="04"
      title={
        <>
          Authority Stories That <span className="text-teal-300">Matter</span>.
        </>
      }
      subtitle="Explore real-world authority challenges, strategic thinking, and the approaches used to strengthen credibility, visibility, and long-term reputation."
      primary={{ label: 'Start Your Free Authority Assessment', to: '/assessment' }}
      secondary={{ label: 'Talk With Our Team', to: '/contact', icon: MessageSquare }}
      meta={['Strategy over showcase', 'Confidential by default', 'No inflated numbers']}
    />
  );
}
