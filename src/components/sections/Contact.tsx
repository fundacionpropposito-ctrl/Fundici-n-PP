import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { siteInfo, whatsappNumber } from "@/data/site";

export default function Contact() {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola, quisiera más información sobre la Fundación Propósito Posible."
  )}`;

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <SectionTitle
            align="left"
            eyebrow="Contacto"
            title="Construyamos juntos un propósito posible"
            description="Escríbenos o visítanos. Con gusto te contamos más sobre nuestro trabajo en la comunidad."
          />

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-brand-blue" />
              <p className="text-slate-600">
                {siteInfo.direccion}
                <br />
                {siteInfo.ciudad}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="shrink-0 text-brand-blue" />
              <a href={`mailto:${siteInfo.email}`} className="text-slate-600 hover:text-brand-blue">
                {siteInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="shrink-0 text-brand-blue" />
              <p className="text-slate-600">{siteInfo.telefonos.join(" · ")}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-center gap-4 rounded-3xl bg-slate-50 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Hablemos
          </p>
          <p className="text-slate-600">
            Elige la vía que prefieras para comunicarte con nosotros.
          </p>
          <div className="mt-2 flex flex-col gap-4">
            <Button href={whatsappHref} external variant="primary">
              Escribir por WhatsApp
            </Button>
            <Button href={`mailto:${siteInfo.email}`} external variant="secondary">
              Enviar correo
            </Button>
            <Button href={`tel:+57${siteInfo.telefonos[0]}`} external variant="secondary">
              Llamar
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
