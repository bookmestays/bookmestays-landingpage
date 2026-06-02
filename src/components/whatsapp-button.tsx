import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="hidden rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-brand-800 shadow-lg shadow-brand-900/10 transition-opacity sm:block sm:opacity-0 sm:group-hover:opacity-100">
        Chat with us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform duration-300 hover:-translate-y-0.5">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="relative h-7 w-7"
          aria-hidden="true"
        >
          <path d="M16.04 4C9.96 4 5.02 8.94 5.02 15.02c0 1.95.51 3.86 1.48 5.54L4.9 27.1l6.7-1.75a11 11 0 0 0 4.43.93h.01c6.08 0 11.02-4.94 11.02-11.02C27.06 8.94 22.12 4 16.04 4Zm0 20.2h-.01a9.16 9.16 0 0 1-4.66-1.28l-.33-.2-3.97 1.04 1.06-3.87-.22-.34a9.13 9.13 0 0 1-1.4-4.87c0-5.06 4.12-9.18 9.2-9.18 2.45 0 4.76.96 6.49 2.69a9.12 9.12 0 0 1 2.69 6.5c0 5.06-4.12 9.18-9.18 9.18Zm5.04-6.87c-.28-.14-1.63-.8-1.88-.9-.25-.09-.43-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48l-.53-.01c-.18 0-.48.07-.74.35-.25.28-.96.94-.96 2.3 0 1.35.99 2.66 1.12 2.84.14.18 1.95 2.97 4.72 4.16.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.2.16-1.31-.06-.12-.25-.19-.53-.33Z" />
        </svg>
      </span>
    </a>
  );
}
