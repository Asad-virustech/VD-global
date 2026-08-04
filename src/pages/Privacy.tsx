import { LegalPage } from '../components/legal/LegalPage';
import type { LegalSection } from '../components/legal/LegalPage';

const SECTIONS: LegalSection[] = [
  {
    heading: 'Overview',
    body: 'This section will explain who VD Globals is and how this policy applies to visitors to this website and to people who contact the firm.',
  },
  {
    heading: 'Information we collect',
    body: 'This section will describe the information collected through the consultation and newsletter forms and through standard website operation.',
  },
  {
    heading: 'How we use your information',
    body: 'This section will describe the purposes for which information is used, such as responding to enquiries and sending requested communications.',
  },
  {
    heading: 'Legal basis and your rights',
    body: 'This section will set out the legal basis for processing and the rights available to you, including access, correction, and deletion.',
  },
  {
    heading: 'Data retention and security',
    body: 'This section will describe how long information is kept and the measures taken to protect it.',
  },
  {
    heading: 'Third-party services',
    body: 'This section will list the third-party services involved in operating the site and handling form submissions.',
  },
  {
    heading: 'Contact',
    body: 'This section will explain how to reach VD Globals with any privacy questions or requests.',
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      summary="How we handle the information you share with us. This document is being finalised."
      sections={SECTIONS}
    />
  );
}
