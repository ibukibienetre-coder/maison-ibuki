import { Banknote, CreditCard, Wallet, Landmark } from "lucide-react";

const methods = [
  { icon: Banknote, label: "Espèces" },
  { icon: CreditCard, label: "Carte bancaire" },
  { icon: Wallet, label: "PayPal" },
  { icon: Landmark, label: "Virement" },
];

export function Payments() {
  return (
    <section id="paiement" className="px-6 md:px-10 py-20 md:py-24 border-t border-border/60">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[11px] uppercase tracking-widest-3 text-foreground/60 mb-5">
          Moyens de paiement
        </p>
        <p className="font-serif italic text-lg md:text-xl text-foreground/75 max-w-xl mx-auto mb-12">
          Pour votre confort, plusieurs moyens de paiement sont acceptés
          lors des rendez-vous.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 text-foreground/70">
          {methods.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center gap-3">
              <Icon size={28} strokeWidth={1.2} aria-hidden />
              <span className="text-[11px] uppercase tracking-widest-3">{label}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground/80 italic mt-10">
          Apple Pay et Google Pay arriveront prochainement.
        </p>
      </div>
    </section>
  );
}
