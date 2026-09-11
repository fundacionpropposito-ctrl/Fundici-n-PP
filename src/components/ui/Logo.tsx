import Image from "next/image";

type LogoProps = {
  className?: string;
};

const LOGO_WIDTH = 49;
const LOGO_HEIGHT = 56;

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Logo Fundación Propósito Posible"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority
      className={`shrink-0 ${className}`}
    />
  );
}
