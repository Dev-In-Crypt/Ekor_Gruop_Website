"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export interface TimelineStep {
  phase: string;
  date: string;
  text: string;
}

interface TimelineProps {
  eyebrow?: string;
  title?: string;
  steps: TimelineStep[];
}

export function Timeline({
  eyebrow = "Хронологія",
  title = "Як впроваджували",
  steps,
}: TimelineProps) {
  return (
    <section style={{ padding: "80px 0", background: "var(--bg)" }}>
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 56px",
        }}
        className="f-timeline-wrap"
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="f-sh-num">{eyebrow}</div>
          <div className="f-sh-line" />
          <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
            {title}
          </h2>
        </div>

        <div className="f-timeline">
          <div className="f-timeline-line" aria-hidden />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="f-timeline-item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <div className="f-timeline-marker" aria-hidden>
                <span />
              </div>
              <div className="f-timeline-content">
                <div className="f-timeline-date">{s.date}</div>
                <h3>{s.phase}</h3>
                <p>{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .f-timeline {
          position: relative;
          max-width: 720px;
          margin: 0 auto;
          padding-left: 32px;
        }
        .f-timeline-line {
          position: absolute;
          top: 8px;
          bottom: 8px;
          left: 6px;
          width: 1px;
          background: linear-gradient(180deg, var(--g) 0%, rgba(var(--g-rgb), .1) 100%);
        }
        .f-timeline-item {
          position: relative;
          padding-bottom: 36px;
        }
        .f-timeline-item:last-child { padding-bottom: 0; }
        .f-timeline-marker {
          position: absolute;
          left: -32px;
          top: 4px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--g);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .f-timeline-marker span {
          width: 5px;
          height: 5px;
          background: var(--g);
          border-radius: 50%;
        }
        .f-timeline-date {
          font: 500 11px var(--hd2);
          color: var(--g);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .f-timeline-content h3 {
          font: 600 17px var(--hd2);
          color: var(--tx);
          margin-bottom: 8px;
        }
        .f-timeline-content p {
          font: 300 14px/1.7 var(--bd);
          color: var(--tx2);
        }
        @media (max-width: 640px) {
          .f-timeline-wrap { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
