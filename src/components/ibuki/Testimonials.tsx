import { SectionLabel, SectionTitle } from "./SectionHeader";

const notes = [
  {
    jp: "心",
    text: "Un moment suspendu. Je suis ressortie plus légère, comme si mon corps avait enfin pu respirer.",
    name: "À venir",
  },
  {
    jp: "静",
    text: "Une douceur rare. Le geste est précis, l'écoute sincère. Une vraie pause au cœur du quotidien.",
    name: "À venir",
  },
  {
    jp: "和",
    text: "On se sent accueillie, jamais bousculée. C'est exactement ce dont j'avais besoin.",
    name: "À venir",
  },
];

export function Testimonials() {
  return (
    <section id="mots-doux" className="relative py-32 md:py-48 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Mots doux</SectionLabel>
          <div className="flex justify-center">
            <SectionTitle>Les retours de celles qui sont passées par là.</SectionTitle>
          </div>
          <div className="hairline mx-auto my-10" />
          <p className="text-base md:text-lg leading-relaxed text-foreground/75 max-w-xl mx-auto">
            IBUKI est une jeune maison. Bientôt, vous trouverez ici les mots
            de celles qui ont pris le temps de s'arrêter, le temps d'un soin.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border">
          {notes.map((n, i) => (
            <figure
              key={i}
              className="bg-background paper-texture p-10 md:p-12 min-h-[280px] flex flex-col"
            >
              <p className="font-serif text-4xl text-accent/60 mb-6">{n.jp}</p>
              <blockquote className="font-serif italic text-lg md:text-xl leading-relaxed text-foreground/85 flex-1">
                « {n.text} »
              </blockquote>
              <figcaption className="mt-8 text-[11px] uppercase tracking-widest-3 text-foreground/50">
                {n.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
