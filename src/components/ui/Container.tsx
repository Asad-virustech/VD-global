import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article';
};

export function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return <Tag className={`container-px ${className}`}>{children}</Tag>;
}
