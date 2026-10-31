"use client";

import { useEffect, useState } from "react";

/**
 * Cria um contêiner direto em <html> (fora do <body>) para botões com `position: fixed`.
 *
 * O body tem `transform` e é ele quem rola, então um elemento fixo dentro dele rola junto com a página.
 * `createPortal(..., document.documentElement)` não resolve: o elemento acaba dentro do body. Por isso o
 * contêiner é criado aqui, só depois da hidratação. Devolve `null` até lá.
 */
export function useHtmlPortalRoot(): HTMLElement | null {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.createElement("div");
    element.className = "fixed-ui-root";
    document.documentElement.appendChild(element);
    setRoot(element);

    return () => {
      element.remove();
      setRoot(null);
    };
  }, []);

  return root;
}
