import { useState } from "react";
import { ArrowRight, CircleCheckBig, Star } from "lucide-react";
import { Button } from "../components/Button";
import { CtaSplit } from "../components/CtaSplit";
import { Container, Eyebrow, h2 } from "../components/Section";
import { heroBullets, images, insurers, pages, site } from "../content/site";

const home = pages.home;

export default function Home() {
  return (
    <>
      <Hero />
      <Insurers />
      <HowItWorks />
      <Trust />
      <CtaSplit cta={home.cta} />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex items-center pt-16 min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <img src={images.homeHero} alt="Caregiver helping an elderly woman at home" className="w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
      </div>
      <Container className="relative z-10 py-24 w-full">
        <div className="max-w-xl">
          <p className="flex flex-wrap items-center gap-x-2 mb-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60">
            {site.taglines.map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {i > 0 && <span className="w-[3px] h-[3px] rounded-full bg-white/30" />}{t}
              </span>
            ))}
          </p>
          <h1 className="text-white mb-4 leading-tight font-semibold text-[clamp(2.5rem,5vw,4rem)]">{home.hero.headline}</h1>
          <p className="text-white/70 leading-relaxed mb-5 max-w-md">{home.hero.subheadline}</p>
          <ul className="flex flex-col gap-2 mb-8 max-w-sm">
            {heroBullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-white/80">
                <CircleCheckBig className="w-4 h-4 text-accent shrink-0 mt-0.5" />{b}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button to="/contact">{home.hero.cta_primary} <ArrowRight className="w-4 h-4" /></Button>
            <Button to="/careers" variant="outline-light">{home.hero.cta_secondary}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Insurers() {
  const Item = ({ name, hidden }: { name: string; hidden?: boolean }) => (
    <div aria-hidden={hidden} className="flex items-center justify-center px-5 py-3 rounded-lg shrink-0 bg-white border border-border shadow-sm min-w-[190px] min-h-[56px]">
      <span className="w-1 h-8 rounded-full bg-primary mr-2.5" />
      <span className="text-xs font-bold text-foreground whitespace-nowrap">{name}</span>
    </div>
  );
  return (
    <div className="bg-background border-b border-border overflow-hidden py-3 px-4">
      <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Insurances We Accept</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-5 w-max animate-marquee motion-reduce:animate-none">
          {insurers.map((n) => <Item key={n} name={n} />)}
          {insurers.map((n) => <Item key={`${n}-dup`} name={n} hidden />)}
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  const h = home.how_it_works;
  const [tab, setTab] = useState<"family" | "professional">("family");
  const list = tab === "family" ? h.family_steps : h.professional_steps;
  return (
    <section className="py-24 bg-white" aria-labelledby="how-heading">
      <Container>
        <div className="mb-10">
          <h2 id="how-heading" className={h2}>{h.headline}</h2>
          <p className="text-muted-foreground text-lg max-w-xl">{h.subheadline}</p>
        </div>
        <div role="tablist" className="flex flex-wrap gap-2 mb-12">
          {([["family", "Family Caregiver Program"], ["professional", "Professional Caregiver"]] as const).map(([id, label]) => (
            <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${tab === id ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-secondary"}`}>
              {label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-border" aria-hidden />
          {list.map((s) => (
            <div key={s.id} className="relative flex flex-col">
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-md">
                <span className="text-primary-foreground font-bold text-xl font-heading">{s.number}</span>
              </div>
              <h3 className="text-foreground font-semibold mb-3 text-xl">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button to="/contact">{h.cta_label} <ArrowRight className="w-4 h-4" /></Button>
        </div>
      </Container>
    </section>
  );
}

function Trust() {
  const t = home.trust;
  return (
    <section className="py-24 bg-muted" aria-labelledby="trust-heading">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <Eyebrow>{t.section_label}</Eyebrow>
          <h2 id="trust-heading" className={h2}>{t.headline}</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">{t.body}</p>
          <div className="grid grid-cols-2 gap-4">
            {t.stats.map((s) => (
              <div key={s.id} className="bg-card rounded-xl p-5 border border-border">
                <div className="text-primary mb-1 font-heading text-3xl font-bold">{s.value}</div>
                <div className="text-muted-foreground text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {t.testimonials.map((q) => (
            <blockquote key={q.id} className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4 text-sm italic">"{q.quote}"</p>
              <footer className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-xs">{q.author[0]}</div>
                <div>
                  <cite className="not-italic font-semibold text-foreground text-sm">{q.author}</cite>
                  <p className="text-muted-foreground text-xs">{q.location}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
