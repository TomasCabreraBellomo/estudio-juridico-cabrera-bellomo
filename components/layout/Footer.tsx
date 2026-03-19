import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#0b1f3a] text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* MARCA */}

          <div>
            <h3 className="text-2xl font-semibold text-white">
              {siteData.name}
            </h3>

            <p className="mt-2 text-slate-400">{siteData.brand}</p>

            <div className="mt-6 h-1 w-16 bg-[#c9a86a]" />

            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              Estudio jurídico en {siteData.location}, con más de 25 años de
              experiencia en derecho laboral, comercial, sucesorio, asesoramiento
              a empresas y administración de consorcios y propiedades.
            </p>
          </div>

          {/* CONTACTO */}

          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-white">
              Contacto
            </h4>

            <div className="mt-6 space-y-3 text-slate-400">
              <p>{siteData.address}</p>
              <p>{siteData.phone}</p>
              <p>{siteData.whatsapp}</p>
              <p>{siteData.email}</p>
            </div>
          </div>

          {/* DATOS */}

          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-white">
              Información profesional
            </h4>

            <div className="mt-6 space-y-3 text-slate-400">
              <p>{siteData.provincialLicense}</p>
              <p>{siteData.federalLicense}</p>
              <p>{siteData.hours}</p>
            </div>
          </div>
        </div>

        {/* LINEA */}

        <div className="mt-12 border-t border-slate-700 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} {siteData.name} — Estudio Jurídico
        </div>
      </div>
    </footer>
  );
}