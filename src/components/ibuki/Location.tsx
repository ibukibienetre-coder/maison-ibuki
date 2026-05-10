import { SectionLabel, SectionTitle } from "./SectionHeader";

const places = [
  {
    jp: "家",
    title: "À domicile",
    text: "Je viens à votre rencontre, dans votre cocon, pour un soin pleinement personnalisé. Selon la distance, de légers frais kilométriques peuvent s'appliquer.",
  },
  {
    jp: "間",
    title: "Espaces privatisés",
    text: "Des lieux calmes et confidentiels, aménagés le temps d'une parenthèse rien qu'à vous.",
  },
  {
    jp: "和",
    title: "Lieux partenaires",
    text: "Autour de Saint-Quentin-Fallavier et Lyon Est, dans des adresses choisies avec soin.",
  },
];

export function Location() {
  return (
    <section id="lieu" className="relative py-28 md:py-40 px-6 md:px-10 bg-secondary/40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionLabel>Où se déroulent les soins ?</SectionLabel>
          <SectionTitle>Un moment calme, intime, pensé pour vous.</SectionTitle>
          <div className="hairline my-10" />
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-xl">
            IBUKI propose des soins sur rendez-vous, dans un cadre choisi
            avec attention. Chaque rencontre est préparée comme un instant
            singulier — discret, chaleureux et profondément personnalisé.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
          {places.map((p) => (
            <div key={p.title} className="bg-background paper-texture p-8 md:p-10 min-h-[240px]">
              <p className="font-serif text-4xl text-accent/70 mb-4">{p.jp}</p>
              <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/75">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="font-serif italic text-foreground/70 text-lg md:text-xl mt-12 max-w-2xl">
          « Le bon lieu, c'est celui où l'on se sent enfin libre de respirer. »
        </p>
      </div>
    </section>
  );
}