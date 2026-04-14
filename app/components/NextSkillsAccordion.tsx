"use client";

import { useState } from "react";

type NextSkill = {
  title: string;
  description: string;
  example: string;
};

type NextSkillsAccordionProps = {
  skills: NextSkill[];
};

export function NextSkillsAccordion({
  skills
}: NextSkillsAccordionProps) {
  const [openSkill, setOpenSkill] = useState<string | null>(skills[0]?.title ?? null);
  const [openAll, setOpenAll] = useState(false);
  const skillColumns = [
    skills.filter((_, index) => index % 2 === 0),
    skills.filter((_, index) => index % 2 === 1)
  ];

  return (
    <>
      <div className="next-skills-toolbar">
        <button
          type="button"
          className="next-skills-toggle-all"
          onClick={() => setOpenAll((current) => !current)}
        >
          {openAll ? "Fechar todos" : "Abrir todos"}
        </button>
      </div>

      <div className="next-skills-grid">
        {skillColumns.map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className="next-skills-column">
            {column.map((skill) => {
              const isOpen = openAll || openSkill === skill.title;

              return (
                <article
                  key={skill.title}
                  className={`next-skill-card ${isOpen ? "next-skill-card-open" : ""}`}
                >
                  <button
                    type="button"
                    className="next-skill-trigger"
                    aria-expanded={isOpen}
                    onClick={() => {
                      if (openAll) {
                        setOpenAll(false);
                        setOpenSkill(skill.title);
                        return;
                      }

                      setOpenSkill((current) =>
                        current === skill.title ? null : skill.title
                      );
                    }}
                  >
                    <span>{skill.title}</span>
                    <span
                      className={`next-skill-chevron ${
                        isOpen ? "next-skill-chevron-open" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`next-skill-panel ${
                      isOpen ? "next-skill-panel-open" : ""
                    }`}
                  >
                    <div className="next-skill-panel-content">
                      <p>{skill.description}</p>
                      <div className="next-skill-example">
                        <strong>Exemplo prático</strong>
                        <span>{skill.example}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
