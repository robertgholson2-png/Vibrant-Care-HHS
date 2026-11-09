import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container, PageHero } from "../components/Section";
import { site } from "../content/site";

// No backend: submitting opens the visitor's email app with the message filled in.
// To receive submissions directly, connect a form service or a serverless function.
export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Email: ${d.get("email")}`,
      `Interested in: ${d.get("interest")}`,
      "",
      `${d.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Website inquiry — " + d.get("interest"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your family's care"
        intro="Request a free consultation or ask us anything. No pressure, no obligation — just a caring conversation." />
      <section className="py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <form onSubmit={onSubmit} className="lg:col-span-3 bg-card border border-border rounded-2xl p-7 grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="grid gap-1.5 text-sm font-medium">Full name<input name="name" required className={field} autoComplete="name" /></label>
              <label className="grid gap-1.5 text-sm font-medium">Phone<input name="phone" type="tel" required className={field} autoComplete="tel" /></label>
            </div>
            <label className="grid gap-1.5 text-sm font-medium">Email<input name="email" type="email" className={field} autoComplete="email" /></label>
            <label className="grid gap-1.5 text-sm font-medium">I'm interested in
              <select name="interest" className={field}>
                <option>Family Caregiver Program</option>
                <option>Professional Caregiver</option>
                <option>Working as a caregiver</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-medium">How can we help?<textarea name="message" rows={5} className={field} /></label>
            <p className="text-xs text-muted-foreground">Please don't include medical details here — we'll discuss those privately.</p>
            <button type="submit" className="h-11 rounded-full px-7 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold justify-self-start">Send Message</button>
            {sent && <p className="text-sm text-primary">Your email app should open with your message. If it didn't, call us at {site.phone}.</p>}
          </form>
          <aside className="lg:col-span-2 flex flex-col gap-6">
            {[
              { Icon: Phone, title: "Call", body: <a href={site.phoneHref} className="hover:text-primary">{site.phone}</a> },
              { Icon: Mail, title: "Email", body: <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a> },
              { Icon: MapPin, title: "Office", body: <>{site.address[0]}<br />{site.address[1]}</> },
              { Icon: Clock, title: "Hours", body: <>{site.hours[0]}<br />{site.hours[1]}</> },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-primary" /></div>
                <div><h2 className="font-sans font-semibold text-sm">{title}</h2><p className="text-muted-foreground text-sm">{body}</p></div>
              </div>
            ))}
          </aside>
        </Container>
      </section>
    </>
  );
}
