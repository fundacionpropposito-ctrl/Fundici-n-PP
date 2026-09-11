import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://www.fundacionproppositoposible.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fundación Propósito Posible | Cartago, Valle del Cauca",
  description:
    "Fundación Propósito Posible trabaja por el bienestar, desarrollo integral y mejoramiento de la calidad de vida de las comunidades en Cartago y el Valle del Cauca.",
  keywords: [
    "Fundación Propósito Posible",
    "fundación Cartago Valle del Cauca",
    "ESAL Cartago",
    "trabajo comunitario Valle del Cauca",
    "desarrollo social Cartago",
  ],
  openGraph: {
    title: "Fundación Propósito Posible | Cartago, Valle del Cauca",
    description:
      "Trabajamos por el bienestar y el desarrollo integral de nuestras comunidades, promoviendo oportunidades, protección, educación y sostenibilidad.",
    url: siteUrl,
    siteName: "Fundación Propósito Posible",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/imagenes/salud-jornada-03.jpg",
        width: 960,
        height: 1280,
        alt: "Equipo de la Fundación Propósito Posible en una jornada de salud comunitaria",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
