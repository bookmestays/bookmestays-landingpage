import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — BookMeStays",
  description:
    "BookMeStays is a platform that helps travelers discover and book hotels, villas, farmhouses, resorts, and unique stays for every occasion.",
};

const values = [
  {
    title: "Carefully selected",
    desc: "We don’t list everything — we list the right things. Every property is reviewed so you can book with confidence.",
    icon: "M9 12.5l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    title: "Personal by default",
    desc: "Behind every booking is a real person ready to help you find the perfect fit for your trip and occasion.",
    icon: "M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m6-1.13a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z",
  },
  {
    title: "Honest & transparent",
    desc: "Clear pricing, straight answers and confirmed details. We tell you what to expect before you book.",
    icon: "M12 8v4m0 4h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
  },
  {
    title: "Made for every budget",
    desc: "From simple weekend escapes to standout celebrations, there’s an option to match your plans.",
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
];

const occasions = [
  "Family vacations",
  "Romantic getaways",
  "Corporate retreats",
  "Destination weddings",
  "Weekend escapes with friends",
  "Festive & milestone celebrations",
];

const stats = [
  { value: "5+", label: "Types of stays" },
  { value: "100%", label: "Handpicked listings" },
  { value: "Every", label: "Occasion covered" },
  { value: "1 goal", label: "Your perfect stay" },
];

export default function AboutPage() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-sand-200/50 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
            About Us
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-900 sm:text-5xl">
            We believe every trip deserves the{" "}
            <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">
              perfect stay
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-900/70">
            BookMeStays is a platform that helps travelers discover and book
            hotels, villas, farmhouses, resorts and unique stays for every
            occasion — making the journey from “let’s plan a trip” to “we’re
            booked” simple and stress-free.
          </p>
        </div>
      </section>

      {/* story */}
      <section className="py-18 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6 text-lg leading-relaxed text-brand-900/75">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900">
              About BookMeStays
            </h2>
            <p>
              BookMeStays is a platform that helps travelers discover and book
              hotels, villas, farmhouses, resorts, and unique stays for every
              occasion.
            </p>
            <p>
              Whether you’re planning a family vacation, a romantic getaway, a
              corporate retreat, a destination wedding, or a weekend escape with
              friends, BookMeStays connects you with carefully selected
              properties to make your stay comfortable and memorable.
            </p>
            <p>
              Our goal is to simplify the booking process by offering
              personalized assistance, transparent communication, and a wide
              range of accommodation options to suit different needs and
              budgets.
            </p>
            <p>
              We started BookMeStays with a simple belief: finding a great place
              to stay shouldn’t be complicated. Travelers were spending hours
              comparing scattered listings, second-guessing photos and chasing
              unclear answers. So we built a more human way to book — one where
              every property is vetted, every question gets a real reply, and
              every traveler feels looked after from search to check-out.
            </p>
            <p>
              Today, BookMeStays brings together a thoughtfully curated range of
              stays and the people who help you choose between them. From a
              quiet farmhouse weekend to a full-scale destination celebration,
              we’re here to make sure the place you stay adds to the memory —
              not the stress.
            </p>
            <p className="font-display text-xl font-medium text-brand-800">
              At BookMeStays, we believe every trip deserves the perfect stay.
            </p>
          </div>

          {/* mission / vision cards */}
          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-600 to-brand-800 p-7 text-white shadow-xl shadow-brand-900/15">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
                Our mission
              </span>
              <p className="mt-3 font-display text-xl leading-snug">
                To simplify the way people find and book stays — with care,
                clarity and a personal touch.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">
                Our promise
              </span>
              <ul className="mt-4 space-y-3 text-sm text-brand-900/75">
                {[
                  "Handpicked properties, not endless noise",
                  "Real assistance from real people",
                  "Transparent pricing and clear communication",
                  "Options for every occasion and budget",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        className="h-3 w-3"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* stats band */}
      <section className="bg-brand-950">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-9 text-center">
              <p className="font-display text-3xl font-semibold text-white">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-300">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
              What we stand for
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
              The values behind every booking
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 rounded-3xl border border-brand-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d={v.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* occasions */}
      <section className="bg-brand-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
            Made for the moments that matter
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-900/65">
            Whatever you’re celebrating or escaping to, we help you find a stay
            that fits the occasion.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {occasions.map((o) => (
              <span
                key={o}
                className="rounded-full border border-brand-100 bg-white px-5 py-2.5 text-sm font-medium text-brand-800 shadow-sm"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-brand-900 px-6 py-16 text-center shadow-2xl shadow-brand-900/25 sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
          <div className="relative">
            <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold text-white sm:text-4xl">
              Ready to find your perfect stay?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-brand-100/80">
              Explore handpicked stays for every occasion — your next trip is
              just a booking away.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/#stay-types"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 transition-transform hover:-translate-y-0.5"
              >
                Explore stays
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
