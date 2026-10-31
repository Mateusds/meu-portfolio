"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Briefcase,
  Compass,
  FolderKanban,
  House,
  Mail,
  Menu,
  User,
  X,
  type LucideIcon
} from "lucide-react";
import { useHtmlPortalRoot } from "./useHtmlPortalRoot";

// Os ids precisam bater com os `id` das <section> em page.tsx.
const items: Array<{ id: string; label: string; icon: LucideIcon }> = [
  { id: "inicio", label: "Início", icon: House },
  { id: "sobre", label: "Sobre", icon: User },
  { id: "servicos", label: "O que eu faço", icon: Briefcase },
  { id: "projetos", label: "Projetos", icon: FolderKanban },
  { id: "processo", label: "Como eu trabalho", icon: Compass },
  // { id: "cursos", label: "Cursos e formação", icon: GraduationCap },
  { id: "contato", label: "Contato", icon: Mail }
];

/**
 * Menu das seções para telas pequenas: um botão fixo que abre uma lista com cada seção do portfólio.
 * Fica oculto no desktop (ver `.mobile-menu` no CSS). Renderizado fora do <body> pelo mesmo motivo do
 * ThemeToggle (ver useHtmlPortalRoot).
 */
export function MobileMenu() {
  const portalRoot = useHtmlPortalRoot();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!portalRoot) return null;

  function goTo(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setOpen(false);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  return createPortal(
    <div className="mobile-menu" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="mobile-menu-button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-list"
        data-open={open}
      >
        <Menu size={20} className="mobile-menu-icon-open" aria-hidden="true" />
        <X size={20} className="mobile-menu-icon-close" aria-hidden="true" />
      </button>

      {open && (
        <nav className="mobile-menu-panel" aria-label="Seções do portfólio">
          <ul id="mobile-menu-list">
            {items.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(event) => goTo(event, id)}>
                  <Icon size={18} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>,
    portalRoot
  );
}
