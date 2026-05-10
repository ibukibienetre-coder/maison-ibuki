import img from "@/assets/ibuki-kobido.jpg";
import { SectionLabel, SectionTitle } from "./SectionHeader";

export function Kobido() {
  return (
    <section id="kobido" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src={img}
            alt="Rituel Kobido"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
            width={1024}
            height={1280}
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-background border border-border px-8 py-6 max-w-[260px]">
            <p className="font-serif italic text-foreground/80 text-lg leading-snug">
              « Un instant suspendu, pour soi. »
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionLabel>Le rituel signature</SectionLabel>
          <SectionTitle>Kobido — l'art japonais du toucher</SectionTitle>
          <div className="hairline my-10" />
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6 max-w-xl">
            Bien plus qu'un soin du visage, le Kobido est un rituel ancestral
            japonais. Une danse lente des mains qui dénoue les tensions,
            réveille la circulation et invite à un relâchement profond.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-12 max-w-xl">
            Un moment de présence, où le souffle ralentit et où le visage,
            comme l'esprit, retrouve sa douceur.
          </p>

          <div className="border border-border bg-card/40 paper-texture p-8 md:p-10 max-w-xl">
            <div className="flex items-baseline justify-between gap-6 mb-4">
              <div>
                <p className="text-[11px] uppercase tracking-widest-3 text-foreground/60 mb-2">
                  Offre découverte
                </p>
                <h3 className="font-serif text-3xl text-foreground">Kobido japonais</h3>
                <p className="text-sm text-muted-foreground mt-1">Soin complet — 1 heure</p>
              </div>
              <div className="text-right">
                <p className="font-serif text-4xl text-foreground">45€</p>
                <p className="text-[10px] uppercase tracking-widest-3 text-muted-foreground mt-1 line-through opacity-60">
                  70€
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic mb-8">
              Tarif préférentiel proposé pour l'ouverture d'IBUKI.
            </p>
            <a
              href="#reservation"
              className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-7 py-3.5 text-[11px] uppercase tracking-widest-3 hover:bg-foreground/85 transition-colors"
            >
              Réserver ce rituel
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
