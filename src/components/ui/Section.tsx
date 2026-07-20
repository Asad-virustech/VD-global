import type { ReactNode } from 'react';
import { Container } from './Container';

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
};

export function Section({ children, className = '', id, bleed = false }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
