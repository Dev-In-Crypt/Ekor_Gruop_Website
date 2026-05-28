import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дякуємо за заявку",
  description: "Дякуємо! Менеджер ЄКОР зв'яжеться з вами найближчим часом.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/dyakuyemo" },
};

export default function DyakuyemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
