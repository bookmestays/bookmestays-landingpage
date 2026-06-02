import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contact";

/* ---------------------------------- data --------------------------------- */

const stayTypes = [
  {
    name: "Hotels",
    desc: "City-centre comfort with on-demand service and easy check-in.",
    accent: "from-brand-500 to-brand-700",
    icon: (
      <path
        d="M3 21V7l9-4 9 4v14M3 21h18M8 21v-4h8v4M7 10h.01M12 10h.01M17 10h.01M7 14h.01M17 14h.01"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Villas",
    desc: "Private space, pools and full kitchens for the whole group.",
    accent: "from-emerald-500 to-brand-600",
    icon: (
      <path
        d="M3 11.5 12 4l9 7.5M5 10v10h14V10M9 20v-5h6v5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Farmhouses",
    desc: "Rustic escapes surrounded by greenery, away from the rush.",
    accent: "from-sand-400 to-sand-600",
    icon: (
      <path
        d="M4 21V9l8-5 8 5v12M4 21h16M9 21v-6h6v6M3 9l9-6 9 6"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Resorts",
    desc: "All-in-one getaways with dining, leisure and a view to match.",
    accent: "from-teal-500 to-brand-700",
    icon: (
      <path
        d="M12 3v4m0 0a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5ZM4 21h16M7 12v9M17 12v9"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Unique stays",
    desc: "Treehouses, tents and heritage homes for one-of-a-kind trips.",
    accent: "from-brand-600 to-brand-900",
    icon: (
      <path
        d="m12 3 9 18H3L12 3ZM12 13v8M8 21l4-8 4 8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const features = [
  {
    title: "Handpicked properties",
    desc: "Every stay is carefully selected and reviewed, so you book with confidence — not guesswork.",
    icon: "M9 12.5l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    title: "Personalized assistance",
    desc: "Real people help you find the right fit, answer questions and tailor your stay to the occasion.",
    icon: "M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m6-1.13a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z",
  },
  {
    title: "Transparent communication",
    desc: "Clear pricing, honest details and confirmed bookings — no hidden surprises along the way.",
    icon: "M8 10h8M8 14h5m-9 7 3.5-3H17a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v14Z",
  },
  {
    title: "Stays for every budget",
    desc: "From weekend escapes to luxury retreats, find a wide range of options that suit your plans.",
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
];

const occasions = [
  { title: "Family vacations", emoji: "🧳" },
  { title: "Romantic getaways", emoji: "💞" },
  { title: "Corporate retreats", emoji: "💼" },
  { title: "Destination weddings", emoji: "💍" },
  { title: "Weekend escapes", emoji: "🌿" },
  { title: "Friends' trips", emoji: "🎒" },
];

const steps = [
  {
    n: "01",
    title: "Tell us your plan",
    desc: "Share your destination, dates, group size and the occasion you're planning for.",
  },
  {
    n: "02",
    title: "Get matched",
    desc: "We surface handpicked properties that fit your needs, style and budget.",
  },
  {
    n: "03",
    title: "Stay, simply booked",
    desc: "Confirm with transparent pricing and clear communication — then pack your bags.",
  },
];

const stats = [
  { value: "5+", label: "Types of stays" },
  { value: "100%", label: "Handpicked properties" },
  { value: "24/7", label: "Booking assistance" },
  { value: "1", label: "Perfect stay, every trip" },
];

/* ------------------------------- components ------------------------------ */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
      {children}
    </span>
  );
}

/* ---------------------------------- page --------------------------------- */

export default function Home() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-sand-200/50 blur-3xl animate-float-slower" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
          <div className="animate-fade-up">
            <Pill>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
              The Book My Stay
            </Pill>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
              Your perfect stay,
              <span className="relative whitespace-nowrap">
                {" "}
                <span className="relative z-10 bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">
                  simply booked
                </span>
                <svg
                  viewBox="0 0 300 14"
                  className="absolute -bottom-1 left-0 z-0 h-3 w-full text-brand-300"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 11C60 4 120 4 160 7c40 3 90 3 138-3"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-900/70">
              BookMeStays helps you discover and book hotels, villas,
              farmhouses, resorts and unique stays — for every occasion, and
              every budget. Carefully selected properties, personalized
              assistance, no surprises.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#stay-types"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Explore stays
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                  <path
                    d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition-all hover:border-brand-300 hover:bg-brand-50"
              >
                How it works
              </Link>
            </div>

            {/* search-style strip */}
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brand-100 bg-brand-100 shadow-lg shadow-brand-900/5 sm:grid-cols-4">
              {[
                { k: "Destination", v: "Anywhere" },
                { k: "Stay type", v: "All stays" },
                { k: "Occasion", v: "Any" },
                { k: "Guests", v: "Flexible" },
              ].map((f) => (
                <div key={f.k} className="bg-white px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-400">
                    {f.k}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-brand-800">
                    {f.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual — layered cards */}
          <div className="relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute inset-0 -rotate-6 rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-800 shadow-2xl shadow-brand-900/30" />
            <div className="relative rounded-[2rem] border border-white/40 bg-white/95 p-6 shadow-2xl shadow-brand-900/20 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                  Featured stay
                </span>
                <span className="text-xs font-medium text-brand-400">
                  ★ Handpicked
                </span>
              </div>
              <div className="mt-4 aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 via-brand-50 to-sand-100">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 bg-grid opacity-60" />
                  <svg
                    viewBox="0 0 200 150"
                    className="absolute inset-x-0 bottom-0 w-full text-brand-300"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 110 Q40 70 80 95 T160 80 L200 100 V150 H0 Z"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    <path
                      d="M0 125 Q50 100 100 118 T200 112 V150 H0 Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-sand-300/80 text-2xl">
                    🏝️
                  </span>
                </div>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-brand-900">
                Seaside Villa Retreat
              </h3>
              <p className="mt-1 text-sm text-brand-900/60">
                Private pool · Sleeps 8 · Perfect for family vacations
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-brand-50 pt-4">
                <span className="text-sm text-brand-900/60">
                  From{" "}
                  <span className="font-display text-lg font-semibold text-brand-800">
                    your budget
                  </span>
                </span>
                <span className="rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white">
                  Book now
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-8 animate-float-slower rounded-2xl border border-brand-100 bg-white px-4 py-3 shadow-xl shadow-brand-900/10">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-400">
                Booking confirmed
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-brand-800">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </span>
                Simply booked
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== STATS ============================== */}
      <section className="border-y border-brand-100 bg-brand-950">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-8 text-center sm:py-10">
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-300 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================== STAY TYPES =========================== */}
      <section id="stay-types" className="relative scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Pill>Stays for everyone</Pill>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
              Find the kind of stay you’re dreaming of
            </h2>
            <p className="mt-4 text-lg text-brand-900/65">
              From buzzing city hotels to quiet farmhouse escapes, we connect
              you with a wide range of accommodation options.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stayTypes.map((t, i) => (
              <div
                key={t.name}
                className={`group relative overflow-hidden rounded-3xl border border-brand-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 ${
                  i === 0 ? "lg:row-span-2 lg:flex lg:flex-col" : ""
                }`}
              >
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${t.accent} text-white shadow-lg`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    {t.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-900">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
                  {t.desc}
                </p>
                {i === 0 && (
                  <div className="mt-auto pt-6">
                    <div className="rounded-2xl bg-brand-50 p-4 text-sm text-brand-700">
                      <p className="font-semibold">Not sure where to start?</p>
                      <p className="mt-1 text-brand-700/80">
                        Tell us the occasion and we’ll match you with the right
                        property.
                      </p>
                    </div>
                  </div>
                )}
                <span className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ OCCASIONS ============================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 to-brand-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.07]" />
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
                Every occasion
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Whatever you’re planning, there’s a stay for it
              </h2>
              <p className="mt-4 max-w-md text-lg text-brand-100/70">
                Family vacation or destination wedding, corporate retreat or
                weekend escape with friends — BookMeStays helps make every trip
                comfortable and memorable.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-transform hover:-translate-y-0.5"
              >
                Learn more about us
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                  <path
                    d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {occasions.map((o) => (
                <div
                  key={o.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <span className="text-2xl">{o.emoji}</span>
                  <p className="mt-3 text-sm font-semibold leading-snug">
                    {o.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ FEATURES ============================ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Pill>Why BookMeStays</Pill>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
              Booking made simple, personal and clear
            </h2>
            <p className="mt-4 text-lg text-brand-900/65">
              We simplify the booking process so you can focus on the trip — not
              the logistics.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-brand-100 bg-gradient-to-b from-white to-brand-50/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d={f.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-brand-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== STEPS ============================== */}
      <section className="bg-brand-50/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Pill>How it works</Pill>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
              Three simple steps to your perfect stay
            </h2>
          </div>

          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent md:block" />
            {steps.map((s) => (
              <div key={s.n} className="relative text-center md:text-left">
                <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-2xl border border-brand-100 bg-white font-display text-2xl font-semibold text-brand-600 shadow-sm md:mx-0">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== CTA =============================== */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-6 py-16 text-center shadow-2xl shadow-brand-900/30 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-sand-400/20 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Every trip deserves the perfect stay
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100/80">
              Tell us where you’re headed and what you’re celebrating — we’ll
              handle the rest. Your perfect stay, simply booked.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="#stay-types"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 transition-transform hover:-translate-y-0.5"
              >
                Start exploring
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to our team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
