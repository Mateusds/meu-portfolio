import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mateusmarquesds.com";
const siteName = "Mateus Marques";
const title = "Mateus Marques | Desenvolvedor Front-end e Mobile em Alagoas";
const description =
  "Portfólio de Mateus Marques, desenvolvedor Front-end e Mobile de Alagoas. Crio landing pages, sites institucionais, sistemas web e aplicativos modernos e rápidos com React, Next.js e React Native.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  keywords: [
    "Mateus Marques",
    "desenvolvedor front-end",
    "desenvolvedor mobile",
    "desenvolvedor React",
    "desenvolvedor Next.js",
    "React Native",
    "criação de sites",
    "landing page",
    "site institucional",
    "sistema web",
    "aplicativo mobile",
    "desenvolvedor freelancer",
    "Alagoas"
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mateus Marques, desenvolvedor Front-end e Mobile"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"]
  },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#person` }
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      jobTitle: "Desenvolvedor Front-end e Mobile",
      description,
      address: {
        "@type": "PostalAddress",
        addressRegion: "AL",
        addressCountry: "BR"
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "React Native",
        "Expo",
        "Desenvolvimento web",
        "Desenvolvimento de aplicativos mobile"
      ],
      sameAs: ["https://github.com/Mateusds"]
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
