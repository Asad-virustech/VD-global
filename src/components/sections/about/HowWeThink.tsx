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
    description: 'We begin by listening: to your goals, your market, and what recognition means for you.',
  },
  {
    icon: Search,
    title: 'Research',
    description: 'From there, we study how you appear today across search, media, and the public record.',
  },
  {
    icon: Compass,
    title: 'Advise',
    description: 'We recommend the path that fits your position, including what to prioritize and what to hold.',
  },
  {
    icon: Rocket,
    title: 'Execute',
    description: 'With priorities agreed, we act on them through ethical, carefully chosen initiatives.',
  },
  {
    icon: Gauge,
    title: 'Measure',
    description: 'We track, honestly, what changes in perception, credibility, and visibility.',
  },
  {
    icon: RefreshCw,
    title: 'Improve',
    description: 'As your reputation, goals, and market evolve, we refine the approach.',
  },
];

export function HowWeThink() {
  return (
    <Section className="surface-alt">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How We Think"
          title="A deliberate way of working."
          description="Authority is the result of a process, not a campaign. This is the loop we return to for every engagement."
          className="mb-12 sm:mb-14"
        />

        <StepTimeline steps={STAGES} />
      </Container>
    </Section>
  );
}
