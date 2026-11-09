import { HandHeart, Heart, House, ShieldCheck } from "lucide-react";
import { CtaSplit } from "../components/CtaSplit";
import { Container, Eyebrow, PageHero, h2 } from "../components/Section";
import { images, pages } from "../content/site";

const about = pages.about;
const valueIcons = [Heart, HandHeart, House, ShieldCheck];

export default function About() {
  return (
    <>
      <PageHero title={about.hero.headline} intro={about.hero.subheadline} image={images.aboutHero} alt="Vibrant Care team with senior clients" />

      <section className="py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>{about.story.section_label}</Eyebrow>
            <h2 className={h2}>{about.story.headline}</h2>
            {about.story.paragraphs.map((p) => <p key={p.id} className="text-muted-foreground leading-relaxed mb-4">{p.text}</p>)}
          </div>
          <img src={images.aboutStory} alt="Caregiver and senior client sharing a warm moment" className="rounded-2xl w-full aspect-[4/3] object-cover" loading="lazy" />
        </Container>
      </section>

      <section className="py-24 bg-muted">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow>{about.mission.section_label}</Eyebrow>
            <h2 className={h2}>{about.mission.headline}</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">{about.mission.statement}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {about.mission.values.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <div key={v.id} className="bg-card rounded-2xl p-7 border border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-primary" /></div>
                  <h3 className="text-foreground mb-2 font-semibold text-lg">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow>{about.team.section_label}</Eyebrow>
            <h2 className={h2}>{about.team.headline}</h2>
            <p className="text-muted-foreground leading-relaxed">{about.team.subheadline}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.team.members.map((m) => (
              <div key={m.id} className="bg-card rounded-2xl p-7 border border-border">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary font-heading font-bold text-lg">
                  {m.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <h3 className="font-semibold text-lg">{m.name}</h3>
                <p className="text-primary text-sm font-semibold mb-3">{m.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSplit cta={about.cta} />
    </>
  );
}
