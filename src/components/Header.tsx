import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "../content/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors hover:text-primary ${isActive ? "text-primary font-semibold" : "font-medium text-foreground/70"}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" aria-label={`${site.legalName} home`}><Logo /></Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
          {nav.map((n) => <NavLink key={n.to} to={n.to} end className={linkCls}>{n.label}</NavLink>)}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={site.phoneHref} className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-primary">
            <Phone className="w-3.5 h-3.5" />{site.phone}
          </a>
          <Link to="/contact" className="h-9 inline-flex items-center rounded-full px-5 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold shadow-sm">
            Get Care Now
          </Link>
        </div>
        <button className="md:hidden p-2 text-foreground/70" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-4">
          {nav.map((n) => <NavLink key={n.to} to={n.to} end className={linkCls}>{n.label}</NavLink>)}
          <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-medium text-primary"><Phone className="w-4 h-4" />{site.phone}</a>
        </nav>
      )}
    </header>
  );
}
