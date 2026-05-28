import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Кейси та реалізовані проєкти — ЄКОР УКРАЇНА",
    template: "%s — ЄКОР УКРАЇНА",
  },
  description:
    "Реальні проєкти ЄКОР: охорона агрохолдингів, елеваторів, ЖК, промислових майданчиків і супровід вантажів. Цифри, підхід і результати клієнтів.",
  alternates: { canonical: "/kejsy" },
};

export default function KejsyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
