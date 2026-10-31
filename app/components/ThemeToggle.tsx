"use client";

import type { MouseEvent } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme/theme-store";
import { changeThemeAnimated } from "@/lib/theme/theme-transition";
import { useHtmlPortalRoot } from "./useHtmlPortalRoot";

/**
 * Botão fixo que alterna entre modo claro e escuro. A troca se espalha em círculo a partir do clique.
 * Renderizado em um contêiner direto em <html> (ver useHtmlPortalRoot), senão rolaria junto com o body.
 */
export function ThemeToggle() {
  const portalRoot = useHtmlPortalRoot();
  const [theme, setTheme] = useTheme();
  const [spinning, setSpinning] = useState(false);

  if (!portalRoot) return null;

  const next = theme === "dark" ? "light" : "dark";
  const label = next === "light" ? "Ativar modo claro" : "Ativar modo escuro";

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    // clique por teclado não tem coordenadas: usa o centro do botão
    const origin = {
      x: event.clientX || box.left + box.width / 2,
      y: event.clientY || box.top + box.height / 2
    };

    setSpinning(true);
    changeThemeAnimated(next, setTheme, origin);
  }

  return createPortal(
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <span
        className="theme-toggle-icon"
        data-spinning={spinning}
        onAnimationEnd={() => setSpinning(false)}
      >
        <Sun size={20} className="theme-toggle-sun" aria-hidden="true" />
        <Moon size={20} className="theme-toggle-moon" aria-hidden="true" />
      </span>
    </button>,
    portalRoot
  );
}
