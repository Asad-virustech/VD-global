import { MessageSquare } from 'lucide-react';
import { PageHero } from '../PageHero';

export function CaseStudiesHero() {
  return (
    <PageHero
      label="Case Studies"
      index="04"
      title={
        <>
          Authority stories that <span className="text-teal-300">matter</span>.
        </>
      }
      subtitle="Real-world authority challenges, the strategic thinking behind them, and the approaches used to strengthen credibility, visibility, and long-term reputation."
      primary={{ label: 'Start your free authority assessment', to: '/assessment' }}
      secondary={{ label: 'Talk with our team', to: '/contact', icon: MessageSquare }}
      meta={['Strategy over showcase', 'Confidential by default', 'No inflated numbers']}
    />
  );
}
