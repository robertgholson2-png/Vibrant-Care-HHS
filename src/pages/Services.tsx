import { Bath, HandHeart, ShieldCheck, Sparkles, UtensilsCrossed } from "lucide-react";
import { Container, PageHero } from "../components/Section";
import { services } from "../content/site";
import { Cta } from "./Home";

const icons = [Bath, HandHeart, UtensilsCrossed, ShieldCheck, Sparkles];

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Care that fits your family"
        intro="From personal care to companionship, our caregivers — family members or trained professionals — help your loved one live safely and comfortably at home." />
      <section className="py-20">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <article key={s.id} id={s.id} className="scroll-mt-24 bg-card rounded-2xl p-7 border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-primary" /></div>
                <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
              </article>
            );
          })}
        </Container>
      </section>
      <Cta />
    </>
  );
}
