"use client";

import { useEffect } from "react";

/**
 * Faz as partes de cada seção (`data-reveal`) subirem e aparecerem quando entram na tela.
 * O conteúdo só fica escondido enquanto o script roda (classe `js` em <html>); se algo falhar,
 * o CSS mostra tudo (classe `reveal-fallback`, ativada por um temporizador no layout).
 */
export function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return null;
}
