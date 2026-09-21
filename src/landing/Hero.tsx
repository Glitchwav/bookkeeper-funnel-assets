import type { CSSProperties } from 'react';
import { magnetCopy } from '../copy/magnet.js';
import { PRIMARY_CTA } from '../copy/cta.js';

export interface HeroProps {
  headline?: string;
  subhead?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  style?: CSSProperties;
}

/** Magnet landing hero — ideal life first, mechanism second. */
export function Hero({
  headline = magnetCopy.headlines[0],
  subhead = magnetCopy.subheads[0],
  ctaLabel = PRIMARY_CTA,
  onCtaClick,
  style,
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '3rem 1.25rem',
        fontFamily: 'system-ui, sans-serif',
        ...style,
      }}
    >
      <p style={{ fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.7 }}>
        For bookkeepers · Month-end close
      </p>
      <h1 style={{ fontSize: '2rem', lineHeight: 1.2, margin: '0.5rem 0 1rem' }}>{headline}</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.5, opacity: 0.9 }}>{subhead}</p>
      <ul style={{ margin: '1.25rem 0', paddingLeft: '1.25rem' }}>
        {magnetCopy.bullets.map((b) => (
          <li key={b} style={{ marginBottom: 6 }}>
            {b}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onCtaClick}
        style={{
          background: '#111',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '0.75rem 1.25rem',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        {ctaLabel}
      </button>
      <p style={{ fontSize: 13, opacity: 0.7, marginTop: 8 }}>
        Your work email for the named Month-End Missing-Docs Spreadsheet.
      </p>
    </section>
  );
}
