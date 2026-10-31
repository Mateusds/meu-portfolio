/**
 * Chave do tema no localStorage. Fica fora de theme-store.ts (que é "use client") para o layout,
 * que roda no servidor, conseguir ler o valor e montar o script que evita o piscar do tema.
 */
export const THEME_STORAGE_KEY = "mateus-portfolio-theme";
