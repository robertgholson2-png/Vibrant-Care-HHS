import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

const titles: Record<string, string> = {
  "/": "Vibrant Care — Compassionate Home Care in Houston, TX",
  "/services": "Our Services — Vibrant Care Houston Home Care",
  "/about": "About Us — Vibrant Care Houston Home Care",
  "/careers": "Caregiver Jobs Houston — Vibrant Care Careers",
  "/contact": "Contact Houston Home Care | Vibrant Care",
};

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? "Vibrant Care";
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollManager />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
