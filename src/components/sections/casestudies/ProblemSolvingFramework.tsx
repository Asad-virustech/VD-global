import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { StepTimeline } from '../StepTimeline';
import { PROBLEM_FRAMEWORK } from '../../../../content/caseStudies';

export function ProblemSolvingFramework() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Problem-Solving Framework"
          title="One Method, Every Engagement."
          description="However different the challenge, the way we work through it stays consistent — deliberate, evidence-led, and honest at every step."
          className="mb-12 sm:mb-14"
        />

        <StepTimeline steps={PROBLEM_FRAMEWORK} />
      </Container>
    </Section>
  );
}
