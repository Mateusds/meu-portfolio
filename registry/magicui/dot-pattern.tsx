"use client";

import { cn } from "@/lib/utils";

type DotPatternProps = {
  className?: string;
  dotSize?: number;
  gap?: number;
};

export function DotPattern({ className, dotSize = 1.4, gap = 24 }: DotPatternProps) {
  return (
    <svg className={cn("dot-pattern-svg", className)} aria-hidden="true">
      <defs>
        <pattern
          id="dot-pattern"
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={dotSize} cy={dotSize} r={dotSize} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
}
