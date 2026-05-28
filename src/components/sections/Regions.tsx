"use client";

import { motion } from "motion/react";
import { SectionHead } from "../SectionHead";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Regions() {
  return (
    <section style={{ padding: "100px 0", background: "var(--bg2)" }} id="f-reg">
      <SectionHead num="Регіони" title="Де ми працюємо" />

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-regions-wrap">
        <p
          style={{
            font: "300 16px/1.7 var(--bd)",
            color: "var(--tx2)",
            maxWidth: 640,
            margin: "0 auto 48px",
            textAlign: "center",
          }}
        >
          Власні групи реагування у 12 регіонах України. Готові розширюватись під
          ваш об'єкт у будь-якій точці країни.
        </p>

        <div className="f-regions-cols">
          {site.regions.map((r, i) => (
            <motion.div
              key={r.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 22px",
                border: "1px solid var(--brd)",
                background: "rgba(var(--g-rgb), .02)",
                transition: "all .35s",
              }}
              className="f-region-row"
            >
              <span style={{ font: "600 14px var(--hd2)", color: "var(--tx)" }}>
                {r.name}
              </span>
              <span
                style={{
                  font: "500 11px var(--hd2)",
                  color: "var(--g)",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                активно
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .f-regions-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .f-region-row:hover {
          border-color: rgba(var(--g-rgb), .3) !important;
          background: rgba(var(--g-rgb), .05) !important;
          transform: translateX(4px);
        }
        @media (max-width: 768px) {
          .f-regions-cols { grid-template-columns: 1fr; }
          .f-regions-wrap { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
