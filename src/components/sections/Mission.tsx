import { HeartHandshake, Sprout, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

const pillars = [
  {
    icon: HeartHandshake,
    label: "Personas y comunidad",
  },
  {
    icon: Sprout,
    label: "Crecimiento y desarrollo",
  },
  {
    icon: ShieldCheck,
    label: "Protección y bienestar",
  },
];

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-brand-blue-dark py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <SectionTitle
            light
            eyebrow="Nuestro propósito"
            title="Generar oportunidades y desarrollo para nuestras comunidades"
            description="Generar oportunidades y desarrollar iniciativas que contribuyan al bienestar, desarrollo y calidad de vida de las comunidades, con especial atención a las poblaciones más vulnerables."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 100}>
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <Icon size={32} className="text-brand-orange" />
                <p className="text-lg font-semibold text-white">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
