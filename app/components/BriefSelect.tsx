"use client";

import { KeyboardEvent, useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type BriefSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
};

export function BriefSelect({
  label,
  value,
  options,
  onChange,
  placeholder = "Selecione",
  required
}: BriefSelectProps) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  function openList() {
    setActive(Math.max(options.indexOf(value), 0));
    setOpen(true);
  }

  function select(option: string) {
    onChange(option);
    setOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        openList();
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActive((current) => Math.min(current + 1, options.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActive((current) => Math.max(current - 1, 0));
        break;
      case "Home":
        event.preventDefault();
        setActive(0);
        break;
      case "End":
        event.preventDefault();
        setActive(options.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (active >= 0) select(options[active]);
        break;
      case "Escape":
        event.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }

  return (
    <div className="brief-field brief-select" ref={rootRef}>
      <span id={`${id}-label`}>{label}</span>

      <div className="brief-select-wrap">
        <button
          type="button"
          className="brief-select-trigger"
          data-open={open}
          data-empty={!value}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={`${id}-list`}
          aria-labelledby={`${id}-label`}
          aria-activedescendant={open && active >= 0 ? `${id}-opt-${active}` : undefined}
          onClick={() => (open ? setOpen(false) : openList())}
          onKeyDown={handleKeyDown}
        >
          <span className="brief-select-value">{value || placeholder}</span>
          <ChevronDown size={18} aria-hidden="true" className="brief-select-chevron" />
        </button>

        {/* Campo invisível só para a validação nativa de "obrigatório". */}
        <input
          className="brief-select-validator"
          tabIndex={-1}
          aria-hidden="true"
          value={value}
          onChange={() => {}}
          required={required}
        />

        {open && (
          <ul
            id={`${id}-list`}
            role="listbox"
            aria-labelledby={`${id}-label`}
            className="brief-select-list"
          >
            {options.map((option, index) => (
              <li
                key={option}
                id={`${id}-opt-${index}`}
                role="option"
                aria-selected={option === value}
                data-active={index === active}
                className="brief-select-option"
                onPointerEnter={() => setActive(index)}
                onClick={() => select(option)}
              >
                <span>{option}</span>
                {option === value && <Check size={16} aria-hidden="true" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
