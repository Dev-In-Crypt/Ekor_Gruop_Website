"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export interface Fact {
  value: string;
  label: string;
}

interface FactsRowProps {
  eyebrow?: string;
  title?: string;
  facts: Fact[];
  variant?: "default" | "alt";
}

export function FactsRow({ eyebrow, title, facts, variant = "default" }: FactsRowProps) {
  return (
    <section
      style={{
        padding: title ? "80px 0" : "0",
        background: variant === "alt" ? "var(--bg2)" : "var(--bg)",
        borderTop: title ? "none" : "1px solid var(--brd)",
        borderBottom: title ? "none" : "1px solid var(--brd)",
      }}
    >
      {(eyebrow || title) && (
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto 48px",
            padding: "0 56px",
            textAlign: "center",
          }}
        >
          {eyebrow && <div className="f-sh-num">{eyebrow}</div>}
          <div className="f-sh-line" />
          {title && (
            <h2 style={{ font: "700 clamp(24px, 2.6vw, 36px) var(--hd2)", color: "var(--tx)" }}>
              {title}
            </h2>
          )}
        </div>
      )}

      <div
        className="f-facts-grid"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: title ? "0 56px" : "36px 56px",
          display: "grid",
          gridTemplateColumns: `repeat(${facts.length}, 1fr)`,
        }}
      >
        {facts.map((f, i) => (
          <motion.div
            key={f.label}
            className="f-fact-cell"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease }}
          >
            <div className="f-fact-v">{f.value}</div>
            <div className="f-fact-l">{f.label}</div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .f-fact-cell {
          padding: 24px 16px;
          text-align: center;
          border-right: 1px solid var(--brd);
        }
        .f-fact-cell:last-child { border-right: none; }
        .f-fact-v {
          font: 700 clamp(28px, 3.5vw, 44px) var(--hd2);
          color: var(--g);
          line-height: 1;
          letter-spacing: -0.5px;
          margin-bottom: 10px;
        }
        .f-fact-l {
          font: 500 11px var(--hd2);
          color: var(--tx3);
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        @media (max-width: 1024px) {
          .f-facts-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .f-fact-cell:nth-child(2n) { border-right: none; }
          .f-fact-cell { border-bottom: 1px solid var(--brd); }
          .f-fact-cell:nth-last-child(-n+2) { border-bottom: none; }
        }
        @media (max-width: 640px) {
          .f-facts-grid { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
