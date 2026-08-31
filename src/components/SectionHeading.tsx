type Props = {
  title: string;
  subtitle?: string;
  align?: "center" | "start";
};

export default function SectionHeading({ title, subtitle, align = "center" }: Props) {
  return (
    <div className={`mb-10 max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-start"}`}>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-plum-800/80 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
