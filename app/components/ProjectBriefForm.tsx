"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const whatsappNumber = "5582988059412";

type FormData = {
  name: string;
  company: string;
  projectType: string;
  deadline: string;
  budget: string;
  details: string;
};

const initialForm: FormData = {
  name: "",
  company: "",
  projectType: "",
  deadline: "",
  budget: "",
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
      `Faixa de orçamento: ${formData.budget}`,
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

        <label className="brief-field">
          <span>Tipo de projeto</span>
          <select
            value={formData.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Site institucional">Site institucional</option>
            <option value="Sistema web">Sistema web</option>
            <option value="Aplicativo mobile">Aplicativo mobile</option>
            <option value="Manutenção ou melhorias">Manutenção ou melhorias</option>
          </select>
        </label>

        <label className="brief-field">
          <span>Prazo desejado</span>
          <select
            value={formData.deadline}
            onChange={(event) => updateField("deadline", event.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="O quanto antes">O quanto antes</option>
            <option value="Até 15 dias">Até 15 dias</option>
            <option value="Até 30 dias">Até 30 dias</option>
            <option value="Mais de 30 dias">Mais de 30 dias</option>
          </select>
        </label>

        <label className="brief-field">
          <span>Faixa de orçamento</span>
          <select
            value={formData.budget}
            onChange={(event) => updateField("budget", event.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="Até R$ 1.000">Até R$ 1.000</option>
            <option value="R$ 1.000 a R$ 3.000">R$ 1.000 a R$ 3.000</option>
            <option value="R$ 3.000 a R$ 5.000">R$ 3.000 a R$ 5.000</option>
            <option value="Acima de R$ 5.000">Acima de R$ 5.000</option>
          </select>
        </label>

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
