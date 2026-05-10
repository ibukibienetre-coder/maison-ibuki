import { SectionLabel } from "./SectionHeader";

export function Reservation() {
  return (
    <section id="reservation" className="relative py-32 md:py-48 px-6 md:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <SectionLabel>Réservation</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground">
          Réserver un moment IBUKI
        </h2>
        <div className="hairline mx-auto my-10" />
        <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-xl mx-auto mb-14">
          Offrez-vous un instant pour respirer. Choisissez le créneau qui vous
          convient — je vous accueille avec attention, à votre rythme,
          sans jamais vous presser.
        </p>

        <div className="border border-border bg-card/40 paper-texture p-8 md:p-12 text-left">
          <div className="grid md:grid-cols-3 gap-8 mb-10 text-sm">
            <div>
              <p className="text-[11px] uppercase tracking-widest-3 text-foreground/60 mb-2">Durée</p>
              <p className="font-serif text-xl">45 minutes</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest-3 text-foreground/60 mb-2">Tarif découverte</p>
              <p className="font-serif text-xl">45€</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest-3 text-foreground/60 mb-2">Lieu</p>
              <p className="font-serif text-xl">À domicile ou sur place</p>
            </div>
          </div>

          <div className="border border-dashed border-border/80 p-10 md:p-14 text-center">
            <p className="font-serif italic text-foreground/70 text-lg mb-2">
              Calendrier de réservation
            </p>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              Intégration Fresha ou Calendly à venir.
              En attendant, réservez en quelques secondes par message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.fresha.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-foreground text-primary-foreground px-10 py-5 text-[11px] uppercase tracking-widest-3 shadow-[0_8px_30px_-12px_rgba(78,59,47,0.45)] hover:shadow-[0_14px_36px_-12px_rgba(78,59,47,0.55)] hover:-translate-y-0.5 transition-all duration-500"
              >
                Réserver sur Fresha
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="mailto:contact@ibuki.fr"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-foreground/50 px-10 py-5 text-[11px] uppercase tracking-widest-3 hover:bg-foreground hover:text-primary-foreground transition-colors duration-500"
              >
                Réserver par email
              </a>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground italic mt-10">
          Une question avant de réserver ? Écrivez-moi, je vous réponds personnellement.
        </p>
        <p className="text-xs text-muted-foreground/70 italic mt-3">
          Des frais kilométriques peuvent être appliqués en cas de grande distance.
        </p>
      </div>
    </section>
  );
}
