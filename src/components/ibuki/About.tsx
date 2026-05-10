import nelly from "@/assets/ibuki-nelly.jpg";
import { SectionLabel, SectionTitle } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={nelly}
              alt="Nelly — fondatrice d'IBUKI"
              loading="lazy"
              className="relative z-10 w-full aspect-[4/5] object-cover"
              width={1024}
              height={1280}
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-foreground/30" />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <SectionLabel>À propos — Nelly</SectionLabel>
          <SectionTitle>Une rencontre, un geste, un souffle.</SectionTitle>
          <div className="hairline my-10" />
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/80 max-w-xl">
            <p>
              Je m'appelle Nelly. Pendant plusieurs années, j'ai évolué dans
              un tout autre univers — plus rapide, plus bruyant. Un jour,
              j'ai senti qu'il était temps d'écouter ce qui m'appelait
              vraiment : prendre soin, être présente, ralentir avec les autres.
            </p>
            <p>
              IBUKI est née de cette envie simple et sincère —
              offrir un espace pour respirer, déposer ses tensions
              et se sentir accueillie sans jugement, à son propre rythme.
            </p>
            <p>
              Je me forme avec passion aux rituels japonais, parce que
              j'y retrouve ce que je cherche depuis longtemps : la lenteur
              du geste, la justesse du toucher, et cette manière douce
              de ramener le corps et l'esprit ensemble.
            </p>
            <p>
              Mon engagement est simple : vous écouter vraiment, et vous
              proposer un moment qui vous ressemble — sincère, attentif
              et profondément humain.
            </p>
          </div>
          <p className="font-serif italic text-2xl text-foreground/70 mt-12">
            « Le bien-être commence là où l'on accepte de ralentir. »
          </p>
        </div>
      </div>
    </section>
  );
}
