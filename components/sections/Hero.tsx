import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* TEXTO */}

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
              {siteData.brand}
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#0b1f3a] md:text-6xl">
              {siteData.hero.title}
            </h1>
<h2 className="mt-4 text-xl text-slate-700 md:text-2xl">
  {siteData.hero.subtitle}
</h2>

<div className="mt-6 h-1 w-20 rounded-full bg-[#c9a86a]" />

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {siteData.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="rounded-full bg-[#0b1f3a] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#142f55]"
              >
                Realizar consulta
              </a>

              <a
                href="#areas"
                className="rounded-full border border-slate-300 px-7 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Ver áreas de práctica
              </a>
            </div>
          </div>

          {/* CARD DERECHA */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Trayectoria profesional
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1f3a]">
                  Más de 25 años de experiencia
                </h3>
                <p className="mt-2 text-slate-600">
                  Ejercicio profesional con enfoque personalizado y orientación
                  jurídica clara.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0b1f3a]">
                  {siteData.university}
                </h3>
                <p className="mt-2 text-slate-600">
                  Formación jurídica universitaria y trayectoria desarrollada en
                  Salta Capital.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0b1f3a]">
                  {siteData.provincialLicense}
                </h3>
                <p className="mt-2 text-slate-600">
                  {siteData.federalLicense}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}