import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white pt-12 pb-20 sm:pt-16 lg:pt-20">
      {/* Formas orgánicas sutiles */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-20 w-20 rounded-full border-2 border-brand-orange/30"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
            Fundación Propósito Posible · Cartago, Valle del Cauca
          </span>

          <h1 className="text-4xl font-bold leading-[1.08] text-brand-blue-dark sm:text-5xl lg:text-6xl">
            Construimos oportunidades.
            <br />
            <span className="text-brand-blue">Transformamos comunidades.</span>
          </h1>

          <p className="max-w-lg text-lg text-slate-600">
            Trabajamos por el bienestar y el desarrollo integral de nuestras comunidades,
            promoviendo oportunidades, protección, educación y sostenibilidad.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/#que-hacemos" icon={<ArrowRight size={18} />}>
              Conoce nuestro trabajo
            </Button>
            <Button href="/#contacto" variant="secondary" icon={<MessageCircle size={18} />}>
              Contáctanos
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/imagenes/salud-jornada-03.jpg"
              alt="Equipo de la Fundación Propósito Posible atendiendo a la comunidad en una jornada de salud"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 hidden max-w-[220px] rounded-2xl bg-white p-4 shadow-lg sm:block">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" />
              <p className="text-sm font-semibold text-brand-blue-dark">
                Presentes en el territorio, junto a la comunidad
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
