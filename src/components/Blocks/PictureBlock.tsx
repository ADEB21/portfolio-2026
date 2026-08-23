// src/components/atoms/PictureBlock.tsx
import React from 'react';
import { urlFor } from "@assets/script/utils/image";

interface PictureBlockProps {
  value: {
    asset: { _ref: string };
    alt?: string;
    caption?: string;
  };
}

export function PictureBlock({ value }: PictureBlockProps) {
  if (!value?.asset) return null;

  const imageUrl = urlFor(value.asset).width(900).auto('format').url();

  return (
    <figure style={{ margin: '2.5rem 0' }}>
      <img
        src={imageUrl}
        alt={value.alt || 'Illustration article'}
        loading="lazy"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
          border: '1px solid rgba(43, 24, 16, 0.12)',
          display: 'block',
        }}
      />
      {value.caption && (
        <figcaption
          style={{
            fontFamily: 'ui-monospace, monospace',
            fontSize: '0.78rem',
            color: '#6B5B54',
            textAlign: 'center',
            marginTop: '0.6rem',
          }}
        >
          // {value.caption}
        </figcaption>
      )}
    </figure>
  );
}