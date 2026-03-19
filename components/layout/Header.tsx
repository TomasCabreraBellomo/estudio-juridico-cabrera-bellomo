"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteData } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex flex-col" onClick={closeMenu}>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            {siteData.name}
          </span>
          <span className="text-sm text-slate-600">{siteData.brand}</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#inicio"
            className="text-sm text-slate-700 transition hover:text-[#0b1f3a]"
          >
            Inicio
          </a>
          <a
            href="#areas"
            className="text-sm text-slate-700 transition hover:text-[#0b1f3a]"
          >
            Áreas de práctica
          </a>
          <a
            href="#sobre"
            className="text-sm text-slate-700 transition hover:text-[#0b1f3a]"
          >
            Sobre el estudio
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-[#0b1f3a] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#142f55]"
          >
            Consultar
          </a>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition hover:bg-slate-50 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-6">
            <a
              href="#inicio"
              onClick={closeMenu}
              className="py-3 text-base text-slate-700 transition hover:text-[#0b1f3a]"
            >
              Inicio
            </a>
            <a
              href="#areas"
              onClick={closeMenu}
              className="py-3 text-base text-slate-700 transition hover:text-[#0b1f3a]"
            >
              Áreas de práctica
            </a>
            <a
              href="#sobre"
              onClick={closeMenu}
              className="py-3 text-base text-slate-700 transition hover:text-[#0b1f3a]"
            >
              Sobre el estudio
            </a>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="py-3 text-base text-slate-700 transition hover:text-[#0b1f3a]"
            >
              Contacto
            </a>

            <a
              href="#contacto"
              onClick={closeMenu}
              className="mt-4 rounded-full bg-[#0b1f3a] px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-[#142f55]"
            >
              Consultar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}