import { PagePlaceholder } from '../components/sections/PagePlaceholder';
import { FIRM } from '../../content/site';

export default function CaseStudies() {
  return (
    <PagePlaceholder
      eyebrow="Selected Engagements"
      title="Work that builds recognition and trust."
      description="Selected case studies illustrating the firm's advisory approach. Detailed case studies arrive in an upcoming sprint — without fabricated metrics or testimonials."
      badge="Case Studies"
      metaTitle="Case Studies — VD Global"
      metaDescription={`Case studies from ${FIRM.name}: advisory engagements that build recognition, credibility, authority and trust.`}
      ctaTo="/contact"
      ctaLabel="Discuss your context"
    />
  );
}
