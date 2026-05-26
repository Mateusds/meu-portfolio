const eva = require("eva-icons");
import { DotPatternDemo } from "./components/DotPatternDemo";
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
    category: "Backend / Bancos de Dados",
    icon: "hard-drive-outline",
    items: ["MySQL", "PostgreSQL", "PHP"]
  },
  {
    category: "Linguagens",
    icon: "edit-outline",
    items: ["JavaScript", "HTML", "CSS"]
  }
];

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
    name: "Vercel",
    alt: "Mateus-Vercel",
    src: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg"
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
      <DotPatternDemo />
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

        <div className="stack-grid">
          {techStacks.map((stack) => (
            <article key={stack.category} className="stack-item">
              <h3 className="title-row stack-title">
                <EvaIcon name={stack.icon} />
                <span>{stack.category}</span>
              </h3>
              <p>{stack.items.join(" | ")}</p>
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
