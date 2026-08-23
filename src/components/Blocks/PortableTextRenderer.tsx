// src/components/molecules/PortableTextRenderer.tsx
import React from 'react';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { CodeBlock } from './CodeBlock';
import { PictureBlock } from './PictureBlock';

const components: PortableTextComponents = {
  types: {
    code: CodeBlock,
    picture: PictureBlock,
  },
  block: {
    h2: ({ children }) => (
      <h2
        style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontSize: '1.9rem',
          fontWeight: 600,
          lineHeight: 1.25,
          margin: '3rem 0 1rem 0',
          color: '#2B1810',
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontSize: '1.45rem',
          fontWeight: 600,
          margin: '2rem 0 0.75rem 0',
          color: '#2B1810',
        }}
      >
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p style={{ margin: '0 0 1.5rem 0', lineHeight: 1.8 }}>{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: '3px solid #B85B35',
          paddingLeft: '1.25rem',
          margin: '2rem 0',
          fontStyle: 'italic',
          color: '#6B5B54',
        }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ margin: '0 0 1.5rem 1.5rem', padding: 0 }}>{children}</ul>
    ),
    number: ({ children }) => (
      <ol style={{ margin: '0 0 1.5rem 1.5rem', padding: 0 }}>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
    number: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
  },
  marks: {
    code: ({ children }) => (
      <code
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          fontSize: '0.88em',
          backgroundColor: 'rgba(43, 24, 16, 0.07)',
          padding: '0.15rem 0.4rem',
          borderRadius: '4px',
          color: '#B85B35',
        }}
      >
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          style={{
            color: '#B85B35',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }}
        >
          {children}
        </a>
      );
    },
  },
};

interface PortableTextRendererProps {
  value: any;
}

export function PortableTextRenderer({ value }: PortableTextRendererProps) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}