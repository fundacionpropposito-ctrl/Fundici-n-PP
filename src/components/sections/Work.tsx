import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function Work() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionTitle
            eyebrow="Cómo trabajamos"
            title="Nuestro trabajo se construye en el territorio"
            description="Acompañamos a la comunidad de cerca: en las calles, las plazas y los hogares, junto a un equipo comprometido."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl img-zoom lg:aspect-auto">
            <Image
              src="/imagenes/equipo-salud-01.jpg"
              alt="Equipo de profesionales de la salud de la fundación en jornada comunitaria"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal delay={100} className="relative aspect-[4/5] overflow-hidden rounded-3xl img-zoom">
              <Image
                src="/imagenes/salud-medicamentos-01.jpg"
                alt="Entrega de medicamentos a un adulto mayor por parte del equipo de la fundación"
                fill
                sizes="(max-width: 640px) 90vw, 22vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={200} className="relative aspect-[4/5] overflow-hidden rounded-3xl img-zoom">
              <Image
                src="/imagenes/desarrollo-comunitario-02.jpg"
                alt="Acompañamiento comunitario en zona en proceso de reconstrucción"
                fill
                sizes="(max-width: 640px) 90vw, 22vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={300} className="col-span-2 rounded-3xl bg-brand-green/10 p-8">
              <p className="text-lg font-semibold leading-snug text-brand-blue-dark">
                Cada jornada es una oportunidad para acompañar, escuchar y actuar junto a la
                comunidad.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
