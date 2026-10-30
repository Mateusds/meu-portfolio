const eva = require("eva-icons");
import { NextSkillsAccordion } from "./components/NextSkillsAccordion";
import { ProjectBriefForm } from "./components/ProjectBriefForm";
import { SkillsBadges } from "./components/SkillsBadges";

const techStacks = [
  {
    category: "Web",
    icon: "layout-outline",
    items: ["React.js", "Next.js", "TypeScript"]
  },
  {
    category: "Mobile",
    icon: "smartphone-outline",
    items: ["React Native", "Expo"]
  },
  {
    category: "Backend e Dados",
    icon: "hard-drive-outline",
    items: ["MySQL", "PostgreSQL", "PHP"]
  },
  {
    category: "Linguagens",
    icon: "edit-outline",
    items: ["JavaScript", "HTML", "CSS"]
  }
];

const projects = [
  {
    name: "M2D Identity",
    icon: "shield-outline",
    description:
      "Serviço central de identidade da plataforma M2D, um emissor OAuth 2.1 e OpenID Connect que dá login único aos produtos, com Authorization Code + PKCE, tokens assinados e publicação de chaves públicas (JWKS).",
    stack: ["Fastify", "TypeScript", "Prisma", "PostgreSQL", "Redis"]
  },
  {
    name: "M2D Console",
    icon: "grid-outline",
    description:
      "Console central para administradores de organizações acompanharem produtos contratados, ambientes, acessos e permissões. É a porta de entrada dos produtos M2D, integrada ao Identity via OIDC.",
    stack: ["Next.js", "React", "TypeScript", "OIDC"]
  },
  {
    name: "M2D Connect",
    icon: "message-circle-outline",
    description:
      "Plataforma própria de atendimento via WhatsApp, pensada para substituir uma ferramenta de terceiros. Reúne conversas, filas, bots e integrações, com processamento assíncrono de mensagens por workers.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Prisma", "Redis", "BullMQ"]
  },
  {
    name: "M2D Suporte",
    icon: "headphones-outline",
    description:
      "Central para a equipe técnica receber, acompanhar e responder chamados dos produtos M2D, com painel web, API separada, sessões seguras por cookie httpOnly e atualização em tempo real.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Socket.IO"]
  },
  {
    name: "M2D RH",
    icon: "people-outline",
    description:
      "Plataforma corporativa de recursos humanos com app mobile para ponto, documentos, comunicados e perfil, e portal de gestão para gestores e RH, com perfis de acesso por papel.",
    stack: ["NestJS", "Next.js", "React Native", "Expo", "Prisma"]
  },
  {
    name: "hClinic360 Clínica",
    icon: "file-text-outline",
    description:
      "App mobile para profissionais e equipes clínicas, com agenda, fila do dia, atendimento, pacientes, prontuários e laboratório, além de notificações e biometria. Tem também um app companheiro para Apple Watch, em fase inicial.",
    stack: ["Expo", "React Native", "TypeScript", "SwiftUI", "watchOS"]
  },
  {
    name: "M2D Mobile",
    icon: "heart-outline",
    description:
      "SaaS multi-tenant para operadoras de saúde: um portal white-label para configurar menus, cores, login e conteúdos, e um app mobile do beneficiário que consome essa configuração.",
    stack: ["NestJS", "Next.js", "Expo", "React Native", "PostgreSQL"]
  }
];

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

// `mono` marca logos pretos, que ficam brancos no fundo escuro.
const techLogos: Record<string, { src: string; mono?: boolean }> = {
  Fastify: { src: devicon("fastify/fastify-original"), mono: true },
  TypeScript: { src: devicon("typescript/typescript-original") },
  Prisma: { src: devicon("prisma/prisma-original"), mono: true },
  PostgreSQL: { src: devicon("postgresql/postgresql-original") },
  Redis: { src: devicon("redis/redis-original") },
  "Next.js": { src: devicon("nextjs/nextjs-original"), mono: true },
  React: { src: devicon("react/react-original") },
  OIDC: { src: "https://cdn.simpleicons.org/openid/F78C40" },
  NestJS: { src: devicon("nestjs/nestjs-original") },
  "Node.js": { src: devicon("nodejs/nodejs-original") },
  "Socket.IO": { src: devicon("socketio/socketio-original"), mono: true },
  "React Native": { src: devicon("react/react-original") },
  Expo: { src: devicon("expo/expo-original"), mono: true },
  SwiftUI: { src: devicon("swift/swift-original") },
  watchOS: { src: devicon("apple/apple-original"), mono: true }
};

