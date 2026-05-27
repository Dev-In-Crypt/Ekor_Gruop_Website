"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionHead } from "../SectionHead";
import { ServiceIcon } from "../TowerLogo";
import { featuredServices, categoryByKey } from "@/lib/services";

const ease = [0.16, 1, 0.3, 1] as const;

export function Services() {
  return (
    <section className="f-srv" id="f-srv">
      <SectionHead num="Послуги" title="Що ми охороняємо" />

      <div className="f-srv-grid">
        {featuredServices.map((s, i) => {
          const cat = categoryByKey(s.category);
          const href = `/poslugy/${cat.slug}/${s.slug}`;
          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease }}
            >
              <Link href={href} className="f-srv-card">
                <div className="f-srv-top">
                  <ServiceIcon type={s.iconType} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: 48 }}>
        <Link href="/poslugy" className="f-btn-out">
          Усі 21 послуга
        </Link>
      </div>
    </section>
  );
}
