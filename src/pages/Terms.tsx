import { LegalPage } from '../components/legal/LegalPage';
import type { LegalSection } from '../components/legal/LegalPage';

const SECTIONS: LegalSection[] = [
  {
    heading: 'Using this website',
    body: 'This section will set out the terms on which you may access and use this website.',
  },
  {
    heading: 'Nature of our content',
    body: 'This section will clarify that the material on this site is provided for general information and does not constitute professional, legal, or financial advice.',
  },
  {
    heading: 'Engagements and advice',
    body: 'This section will explain that any advisory relationship is governed by a separate written agreement, not by this website.',
  },
  {
    heading: 'Intellectual property',
    body: 'This section will describe ownership of the content, marks, and materials on this site.',
  },
  {
    heading: 'Limitation of liability',
    body: 'This section will set out the limitations of liability that apply to your use of the site.',
  },
  {
    heading: 'Changes to these terms',
    body: 'This section will explain how and when these terms may be updated.',
  },
  {
    heading: 'Contact',
    body: 'This section will explain how to reach VD Global with any questions about these terms.',
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms"
      summary="The terms on which you may use this website. This document is being finalised."
      sections={SECTIONS}
    />
  );
}
