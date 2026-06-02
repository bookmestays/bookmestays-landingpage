import Link from "next/link";
import Image from "next/image";

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${
        tone === "light"
          ? "rounded-xl bg-white px-3 py-2 shadow-sm"
          : ""
      } ${className}`}
      aria-label="BookMeStays — home"
    >
      <Image
        src="/logo-trimmed.png"
        alt="BookMeStays — your perfect stay, simply booked"
        width={660}
        height={379}
        priority
        className="h-11 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </Link>
  );
}
