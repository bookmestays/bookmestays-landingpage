import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms & Conditions — BookMeStays",
  description:
    "The Terms & Conditions governing the use of the BookMeStays platform and booking services.",
};

const terms = [
  {
    title: "Platform role",
    body: "BookMeStays acts as a booking facilitation platform connecting guests with accommodation providers.",
  },
  {
    title: "Availability & confirmation",
    body: "All bookings are subject to availability and confirmation from the respective property.",
  },
  {
    title: "Accurate information",
    body: "Guests are responsible for providing accurate booking information.",
  },
  {
    title: "Property policies",
    body: "Property rules, check-in/check-out timings, occupancy limits, and other policies are determined by the respective property and must be followed by guests.",
  },
  {
    title: "Cancellations & refunds",
    body: "Cancellation and refund policies may vary by property and will be communicated at the time of booking.",
  },
  {
    title: "Limitation of liability",
    body: "BookMeStays is not responsible for any loss, damage, injury, or inconvenience arising from the use of services provided by third-party accommodation partners.",
  },
  {
    title: "Damages",
    body: "Guests are responsible for any damages caused to the property during their stay and may be charged accordingly by the property owner.",
  },
  {
    title: "Pricing",
    body: "Prices displayed or communicated are subject to change until a booking is confirmed.",
  },
  {
    title: "Agreement to terms",
    body: "By using our website or booking services, users agree to comply with these Terms & Conditions.",
  },
  {
    title: "Updates to terms",
    body: "BookMeStays reserves the right to update or modify these Terms & Conditions at any time without prior notice.",
  },
];

export default function TermsPage() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="relative mx-auto max-w-4xl px-5 py-18 text-center sm:px-8 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
            Legal
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-900/70">
            Please read these terms carefully. They govern your use of the
            BookMeStays website and booking services.
          </p>
          <p className="mt-4 text-sm text-brand-900/50">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* terms list */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="grid gap-5">
            {terms.map((t, i) => (
              <div
                key={t.title}
                className="group flex gap-5 rounded-2xl border border-brand-100 bg-white p-6 transition-colors hover:border-brand-200 hover:bg-brand-50/40 sm:p-7"
              >
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-brand-600 font-display text-sm font-semibold text-white shadow-sm shadow-brand-600/20">
                  {i + 1}
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold text-brand-900">
                    {t.title}
                  </h2>
                  <p className="mt-1.5 leading-relaxed text-brand-900/70">
                    {t.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* contact note */}
          <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50/70 p-7 text-center">
            <h3 className="font-display text-lg font-semibold text-brand-900">
              Questions about these terms?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-brand-900/65">
              If anything here is unclear, our team is happy to help before you
              book. Reach out and we’ll walk you through it.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Contact us
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
              >
                About BookMeStays
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
