export function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {eyebrow ? <p className="text-sm uppercase tracking-[0.3em] text-saffron">{eyebrow}</p> : null}
      <h2 className="mt-3 font-serif text-4xl text-darkBrown md:text-5xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
