"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

interface IntroBlockProps {
  eyebrow?: string;
  title?: string;
  /** Перший абзац — буде з drop-cap. Інші — звичайні. */
  paragraphs: string[];
  align?: "left" | "center";
  variant?: "default" | "alt"; // alt = bg2
}

export function IntroBlock({
  eyebrow,
  title,
  paragraphs,
  align = "left",
  variant = "default",
}: IntroBlockProps) {
  return (
    <section
      style={{
        padding: "60px 0",
        background: variant === "alt" ? "var(--bg2)" : "var(--bg)",
      }}
    >
      <div className="f-intro-wrap" style={{ textAlign: align }}>
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease }}
            style={{ marginBottom: 16, display: align === "center" ? "flex" : "block", justifyContent: "center" }}
          >
            <span
              style={{
                font: "500 11px var(--hd2)",
                color: "var(--g)",
                letterSpacing: 2.5,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </span>
          </motion.div>
        )}

        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            style={{
              font: "700 clamp(24px, 3vw, 36px) var(--hd2)",
              color: "var(--tx)",
              letterSpacing: -0.3,
              marginBottom: 24,
              textTransform: "uppercase",
            }}
          >
            {title}
          </motion.h2>
        )}

        <div className="f-intro-body">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease }}
              className={i === 0 && align === "left" ? "f-intro-lead" : "f-intro-p"}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>

      <style>{`
        .f-intro-wrap {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 56px;
        }
        .f-intro-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .f-intro-lead {
          font: 300 19px/1.7 var(--bd);
          color: var(--tx);
        }
        .f-intro-p {
          font: 300 16px/1.75 var(--bd);
          color: var(--tx2);
        }
        @media (max-width: 768px) {
          .f-intro-wrap { padding: 0 24px; }
          .f-intro-lead { font-size: 17px; }
        }
      `}</style>
    </section>
  );
}
