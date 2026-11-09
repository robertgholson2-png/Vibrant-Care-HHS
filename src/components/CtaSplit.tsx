import { ArrowRight, Phone } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Section";
import { images, site } from "../content/site";

type Cta = { headline: string; body: string; button_label: string; secondary_label: string };

export function CtaSplit({ cta, image = images.homeCta }: { cta: Cta; image?: string }) {
  return (
    <section className="py-24 bg-background" aria-labelledby="cta-heading">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
          <img src={image} alt="Senior couple enjoying time at home" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
        </div>
        <div>
          <h2 id="cta-heading" className="text-foreground mb-5 leading-tight font-semibold text-[clamp(1.75rem,3vw,2.75rem)]">{cta.headline}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button to="/contact">{cta.button_label} <ArrowRight className="w-4 h-4" /></Button>
            <Button href={site.phoneHref} variant="outline"><Phone className="w-4 h-4" />{cta.secondary_label}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
