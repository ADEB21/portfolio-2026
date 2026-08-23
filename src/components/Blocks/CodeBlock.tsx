// src/components/atoms/CodeBlock.tsx
import React, { useState } from 'react';

interface CodeBlockProps {
  value: {
    code: string;
    language?: string;
    filename?: string;
    highlightLines?: string;
  };
}

export function CodeBlock({ value }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie', err);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#140C09',
        border: '1px solid rgba(184, 91, 53, 0.25)',
        borderRadius: '12px',
        margin: '2rem 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.6rem 1rem',
          backgroundColor: '#1D120D',
          borderBottom: '1px solid rgba(251, 247, 238, 0.08)',
          fontFamily: 'ui-monospace, monospace',
          fontSize: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#B85B35', fontWeight: 'bold' }}>//</span>
          <span style={{ color: '#FBF7EE' }}>{value.filename || value.language || 'code'}</span>
        </div>

        <button
          onClick={copyToClipboard}
          style={{
            background: 'transparent',
            border: '1px solid rgba(251, 247, 238, 0.2)',
            borderRadius: '4px',
            color: copied ? '#2E7D32' : '#8C7A70',
            fontSize: '0.7rem',
            padding: '2px 8px',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
          type="button"
          aria-label="Copier le code"
        >
          {copied ? 'Copié !' : 'Copier'}
        </button>
      </div>

      <pre
        style={{
          margin: 0,
          padding: '1.25rem',
          overflowX: 'auto',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          fontSize: '0.88rem',
          lineHeight: 1.6,
          color: '#FBF7EE',
        }}
      >
        <code>{value.code}</code>
      </pre>
    </div>
  );
}