import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Зв'яжіться з ЄКОР: телефон цілодобово, email, головний офіс у Києві. Відповідаємо протягом 30 хвилин у робочий час. Безкоштовний аудит безпеки.",
  alternates: { canonical: "/kontakty" },
};

export default function KontaktyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
