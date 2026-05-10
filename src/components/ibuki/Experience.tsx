import img from "@/assets/ibuki-experience.jpg";
import { SectionLabel, SectionTitle } from "./SectionHeader";

const pillars = [
  { jp: "息", title: "Le souffle", text: "Ralentir le rythme, écouter sa respiration, revenir à soi." },
  { jp: "手", title: "Le toucher", text: "Des mains attentives, un geste lent et précis, une présence sincère." },
  { jp: "間", title: "Le silence", text: "L'espace entre les choses, où le corps se relâche enfin." },
  { jp: "和", title: "L'harmonie", text: "Un équilibre retrouvé entre le corps, l'esprit et l'instant." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40 px-6 md:px-10 bg-secondary/40">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <SectionLabel>L'expérience IBUKI</SectionLabel>
            <SectionTitle>Une parenthèse sensorielle, simplement humaine.</SectionTitle>
            <div className="hairline my-10" />
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6 max-w-lg">
              IBUKI — 息吹 — c'est le souffle, l'élan, le souffle vital.
              Chez nous, chaque soin commence par un instant de calme,
              une lumière douce, une odeur subtile, une respiration partagée.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-lg">
              Pas de cérémonial intimidant, pas de luxe ostentatoire.
              Seulement la lenteur, l'écoute, et l'envie sincère
              de vous offrir un vrai moment de relâchement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {pillars.map((p) => (
              <div key={p.title} className="bg-background paper-texture p-8 md:p-10 min-h-[220px]">
                <p className="font-serif text-4xl text-accent/70 mb-4">{p.jp}</p>
                <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/75">{p.text}</p>
              </div>
            ))}
            <div className="bg-background paper-texture sm:col-span-2 overflow-hidden">
              <img src={img} alt="Détails sensoriels" loading="lazy" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
