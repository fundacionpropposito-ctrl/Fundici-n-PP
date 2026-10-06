import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Banknote,
  BedDouble,
  Handshake,
  HeartHandshake,
  MessageCircle,
  Package,
  Phone,
  Pill,
  Shirt,
  ShoppingBasket,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteInfo, whatsappNumber } from "@/data/site";

const title = "Donaciones | Fundación Propósito Posible";
const description =
  "Tu aporte en dinero o en especie, como mercados, medicamentos, cobijas y ropa, nos permite llevar apoyo a las familias de Cartago, Valle del Cauca.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/donaciones",
  },
  openGraph: {
    title,
    description,
    url: "/donaciones",
    type: "website",
    images: [
      {
        url: "/imagenes/trabajo-social-donaciones-01.jpg",
        alt: "Donaciones en especie recibidas por la Fundación Propósito Posible",
      },
    ],
  },
};

const donationTypes = [
  {
    icon: Banknote,
    title: "Aportes en dinero",
    text: "Permiten cubrir las necesidades más urgentes de cada jornada y de las familias que acompañamos.",
  },
  {
    icon: ShoppingBasket,
    title: "Mercados",
    text: "Alimentos no perecederos que llegan a hogares que lo necesitan.",
  },
  {
    icon: Pill,
    title: "Medicamentos",
    text: "Medicinas e insumos de salud para entregar en nuestras jornadas con la comunidad.",
  },
  {
    icon: BedDouble,
    title: "Cobijas",
    text: "Abrigo y descanso para personas y familias en situación de necesidad.",
  },
  {
    icon: Shirt,
    title: "Ropa",
    text: "Prendas en buen estado para niños, adultos y personas mayores.",
  },
  {
    icon: Package,
    title: "Otros artículos",
    text: "Materiales y elementos útiles para el hogar y la vida diaria de quienes más lo necesitan.",
  },
];

const steps = [
  {
    title: "Comunícate con nosotros",
    text: "Llámanos o escríbenos por WhatsApp para contarnos qué deseas donar.",
  },
  {
    title: "Coordinamos la entrega",
    text: "Acordamos contigo la forma y el momento de recibir tu aporte.",
  },
  {
    title: "Llega a quien lo necesita",
    text: "Tu donación se destina a las familias y comunidades con las que trabajamos.",
  },
];

