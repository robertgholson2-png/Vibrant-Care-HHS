// Contact details and shared settings. Page copy lives in pages.json (copied from the live site).
import pages from "./pages.json";
export { pages };

export const site = {
  name: "Vibrant Care",
  legalName: "Vibrant Care Home Health",
  phone: "(832) 308-8532",
  phoneHref: "tel:+18323088532",
  email: "admin@vibrantcare.health",
  address: ["1 Riverway Dr #1700", "Houston, TX 77056"],
  hours: ["Mon – Fri: 8am – 6pm", "24/7 Care Available"],
  taglines: ["Compassionate Care", "Vibrant Lives", "Better Together"],
  // TODO: add real profile URLs. The live site links to the bare facebook.com / instagram.com / linkedin.com homepages.
  social: { facebook: "", instagram: "", linkedin: "" },
};

// Photos from the original vibrantcare.health site (Getty stock licensed through GoDaddy).
export const images = {
  homeHero: "/images/home-hero.jpg",
  homeCta: "/images/home-cta-split.jpg",
  aboutHero: "/images/about-hero.jpg",
  aboutStory: "/images/about-story.jpg",
  careersHero: "/images/careers-hero.jpg",
  servicesHero: "/images/services-hero.jpg",
  services: {
    s1: "/images/services-personal-care.jpg",
    s2: "/images/services-companionship.jpg",
    s3: "/images/services-meal-prep.jpg",
    s4: "/images/services-housekeeping.jpg",
    s5: "/images/services-supervision-safety.jpg",
  } as Record<string, string>,
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export const heroBullets = [
  "Eligible family members can participate in our paid caregiver program",
  "Training & support provided — no experience needed",
  "Flexible hours that work around your schedule",
  "No eligible family member? We also provide professional caregivers.",
];

export const insurers = [
  "Community Health Choice",
  "Molina Healthcare of Texas",
  "UnitedHealthcare Community Plan",
  "Texas Children's Health Plan",
  "Amerigroup / Wellpoint",
];

// Footer service links → anchors on the Services page.
export const footerServices = [
  { id: "s1", label: "Personal Care" },
  { id: "s2", label: "Companionship" },
  { id: "s3", label: "Meal Prep & Grocery Shopping" },
  { id: "s5", label: "Supervision & Safety" },
  { id: "s4", label: "Light Housekeeping" },
];

// Sends a form as an email draft. The live site posts to a GoDaddy-hosted API that won't exist on Vercel.
export function openEmail(subject: string, fields: Record<string, FormDataEntryValue | null>) {
  const body = Object.entries(fields).map(([k, v]) => `${k}: ${v ?? ""}`).join("\n");
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
