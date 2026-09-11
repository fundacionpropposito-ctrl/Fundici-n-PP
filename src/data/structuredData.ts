import { siteInfo, siteUrl, whatsappNumber } from "@/data/site";

const telephone = `+${whatsappNumber}`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteInfo.name,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description:
    "La Fundación Propósito Posible trabaja por el mejoramiento de la calidad de vida de las comunidades, promoviendo el desarrollo integral, la inclusión, el bienestar social y el cuidado del medio ambiente en Cartago, Valle del Cauca.",
  foundingDate: siteInfo.constitucion,
  taxID: siteInfo.nit,
  email: siteInfo.email,
  telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteInfo.direccion,
    addressLocality: "Cartago",
    addressRegion: "Valle del Cauca",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 4.7,
    longitude: -75.9167,
  },
  areaServed: {
    "@type": "City",
    name: "Cartago, Valle del Cauca, Colombia",
  },
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la Fundación Propósito Posible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es una Entidad Sin Ánimo de Lucro (ESAL) que trabaja por el mejoramiento de la calidad de vida de las comunidades en Cartago, Valle del Cauca, Colombia, promoviendo el desarrollo integral, la inclusión, el bienestar social y el cuidado del medio ambiente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde está ubicada la Fundación Propósito Posible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `En ${siteInfo.direccion}, ${siteInfo.ciudad}.`,
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo se constituyó la fundación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `La Fundación Propósito Posible se constituyó en ${siteInfo.constitucion} en ${siteInfo.ciudad}.`,
      },
    },
    {
      "@type": "Question",
      name: "¿Qué actividades realiza la Fundación Propósito Posible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Realiza jornadas de salud y bienestar comunitario, actividades de protección de la niñez y la familia, trabajo comunitario y entrega de donaciones, y acompañamiento en procesos de desarrollo y vivienda para familias de la comunidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo contactar a la Fundación Propósito Posible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Por correo a ${siteInfo.email}, por teléfono o WhatsApp al ${siteInfo.telefonos.join(" · ")}, o en su sede en ${siteInfo.direccion}, ${siteInfo.ciudad}.`,
      },
    },
    {
      "@type": "Question",
      name: "¿Qué entidad ejerce inspección y vigilancia sobre la fundación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `La ${siteInfo.inspeccionVigilancia}.`,
      },
    },
  ],
};
