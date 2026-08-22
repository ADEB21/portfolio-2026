// src/components/TechIcon.tsx
import React from "react";
import { Icon } from "@iconify/react";

// Dictionnaire des identifiants Iconify
// src/components/TechIcon.tsx

interface TechIconProps {
  name: string;
  size?: number | string;
  className?: string;
}

export default function Icons({
  name,
  size = 20,
  className = "",
}: TechIconProps) {
  const iconId = name || "lucide:code-2";

  return (
    <Icon
      icon={iconId}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    />
  );
}
