import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { StepTimeline } from '../StepTimeline';
import { WHAT_HAPPENS_NEXT } from '../../../../content/contact';

export function WhatHappensNext() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What Happens Next?"
          title="Exactly What to Expect."
          description="No mystery, no pressure. Here's the path from the moment you reach out to a set of clear recommendations."
          className="mb-12 sm:mb-14"
        />

        <StepTimeline steps={WHAT_HAPPENS_NEXT} />
      </Container>
    </Section>
  );
}
