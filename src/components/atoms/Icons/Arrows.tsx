import React from "react";

export type ArrowDirection =
  | "up"
  | "up-right"
  | "right"
  | "down-right"
  | "down"
  | "down-left"
  | "left"
  | "up-left";

interface ArrowsProps extends React.SVGProps<SVGSVGElement> {
  direction?: ArrowDirection | string;
  size?: number | string;
}

const ROTATIONS: Record<ArrowDirection, number> = {
  right: 0,
  "down-right": 45,
  down: 90,
  "down-left": 135,
  left: 180,
  "up-left": 225,
  up: 270,
  "up-right": 315,
};

const Arrows = ({
  direction = "right",
  size = 16,
  className = "",
  style = {},
  ...rest
}: ArrowsProps) => {
  const rotation = ROTATIONS[direction as ArrowDirection] ?? 0;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center",
        flexShrink: 0,
        ...style,
      }}
      aria-hidden="true"
      {...rest}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
};

export default Arrows;
