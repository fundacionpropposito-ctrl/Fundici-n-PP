export type Project = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    title: "Salud y bienestar comunitario",
    description:
      "Jornadas de atención en salud, toma de signos vitales y acompañamiento a adultos mayores en distintos puntos de la comunidad.",
    image: "/imagenes/salud-jornada-01.jpg",
    alt: "Jornada de salud comunitaria en plaza pública",
  },
  {
    title: "Familia y protección de la niñez",
    description:
      "Actividades de cuidado y atención dirigidas a niños, niñas y sus familias durante nuestras jornadas comunitarias.",
    image: "/imagenes/salud-ninez-02.jpg",
    alt: "Atención de salud a niñas en jornada comunitaria",
  },
  {
    title: "Trabajo comunitario y donaciones",
    description:
      "Organización y entrega de insumos y ayudas a familias de la comunidad, con el acompañamiento directo de nuestro equipo.",
    image: "/imagenes/trabajo-social-donaciones-01.jpg",
    alt: "Bodega de insumos y donaciones para la comunidad",
  },
  {
    title: "Desarrollo y vivienda",
    description:
      "Acompañamiento a familias en procesos de reconstrucción y entrega de materiales para el mejoramiento de sus viviendas.",
    image: "/imagenes/desarrollo-vivienda-01.jpg",
    alt: "Entrega de materiales para vivienda a la comunidad",
  },
];
