import { Ear, Search, Compass, Rocket, Gauge, RefreshCw } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { StepTimeline } from '../StepTimeline';
import type { TimelineStep } from '../StepTimeline';

const STAGES: TimelineStep[] = [
  {
    icon: Ear,
    title: 'Understand',
    description: 'We begin by listening — to your goals, your market, and what recognition means for you.',
  },
  {
    icon: Search,
    title: 'Research',
    description: 'We study how you appear today across search, media, and the public record.',
  },
  {
    icon: Compass,
    title: 'Advise',
    description: 'We recommend the path that fits your position — including what to prioritize and what to hold.',
  },
  {
    icon: Rocket,
    title: 'Execute',
    description: 'We act on the agreed priorities with ethical, carefully chosen initiatives.',
  },
  {
    icon: Gauge,
    title: 'Measure',
    description: 'We track what changes in perception, credibility, and visibility — honestly.',
  },
  {
    icon: RefreshCw,
    title: 'Improve',
    description: 'We refine the approach as your reputation, goals, and market evolve.',
  },
];

export function HowWeThink() {
  return (
    <Section className="bg-ink-50/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How We Think"
          title="A Deliberate Way of Working."
          description="Authority is the result of a process, not a campaign. This is the loop we return to for every engagement."
          className="mb-12 sm:mb-14"
        />

        <StepTimeline steps={STAGES} />
      </Container>
    </Section>
  );
}
