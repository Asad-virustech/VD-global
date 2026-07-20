import { PagePlaceholder } from '../components/sections/PagePlaceholder';
import { FIRM } from '../../content/site';

export default function Solutions() {
  return (
    <PagePlaceholder
      eyebrow="What We Do"
      title="Advisory services for authority, credibility and trust."
      description="Ethical PR, media strategy and Wikipedia advisory — designed for founders and businesses who want to build durable recognition. Detailed service descriptions arrive in an upcoming sprint."
      badge="Solutions"
      metaTitle="Solutions — VD Global"
      metaDescription={`Solutions from ${FIRM.name}: ethical PR, media strategy and Wikipedia advisory for founders and businesses.`}
      ctaTo="/assessment"
      ctaLabel="Take the Authority Assessment"
    />
  );
}
