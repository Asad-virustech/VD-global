import { BookOpen } from 'lucide-react';
import { PageHero } from '../PageHero';

export function ContactHero() {
  return (
    <PageHero
      label="Contact"
      ghost="CONTACT"
      title={
        <>
          Let&rsquo;s Start the <span className="text-teal-300">Conversation</span>.
        </>
      }
      subtitle="Every successful authority strategy begins with understanding your business, your goals, and the reputation you want to build."
      primary={{ label: 'Book a Strategy Call', href: '#request' }}
      secondary={{ label: 'Start Your Free Authority Assessment', to: '/assessment', icon: BookOpen }}
      meta={['Advisors, not salespeople', 'No obligation', 'Reply within 24 hours']}
    />
  );
}
