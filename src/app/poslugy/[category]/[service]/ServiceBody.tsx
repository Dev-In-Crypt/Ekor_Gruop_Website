"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import type { Category, Service } from "@/lib/services";
import { ServiceIcon, ShieldIcon } from "@/components/TowerLogo";
import { cases } from "@/lib/cases";
import { IntroBlock } from "@/components/sections/IntroBlock";
import { EquipmentList } from "@/components/sections/EquipmentList";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  { n: "01", t: "Безкоштовний аудит", d: "Виїзд фахівця на об'єкт, оцінка ризиків, ТЗ." },
  { n: "02", t: "Комерційна пропозиція", d: "Розрахунок вартості, обладнання, регламентів." },
  { n: "03", t: "Договір та розгортання", d: "SLA, матеріальна відповідальність, підбір команди, запуск 24/7." },
  { n: "04", t: "Підтримка та звітність", d: "Особистий менеджер, щомісячні звіти, кабінет клієнта." },
];

export function ServiceBody({
  service,
  category,
  related,
}: {
  service: Service;
  category: Category;
  related: Service[];
}) {
  const caseItem = service.caseRef ? cases.find((c) => c.slug === service.caseRef) : null;

  return (
    <>
      {/* highlights */}
      <section className="f-srv">
        <div className="f-srv-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {service.highlights.map((h, i) => (
            <motion.div
              key={h.num}
              className="f-srv-card"
              style={{ cursor: "default" }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
            >
              <h3 style={{ marginBottom: 0 }}>{h.text}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* problem */}
      {service.problem && (
        <section className="f-svc-body" style={{ paddingTop: 24, paddingBottom: 24 }}>
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              padding: "0 56px",
              display: "grid",
              gridTemplateColumns: "minmax(140px, 220px) 1fr",
              gap: 40,
              alignItems: "start",
            }}
            className="f-problem-grid"
          >
            <div>
              <div className="f-sh-num" style={{ marginBottom: 8 }}>Проблема</div>
              <div className="f-sh-line" style={{ margin: 0 }} />
            </div>
            <motion.p
              style={{ font: "300 18px/1.7 var(--bd)", color: "var(--tx)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease }}
            >
              {service.problem}
            </motion.p>
          </div>
        </section>
      )}

      {/* deep about */}
      {service.deepAbout && service.deepAbout.length > 0 && (
        <IntroBlock
          eyebrow="Як це працює"
          title="Глибокий розбір послуги"
          paragraphs={service.deepAbout}
          variant="alt"
        />
      )}

      {/* about + aside */}
      <section className="f-svc-body">
        <div className="f-svc-grid">
          <div>
            <h2 className="f-svc-h2">Як ми вирішуємо</h2>
            <p className="f-svc-lead">{service.about}</p>

            {service.included && service.included.length > 0 && (
              <>
                <h2 className="f-svc-h2" style={{ marginTop: 56 }}>
                  Що входить у послугу
                </h2>
                <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {service.included.map((it, i) => (
                    <motion.li
                      key={i}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "24px 1fr",
                        gap: 14,
                        padding: "12px 0",
                        borderBottom: "1px solid var(--brd)",
                        font: "400 15px/1.6 var(--bd)",
                        color: "var(--tx)",
                      }}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: i * 0.05, ease }}
                    >
                      <span style={{ color: "var(--g)", paddingTop: 4 }}>
                        <ShieldIcon />
                      </span>
                      <span>{it}</span>
                    </motion.li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="f-svc-h2" style={{ marginTop: 56 }}>
              Як ми працюємо
            </h2>
            <div className="f-svc-steps">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  className="f-svc-step"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                >
                  <span className="f-svc-step-n">{s.n}</span>
                  <div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <aside className="f-svc-aside">
            <h4>Підходить для</h4>
            <ul>
              {service.forWho.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            {service.risks && service.risks.length > 0 && (
              <>
                <h4 style={{ marginTop: 24 }}>Закриваємо ризики</h4>
                <ul>
                  {service.risks.map((r) => (
                    <li key={r}>✓ {r}</li>
                  ))}
                </ul>
              </>
            )}
            {service.priceFrom && (
              <div style={{ marginTop: 16, padding: "14px 0", borderTop: "1px solid var(--brd)" }}>
                <div
                  style={{
                    font: "500 11px var(--hd2)",
                    color: "var(--tx3)",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Вартість
                </div>
                <div style={{ font: "700 22px var(--hd2)", color: "var(--g)" }}>{service.priceFrom}</div>
              </div>
            )}
            <Link
              href="/kontakty"
              className="f-btn-gold"
              style={{ width: "100%", justifyContent: "center", marginTop: 24 }}
            >
              Безкоштовний аудит
            </Link>
          </aside>
        </div>
      </section>

      {/* Equipment */}
      {service.equipment && service.equipment.length > 0 && (
        <EquipmentList items={service.equipment} />
      )}

      {/* Regulations */}
      {service.regulations && service.regulations.length > 0 && (
        <section style={{ padding: "80px 0", background: "var(--bg)" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-reg-wrap">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="f-sh-num">Регламент</div>
              <div className="f-sh-line" />
              <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
                Як ми працюємо юридично та технічно
              </h2>
            </div>
            <div className="f-reg-grid">
              {service.regulations.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  style={{
                    padding: "28px",
                    border: "1px solid var(--brd)",
                    background: "var(--bg2)",
                  }}
                >
                  <h3 style={{ font: "600 16px var(--hd2)", color: "var(--g-lt)", marginBottom: 10 }}>
                    {r.title}
                  </h3>
                  <p style={{ font: "300 14px/1.65 var(--bd)", color: "var(--tx2)" }}>{r.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <style>{`
            .f-reg-grid {
              display: grid;
              grid-template-columns: repeat(${service.regulations?.length ?? 1}, 1fr);
              gap: 14px;
            }
            @media (max-width: 900px) {
              .f-reg-grid { grid-template-columns: 1fr !important; }
              .f-reg-wrap { padding: 0 24px !important; }
            }
          `}</style>
        </section>
      )}

      {/* case ref */}
      {caseItem && (
        <section className="f-cases">
          <div
            style={{
              textAlign: "center",
              maxWidth: 1320,
              margin: "0 auto 48px",
              padding: "0 56px",
            }}
          >
            <div className="f-sh-num">Наш досвід</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
              Як це працювало у проєкті
            </h2>
          </div>
          <div className="f-cases-grid" style={{ gridTemplateColumns: "1fr" }}>
            <motion.div
              className="f-case"
              style={{ maxWidth: 800, margin: "0 auto", width: "100%" }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="f-case-top" />
              <div className="f-case-body">
                <span className="f-case-tag">
                  <ShieldIcon />
                  {caseItem.category}
                </span>
                <h3>{caseItem.title}</h3>
                <p>{caseItem.description}</p>
                <div className="f-case-stats" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                  {caseItem.metrics.slice(0, 3).map((m) => (
                    <div className="f-case-stat" key={m.label}>
                      <div className="f-case-stat-v">{m.value}</div>
                      <div className="f-case-stat-l">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && <FAQ items={service.faq} />}

      {/* related */}
      {related.length > 0 && (
        <section className="f-srv" style={{ background: "var(--bg2)" }}>
          <div style={{ textAlign: "center", maxWidth: 1320, margin: "0 auto 48px", padding: "0 56px" }}>
            <div className="f-sh-num">{category.title}</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
              Схожі послуги
            </h2>
          </div>
          <div className="f-srv-grid">
            {related.map((r, i) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <Link href={`/poslugy/${category.slug}/${r.slug}`} className="f-srv-card">
                  <div className="f-srv-top">
                    <ServiceIcon type={r.iconType} />
                  </div>
                  <h3>{r.title}</h3>
                  <p>{r.short}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 768px) {
          .f-problem-grid {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
          }
        }
      `}</style>
    </>
  );
}

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="f-svc-body" style={{ background: "var(--bg2)" }}>
      <div
        style={{
          textAlign: "center",
          maxWidth: 1320,
          margin: "0 auto 48px",
          padding: "0 56px",
        }}
      >
        <div className="f-sh-num">FAQ</div>
        <div className="f-sh-line" />
        <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
          Часті запитання
        </h2>
      </div>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 56px" }} className="f-faq-wrap">
        {items.map((q, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease }}
              style={{
                borderBottom: "1px solid var(--brd)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                style={{
                  width: "100%",
                  padding: "20px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  textAlign: "left",
                  font: "600 16px var(--hd2)",
                  color: isOpen ? "var(--g)" : "var(--tx)",
                  transition: "color .2s",
                }}
              >
                <span>{q.q}</span>
                <span
                  style={{
                    fontSize: 24,
                    color: "var(--g)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform .25s",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        padding: "0 0 20px",
                        font: "300 15px/1.7 var(--bd)",
                        color: "var(--tx2)",
                      }}
                    >
                      {q.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .f-faq-wrap { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
