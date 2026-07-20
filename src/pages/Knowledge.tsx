import { PagePlaceholder } from '../components/sections/PagePlaceholder';
import { FIRM } from '../../content/site';

export default function Knowledge() {
  return (
    <PagePlaceholder
      eyebrow="Learn"
      title="A hub for education on authority and trust."
      description="Guides, frameworks and thinking on ethical PR, media strategy and Wikipedia advisory. The Knowledge Hub library arrives in an upcoming sprint."
      badge="Knowledge Hub"
      metaTitle="Knowledge Hub — VD Global"
      metaDescription={`Insights and education from ${FIRM.name} on ethical PR, media strategy and Wikipedia advisory.`}
      ctaTo="/contact"
      ctaLabel="Subscribe for updates"
    />
  );
}
