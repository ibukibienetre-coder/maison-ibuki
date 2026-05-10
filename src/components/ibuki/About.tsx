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
              Je m'appelle Nelly. Après plusieurs années dans un autre univers,
              j'ai choisi d'écouter ce qui me portait depuis longtemps :
              le soin, la présence, et la beauté discrète des rituels japonais.
            </p>
            <p>
              IBUKI est né de cette envie sincère — offrir un espace
              où l'on peut simplement déposer ses tensions, respirer,
              et se sentir accueilli·e avec douceur.
            </p>
            <p>
              Je me forme avec passion aux pratiques japonaises et
              je m'engage à vous proposer des soins justes, attentifs,
              guidés par l'écoute et le respect de votre rythme.
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
