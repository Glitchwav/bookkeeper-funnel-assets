import type { CSSProperties } from 'react';
import { packCopy } from '../copy/pack.js';

export interface OfferProps {
  onCheckout?: () => void;
  style?: CSSProperties;
}

/** $19 Reminder Pack offer section. */
export function Offer({ onCheckout, style }: OfferProps) {
  return (
    <section
      aria-label="Offer"
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '2.5rem 1.25rem',
        fontFamily: 'system-ui, sans-serif',
        borderTop: '1px solid #e5e5e5',
        ...style,
      }}
    >
      <p style={{ fontSize: 13, opacity: 0.7 }}>Self-serve · One-time {packCopy.priceDisplay}</p>
      <h2 style={{ fontSize: '1.6rem', margin: '0.4rem 0 0.75rem' }}>{packCopy.headlines[0]}</h2>
      <p style={{ lineHeight: 1.5 }}>{packCopy.subheads[0]}</p>
      <ul style={{ margin: '1rem 0', paddingLeft: '1.25rem' }}>
        {packCopy.includes.map((item) => (
          <li key={item} style={{ marginBottom: 6 }}>
            {item}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onCheckout}
        style={{
          background: '#0b5fff',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '0.75rem 1.25rem',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        {packCopy.checkoutCta}
      </button>
      <p style={{ fontSize: 13, opacity: 0.75, marginTop: 8 }}>{packCopy.guaranteeNote}</p>
    </section>
  );
}
