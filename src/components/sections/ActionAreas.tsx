import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { actionAreas } from "@/data/actionAreas";

export default function ActionAreas() {
  return (
    <section id="que-hacemos" className="bg-slate-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionTitle
            eyebrow="Qué hacemos"
            title="Nuestras líneas de acción"
            description="Convertimos nuestro propósito en frentes de trabajo concretos, cercanos a las necesidades reales de la comunidad."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {actionAreas.map(({ number, title, description, icon: Icon }, i) => (
            <Reveal key={number} delay={(i % 3) * 100}>
              <div className="group flex h-full flex-col gap-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <Icon size={24} />
                  </span>
                  <span className="text-3xl font-bold text-slate-100">{number}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-blue-dark">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
