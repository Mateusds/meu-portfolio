"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { BriefSelect } from "./BriefSelect";

const whatsappNumber = "5582988059412";

const projectTypes = [
  "Landing Page",
  "Site institucional",
  "Sistema web",
  "Aplicativo mobile",
  "Manutenção ou melhorias"
];

const deadlines = ["O quanto antes", "Até 15 dias", "Até 30 dias", "Mais de 30 dias"];

type FormData = {
  name: string;
  company: string;
  projectType: string;
  deadline: string;
  details: string;
};

const initialForm: FormData = {
  name: "",
  company: "",
  projectType: "",
  deadline: "",
  details: ""
};

export function ProjectBriefForm() {
  const [formData, setFormData] = useState<FormData>(initialForm);

  function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Olá, Mateus! Quero solicitar um projeto.",
      "",
      "BRIEFING DO CLIENTE",
      "",
      `Nome: ${formData.name}`,
      `Empresa/Marca: ${formData.company || "Não informado"}`,
      `Tipo de projeto: ${formData.projectType}`,
      `Prazo desejado: ${formData.deadline}`,
      "",
      "Detalhes do projeto:",
      formData.details,
      "",
      "Aguardo seu retorno."
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="brief-form" onSubmit={handleSubmit}>
      <div className="brief-form-grid">
        <label className="brief-field">
          <span>Nome</span>
          <input
            type="text"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Seu nome"
            required
          />
        </label>

        <label className="brief-field">
          <span>Empresa ou marca</span>
          <input
            type="text"
            value={formData.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Nome da empresa"
          />
        </label>

        <BriefSelect
          label="Tipo de projeto"
          value={formData.projectType}
          options={projectTypes}
          onChange={(value) => updateField("projectType", value)}
          required
        />

        <BriefSelect
          label="Prazo desejado"
          value={formData.deadline}
          options={deadlines}
          onChange={(value) => updateField("deadline", value)}
          required
        />

        <label className="brief-field brief-field-full">
          <span>O que você deseja para o projeto?</span>
          <textarea
            value={formData.details}
            onChange={(event) => updateField("details", event.target.value)}
            placeholder="Explique objetivo, páginas, funcionalidades e referências que você imagina."
            rows={5}
            required
          />
        </label>
      </div>

      <div className="brief-actions" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button type="submit" className="button button-whatsapp brief-submit">
          <Send size={18} style={{ marginRight: '8px' }} />
          Enviar briefing no WhatsApp
        </button>
      </div>
    </form>
  );
}
