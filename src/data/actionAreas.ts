import type { LucideIcon } from "lucide-react";
import { Users, HeartPulse, ShieldCheck, Leaf, Home, Megaphone } from "lucide-react";

export type ActionArea = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const actionAreas: ActionArea[] = [
  {
    number: "01",
    title: "Comunidad y liderazgo",
    description:
      "Promovemos la participación ciudadana, el liderazgo y el trabajo colectivo para fortalecer nuestras comunidades.",
    icon: Users,
  },
  {
    number: "02",
    title: "Salud y bienestar",
    description:
      "Apoyamos iniciativas de prevención, salud pública, estilos de vida saludables y preparación para situaciones de emergencia.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Familia y protección social",
    description:
      "Trabajamos por el fortalecimiento familiar y la protección de niños, niñas y adolescentes.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Medio ambiente",
    description:
      "Impulsamos la educación ambiental, el cuidado de los recursos y proyectos sostenibles.",
    icon: Leaf,
  },
  {
    number: "05",
    title: "Desarrollo y vivienda",
    description:
      "Apoyamos iniciativas relacionadas con vivienda, educación, infraestructura, seguridad alimentaria y desarrollo comunitario.",
    icon: Home,
  },
  {
    number: "06",
    title: "Emprendimiento y comunicación",
    description:
      "Promovemos iniciativas productivas, investigación comunitaria y medios de comunicación para fortalecer el desarrollo social y cultural.",
    icon: Megaphone,
  },
];
