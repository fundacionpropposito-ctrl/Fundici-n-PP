import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Impact() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image
          src="/imagenes/comunidad-jornada-01.jpg"
          alt="Jornada comunitaria con vecinos reunidos en la plaza principal"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue-dark/75" />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            El cambio comienza cuando decidimos actuar.
          </h2>
          <p className="mt-6 text-lg text-white/85">
            Creemos en comunidades con esperanza, protegidas y con oportunidades reales de
            futuro. Cada acción, por pequeña que parezca, es un paso hacia ese propósito.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
