"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export interface HowStep {
  title: string;
  text: string;
}

interface HowItWorksProps {
  eyebrow?: string;
  title?: string;
  steps: HowStep[];
  variant?: "default" | "alt";
}

export function HowItWorks({
  eyebrow = "Процес",
  title = "Як це працює",
  steps,
  variant = "default",
}: HowItWorksProps) {
  return (
    <section
      style={{
        padding: "80px 0",
        background: variant === "alt" ? "var(--bg2)" : "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 56px",
        }}
        className="f-how-wrap"
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="f-sh-num">{eyebrow}</div>
          <div className="f-sh-line" />
          <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
            {title}
          </h2>
        </div>

        <div
          className="f-how-grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
            gap: 14,
          }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="f-how-card"
            >
              <span className="f-how-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .f-how-card {
          padding: 32px 28px;
          border: 1px solid var(--brd);
          background: var(--bg);
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .f-how-num {
          font: 700 14px var(--hd2);
          color: var(--g);
          letter-spacing: 2px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--brd);
        }
        .f-how-card h3 {
          font: 600 17px var(--hd2);
          color: var(--tx);
          margin-top: 4px;
        }
        .f-how-card p {
          font: 300 14px/1.65 var(--bd);
          color: var(--tx2);
        }
        @media (max-width: 1024px) {
          .f-how-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .f-how-grid { grid-template-columns: 1fr !important; }
          .f-how-wrap { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
