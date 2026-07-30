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
    <section id={id} className={`py-20 sm:py-28 lg:py-32 ${className}`}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
