import { useState, type FormEvent } from "react";
import { Clock, HeartHandshake, Mail, MapPin, Phone } from "lucide-react";
import { Container, h2 } from "../components/Section";
import { openEmail, pages, site } from "../content/site";

const c = pages.contact;
const field = "w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    openEmail(`Consultation request — ${d.get("care")}`, {
      Name: d.get("name"), Email: d.get("email"), Phone: d.get("phone"), Support: d.get("care"), Message: d.get("message"),
    });
    setSent(true);
  }

  return (
    <section className="pt-32 pb-24 bg-background">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <h1 className={`${h2} text-[clamp(2.25rem,4.5vw,3.5rem)]`}>{c.hero.headline}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">{c.hero.body}</p>
          <h2 className="font-semibold text-xl mb-5">{c.details.title}</h2>
          <ul className="flex flex-col gap-5 mb-10">
            {[
              { Icon: Phone, body: <a href={site.phoneHref} className="text-muted-foreground hover:text-primary">{site.phone}</a> },
              { Icon: Mail, body: <a href={`mailto:${c.details.email}`} className="text-muted-foreground hover:text-primary">{c.details.email}</a> },
              { Icon: MapPin, body: <span className="text-muted-foreground">{site.address.join(", ")}</span> },
              { Icon: Clock, body: <span className="text-muted-foreground">{site.hours.join(" · ")}</span> },
            ].map(({ Icon, body }, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="w-10 h-10 shrink-0 rounded-full bg-secondary text-primary grid place-items-center"><Icon className="w-4 h-4" /></span>{body}
              </li>
            ))}
          </ul>
          {[
            { Icon: MapPin, t: c.details.service_area_title, b: c.details.service_area_body },
            { Icon: HeartHandshake, t: c.details.consultation_title, b: c.details.consultation_body },
          ].map(({ Icon, t, b }) => (
            <div key={t} className="flex gap-4 mb-6">
              <span className="w-10 h-10 shrink-0 rounded-full bg-secondary text-primary grid place-items-center"><Icon className="w-4 h-4" /></span>
              <div><h3 className="font-semibold text-foreground mb-1">{t}</h3><p className="text-muted-foreground text-sm leading-relaxed">{b}</p></div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-9 shadow-sm self-start">
          <h2 className="font-semibold text-2xl mb-2">{c.form.title}</h2>
          <p className="text-muted-foreground mb-7">{c.form.body}</p>
          {sent ? (
            <div className="rounded-xl bg-secondary p-6 text-center text-foreground font-medium leading-relaxed">
              {c.form.success_message} If your email app didn't open, call us at {site.phone}.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <label className="grid gap-1.5 text-sm font-semibold">{c.form.name_label}<input name="name" required className={field} autoComplete="name" /></label>
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="grid gap-1.5 text-sm font-semibold">{c.form.email_label}<input name="email" type="email" required className={field} autoComplete="email" /></label>
                <label className="grid gap-1.5 text-sm font-semibold">{c.form.phone_label}<input name="phone" type="tel" className={field} autoComplete="tel" /></label>
              </div>
              <label className="grid gap-1.5 text-sm font-semibold">{c.form.care_label}
                <select name="care" className={field}>{c.form.care_options.map((o) => <option key={o}>{o}</option>)}</select>
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">{c.form.message_label}<textarea name="message" rows={5} className={field} /></label>
              <p className="text-xs text-muted-foreground">Please don't include medical details here — we'll discuss those privately.</p>
              <button type="submit" className="w-full h-11 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">{c.form.submit_label}</button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
