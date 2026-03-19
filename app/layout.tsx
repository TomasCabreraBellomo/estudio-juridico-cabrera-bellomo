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
    "Estudio jurídico en Salta Capital con más de 25 años de experiencia en derecho laboral, comercial, sucesorio y asesoramiento a empresas.",
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