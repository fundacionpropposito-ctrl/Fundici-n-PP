import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="bg-slate-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionTitle
            eyebrow="Proyectos"
            title="Proyectos que generan impacto"
            description="Iniciativas que acercan nuestro propósito a la comunidad, con acciones concretas en el territorio."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map(({ title, description, image, alt }, i) => (
            <Reveal key={title} delay={(i % 2) * 100}>
              <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-shadow duration-300 hover:shadow-lg">
                <div className="relative aspect-[16/10] w-full overflow-hidden img-zoom">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-7">
                  <h3 className="text-xl font-bold text-brand-blue-dark">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
