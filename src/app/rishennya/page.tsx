"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { IntroBlock } from "@/components/sections/IntroBlock";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServiceIcon } from "@/components/TowerLogo";
import { solutions } from "@/lib/solutions";

const ease = [0.16, 1, 0.3, 1] as const;

export default function RishennyaIndex() {
  return (
    <>
      <PageHeader
        eyebrow="За галузями"
        title="Рішення для вашої галузі"
        lead="Готові пакети безпеки, заточені під специфіку 7 галузей. Кожне рішення — комбінація фізичної, технічної та інформаційної охорони."
        breadcrumbs={[{ label: "Рішення" }]}
      />

      <IntroBlock
        eyebrow="Філософія"
        title="Чому ми робимо рішення за галузями"
        paragraphs={[
          "Класичні охоронні агенції пропонують один набір послуг для всіх клієнтів. Це працює, поки клієнт — типовий бізнес з типовими ризиками. Але агрохолдинг має зовсім інші виклики, ніж торгова мережа, а нафтогазовий об'єкт — зовсім інші, ніж ЖК. Спроба натягнути «універсальну охорону» на специфічний бізнес створює слабкі ланки, через які реалізуються інциденти.",
          "Тому ми будуємо рішення за галузями — пакети, що враховують реальні виклики, типовий ROI, регуляторні вимоги, особливості персоналу. Для кожної з 7 галузей у нас є власна методологія, обладнання, регламенти. Це не «маркетинговий хід» — це різні команди, з різним досвідом, що працюють з конкретною спеціалізацією.",
          "На цій сторінці — 7 готових галузевих рішень. Кожне можна замовити цілком або частково: ви платите лише за те, що дійсно потрібно вашому бізнесу.",
        ]}
      />

      <section className="f-srv">
        <div className="f-srv-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {solutions.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease }}
            >
              {s.hasPage ? (
                <Link href={`/rishennya/${s.slug}`} className="f-srv-card" style={{ height: "100%" }}>
                  <div className="f-srv-top">
                    <ServiceIcon type={s.iconType} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </Link>
              ) : (
                <div className="f-srv-card" style={{ height: "100%", cursor: "default" }}>
                  <div className="f-srv-top">
                    <ServiceIcon type={s.iconType} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <div
                    style={{
                      marginTop: 18,
                      paddingTop: 14,
                      borderTop: "1px solid var(--brd)",
                      textAlign: "right",
                    }}
                  >
                    <span style={{ font: "500 11px var(--hd2)", color: "var(--tx3)", letterSpacing: 1.5, textTransform: "uppercase" }}>
                      Скоро
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <HowItWorks
        eyebrow="Як ми працюємо"
        title="Процес впровадження галузевого рішення"
        variant="alt"
        steps={[
          { title: "Аналіз галузі", text: "Глибокий аудит вашого бізнесу в контексті галузі. Враховуємо специфіку конкурентів, регуляторів, типових інцидентів." },
          { title: "Підбір команди", text: "Формуємо команду з профільним досвідом у вашій галузі. Не «загальні охоронці», а спеціалісти." },
          { title: "Фазне впровадження", text: "Запуск рішення за фазами — критичні зони у першу чергу, далі поетапне розширення. Не зупиняємо операційну діяльність." },
          { title: "Підтримка та оптимізація", text: "Щоквартальний перегляд KPI, оптимізація системи під зміни вашого бізнесу та галузі." },
        ]}
      />

      <CTA />
    </>
  );
}
