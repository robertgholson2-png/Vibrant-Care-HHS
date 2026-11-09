import { Button } from "../components/Button";
import { PageHero } from "../components/Section";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Page not found" intro="The page you're looking for doesn't exist." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><Button to="/">Back to home</Button></div>
    </>
  );
}
