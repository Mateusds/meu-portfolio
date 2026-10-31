import { Code2, ArrowRight, ChevronDown } from "lucide-react";
import { ProjectBriefForm } from "./components/ProjectBriefForm";
import { ProjectsCarousel } from "./components/ProjectsCarousel";
import { RevealObserver } from "./components/RevealObserver";

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
      "App mobile para profissionais e equipes clínicas, com agenda, fila do dia, atendimento, pacientes e prontuários, além de notificações e biometria.",
    stack: ["Expo", "React Native", "TypeScript"]
  },
  {
    name: "M2D Mobile",
    icon: "heart-outline",
    description:
      "SaaS multi-tenant para operadoras de saúde: um portal white-label para configurar menus, cores, login e conteúdos, e um app mobile do beneficiário que consome essa configuração.",
    stack: ["NestJS", "Next.js", "Expo", "React Native", "PostgreSQL"]
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

const services = [
  {
    title: "Landing Page",
    icon: "browser-outline",
    description:
      "Uma página única e direta para divulgar um produto, serviço ou campanha e levar o visitante a entrar em contato."
  },
  {
    title: "Site institucional",
    icon: "globe-outline",
    description:
      "O site da sua empresa ou do seu trabalho, com várias páginas, visual cuidado e navegação fácil em qualquer tela."
  },
  {
    title: "Sistema web",
    icon: "monitor-outline",
    description:
      "Painéis e sistemas sob medida para organizar dados, processos e a rotina do seu negócio, direto no navegador."
  },
  {
    title: "Aplicativo mobile",
    icon: "smartphone-outline",
    description:
      "Apps para Android e iOS feitos com React Native e Expo, com um só código para as duas plataformas."
  }
];

const processSteps = [
  {
    title: "Briefing e conversa",
    description:
      "Entendo seu objetivo, seu público e seu prazo, a partir do formulário e de uma conversa."
  },
  {
    title: "Proposta e prazo",
    description:
      "Você recebe o que será feito, o valor e o cronograma antes de qualquer código."
  },
  {
    title: "Layout e protótipo",
    description:
      "Mostro como vai ficar antes de programar, para você aprovar o visual."
  },
  {
    title: "Desenvolvimento com entregas parciais",
    description:
      "Você acompanha o andamento e pode opinar ao longo do caminho, sem esperar até o fim."
  },
  {
    title: "Publicação e suporte",
    description:
      "Coloco no ar e continuo disponível para ajustes depois da entrega."
  }
];

// Quem faz cada etapa do processo, na mesma ordem de processSteps.
const processWho = ["Nós dois", "Eu envio", "Você aprova", "Você acompanha", "Eu entrego"];

// Logos pretos ficam brancos no tema escuro.
const monoTools = new Set(["Next.js", "GitHub", "Prisma", "Expo", "MySQL"]);

const delay = (step: number) => ({ "--d": `${step * 90}ms` }) as React.CSSProperties;

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" }
];

const socials = [
  { href: "https://github.com/Mateusds", label: "GitHub", icon: "github/github-original" },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: "linkedin/linkedin-plain" }
];

