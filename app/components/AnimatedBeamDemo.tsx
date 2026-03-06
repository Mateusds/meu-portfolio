"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/registry/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cn("beam-circle", className)}>
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="beam-demo" ref={containerRef}>
      <div className="beam-grid">
        <div className="beam-row">
          <Circle ref={div1Ref}>
            <IconBadge src="https://cdn.simpleicons.org/googleDrive/34A853" alt="Google Drive" />
          </Circle>
          <Circle ref={div5Ref}>
            <IconBadge src="https://cdn.simpleicons.org/googledocs/4285F4" alt="Google Docs" />
          </Circle>
        </div>
        <div className="beam-row">
          <Circle ref={div2Ref}>
            <IconBadge src="https://cdn.simpleicons.org/notion/000000" alt="Notion" />
          </Circle>
          <Circle ref={div4Ref} className="beam-circle-core">
            <IconBadge src="https://cdn.simpleicons.org/openai/111111" alt="OpenAI" />
          </Circle>
          <Circle ref={div6Ref}>
            <IconBadge src="https://cdn.simpleicons.org/zapier/FF4F00" alt="Zapier" />
          </Circle>
        </div>
        <div className="beam-row">
          <Circle ref={div3Ref}>
            <IconBadge src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" />
          </Circle>
          <Circle ref={div7Ref}>
            <IconBadge src="https://cdn.simpleicons.org/messenger/0099FF" alt="Messenger" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-8}
      />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={8}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-8}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={8}
        reverse
      />
    </div>
  );
}

function IconBadge({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} width={26} height={26} loading="lazy" />;
}
