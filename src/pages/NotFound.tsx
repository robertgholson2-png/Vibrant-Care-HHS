import { Button } from "../components/Button";
import { Container } from "../components/Section";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <h1 className="font-semibold text-4xl mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <Button to="/">Back to home</Button>
      </Container>
    </section>
  );
}
