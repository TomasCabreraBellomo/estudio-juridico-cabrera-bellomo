import { siteData } from "@/data/site";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
              Sobre el estudio
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1f3a] md:text-5xl">
              Trayectoria, seriedad y compromiso profesional
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#c9a86a]" />

            <p className="mt-8 text-lg leading-8 text-slate-600">
              El Estudio Jurídico <span className="font-semibold text-[#0b1f3a]">{siteData.name}</span>{" "}
              brinda asesoramiento legal en <span className="font-semibold text-[#0b1f3a]">{siteData.location}</span>,
              con una trayectoria de <span className="font-semibold text-[#0b1f3a]">más de 25 años de ejercicio profesional</span>.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Su práctica comprende <span className="font-semibold text-[#0b1f3a]">derecho laboral</span>,{" "}
              <span className="font-semibold text-[#0b1f3a]">derecho comercial</span>,{" "}
              <span className="font-semibold text-[#0b1f3a]">sucesorios</span>,{" "}
              <span className="font-semibold text-[#0b1f3a]">asesoramiento a empresas</span> y{" "}
              <span className="font-semibold text-[#0b1f3a]">consorcios y propiedades</span>.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              El estudio acompaña tanto a <span className="font-semibold text-[#0b1f3a]">personas</span> como a{" "}
              <span className="font-semibold text-[#0b1f3a]">empresas</span>, con atención directa,
              claridad en el asesoramiento y un enfoque orientado a soluciones concretas.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
              Información profesional
            </p>

            <div className="mt-5 h-1 w-16 rounded-full bg-[#c9a86a]" />

            <div className="mt-8 space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Formación
                </p>
                <p className="mt-2 text-xl font-semibold text-[#0b1f3a]">
                  {siteData.university}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Matrícula provincial
                </p>
                <p className="mt-2 text-xl font-semibold text-[#0b1f3a]">
                  {siteData.provincialLicense}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Matrícula federal
                </p>
                <p className="mt-2 text-xl font-semibold text-[#0b1f3a]">
                  {siteData.federalLicense}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Atención
                </p>
                <p className="mt-2 text-xl font-semibold text-[#0b1f3a]">
                  {siteData.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}