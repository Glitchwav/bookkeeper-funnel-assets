import type { CSSProperties } from 'react';
import { ctaCopy } from '../copy/cta.js';

export interface CtaBandProps {
  mode?: 'magnet' | 'pack';
  onAction?: () => void;
  style?: CSSProperties;
}

/** Final ask band. */
export function CtaBand({ mode = 'magnet', onAction, style }: CtaBandProps) {
  const label =
    mode === 'magnet' ? ctaCopy.microCommitment[0] : ctaCopy.makeTheAsk[0];
  const helper =
    mode === 'magnet' ? ctaCopy.buttonHelpers.magnet : ctaCopy.buttonHelpers.pack;

  return (
    <section
      aria-label="Call to action"
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '2.5rem 1.25rem',
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
        ...style,
      }}
    >
      <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>
        {mode === 'magnet'
          ? 'Get the free Month-End Missing-Docs Spreadsheet'
          : 'Ready for reminder scripts that get replies?'}
      </h2>
      <button
        type="button"
        onClick={onAction}
        style={{
          background: mode === 'magnet' ? '#111' : '#0b5fff',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        {label}
      </button>
      <p style={{ fontSize: 13, opacity: 0.75, marginTop: 8 }}>{helper}</p>
    </section>
  );
}
