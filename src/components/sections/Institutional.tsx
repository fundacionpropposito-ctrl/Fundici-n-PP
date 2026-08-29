import Link from "next/link";
import { ArrowUpRight, Building2, Calendar, Landmark, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { siteInfo } from "@/data/site";

const items = [
  { icon: Building2, label: "Naturaleza", value: siteInfo.naturaleza },
  { icon: MapPin, label: "Ciudad", value: siteInfo.ciudad },
  { icon: Calendar, label: "Constitución", value: siteInfo.constitucion },
  { icon: Landmark, label: "Inspección y vigilancia", value: siteInfo.inspeccionVigilancia },
];

export default function Institutional() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="rounded-3xl bg-slate-50 p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                Transparencia
              </span>
              <h2 className="mt-2 text-2xl font-bold text-brand-blue-dark sm:text-3xl">
                Información institucional
              </h2>
            </div>
            <Link
              href="/institucional"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Ver información completa
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={20} className="mt-0.5 shrink-0 text-brand-blue" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-brand-blue-dark">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
