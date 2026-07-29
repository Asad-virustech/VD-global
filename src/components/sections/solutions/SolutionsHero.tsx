import { MessageSquare } from 'lucide-react';
import { PageHero } from '../PageHero';

export function SolutionsHero() {
  return (
    <PageHero
      label="Solutions"
      index="02"
      title={
        <>
          Solutions Built Around <span className="text-teal-300">Authority</span>.
        </>
      }
      subtitle="Every business has different authority challenges. Our role is to identify the right strategy, prioritize the right opportunities, and help you build long-term credibility through ethical advisory and strategic execution."
      primary={{ label: 'Start Your Free Authority Assessment', to: '/assessment' }}
      secondary={{ label: 'Talk With Our Team', to: '/contact', icon: MessageSquare }}
      meta={[
        'Advisory-first, never packages',
        'Strategy before execution',
        'Ethical, honest recommendations',
      ]}
    />
  );
}
