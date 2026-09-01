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

  const baseImage = urlFor(value.asset).auto("format").quality(85);

  const src1x = baseImage.width(900).url();
  const src2x = baseImage.width(1800).url();
  const src3x = baseImage.width(2700).url();

  return (
    <figure style={{ margin: 'var(--space-xl) 0' }}>
      <img
        src={src1x}
        srcSet={`${src1x} 1x, ${src2x} 2x, ${src3x} 3x`}
        alt={value.alt || 'Illustration article'}
        loading="lazy"
        decoding="async"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: '16px',
          border: '1px solid var(--border-strong)',
        }}
      />
      {value.alt && (
        <figcaption
          className="eyebrow"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 'var(--space-xs)',
            textAlign: 'center',
            marginTop: 'var(--space-2xs)',
          }}
        >
          // {value.alt}
        </figcaption>
      )}
    </figure>
  );
}