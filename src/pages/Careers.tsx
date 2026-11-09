import { useState, type FormEvent } from "react";
import { Briefcase, CalendarClock, CircleCheckBig, GraduationCap, HandCoins, HeartHandshake, LifeBuoy, MapPin, UserCheck } from "lucide-react";
import { Container, Eyebrow, PageHero, h2 } from "../components/Section";
import { images, openEmail, pages } from "../content/site";

const careers = pages.careers;
const perkIcons = [HandCoins, GraduationCap, CalendarClock, LifeBuoy, HeartHandshake, UserCheck];
const field = "w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary";

export default function Careers() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    openEmail(`Job application — ${d.get("position")}`, {
      Name: d.get("name"), Email: d.get("email"), Phone: d.get("phone"),
      Position: d.get("position"), Experience: d.get("experience"), Message: d.get("message"),
    });
    setSent(true);
  }

  return (
    <>
      <PageHero title={careers.hero.headline} intro={careers.hero.subheadline} image={images.careersHero} alt="Vibrant Care caregiver team" />

      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>{careers.why.section_label}</Eyebrow>
            <h2 className={h2}>{careers.why.headline}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{careers.why.body}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.why.perks.map((p, i) => {
              const Icon = perkIcons[i % perkIcons.length];
              return (
                <div key={p.id} className="bg-card rounded-2xl border border-border p-7 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-foreground font-semibold mb-2 text-lg">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-muted">
        <Container>
          <h2 className={`${h2} mb-10`}>Current Openings in Houston</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {careers.openings.map((j) => (
              <article key={j.id} className="bg-card rounded-2xl border border-border p-7 flex flex-col">
                <h3 className="text-foreground font-semibold text-lg mb-2">{j.title}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" />{j.type}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{j.location}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{j.description}</p>
                <p className="font-semibold text-foreground text-sm mb-3">Requirements</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {j.requirements.map((r) => (
                    <li key={r.id} className="flex gap-2 text-sm text-foreground/80"><CircleCheckBig className="w-4 h-4 shrink-0 mt-0.5 text-primary" />{r.text}</li>
                  ))}
                </ul>
                <a href="#apply" className="mt-auto inline-flex justify-center h-10 items-center rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">Apply Now</a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="apply" className="py-24 bg-white scroll-mt-16">
        <Container className="max-w-2xl">
          <div className="text-center mb-10">
            <h2 className={h2}>{careers.form.headline}</h2>
            <p className="text-muted-foreground leading-relaxed">{careers.form.subheadline}</p>
          </div>
          {sent ? (
            <div className="rounded-2xl bg-secondary p-8 text-center">
              <h3 className="font-semibold text-xl mb-2">{careers.form.success_title}</h3>
              <p className="text-foreground/80">Your email app should have opened with your application. Send it to finish applying. {careers.form.success_body}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-9 grid gap-5 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="grid gap-1.5 text-sm font-semibold">Full name<input name="name" required className={field} autoComplete="name" /></label>
                <label className="grid gap-1.5 text-sm font-semibold">Phone<input name="phone" type="tel" required className={field} autoComplete="tel" /></label>
              </div>
              <label className="grid gap-1.5 text-sm font-semibold">Email<input name="email" type="email" required className={field} autoComplete="email" /></label>
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="grid gap-1.5 text-sm font-semibold">Position
                  <select name="position" className={field}>{careers.openings.map((j) => <option key={j.id}>{j.title}</option>)}</select>
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">Experience
                  <select name="experience" className={field}>
                    <option>No experience (will train)</option><option>Less than 1 year</option><option>1–3 years</option><option>3+ years</option>
                  </select>
                </label>
              </div>
              <label className="grid gap-1.5 text-sm font-semibold">Tell us about yourself
                <textarea name="message" rows={5} className={field} placeholder="Share a little about your caregiving experience and why you want to join Vibrant Care…" />
              </label>
              <button type="submit" className="w-full h-11 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md">Submit Application</button>
              <p className="text-xs text-muted-foreground text-center">By submitting, you agree to be contacted by Vibrant Care regarding your application.</p>
            </form>
          )}
        </Container>
      </section>
    </>
  );
}
