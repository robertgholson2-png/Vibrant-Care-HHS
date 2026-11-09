import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-light";
const styles: Record<Variant, string> = {
  primary: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md",
  outline: "border border-border text-foreground hover:bg-muted",
  "outline-light": "border border-white/50 text-white hover:bg-white/10 hover:border-white",
};
const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-full px-7 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export function Button({ to, href, variant = "primary", className = "", children }: {
  to?: string; href?: string; variant?: Variant; className?: string; children: ReactNode;
}) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <Link to={to ?? "/"} className={cls}>{children}</Link>;
}
