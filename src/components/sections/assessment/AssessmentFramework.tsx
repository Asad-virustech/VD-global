import { Compass, Search, ClipboardCheck, Map, PhoneCall, FileText } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { StepTimeline } from '../StepTimeline';
import type { TimelineStep } from '../StepTimeline';

const STAGES: TimelineStep[] = [
  {
    icon: Compass,
    title: 'Discovery',
    description:
      'We start with your goals, your market, and where you believe your reputation stands today.',
  },
  {
    icon: Search,
    title: 'Research',
    description:
      'We gather how you currently appear across search, media, and the public record.',
  },
  {
    icon: ClipboardCheck,
    title: 'Analysis',
    description:
      'We evaluate each authority dimension and identify the gaps that matter most for your goals.',
  },
  {
    icon: Map,
    title: 'Recommendations',
    description:
      'We outline practical, prioritized next steps — including what to wait on, and why.',
  },
  {
    icon: PhoneCall,
    title: 'Strategy Call',
    description:
      'We walk through the findings together and answer your questions in plain terms.',
  },
  {
    icon: FileText,
    title: 'Final Report',
    description:
      'You keep a clear written summary of your position and the recommended path forward.',
  },
];

export function AssessmentFramework() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Process"
          title="How an Assessment Works."
          description="A structured, transparent process. No obligations, no pressure — just a clear read of where you stand and what to do next."
          className="mb-12 sm:mb-14"
        />

        <StepTimeline steps={STAGES} />
      </Container>
    </Section>
  );
}
