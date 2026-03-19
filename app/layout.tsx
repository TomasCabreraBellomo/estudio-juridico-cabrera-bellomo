import "./globals.css";
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Ramiro J. Cabrera Bellomo | Estudio Jurídico en Salta Capital",
  description:
    "Estudio jurídico en Salta Capital con más de 25 años de experiencia en derecho laboral, comercial, sucesorio, asesoramiento a empresas y administración de consorcios y propiedades.",
  keywords: [
    "abogado en Salta Capital",
    "estudio jurídico en Salta",
    "derecho laboral Salta",
    "derecho comercial Salta",
    "sucesorios Salta",
    "asesoramiento a empresas Salta",
    "consorcios y propiedades Salta",
    "Ramiro J. Cabrera Bellomo",
  ],
  openGraph: {
    title: "Ramiro J. Cabrera Bellomo | Estudio Jurídico en Salta Capital",
    description:
      "Más de 25 años de experiencia en derecho laboral, comercial, sucesorio, asesoramiento a empresas y administración de consorcios y propiedades.",
    url: "https://TU-DOMINIO-VERCEL.vercel.app",
    siteName: "Estudio Jurídico Ramiro J. Cabrera Bellomo",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Estudio Jurídico Ramiro J. Cabrera Bellomo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramiro J. Cabrera Bellomo | Estudio Jurídico en Salta Capital",
    description:
      "Más de 25 años de experiencia en derecho laboral, comercial, sucesorio y asesoramiento a empresas.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}