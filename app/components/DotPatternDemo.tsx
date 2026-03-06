"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/registry/magicui/dot-pattern";

export function DotPatternDemo() {
  return (
    <div className="dot-pattern-demo">
      <DotPattern className={cn("dot-pattern-mask")} />
    </div>
  );
}
