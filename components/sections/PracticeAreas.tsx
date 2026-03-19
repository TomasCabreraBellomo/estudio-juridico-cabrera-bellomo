import {
  Briefcase,
  Building2,
  FileText,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { siteData } from "@/data/site";

const icons = [Scale, ShieldCheck, FileText, Briefcase, Building2];

export default function PracticeAreas() {
  return (
    <section id="areas" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Áreas de práctica
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1f3a] md:text-4xl">
            Asesoramiento jurídico claro, sólido y profesional
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-[#c9a86a]" />

          <p className="mt-6 text-lg leading-8 text-slate-600">
            El estudio brinda atención personalizada en áreas clave del derecho,
            con un enfoque práctico y orientado a soluciones concretas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteData.areas.map((area, index) => {
            const Icon = icons[index];

            return (
              <article
                key={area.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b1f3a] text-white shadow-sm transition group-hover:bg-[#142f55]">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div className="h-px w-16 bg-slate-200 transition group-hover:bg-[#c9a86a]" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#0b1f3a]">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}