"use client";

import { motion } from "motion/react";
import { SectionHead } from "../SectionHead";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Clients() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "var(--bg)",
        borderTop: "1px solid var(--brd)",
        borderBottom: "1px solid var(--brd)",
      }}
    >
      <SectionHead num="Клієнти" title="Нам довіряють" />

      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 56px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 14,
        }}
      >
        {site.clients.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease }}
            style={{
              padding: "32px 24px",
              border: "1px solid var(--brd)",
              background: "rgba(var(--g-rgb), .02)",
              textAlign: "center",
              transition: "all .4s",
            }}
            className="f-client-card"
          >
            <div
              style={{
                font: "700 28px var(--hd2)",
                color: "var(--tx)",
                letterSpacing: 1,
                marginBottom: 6,
                textTransform: "uppercase",
              }}
            >
              {c.name}
            </div>
            <div
              style={{
                font: "500 10px var(--hd2)",
                color: "var(--g)",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              {c.type}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .f-client-card:hover {
          border-color: rgba(var(--g-rgb), .25) !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,.25);
        }
      `}</style>
    </section>
  );
}
