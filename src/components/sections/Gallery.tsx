"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { galleryImages, galleryCategories, type GalleryCategory } from "@/data/gallery";

const spanClasses: Record<string, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export default function Gallery() {
  const [category, setCategory] = useState<GalleryCategory>("Todas");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    category === "Todas"
      ? galleryImages
      : galleryImages.filter((img) => img.category === category);

  const openAt = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? i : (i + 1) % filtered.length));

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <section id="galeria" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionTitle
            eyebrow="Galería"
            title="Así construimos nuestro propósito"
            description="Cada actividad representa una oportunidad para servir, acompañar y transformar."
          />
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                category === cat
                  ? "bg-brand-blue text-white"
                  : "bg-slate-100 text-brand-blue-dark hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => openAt(i)}
              className={`img-zoom group relative overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue ${
                spanClasses[img.span ?? "normal"]
              }`}
              aria-label={`Ver imagen ampliada: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-brand-blue-dark/0 transition-colors duration-300 group-hover:bg-brand-blue-dark/20" />
            </button>
          ))}
        </div>
      </Container>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-blue-dark/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Fotografía ampliada"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar imagen"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={showPrev}
            aria-label="Imagen anterior"
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative h-[70vh] w-full max-w-4xl">
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Imagen siguiente"
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