function Socials() {
  return (
    <div className="socials">
      {socials.map((social) => (
        <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
          <img
            className="icon-mono"
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${social.icon}.svg`}
            alt=""
            width={18}
            height={18}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}

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

export default function Home() {
  return (
    <>
      <RevealObserver />

      <header id="inicio" className="hero">
        <div className="wrap">
          <nav className="nav" aria-label="Principal">
            <a className="brand" href="#inicio">
              <Code2 size={22} aria-hidden="true" />
              Mateus Marques
            </a>
            <div className="nav-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="hero-bar" aria-hidden="true" />
            <h1>
              <span className="line">Olá, sou o Mateus,</span>
              <span className="line">desenvolvedor</span>
              <span className="line">Front‑end e Mobile</span>
            </h1>
            <p className="hero-text">
              Transformo ideias em sites, sistemas web e aplicativos modernos, rápidos e fáceis de
              usar.
            </p>
            <a className="hero-down" href="#sobre" aria-label="Rolar para a próxima seção">
              <ChevronDown size={26} aria-hidden="true" />
            </a>
          </div>

          <img
            className="hero-portrait"
            src="/mateus-sem-fundo.webp"
            alt="Mateus Marques, desenvolvedor Front-end e Mobile"
            width={952}
            height={1400}
            fetchPriority="high"
            decoding="async"
          />

          <aside className="hero-side">
            <div className="side-block">
              <h2 className="side-label">Sobre mim</h2>
              <p>
                Desenvolvedor front-end e mobile de Alagoas. Atuo com React, Next.js, React Native
                e TypeScript, criando sites, sistemas web e aplicativos modernos, rápidos e
                responsivos. Hoje também construo produtos da M2D Tech Solutions, do login único ao
                atendimento.
              </p>
              <a className="arrow-link" href="#sobre">
                Saiba mais <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
            <div className="side-block">
              <h2 className="side-label">Meus projetos</h2>
              <p>
                Produtos da M2D Tech Solutions que venho construindo, cada um com seu próprio
                propósito.
              </p>
              <a className="arrow-link" href="#projetos">
                Ver projetos <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
            <div className="side-block">
              <h2 className="side-label">Siga-me</h2>
              <Socials />
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section id="sobre" className="section section-alt">
          <div className="wrap">
            <div className="about">
              <div className="about-copy" data-reveal>
                <p className="label">
                  <span>/</span> Sobre mim
                </p>
                <h2>Construo produtos que abrem rápido e funcionam em qualquer tela</h2>
                <p>
                  Entrego sites e aplicativos pensados para abrir rápido, mesmo em conexões mais
                  lentas, com imagens e código leves. Tudo se adapta ao celular, ao tablet e ao
                  computador. Depois que o projeto vai ao ar, continuo por perto para tirar dúvidas
                  e fazer os ajustes necessários.
                </p>
                <a className="arrow-link" href="#contato">
                  Falar comigo <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>

              <div className="stats" data-reveal style={delay(1)}>
                <div className="stat">
                  <strong>{projects.length}</strong>
                  <span>Produtos em desenvolvimento</span>
                </div>
                <div className="stat">
                  <strong>{services.length}</strong>
                  <span>Tipos de serviço</span>
                </div>
                <div className="stat">
                  <strong>{processSteps.length}</strong>
                  <span>Etapas do meu processo</span>
                </div>
              </div>
            </div>

            <div className="tech" data-reveal>
              <p className="tech-title">Trabalho com</p>
              <div className="marquee">
                <ul className="marquee-track">
                  {/* A lista aparece duas vezes para o movimento fechar o ciclo sem emendas. */}
                  {[0, 1].map((copy) =>
                    tools.map((tool) => (
                      <li key={`${copy}-${tool.name}`} className="tech-item" aria-hidden={copy === 1}>
                        <img
                          className={monoTools.has(tool.name) ? "icon-mono" : undefined}
                          src={tool.src}
                          alt=""
                          width={26}
                          height={26}
                          loading="lazy"
                        />
                        {tool.name}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="wrap">
            <div data-reveal>
              <p className="label">
                <span>/</span> O que eu faço
              </p>
              <h2>Do primeiro rascunho até o ar</h2>
            </div>
            <ul className="cards">
              {services.map((service, index) => (
                <li key={service.title} className="card" data-reveal style={delay(index)}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projetos" className="section section-alt">
          <div className="wrap" data-reveal>
            <ProjectsCarousel
              projects={projects.map(({ name, description, stack }) => ({ name, description, stack }))}
            >
              <p className="label">
                <span>/</span> Projetos
              </p>
              <h2>Projetos em desenvolvimento</h2>
            </ProjectsCarousel>
          </div>
        </section>

        <section id="processo" className="section">
          <div className="wrap">
            <div data-reveal>
              <p className="label">
                <span>/</span> Como eu trabalho
              </p>
              <h2>Um caminho simples, com você em cada etapa</h2>
            </div>
            <ol className="steps">
              {processSteps.map((step, index) => (
                <li key={step.title} className="card" data-reveal style={delay(index % 3)}>
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <p className="card-foot">{processWho[index]}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Cursos e Formação Complementar: escondido por enquanto. Os dados estão em `courses`.
        <section id="cursos" className="section section-alt">
          <div className="wrap">
            <p className="label"><span>/</span> Formação</p>
            <h2>Cursos e formação complementar</h2>
            <ul className="cards">
              {courses.map((course) => (
                <li key={course.title} className="card">
                  <h3>{course.title}</h3>
                  <p>{course.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        */}

        <section id="contato" className="section section-alt">
          <div className="wrap contact">
            <div className="contact-copy" data-reveal>
              <p className="label">
                <span>/</span> Contato
              </p>
              <h2>Vamos conversar sobre seu projeto</h2>
              <p>
                Se você precisa de uma interface moderna, performática e responsiva, estou pronto
                para colaborar no seu produto.
              </p>
              <Socials />
            </div>
            <div className="panel" data-reveal style={delay(1)}>
              <ProjectBriefForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-row">
          <span>© 2026 Mateus Marques</span>
          <span>Alagoas, Brasil</span>
        </div>
      </footer>
    </>
  );
}
