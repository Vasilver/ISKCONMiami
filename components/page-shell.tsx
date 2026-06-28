export function PageShell({ title, body }: { title: string; body: string }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-saffron">Temple Page</p>
      <h1 className="mt-3 font-serif text-5xl text-darkBrown">{title}</h1>
      <p className="mt-6 text-lg text-darkBrown/75">{body}</p>
    </section>
  );
}
