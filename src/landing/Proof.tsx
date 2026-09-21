import type { CSSProperties } from 'react';

export interface ProofItem {
  quote: string;
  attribution: string;
}

export interface ProofProps {
  items?: ProofItem[];
  style?: CSSProperties;
}

const DEFAULT_ITEMS: ProofItem[] = [
  {
    quote:
      'We used to burn a full afternoon chasing statements. The matrix made gaps obvious by Tuesday.',
    attribution: 'Stub — replace with real bookkeeper testimonial',
  },
  {
    quote:
      'Clients actually replied to the firm reminder. Close file was complete two days earlier.',
    attribution: 'Stub — replace with outcome metric',
  },
];

/** Social-proof stubs — swap content before production. */
export function Proof({ items = DEFAULT_ITEMS, style }: ProofProps) {
  return (
    <section
      aria-label="Proof"
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '2rem 1.25rem',
        fontFamily: 'system-ui, sans-serif',
        background: '#f7f7f5',
        ...style,
      }}
    >
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>What bookkeepers notice</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {items.map((item) => (
          <blockquote
            key={item.quote}
            style={{
              margin: 0,
              padding: '1rem',
              background: '#fff',
              borderRadius: 8,
              border: '1px solid #e8e8e4',
            }}
          >
            <p style={{ margin: '0 0 0.5rem', lineHeight: 1.45 }}>&ldquo;{item.quote}&rdquo;</p>
            <footer style={{ fontSize: 13, opacity: 0.7 }}>— {item.attribution}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
