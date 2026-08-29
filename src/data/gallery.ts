export type GalleryCategory =
  | "Todas"
  | "Salud y bienestar"
  | "Niñez"
  | "Comunidad"
  | "Trabajo social";

export type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "Todas">;
  span?: "tall" | "wide" | "normal";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/imagenes/salud-jornada-03.jpg",
    alt: "Jornada de salud comunitaria bajo carpa de la Gobernación del Valle del Cauca",
    category: "Salud y bienestar",
    span: "tall",
  },
  {
    src: "/imagenes/salud-adulto-mayor-01.jpg",
    alt: "Profesional de la salud tomando la presión arterial a un adulto mayor",
    category: "Salud y bienestar",
  },
  {
    src: "/imagenes/salud-ninez-01.jpg",
    alt: "Enfermera tomando la presión arterial a una niña durante una jornada de salud",
    category: "Niñez",
  },
  {
    src: "/imagenes/comunidad-jornada-01.jpg",
    alt: "Jornada comunitaria con vecinos esperando atención en la plaza principal",
    category: "Comunidad",
    span: "wide",
  },
  {
    src: "/imagenes/salud-jornada-01.jpg",
    alt: "Atención médica a un adulto mayor en jornada de salud en la plaza",
    category: "Salud y bienestar",
  },
  {
    src: "/imagenes/salud-ninez-02.jpg",
    alt: "Enfermera tomando la presión arterial a una niña acompañada de otra menor",
    category: "Niñez",
    span: "tall",
  },
  {
    src: "/imagenes/trabajo-social-donaciones-01.jpg",
    alt: "Bodega con insumos y donaciones para la comunidad",
    category: "Trabajo social",
  },
  {
    src: "/imagenes/equipo-salud-01.jpg",
    alt: "Equipo de profesionales de la salud de la fundación en jornada comunitaria",
    category: "Comunidad",
  },
  {
    src: "/imagenes/salud-jornada-02.jpg",
    alt: "Toma de glucometría a un adulto mayor durante jornada de salud",
    category: "Salud y bienestar",
  },
  {
    src: "/imagenes/desarrollo-comunitario-01.jpg",
    alt: "Entrega de ayuda a familias de la comunidad junto a un camión de carga",
    category: "Trabajo social",
    span: "wide",
  },
  {
    src: "/imagenes/salud-medicamentos-01.jpg",
    alt: "Entrega de medicamentos a un adulto mayor por parte del equipo de la fundación",
    category: "Salud y bienestar",
  },
  {
    src: "/imagenes/comunidad-familia-01.jpg",
    alt: "Equipo de la fundación acompañando a un adulto mayor de la comunidad",
    category: "Comunidad",
  },
  {
    src: "/imagenes/desarrollo-vivienda-01.jpg",
    alt: "Entrega de materiales para vivienda a la comunidad",
    category: "Trabajo social",
  },
  {
    src: "/imagenes/equipo-comunidad-01.jpg",
    alt: "Equipo de la fundación junto a la comunidad organizando insumos",
    category: "Comunidad",
    span: "tall",
  },
  {
    src: "/imagenes/comunidad-plaza-01.jpg",
    alt: "Profesional de la fundación conversando con adultos mayores en la plaza",
    category: "Comunidad",
  },
  {
    src: "/imagenes/trabajo-social-registro-01.jpg",
    alt: "Registro y acompañamiento a la comunidad durante jornada social",
    category: "Trabajo social",
  },
  {
    src: "/imagenes/desarrollo-comunitario-02.jpg",
    alt: "Acompañamiento comunitario en zona en proceso de reconstrucción",
    category: "Trabajo social",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Todas",
  "Salud y bienestar",
  "Niñez",
  "Comunidad",
  "Trabajo social",
];
