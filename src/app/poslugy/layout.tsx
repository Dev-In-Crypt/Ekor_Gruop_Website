import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Послуги охорони та безпеки — EKOR GROUP",
    template: "%s — EKOR GROUP",
  },
  description:
    "Повний каталог послуг ЄКОР: фізична охорона, супровід і реагування, технічна охорона, детективні та спеціальні послуги по всій Україні.",
  alternates: { canonical: "/poslugy" },
};

export default function PoslugyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