const tools = [
  {
    name: "JavaScript",
    alt: "Mateus-Js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "TypeScript",
    alt: "Mateus-TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "HTML5",
    alt: "Mateus-HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    alt: "Mateus-CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  // {
  //   name: "Tailwind CSS",
  //   alt: "Mateus-Tailwind",
  //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  // },
  {
    name: "React",
    alt: "Mateus-React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    alt: "Mateus-Next",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "Expo",
    alt: "Mateus-Expo",
    src: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg"
  },
  {
    name: "Git",
    alt: "Mateus-Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "GitHub",
    alt: "Mateus-GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    iconClassName: "tool-logo-light-bg"
  },
  {
    name: "Node.js",
    alt: "Mateus-Node",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "MySQL",
    alt: "Mateus-MySQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "PostgreSQL",
    alt: "Mateus-PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "Prisma",
    alt: "Mateus-Prisma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"
  },
  {
    name: "PHP",
    alt: "Mateus-PHP",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  }
];

const nextSkills = [
  {
    title: "SSR, SSG e ISR",
    description:
      "Entendo quando usar renderização no servidor, geração estática ou regeneração incremental para equilibrar performance, cache e atualização de conteúdo.",
    example:
      "Exemplo: usar ISR em uma página de catálogo para atualizar produtos automaticamente sem rebuild completo."
  },
  {
    title: "App Router e Nested Layouts",
    description:
      "Consigo estruturar rotas com o App Router, reaproveitando layouts aninhados para manter a navegação organizada e escalável.",
    example:
      "Exemplo: criar um layout global com menu e um layout interno apenas para a área administrativa."
  },
  {
    title: "Server Components e Client Components",
    description:
      "Separo componentes de servidor e cliente conforme a necessidade da interface, reduzindo JavaScript no navegador e melhorando carregamento.",
    example:
      "Exemplo: buscar dados no servidor e deixar somente o formulário ou modal como componente cliente."
  },
  {
    title: "Route Handlers e APIs",
    description:
      "Crio endpoints no próprio Next.js para formulários, integrações e regras simples de backend, mantendo o projeto centralizado.",
    example:
      "Exemplo: receber dados de um formulário de contato em /api/contact e encaminhar para um serviço externo."
  },
  {
    title: "Otimização de performance e cache",
    description:
      "Aplico boas práticas como carregamento eficiente, redução de requests desnecessários e uso consciente de cache para interfaces mais rápidas.",
    example:
      "Exemplo: evitar buscas repetidas, otimizar imagens e definir cache para melhorar o tempo de carregamento."
  },
  {
    title: "SEO técnico (metadata, sitemap, robots)",
    description:
      "Configuro metadata, sitemap e robots para melhorar indexação, compartilhamento e visibilidade das páginas nos buscadores.",
    example:
      "Exemplo: definir title e description por página e gerar sitemap.xml para ajudar na indexação."
  },
  {
    title: "Integração com bancos de dados e APIs",
    description:
      "Faço integrações com autenticação, banco de dados e serviços externos usando MySQL, PostgreSQL e PHP conforme a necessidade do projeto.",
    example:
      "Exemplo: autenticar usuários e salvar dados em MySQL ou PostgreSQL para dashboards ou painéis."
  },
  {
    title: "Deploy com GitHub Actions e Pages",
    description:
      "Tenho familiaridade com fluxos de deploy automatizado e versionamento para publicar atualizações com mais segurança e consistência.",
    example:
      "Exemplo: configurar uma action para publicar automaticamente a aplicação após push na branch principal."
  }
];

const courses = [
  {
    title: "Infraestrutura e Cloud",
    summary:
      "Curso em Windows Server 2022 e 2019, Active Directory, AZ-104 e AZ-900, com foco em administração de ambientes, identidade e fundamentos de Azure."
  },
  {
    title: "React com JavaScript",
    summary:
      "Curso voltado ao desenvolvimento de interfaces com React e JavaScript, com foco em componentes, estado, props, eventos e construção de aplicações web modernas."
  }
];

function EvaIcon({ name }: { name: string }) {
  const icon = eva.icons[name];

  if (!icon) {
    return <span className="eva-placeholder" aria-hidden="true" />;
  }

  return (
    <span
      className="eva-icon"
      aria-hidden="true"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: icon.toSvg({
          fill: "currentColor",
          width: "18",
          height: "18"
        })
      }}
    />
  );
}

