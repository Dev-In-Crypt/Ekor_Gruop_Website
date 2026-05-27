"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PageHeader } from "@/components/PageHeader";
import { Regions } from "@/components/sections/Regions";
import { CTA } from "@/components/CTA";
import { IntroBlock } from "@/components/sections/IntroBlock";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

const regionStats: Record<string, { objects: number; reaction: string }> = {
  kyiv: { objects: 85, reaction: "5 хв" },
  vinnycya: { objects: 24, reaction: "12 хв" },
  odesa: { objects: 31, reaction: "8 хв" },
  sumska: { objects: 14, reaction: "18 хв" },
  chernihivska: { objects: 12, reaction: "17 хв" },
  cherkaska: { objects: 16, reaction: "14 хв" },
  mykolaivska: { objects: 19, reaction: "10 хв" },
  khersonska: { objects: 8, reaction: "25 хв" },
  rivnenska: { objects: 11, reaction: "16 хв" },
  khmelnytska: { objects: 13, reaction: "15 хв" },
  lvivska: { objects: 22, reaction: "8 хв" },
  zhytomyrska: { objects: 10, reaction: "16 хв" },
};

export default function RegionyIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Географія"
        title="Регіони присутності"
        lead="Власні групи реагування у 12 регіонах України. Готові розширюватись під ваш об'єкт у будь-якій точці країни."
        breadcrumbs={[{ label: "Регіони" }]}
      />

      <IntroBlock
        eyebrow="Філософія розширення"
        title="Як ми будуємо географію"
        paragraphs={[
          "ЄКОР не намагається бути «всюди» — це не стратегія для якісної охорони. Натомість ми йдемо за клієнтом: коли великий клієнт відкриває новий регіон, ми відкриваємо туди свій офіс. Так з'явились усі наші 12 регіональних присутностей: Київ — головний офіс, Вінниччина та Черкащина — за агро-клієнтами, Одеса та Миколаївщина — за експортною логістикою, Львівщина — за західним вектором та транзитом до ЄС, прифронтові Сумщина, Чернігівщина, Херсонщина — за українським бізнесом, що залишається працювати у складних умовах.",
          "Кожен регіональний офіс має власну команду, групи реагування, локального менеджера. Це не «представництво для відмітки», а повноцінна операційна одиниця, що приймає рішення на місці без узгодження з Києвом. Час реакції на запит з регіону — 1-2 години, ГШР — від 5-25 хвилин залежно від географії та ризикового профілю.",
          "Найбільший темп зростання у 2025 році показує Львівщина (+60-80% обороту на рік) та Миколаївщина — стратегічне партнерство з ГК «Нібулон» сформувало модель повного циклу аграрної безпеки, яку ми зараз тиражуємо на інші регіони. Якщо ваш бізнес потребує охорони у регіоні, де нас зараз немає, — звертайтесь: ми оцінимо економіку та терміни розгортання.",
        ]}
      />

      <Regions />

      <section className="f-srv" style={{ paddingTop: 24 }}>
        <div style={{ textAlign: "center", maxWidth: 1320, margin: "0 auto 48px", padding: "0 56px" }}>
          <div className="f-sh-num">Список регіонів</div>
          <div className="f-sh-line" />
          <h2 style={{ font: "700 clamp(24px, 2.6vw, 36px) var(--hd2)", color: "var(--tx)" }}>
            Цифри по кожному регіону
          </h2>
        </div>
        <div className="f-srv-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {site.regions.map((r, i) => {
            const stats = regionStats[r.slug];
            return (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease }}
              >
                <Link href={`/regiony/${r.slug}`} className="f-srv-card" style={{ height: "100%" }}>
                  <h3>{r.name}</h3>
                  {stats && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
                      <div>
                        <div style={{ font: "700 28px var(--hd2)", color: "var(--g)" }}>{stats.objects}+</div>
                        <div style={{ font: "500 10px var(--hd2)", color: "var(--tx3)", letterSpacing: 1.5, textTransform: "uppercase", marginTop: 4 }}>
                          об'єктів
                        </div>
                      </div>
                      <div>
                        <div style={{ font: "700 28px var(--hd2)", color: "var(--g)" }}>{stats.reaction}</div>
                        <div style={{ font: "500 10px var(--hd2)", color: "var(--tx3)", letterSpacing: 1.5, textTransform: "uppercase", marginTop: 4 }}>
                          реагування
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
