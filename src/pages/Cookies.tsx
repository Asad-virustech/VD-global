import { LegalPage } from '../components/legal/LegalPage';
import type { LegalSection } from '../components/legal/LegalPage';

const SECTIONS: LegalSection[] = [
  {
    heading: 'What cookies are',
    body: 'This section will briefly explain what cookies and similar technologies are.',
  },
  {
    heading: 'How this site uses them',
    body: 'This section will describe which cookies, if any, this site sets, and for what purpose.',
  },
  {
    heading: 'Managing cookies',
    body: 'This section will explain the choices available to you and how to manage cookies in your browser.',
  },
  {
    heading: 'Contact',
    body: 'This section will explain how to reach VD Globals with any questions about cookies.',
  },
];

export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookies"
      summary="How this site uses cookies and similar technologies. This document is being finalised."
      sections={SECTIONS}
    />
  );
}