export default function DonacionesPage() {
  const phone = siteInfo.telefonos[0];
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola, quisiera hacer una donación a la Fundación Propósito Posible. ¿Me pueden indicar cómo hacerlo?"
  )}`;

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-rose/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl"
        />

        <Container className="relative">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
            <div className="flex flex-col items-start gap-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-rose/10 px-4 py-1.5 text-sm font-semibold text-brand-rose-dark">
                <HeartHandshake size={16} />
                Donaciones
              </span>
              <h1 className="text-4xl font-bold leading-[1.08] text-brand-blue-dark sm:text-5xl lg:text-6xl">
                Tu ayuda <span className="text-brand-rose">transforma vidas</span>
              </h1>
              <p className="max-w-lg text-lg text-slate-600">
                En la Fundación Propósito Posible recibimos aportes en dinero y en especie.
                Cada mercado, medicamento, cobija o prenda de ropa llega a personas y
                familias de nuestra comunidad que lo necesitan.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="#como-donar" variant="donate" icon={<HeartHandshake size={18} />}>
                  Quiero donar
                </Button>
                <Button href="#que-recibimos" variant="secondary">
                  Qué recibimos
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src="/imagenes/trabajo-social-donaciones-01.jpg"
                  alt="Donaciones en especie recibidas por la fundación: botellones de agua, bolsas con ropa, materiales de construcción y otros artículos"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="/imagenes/comunidad-familia-01.jpg"
                alt="Voluntarias de la fundación junto a un adulto mayor sonriendo durante una visita a su hogar"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <SectionTitle
              align="left"
              eyebrow="Por qué donar"
              title="Donar es acompañar a quien más lo necesita"
            />
            <p className="text-slate-600">
              Detrás de cada aporte hay una familia que recibe alimento, una persona
              mayor que accede a sus medicamentos o un niño que cuenta con abrigo. Tu
              ayuda nos permite seguir presentes en el territorio, junto a la comunidad.
            </p>
            <p className="text-slate-600">
              Como Entidad Sin Ánimo de Lucro, trabajamos para que las donaciones
              lleguen a quienes las necesitan. No importa el tamaño del aporte: todo
              suma y todo se agradece.
            </p>
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <Handshake size={24} className="shrink-0 text-brand-rose" />
              <p className="text-sm font-semibold text-brand-blue-dark">
                Cada aporte, grande o pequeño, fortalece el trabajo con la comunidad.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="que-recibimos" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="Qué recibimos"
              title="Recibimos dinero y ayudas en especie"
              description="Puedes apoyarnos con un aporte económico o con artículos que ayudan directamente a las personas."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {donationTypes.map(({ icon: Icon, title: itemTitle, text }, index) => (
              <Reveal key={itemTitle} delay={index * 80}>
                <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-rose/10 text-brand-rose-dark">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-brand-blue-dark">{itemTitle}</h3>
                  <p className="mt-2 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue-dark py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              light
              eyebrow="Tu aporte en acción"
              title="Así trabajamos junto a la comunidad"
              description="Momentos reales de nuestras jornadas, posibles gracias a quienes nos apoyan."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal>
              <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/imagenes/salud-medicamentos-01.jpg"
                  alt="Personal de salud de la fundación atiende a un adulto mayor en una jornada, junto a una caja de medicamentos donados"
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/imagenes/salud-ninez-01.jpg"
                  alt="Una profesional de la salud toma la presión arterial a una niña durante una jornada comunitaria"
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/imagenes/comunidad-jornada-01.jpg"
                  alt="Jornada de atención en una carpa en la plaza del municipio, con profesionales y vecinos de la comunidad"
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="como-donar" className="scroll-mt-24 py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="flex flex-col gap-8">
            <SectionTitle
              align="left"
              eyebrow="Cómo donar"
              title="Coordina tu donación con nosotros"
              description="Estamos habilitando una cuenta bancaria para recibir aportes en dinero. Mientras tanto, coordinamos todas las donaciones, en dinero o en especie, a través de nuestro número de contacto."
            />

            <ol className="flex flex-col gap-5">
              {steps.map((step, index) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-rose text-base font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue-dark">{step.title}</h3>
                    <p className="text-slate-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal
            delay={100}
            className="flex flex-col justify-center gap-4 rounded-3xl bg-slate-50 p-8 sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-rose-dark">
              Contacto para donaciones
            </p>
            <p className="flex items-center gap-3 text-2xl font-bold text-brand-blue-dark">
              <Phone size={24} className="shrink-0 text-brand-blue" />
              {phone}
            </p>
            <p className="text-slate-600">
              Llama o escribe por WhatsApp y con gusto te indicamos cómo hacer llegar tu
              aporte.
            </p>
            <div className="mt-2 flex flex-col gap-4">
              <Button
                href={whatsappHref}
                external
                variant="donate"
                icon={<MessageCircle size={18} />}
              >
                Donar por WhatsApp
              </Button>
              <Button href={`tel:+57${phone}`} external variant="secondary" icon={<Phone size={18} />}>
                Llamar ahora
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand-rose px-8 py-14 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-white/10"
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Gracias por ayudarnos a seguir ayudando
              </h2>
              <p className="text-lg text-white/90">
                Tu generosidad nos permite acompañar a más personas. Si tienes dudas sobre
                cómo apoyar, escríbenos.
              </p>
              <Button href={whatsappHref} external variant="outline-light" icon={<MessageCircle size={18} />}>
                Escribir por WhatsApp
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
