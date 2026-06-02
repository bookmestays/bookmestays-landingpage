import Link from "next/link";

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const textColor = tone === "light" ? "text-white" : "text-brand-900";
  const subColor = tone === "light" ? "text-white/70" : "text-brand-500";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="The Book My Stay — home"
    >
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-600/20 transition-transform duration-300 group-hover:-rotate-6">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-white"
          aria-hidden="true"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
            fill="currentColor"
            opacity="0.25"
          />
          <path
            d="M12 22s7-7.75 7-13a7 7 0 1 0-14 0c0 5.25 7 13 7 13Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9" r="2.4" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-semibold tracking-tight ${textColor}`}>
          BookMeStays
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.18em] ${subColor}`}>
          The Book My Stay
        </span>
      </span>
    </Link>
  );
}
