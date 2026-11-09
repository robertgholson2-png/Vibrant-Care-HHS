import { useState } from "react";
import { ArrowRight, CircleCheckBig, Phone, Star } from "lucide-react";
import { Button } from "../components/Button";
import { Container } from "../components/Section";
import { heroBullets, insurers, site, stats, steps, testimonials } from "../content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Insurers />
      <HowItWorks />
      <Trust />
      <Cta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex items-center pt-16 min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <img src="/images/hero.svg" alt="Caregiver helping an elderly woman at home" className="w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" />
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
          <h1 className="text-white mb-4 leading-tight font-semibold text-[clamp(2.5rem,5vw,4rem)]">
            Compassionate Care, Right at Home in Houston
          </h1>
          <p className="text-white/70 leading-relaxed mb-5 max-w-md">
            We believe family makes the best caregivers. Vibrant Care supports you every step of the way in caring for your loved one at home — keeping them safe, comfortable, and surrounded by the people they trust most.
          </p>
          <ul className="flex flex-col gap-2 mb-8 max-w-sm">
            {heroBullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-white/80">
                <CircleCheckBig className="w-4 h-4 text-accent shrink-0 mt-0.5" />{b}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button to="/contact">See If You Qualify <ArrowRight className="w-4 h-4" /></Button>
            <Button to="/careers" variant="outline-light">Become a Family Caregiver</Button>
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
  const [tab, setTab] = useState<"family" | "professional">("family");
  const tabs = [
    { id: "family" as const, label: "Family Caregiver Program" },
    { id: "professional" as const, label: "Professional Caregiver" },
  ];
  return (
    <section className="py-24 bg-background" aria-labelledby="how-heading">
      <Container>
        <div className="mb-10">
          <h2 id="how-heading" className="text-foreground mb-3 font-semibold text-[clamp(1.75rem,3vw,2.5rem)]">Getting started is simple</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Whether you're a family member becoming a paid caregiver or a family looking for professional care — we make every step easy.
          </p>
        </div>
        <div role="tablist" className="flex flex-wrap gap-2 mb-12">
          {tabs.map((t) => (
            <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${tab === t.id ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-secondary"}`}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-border" aria-hidden />
          {steps[tab].map((s, i) => (
            <div key={s.title} className="relative flex flex-col">
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-md">
                <span className="text-primary-foreground font-bold text-xl font-heading">0{i + 1}</span>
              </div>
              <h3 className="text-foreground font-semibold mb-3 text-xl">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button to="/contact">Start with a Free Consultation <ArrowRight className="w-4 h-4" /></Button>
        </div>
      </Container>
    </section>
  );
}

function Trust() {
  return (
    <section className="py-24 bg-muted" aria-labelledby="trust-heading">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 id="trust-heading" className="text-foreground mb-4 font-semibold text-[clamp(1.75rem,3vw,2.5rem)]">Houston Families Trust Vibrant Care</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            We know choosing home care for someone you love is one of the most important decisions you'll ever make. Whether it's a family member stepping into a paid caregiver role or a trusted professional we place in the home — every Vibrant Care caregiver is carefully screened, trained, and matched to your family's unique needs. We go beyond ordinary home care to make sure every family has a solution that truly fits.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-5 border border-border">
                <div className="text-primary mb-1 font-heading text-3xl font-bold">{s.value}</div>
                <div className="text-muted-foreground text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4 text-sm italic">"{t.quote}"</p>
              <footer className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-xs">{t.name[0]}</div>
                <div>
                  <cite className="not-italic font-semibold text-foreground text-sm">{t.name}</cite>
                  <p className="text-muted-foreground text-xs">{t.place}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Cta() {
  return (
    <section className="py-24 bg-background" aria-labelledby="cta-heading">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
          <img src="/images/cta-split.svg" alt="Senior couple enjoying time at home" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
        </div>
        <div>
          <h2 id="cta-heading" className="text-foreground mb-5 leading-tight font-semibold text-[clamp(1.75rem,3vw,2.75rem)]">
            Your loved one deserves the best care Houston has to offer.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Let's talk about what Vibrant Care can do for your family. A free consultation is just one call away — no pressure, no obligation, just a caring conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button to="/contact">Request a Free Consultation <ArrowRight className="w-4 h-4" /></Button>
            <Button href={site.phoneHref} variant="outline"><Phone className="w-4 h-4" />Call {site.phone}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
