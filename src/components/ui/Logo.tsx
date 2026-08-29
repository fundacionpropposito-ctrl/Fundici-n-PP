import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

const LOGO_WIDTH = 66;
const LOGO_HEIGHT = 48;

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-brand-blue-dark";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="Logo Fundación Propósito Posible"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority
        className="shrink-0"
      />
      <span className={`flex flex-col leading-none ${textColor}`}>
        <span className="text-sm font-bold tracking-tight sm:text-base">Propósito</span>
        <span className="text-sm font-bold tracking-tight sm:text-base">Posible</span>
      </span>
    </span>
  );
}
