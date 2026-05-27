"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { IntroBlock } from "@/components/sections/IntroBlock";
import { ShieldIcon } from "@/components/TowerLogo";
import { cases } from "@/lib/cases";

const ease = [0.16, 1, 0.3, 1] as const;

export default function KejsyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Портфоліо"
        title="Кейси та проєкти"
        lead="Підбірка реалізованих проєктів. Цифри, тривалість, результат — без води."
        breadcrumbs={[{ label: "Кейси" }]}
      />

      <IntroBlock
        eyebrow="Підхід"
        title="Як ми працюємо з кейсами"
        paragraphs={[
          "Кейс — не маркетинговий матеріал, а доказова база. Кожен кейс на цій сторінці — реальний проєкт з конкретними метриками, термінами, цифрами економії. Ми не публікуємо «успіхи» без цифр і не приховуємо складнощі — якщо проєкт мав фази налагодження або перевідкритий контракт, це описано чесно.",
          "Деякі кейси ми не можемо публікувати з повним розкриттям через NDA з клієнтами. У таких випадках називаємо галузь та цифри, але приховуємо назву компанії. Це принципова частина нашої роботи — конфіденційність клієнтів стоїть вище за маркетингові цілі.",
          "Якщо хочете дізнатись більше про конкретний кейс або поговорити з нашим клієнтом — звертайтесь. У більшості випадків клієнти готові дати рекомендацію по телефону у разі серйозних переговорів.",
        ]}
      />

      <section className="f-cases">
        <div className="f-cases-grid">
          {cases.map((c, i) => (
            <motion.div
              key={c.slug}
              className="f-case"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease }}
            >
              <Link href={`/kejsy/${c.slug}`} style={{ display: "block", color: "inherit" }}>
              <div className="f-case-top" />
              <div className="f-case-body">
                <span className="f-case-tag">
                  <ShieldIcon />
                  {c.category}
                </span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <div className="f-case-stats">
                  {c.metrics.slice(0, 4).map((m) => (
                    <div className="f-case-stat" key={m.label}>
                      <div className="f-case-stat-v">{m.value}</div>
                      <div className="f-case-stat-l">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
