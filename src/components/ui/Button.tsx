import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline-light";
  icon?: ReactNode;
  external?: boolean;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-brand-blue-dark border border-brand-blue/20 hover:border-brand-blue hover:text-brand-blue",
  "outline-light":
    "bg-transparent text-white border border-white/60 hover:bg-white hover:text-brand-blue-dark",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
}: ButtonProps) {
  const className = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 ${variants[variant]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {icon}
    </Link>
  );
}
