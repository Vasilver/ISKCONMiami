import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-serif text-5xl text-darkBrown">Page not found</h1>
      <p className="mt-4 text-darkBrown/75">The page you’re looking for does not exist.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-saffron px-6 py-3 text-white">
        Return home
      </Link>
    </section>
  );
}
