import { BookOpen } from 'lucide-react';
import { PageHero } from '../PageHero';
import { FIRM } from '../../../../content/site';

export function ContactHero() {
  return (
    <PageHero
      label="Contact"
      index="06"
      title={
        <>
          Let&rsquo;s start the <span className="text-teal-300">conversation</span>.
        </>
      }
      subtitle="Every engagement begins with understanding your business, your goals, and the reputation you want to build."
      primary={{ label: 'Book a strategy call', href: '#request' }}
      secondary={{ label: 'Start your free authority assessment', to: '/assessment', icon: BookOpen }}
      meta={['Advisors, not salespeople', 'No obligation', `Reply within ${FIRM.responseWindow}`]}
    />
  );
}