export default function Home() {
  return (
    <main className="page">
      <div className="background-glow background-glow-1" />
      <div className="background-glow background-glow-2" />

      <section className="hero card reveal">
        <div className="hero-layout">
          <div className="hero-copy">
            <h1 className="typing-title">
              <span className="typing-line">
                Olá, sou <span className="typing-name">Mateus Marques</span>
              </span>
            </h1>
            <p className="lead">
              Desenvolvedor <strong>Front-end e Mobile</strong> de{" "}
              <strong>Alagoas, Brasil</strong>, apaixonado por tecnologia e inovação.
              Foco em criar aplicações modernas{" "}
              <span className="lead-nowrap">e performáticas.</span>
            </p>
          </div>

          <aside className="hero-code-panel" aria-label="Visual de programação">
            <div className="code-window">
              <div className="code-window-header">
                <span className="code-window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="code-window-title">stack.ts</span>
              </div>

              <div className="code-window-body">
                <pre className="code-snippet">
                  <code>
                    <span className="token-keyword">const</span>{" "}
                    <span className="token-identifier">stack</span>{" "}
                    <span className="token-operator">=</span>{" "}
                    <span className="token-punctuation">{`{`}</span>
                    {"\n"}
                    {"  "}
                    <span className="token-key">frontend</span>
                    <span className="token-punctuation">:</span>{" "}
                    <span className="token-punctuation">[</span>
                    <span className="token-string">"React"</span>
                    <span className="token-punctuation">, </span>
                    <span className="token-string">"Next.js"</span>
                    <span className="token-punctuation">, </span>
                    <span className="token-string">"TypeScript"</span>
                    <span className="token-punctuation">]</span>
                    <span className="token-punctuation">,</span>
                    {"\n"}
                    {"  "}
                    <span className="token-key">mobile</span>
                    <span className="token-punctuation">:</span>{" "}
                    <span className="token-punctuation">[</span>
                    <span className="token-string">"React Native"</span>
                    <span className="token-punctuation">, </span>
                    <span className="token-string">"Expo"</span>
                    <span className="token-punctuation">]</span>
                    <span className="token-punctuation">,</span>
                    {"\n"}
                    {"  "}
                    <span className="token-key">database</span>
                    <span className="token-punctuation">:</span>{" "}
                    <span className="token-punctuation">[</span>
                    <span className="token-string">"MySQL"</span>
                    <span className="token-punctuation">, </span>
                    <span className="token-string">"PostgreSQL"</span>
                    <span className="token-punctuation">]</span>
                    {"\n"}
                    <span className="token-punctuation">{`}`}</span>
                    <span className="token-punctuation">;</span>
                  </code>
                </pre>

                <div className="code-metrics">
                  <div className="code-metric">
                    <span className="code-metric-label">Foco</span>
                    <strong>Interfaces e performance</strong>
                  </div>
                  <div className="code-metric">
                    <span className="code-metric-label">Stack</span>
                    <strong>Web, mobile e banco</strong>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="card reveal delay-1">
        <h2 className="title-row">
          <EvaIcon name="code-outline" />
          <span>Tecnologias que utilizo</span>
        </h2>
        <p>
          No meu dia a dia, trabalho construindo interfaces web e mobile,
          integrando com backends e bancos de dados como MySQL e PostgreSQL.
        </p>

        <div className="stack-grid tech-grid">
          {techStacks.map((stack) => (
            <article key={stack.category} className="stack-item tech-card">
              <header className="tech-card-header">
                <span className="tech-card-icon" aria-hidden="true">
                  <EvaIcon name={stack.icon} />
                </span>
                <h3 className="tech-card-title">{stack.category}</h3>
              </header>
              <ul className="tech-chips">
                {stack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="card reveal delay-1">
        <h2 className="title-row">
          <EvaIcon name="briefcase-outline" />
          <span>Projetos em desenvolvimento</span>
        </h2>
        <p>
          Produtos distintos da M2D Tech Solutions que venho construindo, cada
          um com seu próprio propósito e público.
        </p>

        <div className="stack-grid projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="stack-item project-card">
              <header className="project-card-header">
                <span className="tech-card-icon" aria-hidden="true">
                  <EvaIcon name={project.icon} />
                </span>
                <div className="project-card-heading">
                  <h3 className="tech-card-title">{project.name}</h3>
                  <span className="project-status">Em desenvolvimento</span>
                </div>
              </header>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags">
                {project.stack.map((item) => {
                  const logo = techLogos[item];

                  return (
                    <li key={item}>
                      {logo ? (
                        <img
                          src={logo.src}
                          alt=""
                          width={16}
                          height={16}
                          loading="lazy"
                          className={logo.mono ? "tag-logo tag-logo-mono" : "tag-logo"}
                        />
                      ) : (
                        <EvaIcon name="layers-outline" />
                      )}
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="card reveal delay-2">
        <h2 className="title-row">
          <EvaIcon name="award-outline" />
          <span>Habilidades e Ferramentas</span>
        </h2>
        <SkillsBadges tools={tools} />
      </section>

      <section className="card reveal delay-3">
        <h2 className="title-row">
          <EvaIcon name="layers-outline" />
          <span>Habilidades Next.js</span>
        </h2>
        <p>
          Competências que aplico no desenvolvimento de projetos com Next.js.
        </p>
        <NextSkillsAccordion skills={nextSkills} />
      </section>

      <section className="card reveal delay-4">
        <h2 className="title-row">
          <EvaIcon name="book-open-outline" />
          <span>Cursos e Formação Complementar</span>
        </h2>
        <p>
          Estudos voltados para infraestrutura, administração de servidores e
          fundamentos de cloud.
        </p>
        <div className="stack-grid">
          {courses.map((course) => (
            <article key={course.title} className="stack-item">
              <h3>{course.title}</h3>
              <p>{course.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* <section className="card reveal delay-5">
        <h2 className="title-row">
          <EvaIcon name="shuffle-outline" />
          <span>Fluxo de Integracoes</span>
        </h2>
        <p>Conexoes animadas entre ferramentas usando Animated Beam.</p>
        <AnimatedBeamDemo />
      </section> */}

      {/* <InteractiveSections /> */}

      <section className="card reveal delay-4 cta-card">
        <h2>Vamos conversar sobre seu projeto</h2>
        <p>
          Se você precisa de uma interface moderna, performática e responsiva,
          estou pronto para colaborar no seu produto.
        </p>
        <ProjectBriefForm />
        <div className="cta-actions">
          <a
            href="https://wa.me/5582988059412"
            target="_blank"
            rel="noreferrer"
            className="button button-whatsapp"
          >
            <span className="button-content">
              <img
                className="whatsapp-icon"
                src="https://cdn.simpleicons.org/whatsapp/ffffff"
                alt="WhatsApp"
                width={18}
                height={18}
                loading="lazy"
              />
              <span>Falar no WhatsApp</span>
            </span>
          </a>
          <a
            href="https://github.com/Mateusds"
            target="_blank"
            rel="noreferrer"
            className="button button-github"
          >
            <span className="button-content">
              <img
                className="github-icon"
                src="https://cdn.simpleicons.org/github/ffffff"
                alt="GitHub"
                width={18}
                height={18}
                loading="lazy"
              />
              <span>GitHub</span>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="button button-outline"
          >
            <span className="button-content">
              <span className="linkedin-icon" style={{display:'inline-block',width:18,height:18,verticalAlign:'middle'}} aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                  <path d="M7.1 9.5H9.3V17H7.1V9.5ZM8.2 8.5C7.6 8.5 7.1 8 7.1 7.4C7.1 6.8 7.6 6.3 8.2 6.3C8.8 6.3 9.3 6.8 9.3 7.4C9.3 8 8.8 8.5 8.2 8.5ZM10.7 9.5H12.8V10.4H12.8C13.1 9.8 13.9 9.2 15 9.2C17.1 9.2 17.5 10.5 17.5 12.1V17H15.3V12.6C15.3 11.7 15.3 10.6 14.1 10.6C12.9 10.6 12.8 11.6 12.8 12.6V17H10.7V9.5Z" fill="white"/>
                </svg>
              </span>
              <span>LinkedIn</span>
            </span>
          </a>
          <a href="mailto:mateus@email.com" className="button">
            <span className="button-content">
              <img
                className="gmail-icon"
                src="https://cdn.simpleicons.org/gmail/EA4335"
                alt="Gmail"
                width={18}
                height={18}
                loading="lazy"
              />
              <span>Enviar Email</span>
            </span>
          </a>
        </div>
      </section>

      {/* <footer className="footer reveal delay-4">
        <nav className="footer-links" aria-label="Links rapidos">
          <a href="https://github.com/Mateusds" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:mateus@email.com">Email</a>
          <a href="https://wa.me/5582988059412" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} Mateus Marques. Todos os direitos
          reservados.
        </p>
      </footer> */}
    </main>
  );
}
