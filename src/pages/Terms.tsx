import { LegalPage } from '../components/legal/LegalPage';
import type { LegalSection } from '../components/legal/LegalPage';

const SECTIONS: LegalSection[] = [
  {
    heading: 'Acceptance',
    body: 'By using vdglobals.com, you agree to these terms. If you do not agree with them, please do not use the site. These terms cover the website itself. Any advisory engagement is governed by a separate written agreement, not by this page.',
  },
  {
    heading: 'Our services',
    body: 'VD Globals provides strategic advisory and professional services in authority building, public relations, media strategy, reputation, and Wikipedia advisory. This website describes our approach and is a way to learn about the firm and get in touch. It is not itself an offer of a specific service or a binding contract.',
  },
  {
    heading: 'Advisory disclaimer',
    body: 'The information on this site is provided for general education and does not constitute professional, legal, financial, or specific business advice. Advice we give within an engagement is tailored to that client and should not be inferred from the general content here.',
  },
  {
    heading: 'No guaranteed outcomes',
    body: 'Our work is advisory. We bring honest assessment, sound strategy, and ethical execution, but outcomes depend on independent third parties and factors outside our control. We do not, and cannot, guarantee any particular result, including Wikipedia approval or article survival, media coverage or publication, search engine rankings or visibility, or any specific business, commercial, or financial outcome. Anyone who guarantees these things is not being honest with you.',
  },
  {
    heading: 'Wikipedia',
    body: 'Wikipedia is an independent platform with its own editors, rules, and processes. We are not affiliated with, endorsed by, or able to control Wikipedia. Whether an article is created, accepted, or kept is decided entirely by Wikipedia’s community, not by us. Our role is to assess readiness and advise honestly, never to promise a page.',
  },
  {
    heading: 'Intellectual property',
    body: 'The content, text, design, logo, and materials on this site belong to VD Globals unless stated otherwise. You may read and share them for personal, non-commercial reference, but you may not copy, reproduce, or reuse them commercially without our permission.',
  },
  {
    heading: 'Using this website',
    body: 'Please use the site lawfully and reasonably. Do not attempt to disrupt it, misuse the forms, submit false information, or use the site in any way that could harm it, us, or other visitors.',
  },
  {
    heading: 'Third-party links',
    body: 'This site may link to third-party websites, such as our LinkedIn profile or external resources. We are not responsible for the content, accuracy, or practices of sites we do not operate. Following an external link is at your own discretion.',
  },
  {
    heading: 'Limitation of liability',
    body: 'We provide this website in good faith and keep it accurate as best we can, but we offer it as is, without warranties of any kind. To the fullest extent permitted by law, VD Globals is not liable for any loss or damage arising from your use of, or reliance on, this website or its content.',
  },
  {
    heading: 'Governing law',
    body: 'These terms are governed by the laws of the State of Texas, United States, without regard to its conflict-of-law principles. Any dispute relating to them will be handled in accordance with that law.',
  },
  {
    heading: 'Changes to these terms',
    body: 'We may update these terms from time to time. The current version always lives on this page, with the date it was last updated shown at the bottom. Continuing to use the site means you accept the version in effect.',
  },
  {
    heading: 'Contact',
    body: 'If you have any questions about these terms, email us at vdglobals365@gmail.com.',
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms"
      summary="The terms on which you may use this website, and what our advisory work does and does not promise."
      effectiveDate="August 2026"
      sections={SECTIONS}
    />
  );
}
