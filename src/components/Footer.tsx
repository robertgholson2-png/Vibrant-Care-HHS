import { Link } from "react-router-dom";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { footerServices, nav, site } from "../content/site";
import { Logo } from "./Logo";

export function Footer() {
  const socials = [
    { href: site.social.facebook, label: "Facebook", Icon: Facebook },
    { href: site.social.instagram, label: "Instagram", Icon: Instagram },
    { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  ].filter((s) => s.href);

  return (
    <footer className="bg-footer-bg text-footer-fg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="inline-block mb-5"><Logo light /></Link>
          <p className="flex flex-wrap gap-x-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
            {site.taglines.join(" · ")}
          </p>
          <p className="text-sm leading-relaxed mb-6 text-white/60">
            Compassionate home care for Houston's seniors — helping families find peace of mind.
          </p>
          {socials.length > 0 && (
            <div className="flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-white/80" />
                </a>
              ))}
            </div>
          )}
        </div>
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-widest mb-5 text-white/40">Our Services</h3>
          <ul className="flex flex-col gap-2.5">
            {footerServices.map((s) => (
              <li key={s.id}><Link to={`/services#${s.id}`} className="text-sm text-white/60 hover:text-white">{s.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-widest mb-5 text-white/40">Quick Links</h3>
          <ul className="flex flex-col gap-2.5">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="text-sm text-white/60 hover:text-white">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-widest mb-5 text-white/40">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-sm text-white/60">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" /><span>{site.address[0]}<br />{site.address[1]}</span></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 shrink-0 text-accent" /><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 shrink-0 text-accent" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent" /><span>{site.hours[0]}<br />{site.hours[1]}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved. Licensed &amp; Insured in Texas.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white/70">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/70">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
