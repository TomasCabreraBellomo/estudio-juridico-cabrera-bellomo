import { siteData } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex flex-col">
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            {siteData.name}
          </span>
          <span className="text-sm text-slate-600">{siteData.brand}</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          <a href="#inicio" className="text-sm text-slate-700 transition hover:text-slate-900">
            Inicio
          </a>
          <a href="#areas" className="text-sm text-slate-700 transition hover:text-slate-900">
            Áreas de práctica
          </a>
          <a href="#sobre" className="text-sm text-slate-700 transition hover:text-slate-900">
            Sobre el estudio
          </a>
         <a
 
>
  Consultar
</a>
        </nav>

        <a
          href="#contacto"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Consultar
        </a>
      </div>
    </header>
  );
}