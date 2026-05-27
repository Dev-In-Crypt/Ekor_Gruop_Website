"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionHead } from "../SectionHead";
import { ShieldIcon } from "../TowerLogo";
import { cases } from "@/lib/cases";

const ease = [0.16, 1, 0.3, 1] as const;

export function Cases() {
  // показуємо 3 ключових кейси на головній
  const homeCases = cases.slice(0, 3);

  return (
    <section className="f-cases" id="f-cs">
      <SectionHead num="Кейси" title="Наші проєкти" />

      <div className="f-cases-grid">
        {homeCases.map((c, i) => (
          <motion.div
            key={c.slug}
            className="f-case"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: i * 0.1, ease }}
          >
            <Link href="/kejsy" style={{ display: "block", color: "inherit" }}>
              <div className="f-case-top" />
              <div className="f-case-body">
                <span className="f-case-tag">
                  <ShieldIcon />
                  {c.category}
                </span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <div className="f-case-stats">
                  {c.metrics.slice(0, 4).map((m) => (
                    <div className="f-case-stat" key={m.label}>
                      <div className="f-case-stat-v">{m.value}</div>
                      <div className="f-case-stat-l">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 48 }}>
        <Link href="/kejsy" className="f-btn-out">
          Усі кейси
        </Link>
      </div>
    </section>
  );
}
