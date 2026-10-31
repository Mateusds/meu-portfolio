import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mateus Marques | Front-end e Mobile",
  description:
    "Portfolio de Mateus Marques, desenvolvedor Front-end e Mobile focado em aplicacoes modernas e performaticas.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/apple-touch-icon.png"
  },
  verification: {
    google: "mGCMbty2l_jhV_20_9-h1QprEfg2x8snSQbwSjtdVwk"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
