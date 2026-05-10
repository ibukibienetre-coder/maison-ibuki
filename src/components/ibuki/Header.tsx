import { useEffect, useState } from "react";
import logo from "@/assets/ibuki-logo.png";

const links = [
  { href: "#kobido", label: "Le Kobido" },
  { href: "#experience", label: "L'expérience" },
  { href: "#about", label: "À propos" },
  { href: "#future", label: "Rituels" },
  { href: "#reservation", label: "Réserver" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="IBUKI" className="h-14 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-widest-3 text-foreground/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#reservation"
          className="hidden md:inline-flex items-center text-[11px] uppercase tracking-widest-3 border border-foreground/40 px-5 py-2.5 hover:bg-foreground hover:text-primary-foreground transition-colors"
        >
          Réserver
        </a>
        <button
          aria-label="Menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-foreground mb-1.5" />
          <span className="block w-6 h-px bg-foreground mb-1.5" />
          <span className="block w-4 h-px bg-foreground ml-auto" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border/60">
          <nav className="px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-widest-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
