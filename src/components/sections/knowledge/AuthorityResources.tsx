import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { ResourceShelf } from '../resources/ResourceShelf';
import { RESOURCES } from '../../../../content/resources';

export function AuthorityResources() {
  return (
    <Section className="surface-base">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Authority Resources"
          title="Tools you can actually use."
          description="Guides, checklists, and frameworks: the same thinking we bring to advisory, made practical for you to apply. Every one is a free, downloadable PDF."
          className="mb-12 sm:mb-14"
        />

        <ResourceShelf resources={RESOURCES} />
      </Container>
    </Section>
  );
}
