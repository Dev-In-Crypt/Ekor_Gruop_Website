import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Регіони присутності — EKOR GROUP",
    template: "%s — EKOR GROUP",
  },
  description:
    "Власні групи реагування у 12 регіонах України — Київ, Одеса, Львів, Миколаїв, Вінниця та інші. Готові розгорнути охорону у будь-якій точці країни.",
  alternates: { canonical: "/regiony" },
};

export default function RegionyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
