import { siteData } from "@/data/site";

export default function Contact() {
  return (
    <section id="contacto" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
              Contacto
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1f3a] md:text-4xl">
              Consultas e información
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#c9a86a]" />

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Para realizar una consulta o solicitar información, podés comunicarte
              por <span className="font-semibold text-[#0b1f3a]">teléfono</span>,{" "}
              <span className="font-semibold text-[#0b1f3a]">WhatsApp</span> o{" "}
              <span className="font-semibold text-[#0b1f3a]">correo electrónico</span>.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              El estudio brinda atención en <span className="font-semibold text-[#0b1f3a]">{siteData.location}</span>,
              de <span className="font-semibold text-[#0b1f3a]">lunes a viernes</span>,
              en horario de mañana.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Dirección</p>
              <p className="mt-2 text-lg font-semibold text-[#0b1f3a]">{siteData.address}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Teléfono fijo</p>
              <p className="mt-2 text-lg font-semibold text-[#0b1f3a]">{siteData.phone}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">WhatsApp</p>
              <p className="mt-2 text-lg font-semibold text-[#0b1f3a]">{siteData.whatsapp}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Correo electrónico</p>
              <p className="mt-2 text-lg font-semibold text-[#0b1f3a]">{siteData.email}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Horario de atención</p>
              <p className="mt-2 text-lg font-semibold text-[#0b1f3a]">{siteData.hours}</p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href={`https://wa.me/54${siteData.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#0b1f3a] px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-[#142f55]"
              >
                Enviar WhatsApp
              </a>

              <a
                href={`tel:${siteData.phone}`}
                className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Llamar al estudio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}