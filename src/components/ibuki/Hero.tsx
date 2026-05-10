import hero from "@/assets/ibuki-hero.jpg";
import logo from "@/assets/ibuki-logo.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Atmosphère IBUKI — lumière douce et lin"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/20 to-ivory" />
      <div className="absolute inset-0 bg-gradient-to-r from-ivory/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 min-h-[100svh] flex flex-col justify-center pt-24 pb-16">
        <div className="max-w-2xl fade-in-up">
          <p className="text-[11px] uppercase tracking-widest-3 text-foreground/70 mb-8">
            Maison de bien-être japonais
          </p>
          <img src={logo} alt="IBUKI" className="h-24 md:h-32 w-auto -ml-2 mb-2 breathe" />
          <p className="font-serif italic text-xl md:text-2xl text-foreground/80 mb-10">
            Le souffle du bien-être japonais
          </p>
          <p className="text-[11px] uppercase tracking-widest-3 text-foreground/60 mb-8">
            Kobido <span className="mx-2 opacity-50">•</span> Shiatsu <span className="mx-2 opacity-50">•</span> Rituels japonais
          </p>
          <p className="font-serif text-2xl md:text-[28px] leading-relaxed text-foreground/90 max-w-xl mb-12">
            Inspirés des traditions japonaises, les soins IBUKI invitent à ralentir,
            relâcher les tensions et retrouver une harmonie profonde du corps et de l'esprit.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#reservation"
              className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-8 py-4 text-[11px] uppercase tracking-widest-3 hover:bg-foreground/85 transition-colors"
            >
              Réserver un soin
              <span aria-hidden>→</span>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-3 px-2 py-4 text-[11px] uppercase tracking-widest-3 border-b border-foreground/40 hover:border-foreground transition-colors"
            >
              Découvrir IBUKI
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-foreground/50 z-10">
        <span className="text-[10px] uppercase tracking-widest-3">Respirer</span>
        <div className="hairline" style={{ height: 48 }} />
      </div>
    </section>
  );
}
