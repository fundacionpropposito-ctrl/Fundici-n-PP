import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building2, Calendar, Landmark, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Información institucional | Fundación Propósito Posible",
  description:
    "Datos institucionales de la Fundación Propósito Posible: naturaleza jurídica, NIT, ubicación y entidad de inspección y vigilancia.",
  alternates: {
    canonical: "/institucional",
  },
  openGraph: {
    title: "Información institucional | Fundación Propósito Posible",
    description:
      "Datos institucionales de la Fundación Propósito Posible: naturaleza jurídica, NIT, ubicación y entidad de inspección y vigilancia.",
    url: "/institucional",
    type: "website",
  },
};

const fields = [
  { icon: Building2, label: "Nombre", value: siteInfo.name },
  { icon: Landmark, label: "NIT", value: siteInfo.nit },
  { icon: Building2, label: "Naturaleza", value: siteInfo.naturaleza },
  { icon: MapPin, label: "Ciudad", value: siteInfo.ciudad },
  { icon: MapPin, label: "Dirección", value: siteInfo.direccion },
  { icon: Calendar, label: "Año de constitución", value: siteInfo.constitucion },
  { icon: Landmark, label: "Inspección y vigilancia", value: siteInfo.inspeccionVigilancia },
  { icon: Mail, label: "Correo", value: siteInfo.email },
  { icon: Phone, label: "Teléfonos", value: siteInfo.telefonos.join(" · ") },
];

export default function InstitucionalPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
          Transparencia
        </span>
        <h1 className="mt-2 text-3xl font-bold text-brand-blue-dark sm:text-4xl">
          Información institucional
        </h1>
        <p className="mt-4 text-slate-600">
          Estos son los datos públicos de constitución y funcionamiento de la Fundación
          Propósito Posible como Entidad Sin Ánimo de Lucro.
        </p>

        <dl className="mt-10 divide-y divide-slate-100 rounded-3xl bg-slate-50 px-6 sm:px-8">
          {fields.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:gap-6">
              <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:w-64">
                <Icon size={16} className="text-brand-blue" />
                {label}
              </dt>
              <dd className="text-base font-medium text-brand-blue-dark">{value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
