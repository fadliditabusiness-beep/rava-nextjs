type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  withRule?: boolean;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  withRule = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignClass} ${className}`}>
      <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
        {title}
      </h2>
      {withRule && (
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4" />
      )}
      {subtitle && (
        <p className="text-on-surface-variant max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
