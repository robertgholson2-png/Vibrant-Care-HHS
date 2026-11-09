import { Container, PageHero } from "../components/Section";
import { stats } from "../content/site";
import { Cta } from "./Home";

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Compassionate care. Vibrant lives. Better together."
        intro="Vibrant Care Home Health helps Houston families care for their loved ones at home — by supporting family members as paid caregivers, and by providing trained professional caregivers when that's the better fit." />
      <section className="py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img src="/images/about.svg" alt="Vibrant Care team" className="rounded-2xl w-full aspect-[4/3] object-cover" loading="lazy" />
          <div>
            <h2 className="text-3xl font-semibold mb-4">We believe family makes the best caregivers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nobody knows your loved one like you do. Our paid family caregiver program gives eligible family members the training, paperwork support, and ongoing guidance they need to provide care — and get paid for it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When there's no eligible family member, we carefully screen, train, and match professional caregivers to each family's unique needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-muted rounded-xl p-5">
                  <div className="text-primary font-heading text-3xl font-bold">{s.value}</div>
                  <div className="text-muted-foreground text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Cta />
    </>
  );
}
