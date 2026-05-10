import logo from "@/assets/ibuki-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background px-6 md:px-10 pt-20 pb-10">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={logo} alt="IBUKI" className="h-14 w-auto -ml-1 mb-4" />
          <p className="font-serif italic text-foreground/70 max-w-sm">
            Le souffle du bien-être japonais.
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-widest-3 text-foreground/60 mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><a href="mailto:contact@ibuki.fr" className="hover:text-foreground">contact@ibuki.fr</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram @ibuki</a></li>
            <li>France</li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-widest-3 text-foreground/60 mb-4">Maison</p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><a href="#kobido" className="hover:text-foreground">Le Kobido</a></li>
            <li><a href="#experience" className="hover:text-foreground">L'expérience</a></li>
            <li><a href="#about" className="hover:text-foreground">À propos</a></li>
            <li><a href="#reservation" className="hover:text-foreground">Réserver</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} IBUKI — Le souffle du bien-être japonais</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Mentions légales</a>
          <a href="#" className="hover:text-foreground">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
