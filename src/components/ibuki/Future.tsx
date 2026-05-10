const items = [
  { jp: "指圧", title: "Shiatsu", text: "Acupression douce sur les méridiens du corps, pour libérer l'énergie et apaiser le mental." },
  { jp: "按摩", title: "Amma", text: "Massage japonais traditionnel, rythmé et profond, pratiqué sur table ou habillé." },
  { jp: "儀式", title: "Rituels saisonniers", text: "Des soins inspirés du rythme des saisons japonaises, pour accompagner chaque transition." },
];

export function Future() {
  return (
    <section id="future" className="relative py-28 md:py-40 px-6 md:px-10 bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-widest-3 text-primary-foreground/60 mb-6">
            Prochainement chez IBUKI
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-primary-foreground">
            L'univers IBUKI continuera de s'écrire, doucement.
          </h2>
          <div className="w-px h-16 bg-primary-foreground/30 my-12" />
          <p className="text-base md:text-lg leading-relaxed text-primary-foreground/80 max-w-xl">
            IBUKI est une jeune maison. D'autres rituels japonais
            rejoindront bientôt nos soins, à mesure de mon parcours
            et de mes formations.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-primary-foreground/15">
          {items.map((it) => (
            <div key={it.title} className="bg-foreground p-10">
              <p className="font-serif text-3xl text-sand mb-6">{it.jp}</p>
              <h3 className="font-serif text-2xl text-primary-foreground mb-4">{it.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">{it.text}</p>
              <p className="text-[10px] uppercase tracking-widest-3 text-sand/80 mt-8">À venir</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
