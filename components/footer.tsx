import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-white/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-2xl text-darkBrown">{site.name}</h2>
          <p className="mt-3 max-w-sm text-sm text-darkBrown/75">{site.description}</p>
        </div>
        <div>
          <h3 className="font-medium text-darkBrown">Contact</h3>
          <p className="mt-3 text-sm text-darkBrown/75">{site.address}</p>
          <p className="text-sm text-darkBrown/75">{site.phone}</p>
          <p className="text-sm text-darkBrown/75">{site.email}</p>
        </div>
        <div>
          <h3 className="font-medium text-darkBrown">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-darkBrown/75">
            <Link href="/visit">Visit</Link>
            <Link href="/events">Events</Link>
            <Link href="/donate">Donate</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-xs text-darkBrown/60">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
