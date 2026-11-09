import { PageHero } from "../components/Section";
import { site } from "../content/site";

// TODO: replace with your actual policy text.
export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const title = kind === "privacy" ? "Privacy Policy" : "Terms of Service";
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={`This page is being updated. For questions, contact us at ${site.email}.`} />
    </>
  );
}
