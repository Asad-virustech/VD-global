import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { StepTimeline } from '../StepTimeline';
import { PROBLEM_FRAMEWORK } from '../../../../content/caseStudies';

export function ProblemSolvingFramework() {
  return (
    <Section className="surface-base">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How every engagement begins"
          title="One method, every engagement."
          description="However different the challenge, the way we work through it stays consistent: deliberate, evidence-led, and honest at every step. Every one of these stories started here."
          className="mb-12 sm:mb-14"
        />

        <StepTimeline steps={PROBLEM_FRAMEWORK} />
      </Container>
    </Section>
  );
}
