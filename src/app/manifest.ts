import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fundación Propósito Posible",
    short_name: "Propósito Posible",
    description:
      "Fundación Propósito Posible trabaja por el bienestar, desarrollo integral y mejoramiento de la calidad de vida de las comunidades en Cartago y el Valle del Cauca.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    lang: "es-CO",
    categories: ["nonprofit"],
    background_color: "#ffffff",
    theme_color: "#092051",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
