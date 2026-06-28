import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const pages: Record<string, { title: string; body: string }> = {
  "about": { title: "About", body: "ISKCON Miami serves as a spiritual and cultural sanctuary with daily worship, education, and community service." },
  "temple": { title: "Temple", body: "Discover the temple, deities, services, and the devotional rhythms that shape the daily experience." },
  "visit": { title: "Visit", body: "Plan your visit with hours, directions, dress guidance, parking, and etiquette suggestions." },
  "temple-schedule": { title: "Temple Schedule", body: "A daily schedule of Mangala Arati, Tulasi Puja, Guru Puja, Bhagavatam, Darshan, Lunch, and Evening Arati." },
  "daily-darshan": { title: "Daily Darshan", body: "See today’s darshan and reflect on the temple's devotional atmosphere." },
  "deities": { title: "Deities", body: "Meet Sri Sri Radha Gopinath and the sacred form at the center of temple worship." },
  "history": { title: "History", body: "Learn the story of how ISKCON Miami grew into a vibrant devotional community." },
  "founder": { title: "Founder", body: "Explore the legacy of Srila A.C. Bhaktivedanta Swami Prabhupada." },
  "philosophy": { title: "Philosophy", body: "Read about bhakti yoga, service, meditation, and spiritual practice." },
  "bhagavad-gita": { title: "Bhagavad Gita", body: "Study the timeless teachings of the Bhagavad Gita with curated resources and classes." },
  "bhagavatam": { title: "Bhagavatam", body: "Follow the Srimad Bhagavatam through lectures, reading, and community discussion." },
  "classes": { title: "Classes", body: "Find youth classes, adult study circles, and philosophical workshops." },
  "youth": { title: "Youth", body: "Programs designed to help young devotees build friendship, confidence, and practice." },
  "children": { title: "Children", body: "Joyful learning for children through stories, music, and devotional activities." },
  "sunday-feast": { title: "Sunday Feast", body: "Join the Sunday feast for kirtan, class, prasadam, and community connection." },
  "festivals": { title: "Festivals", body: "Celebrate Janmashtami, Gaura Purnima, Ratha Yatra, and other sacred festivals." },
  "calendar": { title: "Calendar", body: "Browse a yearly view of important temple programs and festival dates." },
  "events": { title: "Events", body: "Browse temple events, festival celebrations, and community gatherings throughout the year." },
  "blog": { title: "Blog", body: "Read temple reflections, announcements, and spiritual articles in MDX-ready form." },
  "media": { title: "Media", body: "Explore photos, videos, livestreams, and temple storytelling in a beautiful media hub." },
  "photos": { title: "Photos", body: "View albums from festivals, services, and temple life." },
  "videos": { title: "Videos", body: "Watch classes, kirtans, and selected devotional videos." },
  "livestream": { title: "Livestream", body: "Follow live temple programming when a program is available." },
  "volunteer": { title: "Volunteer", body: "Serve through cooking, cleaning, media, book distribution, and festival support." },
  "donate": { title: "Donate", body: "Support temple programs, festivals, education, and care for the community through one-time or monthly giving." },
  "contact": { title: "Contact", body: "Reach the temple by phone, email, or contact form for visits, events, and service opportunities." },
  "faq": { title: "FAQ", body: "Find answers to common questions about visiting, worship, donations, and community life." },
  "privacy-policy": { title: "Privacy Policy", body: "This site respects visitor privacy and explains how forms and analytics are handled." }
};

function keyFromSlug(slug: string[] | undefined) {
  return (slug ?? []).join("-").toLowerCase();
}

export default function CatchAllPage({ params }: { params: { slug?: string[] } }) {
  const { slug } = params;
  const key = keyFromSlug(slug);
  if (!key) {
    return notFound();
  }
  const page = pages[key];
  if (!page) notFound();
  return (
    <>
      <PageShell title={page.title} body={page.body} />
      <div className="mx-auto max-w-4xl px-4 pb-20">
        <Link href="/" className="text-saffron underline">
          Back home
        </Link>
      </div>
    </>
  );
}
