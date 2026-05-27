"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { IntroBlock } from "@/components/sections/IntroBlock";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServiceIcon } from "@/components/TowerLogo";
import { categories, servicesByCategory } from "@/lib/services";

const ease = [0.16, 1, 0.3, 1] as const;

export default function PoslugyIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Каталог"
        title="Усі послуги"
        lead="20+ послуг у 5 напрямках. Оберіть категорію — побачите конкретні послуги, ціни та умови."
        breadcrumbs={[{ label: "Послуги" }]}
      />

      <IntroBlock
        eyebrow="Структура послуг"
        title="Як ми будуємо охорону"
        paragraphs={[
          "ЄКОР — це не «охоронна агенція з універсальними людьми». Ми поділили нашу роботу на 5 чітких напрямків, кожен з власною методологією, командою, обладнанням та регламентами. Це дозволяє нам бути експертами у конкретних типах об'єктів — від сільгоспполів до бізнес-центрів класу A — а не «середнячками у всьому одразу».",
          "Кожна категорія має свою специфіку. Фізична охорона — це 9 типів стаціонарних об'єктів з різними профілями ризику. Супровід та реагування — це безпека у русі, де ставки максимальні. Технічна охорона — інженерна частина: проєктування систем, БПЛА-моніторинг, інтеграція з ERP клієнтів. Детективні послуги — окрема дисципліна з ліцензіями та юридичною підтримкою. Спеціальні послуги — це нестандартні задачі, де потрібна особиста увага керівництва.",
          "Незалежно від того, який тип послуги вам потрібен, шлях один: безкоштовний аудит → пропозиція з конкретними цифрами → договір з матеріальною відповідальністю → запуск під ключ → щомісячна звітність. Це гарантує однакову якість для всіх 21 послуги у нашому каталозі.",
        ]}
      />

      <section className="f-srv">
        <div className="f-srv-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {categories.map((cat, i) => {
            const items = servicesByCategory(cat.key);
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease }}
              >
                <Link href={`/poslugy/${cat.slug}`} className="f-srv-card" style={{ height: "100%" }}>
                  <div className="f-srv-top">
                    <ServiceIcon type={cat.iconType} />
                  </div>
                  <h3>{cat.title}</h3>
                  <p>{cat.short}</p>
                  <div
                    style={{
                      marginTop: 18,
                      paddingTop: 14,
                      borderTop: "1px solid var(--brd)",
                    }}
                  >
                    <span
                      style={{
                        font: "500 11px var(--hd2)",
                        color: "var(--g)",
                        letterSpacing: 2,
                        textTransform: "uppercase",
                      }}
                    >
                      {items.length} {items.length === 1 ? "послуга" : items.length < 5 ? "послуги" : "послуг"}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <HowItWorks
        eyebrow="Процес"
        title="Як ми починаємо співпрацю"
        variant="alt"
        steps={[
          { title: "Безкоштовний аудит", text: "Виїзд експерта на ваш об'єкт за 1-3 дні. Оцінюємо ризики, скільки постів, який режим, яке обладнання." },
          { title: "Розрахунок та пропозиція", text: "Детальна комерційна пропозиція з конкретними цифрами. Без «від» і «до» — точна вартість на місяць." },
          { title: "Договір та запуск", text: "Підписання договору з матвідповідальністю. Підбір команди, інструктаж, інсталяція обладнання. Старт — від 7 днів." },
          { title: "Підтримка та звіти", text: "Особистий менеджер, щомісячні звіти з KPI, кабінет клієнта з доступом до архіву подій 24/7." },
        ]}
      />

      <CTA />
    </>
  );
}
