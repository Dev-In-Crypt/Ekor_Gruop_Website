"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Category, Service } from "@/lib/services";
import { ServiceIcon } from "@/components/TowerLogo";

const ease = [0.16, 1, 0.3, 1] as const;

export function PriceTable({
  categories,
  services,
}: {
  categories: Category[];
  services: Service[];
}) {
  return (
    <section className="f-srv">
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto 48px",
          padding: "0 56px",
          textAlign: "center",
        }}
      >
        <div className="f-sh-num">Прайс</div>
        <div className="f-sh-line" />
        <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
          Стартові ціни за напрямками
        </h2>
      </div>

      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 56px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
        className="f-price-wrap"
      >
        {categories.map((cat, ci) => {
          const items = services.filter((s) => s.category === cat.key && s.priceFrom);
          return (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: ci * 0.06, ease }}
              style={{
                border: "1px solid var(--brd)",
                background: "var(--bg)",
                padding: "28px 32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 20,
                  paddingBottom: 16,
                  borderBottom: "1px solid var(--brd)",
                }}
              >
                <div style={{ color: "var(--g)", flexShrink: 0 }}>
                  <ServiceIcon type={cat.iconType} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      font: "700 18px var(--hd2)",
                      color: "var(--tx)",
                      textTransform: "uppercase",
                      letterSpacing: -0.2,
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p style={{ font: "300 13px var(--bd)", color: "var(--tx2)", marginTop: 4 }}>
                    {cat.short}
                  </p>
                </div>
              </div>

              <div className="f-price-rows">
                {items.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/poslugy/${cat.slug}/${s.slug}`}
                    className="f-price-row"
                  >
                    <span className="f-price-name">{s.menu}</span>
                    <span className="f-price-val">{s.priceFrom}</span>
                    <span className="f-price-arrow">→</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <p
        style={{
          maxWidth: 720,
          margin: "32px auto 0",
          padding: "0 56px",
          font: "300 13px/1.6 var(--bd)",
          color: "var(--tx3)",
          textAlign: "center",
        }}
      >
        Ціни орієнтовні. На вартість впливає тип об'єкта, кількість постів, режим охорони,
        наявність озброєння та регіон. Аудит — безкоштовний.
      </p>

      <style>{`
        .f-price-rows { display: flex; flex-direction: column; gap: 0; }
        .f-price-row {
          display: grid;
          grid-template-columns: 1fr auto 24px;
          gap: 16px;
          align-items: center;
          padding: 14px 4px;
          border-bottom: 1px solid var(--brd);
          color: var(--tx);
          transition: color .2s, padding .2s;
        }
        .f-price-row:last-child { border-bottom: none; }
        .f-price-row:hover { color: var(--g); padding-left: 12px; }
        .f-price-name { font: 500 15px var(--hd2); }
        .f-price-val { font: 700 14px var(--hd2); color: var(--g); letter-spacing: .5px; }
        .f-price-arrow { color: var(--tx3); transition: color .2s, transform .2s; }
        .f-price-row:hover .f-price-arrow { color: var(--g); transform: translateX(4px); }
        @media (max-width: 768px) {
          .f-price-wrap { padding: 0 24px !important; }
          .f-price-row { grid-template-columns: 1fr; gap: 4px; }
          .f-price-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}
