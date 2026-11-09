import { useState } from "react";
import { CircleCheckBig } from "lucide-react";
import { CtaSplit } from "../components/CtaSplit";
import { Container, PageHero, h2 } from "../components/Section";
import { images, pages } from "../content/site";

const svc = pages.services;

export default function Services() {
  const [mode, setMode] = useState<"family" | "professional">("family");
  const list = mode === "family" ? svc.family_services : svc.services;
  // Professional list uses s1..s5; family list uses fs1..fs5 in the same order.
  const anchor = (i: number) => svc.services[i].id;

  return (
    <>
      <PageHero title={svc.hero.headline} intro={svc.hero.subheadline} image={images.servicesHero} alt="Caregiver and senior woman smiling together at home" />
      <section className="py-14 bg-muted border-b border-border">
        <Container className="text-center">
          <h2 className={h2}>{svc.intro.headline}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">{svc.intro.body}</p>
          <div role="tablist" className="inline-flex flex-wrap justify-center gap-2">
            {([["family", "Family Caregiver Program"], ["professional", "Professional Caregiver"]] as const).map(([id, label]) => (
              <button key={id} role="tab" aria-selected={mode === id} onClick={() => setMode(id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${mode === id ? "bg-primary text-primary-foreground shadow-md" : "bg-white text-muted-foreground hover:bg-secondary"}`}>
                {label}
              </button>
            ))}
          </div>
        </Container>
      </section>
      <div className="bg-white">
        <Container>
          {list.map((s, i) => (
            <article key={s.id} id={anchor(i)} className="scroll-mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 border-b border-border last:border-0">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <img src={images.services[anchor(i)]} alt={s.title} className="rounded-2xl w-full aspect-[4/3] object-cover" loading="lazy" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">{s.tagline}</p>
                <h3 className="text-foreground font-semibold mb-4 text-[clamp(1.5rem,2.5vw,2rem)]">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-7">{s.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {s.duties.map((d) => (
                    <li key={d.id} className="flex gap-2.5 text-foreground/80 text-sm"><CircleCheckBig className="w-4 h-4 text-primary shrink-0 mt-0.5" />{d.text}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </div>
      <CtaSplit cta={svc.cta} />
    </>
  );
}
