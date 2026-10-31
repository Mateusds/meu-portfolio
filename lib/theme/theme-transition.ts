import type { Theme } from "./theme-store";

type ViewTransition = { ready: Promise<void>; finished?: Promise<void> };
type DocWithTransition = Document & {
  startViewTransition?: (callback: () => void) => ViewTransition;
};

/**
 * Troca o tema com um "vazamento" circular: o novo tema se espalha a partir do ponto clicado
 * (View Transitions API). Sem suporte, ou com "reduzir movimento" ativo, troca direto.
 */
export function changeThemeAnimated(
  next: Theme,
  commit: (theme: Theme) => void,
  origin?: { x: number; y: number }
) {
  const root = document.documentElement;
  const doc = document as DocWithTransition;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!doc.startViewTransition || reduceMotion || root.dataset.theme === next) {
    commit(next);
    return;
  }

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? window.innerHeight / 2;

  // Desliga as transições de cor dos componentes durante a captura, senão elas aparecem pela metade dentro do círculo.
  root.classList.add("theme-switching");
  root.style.setProperty("--theme-x", `${x}px`);
  root.style.setProperty("--theme-y", `${y}px`);

  // O DOM precisa mudar de forma síncrona dentro do callback.
  const transition = doc.startViewTransition(() => commit(next));

  const cleanup = () => {
    root.classList.remove("theme-switching");
    root.style.removeProperty("--theme-x");
    root.style.removeProperty("--theme-y");
  };
  void (transition.finished ?? transition.ready).then(cleanup, cleanup);

  transition.ready
    .then(() => {
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: 900,
          easing: "cubic-bezier(.4, 0, .2, 1)",
          fill: "forwards",
          pseudoElement: "::view-transition-new(root)"
        }
      );
    })
    .catch(() => {
      /* transição cancelada */
    });
}
