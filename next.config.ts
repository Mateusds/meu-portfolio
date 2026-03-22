import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",      // Essencial para o deploy na EC2
  trailingSlash: true,   // Ajuda o Nginx a achar as pastas
  images: {
    unoptimized: true    // Necessário para o 'next export'
  },
  // Remova o basePath e assetPrefix para usar o domínio direto
};

export default nextConfig;