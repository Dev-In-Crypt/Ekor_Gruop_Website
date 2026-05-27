import Link from "next/link";

interface LogoProps {
  variant?: "header" | "footer";
}

export function Logo({ variant = "header" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="EKOR GROUP — на головну"
      className="inline-flex items-center gap-3 text-[var(--color-gold)] transition-opacity hover:opacity-85"
    >
      <span className="inline-block h-9 w-9">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <path d="M6 28V14L10 11V6L13 4L16 6V10H19V6L22 4L25 6V11L29 14V28H6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
          <rect x="13" y="20" width="4" height="6" fill="currentColor"/>
          <rect x="10" y="16" width="2" height="2" fill="currentColor"/>
          <rect x="20" y="16" width="2" height="2" fill="currentColor"/>
          <rect x="14.5" y="14" width="2" height="2" fill="currentColor"/>
          <path d="M11 4V2M14 4V2M21 4V2M24 4V2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </span>
      <span
        className="flex flex-col leading-none"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}
      >
        <span
          className="text-[var(--color-text-strong)]"
          style={{ fontSize: variant === "footer" ? "24px" : "22px" }}
        >
          EKOR
        </span>
        <span
          className="mt-[3px] text-[11px] text-[var(--color-gold)]"
          style={{ letterSpacing: "0.38em" }}
        >
          GROUP
        </span>
      </span>
    </Link>
  );
}
