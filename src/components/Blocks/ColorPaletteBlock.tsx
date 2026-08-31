// src/components/atoms/ColorPaletteBlock.tsx
import React from "react";

export interface ColorItem {
  name?: string;
  hex: string;
  usage?: string;
}

export interface ColorPaletteBlockValue {
  title?: string;
  description?: string;
  colors: ColorItem[];
}

interface ColorPaletteBlockProps {
  value: ColorPaletteBlockValue;
}

export function ColorPaletteBlock({ value }: ColorPaletteBlockProps) {
  if (!value?.colors || value.colors.length === 0) return null;

  return (
    <div
      style={{
        margin: "var(--space-2xl) 0",
        padding: "var(--space-md)",
        background: "var(--bg-subtle)",
        border: "1px solid var(--color-brown)",
        borderRadius: "var(--radius-sm)",
        boxShadow: "4px 4px 0px var(--color-brown)",
      }}
    >
      <div style={{ marginBottom: "var(--space-md)" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            color: "var(--color-copper)",
            letterSpacing: "var(--tracking-widest)",
            textTransform: "uppercase",
            fontWeight: "var(--font-weight-semibold)",
            display: "block",
            marginBottom: "var(--space-3xs)",
          }}
        >
          // SYSTÈME CHROMATIQUE
        </span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-xl)",
            fontWeight: "var(--font-weight-semibold)",
            lineHeight: "var(--leading-snug)",
            color: "var(--text-main)",
            margin: "0 0 var(--space-xs) 0",
          }}
        >
          {value.title || "Palette & Identité Visuelle"}
        </h2>
        {value.description && (
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--leading-normal)",
              color: "var(--text-muted)",
              maxWidth: "var(--container-sm)",
            }}
          >
            {value.description}
          </p>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "var(--space-s)",
        }}
      >
        {value.colors.map((color, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--color-white)",
              border: "1px solid var(--color-brown)",
              borderRadius: "var(--radius-xs)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                backgroundColor: color.hex,
                height: "74px",
                width: "100%",
                borderBottom: "1px solid var(--border-light)",
              }}
            />
            <div
              style={{
                padding: "var(--space-xs) var(--space-s)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3xs)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--font-weight-bold)",
                  color: "var(--text-main)",
                }}
              >
                {color.hex.toUpperCase()}
              </span>
              {color.name && (
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "var(--color-copper)",
                  }}
                >
                  {color.name}
                </span>
              )}
              {color.usage && (
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-xs)",
                    color: "var(--text-dim)",
                    lineHeight: "var(--leading-snug)",
                  }}
                >
                  {color.usage}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
