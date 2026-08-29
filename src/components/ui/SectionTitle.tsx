type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span
          className={`text-sm font-semibold uppercase tracking-wider ${
            light ? "text-brand-orange" : "text-brand-green"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-brand-blue-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg ${light ? "text-white/80" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
