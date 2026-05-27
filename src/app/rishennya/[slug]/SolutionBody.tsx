"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Solution } from "@/lib/solutions";
import type { Service, Category } from "@/lib/services";
import { ServiceIcon } from "@/components/TowerLogo";
import { IntroBlock } from "@/components/sections/IntroBlock";

const ease = [0.16, 1, 0.3, 1] as const;

type Linked = { service: Service; category: Category };

export function SolutionBody({
  solution,
  linkedServices,
}: {
  solution: Solution;
  linkedServices: Linked[];
}) {
  return (
    <>
      {/* industry context */}
      {solution.industryContext && solution.industryContext.length > 0 && (
        <IntroBlock
          eyebrow="Про галузь"
          title="Специфіка галузі"
          paragraphs={solution.industryContext}
        />
      )}

      {/* metrics */}
      {solution.metrics && solution.metrics.length > 0 && (
        <section className="f-stats" style={{ marginTop: 0 }}>
          <div
            className="f-stats-grid"
            style={{ gridTemplateColumns: `repeat(${solution.metrics.length}, 1fr)` }}
          >
            {solution.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="f-stat vis"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="f-stat-n">{m.value}</div>
                <div className="f-stat-l">{m.label}</div>
                <div className="f-stat-bar">
                  <div
                    className="f-stat-bar-fill"
                    style={{ "--fill": "85%" } as React.CSSProperties}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* challenge → solution → outcome */}
      <section className="f-srv">
        <div className="f-srv-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            { label: "Виклик", text: solution.challenge },
            { label: "Рішення", text: solution.solution },
            { label: "Результат", text: solution.outcome },
          ]
            .filter((b) => b.text)
            .map((b, i) => (
              <motion.div
                key={b.label}
                className="f-srv-card"
                style={{ cursor: "default" }}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
              >
                <div className="f-srv-top">
                  <span
                    style={{
                      font: "600 11px var(--hd2)",
                      color: "var(--g)",
                      letterSpacing: 2.5,
                      textTransform: "uppercase",
                    }}
                  >
                    {b.label}
                  </span>
                </div>
                <p style={{ font: "300 15px/1.7 var(--bd)", color: "var(--tx)" }}>{b.text}</p>
              </motion.div>
            ))}
        </div>
      </section>

      {/* economics */}
      {solution.economics && solution.economics.length > 0 && (
        <IntroBlock
          eyebrow="Економіка"
          title="ROI безпеки для галузі"
          paragraphs={solution.economics}
          variant="alt"
        />
      )}

      {/* differentiators */}
      {solution.differentiators && solution.differentiators.length > 0 && (
        <section style={{ padding: "80px 0", background: "var(--bg)" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-diff-wrap">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="f-sh-num">Переваги</div>
              <div className="f-sh-line" />
              <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
                Чому саме ЄКОР для цієї галузі
              </h2>
            </div>
            <div className="f-diff-grid">
              {solution.differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  style={{
                    padding: "32px 28px",
                    border: "1px solid var(--brd2)",
                    background: "rgba(var(--g-rgb), .02)",
                  }}
                >
                  <div className="f-adv-num" style={{ marginBottom: 12 }}>0{i + 1}</div>
                  <h3 style={{ font: "600 17px var(--hd2)", color: "var(--tx)", marginBottom: 10 }}>
                    {d.title}
                  </h3>
                  <p style={{ font: "300 14px/1.7 var(--bd)", color: "var(--tx2)" }}>{d.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <style>{`
            .f-diff-grid {
              display: grid;
              grid-template-columns: repeat(${solution.differentiators?.length ?? 1}, 1fr);
              gap: 14px;
            }
            @media (max-width: 900px) {
              .f-diff-grid { grid-template-columns: 1fr !important; }
              .f-diff-wrap { padding: 0 24px !important; }
            }
          `}</style>
        </section>
      )}

      {/* linked services */}
      <section className="f-srv" style={{ background: "var(--bg2)" }}>
        <div style={{ textAlign: "center", maxWidth: 1320, margin: "0 auto 48px", padding: "0 56px" }}>
          <div className="f-sh-num">Послуги в пакеті</div>
          <div className="f-sh-line" />
          <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
            Що входить у рішення
          </h2>
        </div>
        <div className="f-srv-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {linkedServices.map(({ service, category }, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
            >
              <Link href={`/poslugy/${category.slug}/${service.slug}`} className="f-srv-card" style={{ height: "100%" }}>
                <div className="f-srv-top">
                  <ServiceIcon type={service.iconType} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
