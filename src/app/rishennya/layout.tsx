import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Галузеві рішення безпеки — EKOR GROUP",
    template: "%s — EKOR GROUP",
  },
  description:
    "Готові пакети безпеки під галузь: агробізнес, логістика, житло, промисловість, нафтогаз, освіта. Підбираємо охорону під специфіку вашого бізнесу.",
  alternates: { canonical: "/rishennya" },
};

export default function RishennyaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
