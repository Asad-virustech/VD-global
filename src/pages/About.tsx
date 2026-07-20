import { PagePlaceholder } from '../components/sections/PagePlaceholder';
import { FIRM } from '../../content/site';

export default function About() {
  return (
    <PagePlaceholder
      eyebrow="The Firm"
      title="An Authority Advisory Firm built on ethical principles."
      description="VD Global helps founders and businesses build Recognition, Credibility, Authority and Trust. The full story of the firm, its approach and its people arrives in an upcoming sprint."
      badge="About"
      metaTitle="About — VD Global"
      metaDescription={`About ${FIRM.name}: an Authority Advisory Firm helping founders and businesses build Recognition, Credibility, Authority and Trust.`}
      ctaTo="/contact"
      ctaLabel="Start a conversation"
    />
  );
}
