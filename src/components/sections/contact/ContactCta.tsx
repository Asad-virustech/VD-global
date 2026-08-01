import { BookOpen } from 'lucide-react';
import { CtaBand } from '../CtaBand';

export function ContactCta() {
  return (
    <CtaBand
      eyebrow="Start With Clarity"
      title="Start with a conversation."
      description="Let’s begin with a conversation, not assumptions."
      primary={{ label: 'Book a strategy call', href: '#request' }}
      secondary={{ label: 'Start your free authority assessment', to: '/assessment', icon: BookOpen }}
    />
  );
}
