import { whatsappLink } from "@/data/siteConfig";

type Props = {
  label: string;
  message?: string;
  variant?: "solid" | "outline";
  className?: string;
};

export default function WhatsAppButton({
  label,
  message,
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600";

  const solid =
    "bg-plum-700 text-lavender-100 hover:bg-plum-600";
  const outline =
    "border border-plum-700 text-plum-800 hover:bg-lavender-100";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0 fill-current"
      >
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.4 1.26 4.83L2 22l5.35-1.28a9.9 9.9 0 0 0 4.69 1.2h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.06.28-3.55-.74-2.98-1.22-4.9-4.24-5.05-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.52.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.27.1 1.75.83 2.05.98.3.15.5.22.57.35.08.13.08.75-.16 1.44z" />
      </svg>
      {label}
    </a>
  );
}
