"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { navigationItems } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-white"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-10">
        <Link href="/#inicio" aria-label="Ir al inicio" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-semibold text-brand-blue-dark/80 transition-colors hover:text-brand-blue"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/#contacto">Contáctanos</Button>
          <Button href="/donaciones" variant="donate" icon={<Heart size={18} />}>
            Donaciones
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/donaciones"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-rose px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-rose-dark"
          >
            Donaciones
            <Heart size={16} />
          </Link>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-brand-blue-dark"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-brand-blue-dark hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contacto" onClick={() => setOpen(false)}>
              Contáctanos
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
