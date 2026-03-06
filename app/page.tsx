const eva = require("eva-icons");
import InteractiveSections from "./components/InteractiveSections";

const techStacks = [
  {
    category: "Web",
    icon: "layout-outline",
    items: ["React.js", "Next.js"]
  },
  {
    category: "Mobile",
    icon: "smartphone-outline",
    items: ["React Native", "Expo"]
  },
  {
    category: "Backend / BaaS",
    icon: "hard-drive-outline",
    items: ["Supabase", "Firebase", "PHP"]
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
    name: "HTML5",
    alt: "Mateus-HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    alt: "Mateus-CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
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
    name: "Supabase",
    alt: "Mateus-Supabase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
  },
  {
    name: "Firebase",
    alt: "Mateus-Firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
  },
  {
    name: "PHP",
    alt: "Mateus-PHP",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
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
        <p className="eyebrow title-row">
          <EvaIcon name="person-outline" />
          <span>Portfolio</span>
        </p>
        <h1>
          Ola, sou <span>Mateus Marques</span>
        </h1>
        <p className="lead">
          Desenvolvedor <strong>Front-end e Mobile</strong> de{" "}
          <strong>Alagoas, Brasil</strong>, apaixonado por tecnologia e inovacao.
          Foco em criar aplicacoes modernas e performaticas.
        </p>
      </section>

      <section className="card reveal delay-1">
        <h2 className="title-row">
          <EvaIcon name="code-outline" />
          <span>Tecnologias que utilizo</span>
        </h2>
        <p>
          No meu dia a dia, trabalho construindo interfaces web e mobile,
          integrando com backends poderosos como Supabase e Firebase.
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
        <div className="badges">
          {tools.map((tool) => (
            <span key={tool.name} className="badge">
              <span className="badge-content">
                <img
                  className="tool-logo"
                  src={tool.src}
                  alt={tool.alt}
                  height={30}
                  width={30}
                  loading="lazy"
                />
                <span>{tool.name}</span>
              </span>
            </span>
          ))}
        </div>
      </section>

      <InteractiveSections />

      <section className="card reveal delay-3">
        <h2 className="title-row">
          <EvaIcon name="compass-outline" />
          <span>Como me encontrar</span>
        </h2>
        <div className="contact-buttons">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="button button-outline"
          >
            <span className="button-content">
              <EvaIcon name="link-outline" />
              <span>LinkedIn</span>
            </span>
          </a>
          <a href="mailto:mateus@email.com" className="button">
            <span className="button-content">
              <EvaIcon name="email-outline" />
              <span>Gmail</span>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
