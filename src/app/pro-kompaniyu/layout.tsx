import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Про компанію",
  description:
    "ЄКОР — ліцензована охоронно-детективна компанія з 2020 року. 350+ фахівців у 12 регіонах, ліцензія МВС, ключові партнери та принципи роботи.",
  alternates: { canonical: "/pro-kompaniyu" },
};

export default function ProKompaniyuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
