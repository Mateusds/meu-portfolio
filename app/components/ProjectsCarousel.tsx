"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  name: string;
  description: string;
  stack: string[];
};

const AUTOPLAY_MS = 4000;

/**
 * Título da seção à esquerda (children), setas à direita e os projetos em um carrossel que rola de lado.
 * Avança um cartão a cada 4 s e volta ao início no fim. Pausa com o mouse ou o foco em cima, durante o
 * toque, e não anda para quem pediu "reduzir movimento".
 */
export function ProjectsCarousel({
  projects,
  children
}: {
  projects: Project[];
  children: ReactNode;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);
  const [stepCount, setStepCount] = useState(projects.length);

  function update() {
    const track = trackRef.current;
    if (!track) return;

    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 8);

    // Os passos são as posições possíveis do carrossel: quantos cartões cabem na tela muda com a largura.
    const width = step(track);
    const visible = Math.max(1, Math.round((track.clientWidth + gapOf(track)) / width));
    const count = Math.max(1, projects.length - visible + 1);
    setStepCount(count);
    setActive(Math.min(count - 1, Math.max(0, Math.round(track.scrollLeft / width))));
  }

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function gapOf(track: HTMLUListElement) {
    return parseFloat(getComputedStyle(track).columnGap) || 0;
  }

  // Um cartão por vez: a largura do primeiro mais o espaço entre eles.
  function step(track: HTMLUListElement) {
    const first = track.firstElementChild as HTMLElement | null;
    return (first?.offsetWidth ?? track.clientWidth) + gapOf(track);
  }

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * step(track), behavior: "smooth" });
  }

  function go(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * step(track), behavior: "smooth" });
  }

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: step(track), behavior: "smooth" });
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [paused]);

  // No toque não existe "mouse em cima": pausa enquanto o dedo está na tela e retoma depois de um tempo.
  function handleTouchStart() {
    clearTimeout(resumeTimer.current);
    setPaused(true);
  }

  function handleTouchEnd() {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 8000);
  }

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="head-row">
        <div>{children}</div>
        <div className="controls">
          <button
            type="button"
            className="control"
            onClick={() => go(-1)}
            disabled={!canPrev}
            aria-label="Projetos anteriores"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="control control-primary"
            onClick={() => go(1)}
            disabled={!canNext}
            aria-label="Próximos projetos"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        className="carousel"
        ref={trackRef}
        onScroll={update}
        tabIndex={0}
        aria-label="Projetos em desenvolvimento"
      >
        {projects.map((project) => (
          <li key={project.name} className="card">
            <span className="card-tag">Em desenvolvimento</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="card-foot">{project.stack.join(" · ")}</p>
          </li>
        ))}
      </ul>

      <div className="dots" role="group" aria-label="Passos do carrossel de projetos">
        {Array.from({ length: stepCount }, (_, index) => (
          <button
            key={index}
            type="button"
            className="dot"
            data-active={index === active}
            aria-label={`Ir para o passo ${index + 1} de ${stepCount}`}
            aria-current={index === active}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
