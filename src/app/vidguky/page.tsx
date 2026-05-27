import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { testimonials, testimonialIndustries } from "@/lib/testimonials";
import { ReviewsBoard } from "./ReviewsBoard";

export const metadata: Metadata = {
  title: "Відгуки клієнтів",
  description:
    "Реальні відгуки керівників безпеки, власників бізнесу та ОСББ про роботу ЄКОР. Середній рейтинг 4.9 з 5, 12 верифікованих відгуків.",
};

export default function VidgukyPage() {
  const total = testimonials.length;
  const avg = testimonials.reduce((s, t) => s + (t.rating || 5), 0) / total;

  return (
    <>
      <PageHeader
        eyebrow="Відгуки"
        title="Що про нас кажуть"
        lead="Прямі відгуки керівників безпеки та власників бізнесу, з якими ми працюємо щодня. Фільтруйте за галуззю — оберіть саме ваш кейс."
        breadcrumbs={[{ label: "Відгуки" }]}
      />

      <section
        style={{
          padding: "60px 0",
          background: "var(--bg2)",
          borderBottom: "1px solid var(--brd)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "0 56px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 24,
            textAlign: "center",
          }}
        >
          <Stat value={`${avg.toFixed(1)} ★`} label="Середній рейтинг" />
          <Stat value={`${total}`} label="Верифікованих відгуків" />
          <Stat value="100%" label="Реальні клієнти" />
          <Stat value="2020+" label="Працюємо з" />
        </div>
      </section>

      <ReviewsBoard items={testimonials} industries={testimonialIndustries} />

      <CTA
        title="Хочете додати свій відгук?"
        text="Залиште заявку — наш менеджер зв'яжеться з вами після завершення першого місяця співпраці."
      />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div
        style={{
          font: "700 clamp(28px, 3.2vw, 42px) var(--hd2)",
          color: "var(--g)",
          lineHeight: 1,
          letterSpacing: -0.5,
        }}
      >
        {value}
      </div>
      <div
        style={{
          font: "500 11px var(--hd2)",
          color: "var(--tx3)",
          letterSpacing: 2,
          textTransform: "uppercase",
          marginTop: 8,
        }}
      >
        {label}
      </div>
    </div>
  );
}
