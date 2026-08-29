import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { siteInfo } from "@/data/site";

export default function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl img-zoom">
            <Image
              src="/imagenes/comunidad-familia-01.jpg"
              alt="Equipo de la fundación acompañando a un adulto mayor de la comunidad"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-5 -top-5 -z-10 h-full w-full rounded-3xl bg-brand-green/10 lg:-right-8 lg:-top-8" />
        </Reveal>

        <Reveal delay={100} className="order-1 flex flex-col gap-6 lg:order-2">
          <SectionTitle
            align="left"
            eyebrow="¿Quiénes somos?"
            title="Una fundación con propósito"
            description="La Fundación Propósito Posible trabaja por el mejoramiento de la calidad de vida de las comunidades, promoviendo el desarrollo integral, la inclusión, el bienestar social y el cuidado del medio ambiente."
          />
          <p className="text-slate-600">
            Constituida en {siteInfo.constitucion} en {siteInfo.ciudad}, acompañamos a las
            comunidades directamente en el territorio, con especial atención a las poblaciones
            más vulnerables.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
