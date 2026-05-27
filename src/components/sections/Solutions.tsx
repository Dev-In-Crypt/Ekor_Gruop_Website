"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionHead } from "../SectionHead";
import { ServiceIcon } from "../TowerLogo";
import { solutions } from "@/lib/solutions";

const ease = [0.16, 1, 0.3, 1] as const;

export function Solutions() {
  return (
    <section className="f-srv" style={{ background: "var(--bg2)" }} id="f-rsh">
      <SectionHead num="Рішення" title="За галузями" />

      <div className="f-srv-grid">
        {solutions.map((s, i) => {
          const inner = (
            <>
              <div className="f-srv-top">
                <ServiceIcon type={s.iconType} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
            </>
          );
          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease }}
            >
              {s.hasPage ? (
                <Link href={`/rishennya/${s.slug}`} className="f-srv-card">
                  {inner}
                </Link>
              ) : (
                <div className="f-srv-card" style={{ cursor: "default" }}>
                  {inner}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
