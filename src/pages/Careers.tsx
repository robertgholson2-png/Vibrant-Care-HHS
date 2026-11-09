import { ArrowRight, CircleCheckBig } from "lucide-react";
import { Button } from "../components/Button";
import { Container, PageHero } from "../components/Section";
import { site, steps } from "../content/site";

const perks = [
  "Get paid to care for a family member at home",
  "Free training — no experience needed",
  "Flexible hours that work around your schedule",
  "Ongoing support, check-ins, and guidance",
];

export default function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Become a caregiver with Vibrant Care"
        intro="Whether you want to care for your own loved one or join our team of professional caregivers, we'll give you the training and support to do it well." />
      <section className="py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Family Caregiver Program</h2>
            <ul className="flex flex-col gap-3 mb-10">
              {perks.map((p) => (
                <li key={p} className="flex gap-3"><CircleCheckBig className="w-5 h-5 text-primary shrink-0" />{p}</li>
              ))}
            </ul>
            <ol className="flex flex-col gap-6 mb-10">
              {steps.family.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center shrink-0">0{i + 1}</span>
                  <div><h3 className="font-semibold text-lg">{s.title}</h3><p className="text-muted-foreground text-sm">{s.body}</p></div>
                </li>
              ))}
            </ol>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button to="/contact">Apply Now <ArrowRight className="w-4 h-4" /></Button>
              <Button href={site.phoneHref} variant="outline">Call {site.phone}</Button>
            </div>
          </div>
          <img src="/images/careers.svg" alt="Caregiver with a client" className="rounded-2xl w-full aspect-[4/3] object-cover" loading="lazy" />
        </Container>
      </section>
    </>
  );
}
