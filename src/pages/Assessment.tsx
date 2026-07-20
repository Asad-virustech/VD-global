import { PagePlaceholder } from '../components/sections/PagePlaceholder';
import { FIRM } from '../../content/site';

export default function Assessment() {
  return (
    <PagePlaceholder
      eyebrow="Engage"
      title="Evaluate your authority positioning."
      description="The Authority Assessment helps you understand where you stand on recognition, credibility, authority and trust — and where to focus next. The interactive assessment arrives in an upcoming sprint."
      badge="Authority Assessment"
      metaTitle="Authority Assessment — VD Global"
      metaDescription={`Assess your authority positioning with ${FIRM.name}. Evaluate recognition, credibility, authority and trust.`}
      ctaTo="/contact"
      ctaLabel="Request early access"
    />
  );
}
