interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
}

const SectionHeader = ({ eyebrow, title, description, align = "center" }: SectionHeaderProps) => {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary-glow">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-balance text-3xl leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
