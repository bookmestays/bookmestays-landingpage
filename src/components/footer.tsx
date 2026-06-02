import Link from "next/link";
import { Logo } from "./logo";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, INSTAGRAM_URL } from "@/lib/contact";

const stayTypes = ["Hotels", "Villas", "Farmhouses", "Resorts", "Unique stays"];
const occasions = [
  "Family vacations",
  "Romantic getaways",
  "Corporate retreats",
  "Destination weddings",
  "Weekend escapes",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-700/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-brand-100/70">
              Your perfect stay, simply booked. We connect travelers with
              carefully selected properties for every occasion and budget.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow BookMeStays on Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-brand-100/80 transition-colors hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with BookMeStays on WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-brand-100/80 transition-colors hover:bg-[#25D366] hover:text-white"
              >
                <svg viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M16.04 4C9.96 4 5.02 8.94 5.02 15.02c0 1.95.51 3.86 1.48 5.54L4.9 27.1l6.7-1.75a11 11 0 0 0 4.43.93h.01c6.08 0 11.02-4.94 11.02-11.02C27.06 8.94 22.12 4 16.04 4Zm5.04 13.33c-.28-.14-1.63-.8-1.88-.9-.25-.09-.43-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48l-.53-.01c-.18 0-.48.07-.74.35-.25.28-.96.94-.96 2.3 0 1.35.99 2.66 1.12 2.84.14.18 1.95 2.97 4.72 4.16.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.2.16-1.31-.06-.12-.25-.19-.53-.33Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Stay types
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {stayTypes.map((t) => (
                <li key={t}>
                  <Link
                    href="/#stay-types"
                    className="text-brand-100/70 transition-colors hover:text-white"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              For every occasion
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {occasions.map((t) => (
                <li key={t} className="text-brand-100/70">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-brand-100/70 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-brand-100/70 transition-colors hover:text-white"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@bookmestays.com"
                  className="text-brand-100/70 transition-colors hover:text-white"
                >
                  hello@bookmestays.com
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-100/70 transition-colors hover:text-white"
                >
                  <svg
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="h-4 w-4 text-[#25D366]"
                    aria-hidden="true"
                  >
                    <path d="M16.04 4C9.96 4 5.02 8.94 5.02 15.02c0 1.95.51 3.86 1.48 5.54L4.9 27.1l6.7-1.75a11 11 0 0 0 4.43.93h.01c6.08 0 11.02-4.94 11.02-11.02C27.06 8.94 22.12 4 16.04 4Zm5.04 13.33c-.28-.14-1.63-.8-1.88-.9-.25-.09-.43-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48l-.53-.01c-.18 0-.48.07-.74.35-.25.28-.96.94-.96 2.3 0 1.35.99 2.66 1.12 2.84.14.18 1.95 2.97 4.72 4.16.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.2.16-1.31-.06-.12-.25-.19-.53-.33Z" />
                  </svg>
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-brand-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} BookMeStays. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400" />
            Crafted for travelers who love a perfect stay.
          </p>
        </div>
      </div>
    </footer>
  );
}
