import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TrustCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};
