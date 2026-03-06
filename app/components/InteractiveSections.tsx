"use client";

import { useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  category: "Web" | "Mobile" | "Fullstack";
  summary: string;
  stack: string[];
  highlight: string;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Dashboard de Vendas",
    category: "Web",
    summary:
      "Painel com graficos, filtros por periodo e autenticacao, focado em performance para equipes comerciais.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    highlight: "Interface responsiva com carregamento otimizado."
  },
  {
    id: "p2",
    title: "App de Entregas",
    category: "Mobile",
    summary:
      "Aplicativo para entregadores com rastreio em tempo real, historico de corridas e notificacoes push.",
    stack: ["React Native", "Expo", "Firebase"],
    highlight: "Fluxo mobile-first e atualizacao em tempo real."
  },
  {
    id: "p3",
    title: "Landing de Captacao",
    category: "Web",
    summary:
      "Pagina institucional com foco em conversao, SEO tecnico e formularios integrados ao backend.",
    stack: ["React", "Next.js", "CSS"],
    highlight: "Melhor taxa de conversao com UX orientada a funil."
  },
  {
    id: "p4",
    title: "Sistema de Agendamentos",
    category: "Fullstack",
    summary:
      "Agenda com gerenciamento de horarios, confirmacao por email e painel administrativo.",
    stack: ["Next.js", "Supabase", "PHP"],
    highlight: "Automacao de tarefas e menor retrabalho operacional."
  }
];

const journey = [
  {
    label: "Inicio",
    period: "2023",
    text: "Comecei focando em HTML, CSS e JavaScript para construir base solida de front-end."
  },
  {
    label: "Evolucao",
    period: "2024",
    text: "Passei a desenvolver projetos com React e Next.js, melhorando componentizacao e performance."
  },
  {
    label: "Mobile",
    period: "2025",
    text: "Ampliei o foco para React Native e Expo, criando apps com integracoes em Firebase e Supabase."
  },
  {
    label: "Atual",
    period: "2026",
    text: "Atuando como front-end junior com foco em entregas modernas, responsivas e orientadas a produto."
  }
];

const faqItems = [
  {
    question: "Quais tipos de projeto voce desenvolve?",
    answer:
      "Projetos web e mobile com foco em interfaces modernas, integracao com BaaS e boa experiencia de usuario."
  },
  {
    question: "Voce trabalha com APIs e banco de dados?",
    answer:
      "Sim. Faço integracoes com Supabase e Firebase e tambem consigo apoiar em backend com PHP."
  },
  {
    question: "Seu foco principal hoje?",
    answer:
      "Front-end com React e Next.js, sem deixar de atuar em mobile quando o projeto pede multiplataforma."
  }
];

export default function InteractiveSections() {
  const [activeCategory, setActiveCategory] = useState<
    "Todos" | "Web" | "Mobile" | "Fullstack"
  >("Todos");
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const [activeJourney, setActiveJourney] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) || projects[0];

  return (
    <>
      <section className="card reveal delay-3">
        <h2>Projetos Interativos</h2>
        <p>
          Explore os projetos por categoria e veja os detalhes de cada entrega.
        </p>

        <div className="filter-group">
          {(["Todos", "Web", "Mobile", "Fullstack"] as const).map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-chip ${
                activeCategory === category ? "filter-chip-active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="interactive-grid">
          <div className="project-list">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                className={`project-item ${
                  selectedProjectId === project.id ? "project-item-active" : ""
                }`}
                onClick={() => setSelectedProjectId(project.id)}
              >
                <strong>{project.title}</strong>
                <span>{project.category}</span>
              </button>
            ))}
          </div>

          <article className="project-preview">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.summary}</p>
            <p className="project-highlight">{selectedProject.highlight}</p>
            <div className="preview-stacks">
              {selectedProject.stack.map((item) => (
                <span key={item} className="preview-stack">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="card reveal delay-4">
        <h2>Jornada e FAQ</h2>
        <p>Uma linha do tempo clicavel com respostas rapidas sobre meu perfil.</p>

        <div className="timeline-buttons">
          {journey.map((item, index) => (
            <button
              key={item.period}
              type="button"
              className={`timeline-button ${
                activeJourney === index ? "timeline-button-active" : ""
              }`}
              onClick={() => setActiveJourney(index)}
            >
              <span>{item.label}</span>
              <small>{item.period}</small>
            </button>
          ))}
        </div>

        <article className="timeline-panel">
          <h3>
            {journey[activeJourney].label} - {journey[activeJourney].period}
          </h3>
          <p>{journey[activeJourney].text}</p>
        </article>

        <div className="faq-list">
          {faqItems.map((faq, index) => (
            <article key={faq.question} className="faq-item">
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                {faq.question}
              </button>
              {openFaq === index ? (
                <p className="faq-answer">{faq.answer}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
