// src/components/molecules/PortableTextRenderer.tsx
import React from "react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { CodeBlock } from "./CodeBlock";
import { PictureBlock } from "./PictureBlock";
import { ColorPaletteBlock } from "./ColorPaletteBlock";

const components: PortableTextComponents = {
  types: {
    code: CodeBlock,
    picture: PictureBlock,
    colorPaletteBlock: ColorPaletteBlock,
  },
  block: {
    h2: ({ children }) => (
      <h2 style={{ marginBottom: "var(--space-l);" }}>{children}</h2>
    ),
    h3: ({ children }) => <h3>{children}</h3>,
    normal: ({ value, children }) => {
      // Vérifie si tous les spans textuels du bloc sont vides ou composés d'espaces
      const isEmpty =
        !value?.children ||
        value.children.every(
          (child: any) => !child.text || child.text.trim() === "",
        );

      if (isEmpty) {
        return (
          <br
            aria-hidden="true"
            style={{
              margin: "0 0 var(--space-md) 0",
              minHeight: "var(--leading-relaxed)",
              userSelect: "none",
            }}
          />
        );
      }

      return (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--text-main)",
            margin: "0 0 var(--space-md) 0",
          }}
        >
          {children}
        </p>
      );
    },
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "3px solid var(--color-copper)",
          paddingLeft: "var(--space-md)",
          margin: "var(--space-l) 0",
          fontStyle: "italic",
          color: "var(--text-muted)",
          lineHeight: "var(--leading-normal)",
        }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul
        style={{
          margin: "0 0 var(--space-md) var(--space-md)",
          padding: 0,
          color: "var(--text-main)",
          listStyle: "revert",
        }}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{
          margin: "0 0 var(--space-md) var(--space-md)",
          padding: 0,
          color: "var(--text-main)",
          listStyle: "auto",
        }}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li
        style={{
          marginBottom: "var(--space-2xs)",
          lineHeight: "var(--leading-normal)",
        }}
      >
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li
        style={{
          marginBottom: "var(--space-2xs)",
          lineHeight: "var(--leading-normal)",
        }}
      >
        {children}
      </li>
    ),
  },
  marks: {
    code: ({ children }) => (
      <code
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.88em",
          backgroundColor: "var(--color-brown-soft)",
          padding: "0.15rem var(--space-3xs)",
          borderRadius: "var(--radius-xs)",
          color: "var(--color-copper)",
        }}
      >
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          style={{
            color: "var(--color-copper)",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            transition: "color var(--duration-fast) var(--ease-smooth)",
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
