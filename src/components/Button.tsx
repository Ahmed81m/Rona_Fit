import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function Button({ href, children, variant = "solid", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600";
  const solid = "bg-plum-800 text-lavender-100 hover:bg-plum-700";
  const outline = "border border-plum-800 text-plum-900 hover:bg-lavender-100";

  const isAnchor = href.startsWith("#");

  if (isAnchor) {
    return (
      <a href={href} className={`${base} ${variant === "solid" ? solid : outline} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variant === "solid" ? solid : outline} ${className}`}>
      {children}
    </Link>
  );
}
