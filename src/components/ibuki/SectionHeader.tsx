export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-widest-3 text-foreground/60 mb-6">{children}</p>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground max-w-3xl">
      {children}
    </h2>
  );
}
