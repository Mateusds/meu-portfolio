# Deploy no Cloudflare Pages

O site é estático (`output: "export"` no `next.config.ts`), então o build gera a pasta `out/`, que é enviada direto ao Cloudflare Pages com o Wrangler.

- **Projeto:** `meu-portfolio`
- **URL:** https://meu-portfolio-cyt.pages.dev/
- **Domínio próprio:** https://mateusmarquesds.com/ (e `www`), com DNS no Cloudflare
- **Branch de produção:** `main`

## Atualizar o site

```bash
npm run build
npx wrangler pages deploy out --project-name meu-portfolio --branch main
```

Não é preciso passar `--force`. Ele só foi necessário para criar o projeto, porque o Wrangler tenta redirecionar o Pages para Workers.

## Pré-requisitos

- Node.js 20 ou superior
- Dependências instaladas: `npm install`
- Login no Cloudflare: `npx wrangler login` (confira com `npx wrangler whoami`)

## Observações

- O projeto **não** está ligado ao GitHub: um push na `main` não atualiza o site. Para deploy automático, conecte o repositório em Workers & Pages → meu-portfolio → Settings → Builds & deployments, com:
  - Build command: `npm run build`
  - Output directory: `out`
  - Variável de ambiente: `NODE_VERSION=20`
- DNS do domínio (zona `mateusmarquesds.com`): a raiz e o `www` são CNAME para `meu-portfolio-cyt.pages.dev`, com proxy ligado. Os demais subdomínios da zona usam o túnel `meu-tunel` e não têm relação com o portfólio.
- Se precisar voltar a raiz para o túnel, recrie o CNAME `mateusmarquesds.com` → `c1ba24fb-f7d7-4606-975a-490312369858.cfargotunnel.com`, com proxy ligado.
- Para publicar um preview sem afetar a produção, use outro nome de branch: `--branch preview`.
