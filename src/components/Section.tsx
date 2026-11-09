import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="pt-32 pb-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">{eyebrow}</p>
        <h1 className="text-foreground font-semibold mb-4 text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">{title}</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">{intro}</p>
      </div>
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
