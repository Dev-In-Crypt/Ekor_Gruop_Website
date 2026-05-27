"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Category, Service } from "@/lib/services";
import { ServiceIcon } from "@/components/TowerLogo";
import { IntroBlock } from "@/components/sections/IntroBlock";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FactsRow } from "@/components/sections/FactsRow";

const ease = [0.16, 1, 0.3, 1] as const;

export function CategoryBody({ category, services }: { category: Category; services: Service[] }) {
  return (
    <>
      {category.intro && category.intro.length > 0 && (
        <IntroBlock
          eyebrow="Про напрямок"
          title={`Чому ${category.title.toLowerCase()} — окрема дисципліна`}
          paragraphs={category.intro}
        />
      )}

      {category.industryFacts && category.industryFacts.length > 0 && (
        <FactsRow facts={category.industryFacts} variant="alt" />
      )}

      <section className="f-srv">
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto 48px",
            padding: "0 56px",
            textAlign: "center",
          }}
        >
          <div className="f-sh-num">Послуги напрямку</div>
          <div className="f-sh-line" />
          <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
            Конкретні послуги
          </h2>
        </div>

        <div className="f-srv-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease }}
            >
              <Link
                href={`/poslugy/${category.slug}/${s.slug}`}
                className="f-srv-card"
                style={{ height: "100%" }}
              >
                <div className="f-srv-top">
                  <ServiceIcon type={s.iconType} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                {s.priceFrom && (
                  <div
                    style={{
                      marginTop: 18,
                      paddingTop: 14,
                      borderTop: "1px solid var(--brd)",
                    }}
                  >
                    <span style={{ font: "500 11px var(--hd2)", color: "var(--g)", letterSpacing: 1.5, textTransform: "uppercase" }}>
                      {s.priceFrom}
                    </span>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {category.howItWorks && category.howItWorks.length > 0 && (
        <HowItWorks
          eyebrow="Процес"
          title="Як ми працюємо у цьому напрямку"
          steps={category.howItWorks}
          variant="alt"
        />
      )}

      {category.whyChooseUs && category.whyChooseUs.length > 0 && (
        <section style={{ padding: "80px 0", background: "var(--bg)" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-why-wrap">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="f-sh-num">Переваги</div>
              <div className="f-sh-line" />
              <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
                Чому варто обирати ЄКОР
              </h2>
            </div>
            <div className="f-why-grid">
              {category.whyChooseUs.map((w, i) => (
                <motion.div
                  key={w.title}
                  className="f-adv-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  style={{ display: "block" }}
                >
                  <div className="f-adv-num" style={{ marginBottom: 12 }}>0{i + 1}</div>
                  <div>
                    <h3 style={{ font: "600 17px var(--hd2)", color: "var(--tx)", marginBottom: 10 }}>
                      {w.title}
                    </h3>
                    <p style={{ font: "300 14px/1.7 var(--bd)", color: "var(--tx2)" }}>
                      {w.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <style>{`
            .f-why-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 14px;
            }
            @media (max-width: 768px) {
              .f-why-grid { grid-template-columns: 1fr; }
              .f-why-wrap { padding: 0 24px !important; }
            }
          `}</style>
        </section>
      )}
    </>
  );
}
