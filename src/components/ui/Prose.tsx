/**
 * Shared editorial prose renderer. One implementation of the reading-layout
 * block styles (paragraph, heading, list, pull-quote), used by both the
 * Knowledge Hub articles and the Resource Center pages so the two never drift.
 */

export type ProseBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string };

function Block({ block }: { block: ProseBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mt-12 text-2xl font-bold leading-snug tracking-tight text-ink-900 sm:mt-14 sm:text-[1.75rem]">
          {block.text}
        </h2>
      );
    case 'p':
      return <p className="mt-6 text-lg leading-relaxed text-ink-600">{block.text}</p>;
    case 'ul':
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-ink-600">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="my-10 border-l-2 border-teal-500 pl-6 text-xl font-semibold leading-snug tracking-tight text-ink-900 sm:text-2xl text-balance">
          {block.text}
        </blockquote>
      );
  }
}

export function Prose({ blocks }: { blocks: ProseBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  );
}
