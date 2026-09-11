import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navigationItems } from "@/data/navigation";
import { siteInfo } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:px-8 md:grid-cols-3 lg:px-10">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm text-white/70">
            Trabajamos por comunidades con más oportunidades, bienestar y futuro.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
            Navegación
          </h3>
          <ul className="flex flex-col gap-3">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/institucional" className="text-sm text-white/85 hover:text-white">
                Información institucional
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
            Contacto
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-orange" />
              <span>
                {siteInfo.direccion}
                <br />
                {siteInfo.ciudad}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="shrink-0 text-brand-orange" />
              <a href={`mailto:${siteInfo.email}`} className="hover:text-white">
                {siteInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="shrink-0 text-brand-orange" />
              <span>{siteInfo.telefonos.join(" · ")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-white/60">
          © 2026 Fundación Propósito Posible
        </p>
      </div>
    </footer>
  );
}
