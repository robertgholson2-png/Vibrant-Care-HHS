import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

// Photo-backed page header used on inner pages.
export function PageHero({ title, intro, image, alt }: { title: string; intro: string; image: string; alt: string }) {
  return (
    <section className="relative pt-16 overflow-hidden">
      <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/55 to-gray-900/20" />
      <Container className="relative py-24 md:py-32">
        <h1 className="text-white font-semibold mb-4 max-w-3xl leading-tight text-[clamp(2.25rem,4.5vw,3.5rem)]">{title}</h1>
        <p className="text-white/75 text-lg max-w-2xl leading-relaxed">{intro}</p>
      </Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">{children}</p>;
}

export const h2 = "text-foreground font-semibold mb-4 leading-tight text-[clamp(1.75rem,3vw,2.5rem)]";
