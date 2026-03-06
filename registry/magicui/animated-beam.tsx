"use client";

import { useEffect, useId, useMemo, useState } from "react";

type BeamProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  fromRef: React.RefObject<HTMLDivElement | null>;
  toRef: React.RefObject<HTMLDivElement | null>;
  curvature?: number;
  startYOffset?: number;
  endYOffset?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
};

type Point = { x: number; y: number };

function centerOf(
  element: HTMLDivElement,
  container: HTMLDivElement
): Point {
  const box = element.getBoundingClientRect();
  const parent = container.getBoundingClientRect();
  return {
    x: box.left - parent.left + box.width / 2,
    y: box.top - parent.top + box.height / 2
  };
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  startYOffset = 0,
  endYOffset = 0,
  reverse = false,
  duration = 2.8,
  delay = 0
}: BeamProps) {
  const [path, setPath] = useState("");
  const id = useId().replace(/[:]/g, "");

  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const start = centerOf(fromRef.current, containerRef.current);
      const end = centerOf(toRef.current, containerRef.current);

      const from = reverse ? end : start;
      const to = reverse ? start : end;

      const sx = from.x;
      const sy = from.y + startYOffset;
      const ex = to.x;
      const ey = to.y + endYOffset;
      const cx = (sx + ex) / 2;
      const cy = (sy + ey) / 2 - curvature;

      setPath(`M ${sx},${sy} Q ${cx},${cy} ${ex},${ey}`);
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startYOffset,
    endYOffset,
    reverse
  ]);

  const animationStyle = useMemo(
    () => ({
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`
    }),
    [duration, delay]
  );

  return (
    <svg className="beam-layer" aria-hidden="true">
      <defs>
        <linearGradient id={`beam-gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3d7dff" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#66a4ff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#3d7dff" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d={path}
        className="beam-path"
        style={animationStyle}
        stroke={`url(#beam-gradient-${id})`}
      />
    </svg>
  );
}
