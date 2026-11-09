import { Container } from "../components/Section";
import { site } from "../content/site";

// TODO: replace with your actual policy text.
export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <h1 className="font-semibold text-4xl mb-4">{kind === "privacy" ? "Privacy Policy" : "Terms of Service"}</h1>
        <p className="text-muted-foreground">This page is being updated. For questions, contact us at <a className="text-primary" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </Container>
    </section>
  );
}
