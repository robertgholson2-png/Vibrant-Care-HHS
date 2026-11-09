// All site copy and contact details live here so they're easy to edit.
export const site = {
  name: "Vibrant Care",
  legalName: "Vibrant Care Home Health",
  phone: "(832) 308-8532",
  phoneHref: "tel:+18323088532",
  email: "admin@vibrantcare.health",
  address: ["1 Riverway Dr #1700", "Houston, TX 77056"],
  hours: ["Mon – Fri: 8am – 6pm", "24/7 Care Available"],
  taglines: ["Compassionate Care", "Vibrant Lives", "Better Together"],
  // TODO: replace with the real profile URLs (the original site linked to the bare homepages).
  social: { facebook: "", instagram: "", linkedin: "" },
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

export const steps = {
  family: [
    { title: "Free Enrollment Call", body: "Call us or fill out our form. We'll confirm your loved one's eligibility, answer every question, and walk you through the paid family caregiver program — no pressure, no obligation." },
    { title: "Training & Paperwork", body: "We handle all the enrollment paperwork and provide free training so you're fully prepared and certified to care for your loved one — on your schedule." },
    { title: "Start Getting Paid", body: "Once enrolled, you begin providing care and receiving compensation. We stay by your side with ongoing support, check-ins, and guidance every step of the way." },
  ],
  // TODO: confirm this copy — the saved page only contained the Family Caregiver tab's text.
  professional: [
    { title: "Free Consultation", body: "Call us or fill out our form. We'll learn about your loved one's needs, confirm coverage, and answer every question — no pressure, no obligation." },
    { title: "Personalized Care Plan", body: "We build a care plan around your family's routine and match you with a screened, trained caregiver who fits your loved one's needs." },
    { title: "Care Begins", body: "Your caregiver starts visits at home, and our team checks in regularly to make sure care stays right for your family." },
  ],
};

export const stats = [
  { value: "500+", label: "Families Served" },
  { value: "3+", label: "Years in Houston" },
  { value: "98%", label: "Family Satisfaction" },
  { value: "24/7", label: "Care Availability" },
];

export const testimonials = [
  { quote: "I had no idea I could get paid to care for my mom. Vibrant Care walked me through everything, provided the training, and now I'm her official caregiver. It's changed our lives.", name: "Sarah M.", place: "Houston, TX — Family Caregiver" },
  { quote: "From the first phone call, I knew this was different. They listened, they understood, and they matched us with the perfect caregiver for my father.", name: "James R.", place: "Sugar Land, TX" },
  { quote: "The caregiving team is exceptional. Having someone we trust care for my husband at home has made all the difference — we're grateful every day.", name: "Linda T.", place: "The Woodlands, TX" },
];

export const services = [
  { id: "personal-care", title: "Personal Care", body: "Help with bathing, grooming, dressing, toileting, and mobility — delivered with dignity and respect." },
  { id: "companionship", title: "Companionship", body: "Conversation, activities, and a friendly presence that keeps your loved one engaged and connected." },
  { id: "meals", title: "Meal Prep & Grocery Shopping", body: "Nutritious meals prepared at home, plus help with grocery runs and kitchen cleanup." },
  { id: "safety", title: "Supervision & Safety", body: "Attentive supervision to reduce fall risk and keep your loved one safe and comfortable at home." },
  { id: "housekeeping", title: "Light Housekeeping", body: "Laundry, tidying, and keeping living spaces clean and clutter-free." },
];
