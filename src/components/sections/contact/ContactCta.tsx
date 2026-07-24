import { BookOpen } from 'lucide-react';
import { CtaBand } from '../CtaBand';

export function ContactCta() {
  return (
    <CtaBand
      eyebrow="Start With Clarity"
      title="Ready to Build Your Authority?"
      description="Let’s begin with a conversation — not assumptions."
      primary={{ label: 'Book Your Strategy Call', href: '#request' }}
      secondary={{ label: 'Start Your Free Authority Assessment', to: '/assessment', icon: BookOpen }}
    />
  );
}
