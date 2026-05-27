"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Case } from "@/lib/cases";
import type { Category, Service } from "@/lib/services";
import { ServiceIcon, ShieldIcon } from "@/components/TowerLogo";
import { IntroBlock } from "@/components/sections/IntroBlock";
import { Timeline } from "@/components/sections/Timeline";

const ease = [0.16, 1, 0.3, 1] as const;

type Linked = { svc: Service; cat: Category };
type Region = { slug: string; name: string };

export function CaseBody({
  kase,
  linkedServices,
  region,
  otherCases,
}: {
  kase: Case;
  linkedServices: Linked[];
  region: Region | null;
  otherCases: Case[];
}) {
  return (
    <>
      {/* metrics */}
      <section className="f-stats" style={{ marginTop: 0 }}>
        <div
          className="f-stats-grid"
          style={{ gridTemplateColumns: `repeat(${kase.metrics.length}, 1fr)` }}
        >
          {kase.metrics.map((m, i) => (
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

      {/* challenge / approach / result */}
      {(kase.challenge || kase.approach || kase.result) && (
        <section className="f-svc-body">
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-case-tri">
            {[
              { label: "Задача", text: kase.challenge },
              { label: "Рішення", text: kase.approach },
              { label: "Результат", text: kase.result },
            ]
              .filter((b) => b.text)
              .map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease }}
                  className="f-srv-card"
                  style={{ cursor: "default", height: "100%" }}
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
          <style>{`
            .f-case-tri {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 14px;
            }
            @media (max-width: 900px) {
              .f-case-tri { grid-template-columns: 1fr; padding: 0 24px !important; }
            }
          `}</style>
        </section>
      )}

      {/* narrative */}
      {kase.narrative && kase.narrative.length > 0 && (
        <IntroBlock
          eyebrow="Історія проєкту"
          title="Як це було"
          paragraphs={kase.narrative}
          variant="alt"
        />
      )}

      {/* timeline */}
      {kase.timeline && kase.timeline.length > 0 && (
        <Timeline steps={kase.timeline} />
      )}

      {/* quote */}
      {kase.quote && (
        <section className="f-rev" style={{ paddingTop: 60, paddingBottom: 60 }}>
          <div className="f-rev-inner">
            <motion.div
              className="f-rev-card"
              style={{
                maxWidth: 820,
                margin: "0 auto",
                padding: "48px 56px",
                textAlign: "left",
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="f-rev-stars" style={{ marginBottom: 24 }}>★★★★★</div>
              <div className="f-rev-qt">
                <p
                  className="f-rev-text"
                  style={{ font: "300 18px/1.8 var(--bd)", color: "var(--tx)" }}
                >
                  «{kase.quote.text}»
                </p>
              </div>
              <div className="f-rev-author" style={{ marginTop: 24 }}>
                {kase.quote.author}
              </div>
              <div className="f-rev-role">{kase.quote.role}</div>
            </motion.div>
          </div>
        </section>
      )}

      {/* linked services */}
      {linkedServices.length > 0 && (
        <section className="f-srv">
          <div
            style={{
              textAlign: "center",
              maxWidth: 1320,
              margin: "0 auto 48px",
              padding: "0 56px",
            }}
          >
            <div className="f-sh-num">Послуги у проєкті</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
              Що було використано
            </h2>
          </div>
          <div
            className="f-srv-grid"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
          >
            {linkedServices.map(({ svc, cat }, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease }}
              >
                <Link
                  href={`/poslugy/${cat.slug}/${svc.slug}`}
                  className="f-srv-card"
                  style={{ height: "100%" }}
                >
                  <div className="f-srv-top">
                    <ServiceIcon type={svc.iconType} />
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.short}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* region link */}
      {region && (
        <section style={{ padding: "60px 0", background: "var(--bg2)" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px", textAlign: "center" }}>
            <div className="f-sh-num">Регіон</div>
            <div className="f-sh-line" />
            <Link
              href={`/regiony/${region.slug}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                padding: "16px 32px",
                border: "1px solid var(--g-line, rgba(212, 168, 67, .35))",
                background: "rgba(var(--g-rgb), .04)",
                color: "var(--tx)",
                font: "600 18px var(--hd2)",
                textTransform: "uppercase",
                letterSpacing: 1,
                transition: "all .25s",
              }}
              className="f-region-link"
            >
              <ShieldIcon />
              {region.name}
              <span style={{ color: "var(--g)" }}>→</span>
            </Link>
          </div>
          <style>{`
            .f-region-link:hover {
              background: rgba(var(--g-rgb), .12) !important;
              transform: translateY(-2px);
            }
          `}</style>
        </section>
      )}

      {/* other cases */}
      {otherCases.length > 0 && (
        <section className="f-cases">
          <div style={{ textAlign: "center", maxWidth: 1320, margin: "0 auto 48px", padding: "0 56px" }}>
            <div className="f-sh-num">Інші кейси</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
              Як це працює в інших клієнтів
            </h2>
          </div>
          <div className="f-cases-grid">
            {otherCases.map((c, i) => (
              <motion.div
                key={c.slug}
                className="f-case"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <Link href={`/kejsy/${c.slug}`} style={{ display: "block", color: "inherit" }}>
                  <div className="f-case-top" />
                  <div className="f-case-body">
                    <span className="f-case-tag">
                      <ShieldIcon />
                      {c.category}
                    </span>
                    <h3>{c.title}</h3>
                    <p>{c.short}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
