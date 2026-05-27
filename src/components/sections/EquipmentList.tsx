"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

interface EquipmentListProps {
  eyebrow?: string;
  title?: string;
  items: string[];
}

export function EquipmentList({
  eyebrow = "Технології",
  title = "Обладнання, з яким працюємо",
  items,
}: EquipmentListProps) {
  return (
    <section style={{ padding: "60px 0", background: "var(--bg2)" }}>
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 56px",
        }}
        className="f-equip-wrap"
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="f-sh-num">{eyebrow}</div>
          <div className="f-sh-line" />
          <h2 style={{ font: "700 clamp(22px, 2.4vw, 32px) var(--hd2)", color: "var(--tx)" }}>
            {title}
          </h2>
        </div>

        <div className="f-equip-grid">
          {items.map((it, i) => (
            <motion.div
              key={it}
              className="f-equip-chip"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.04, ease }}
            >
              <span className="f-equip-dot" />
              {it}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .f-equip-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .f-equip-chip {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border: 1px solid var(--brd2);
          background: var(--bg);
          font: 500 13px var(--hd2);
          color: var(--tx);
          letter-spacing: 0.3px;
          transition: all .25s;
        }
        .f-equip-chip:hover {
          border-color: rgba(var(--g-rgb), .35);
          color: var(--g-lt);
        }
        .f-equip-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--g);
          flex-shrink: 0;
        }
        @media (max-width: 640px) {
          .f-equip-wrap { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
