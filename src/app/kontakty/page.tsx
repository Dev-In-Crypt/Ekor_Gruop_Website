"use client";

import { motion } from "motion/react";
import { PageHeader } from "@/components/PageHeader";
import { AuditForm } from "@/components/sections/AuditForm";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

const cards = [
  { label: "Телефон", value: site.phone, href: site.phoneHref, hint: "Цілодобово" },
  { label: "Email", value: site.email, href: site.emailHref, hint: "Відповідь до 4 годин" },
  { label: "Офіс", value: site.address, href: null, hint: "Пн–Пт, 9:00–18:00" },
];

export default function KontaktyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Контакти"
        title="Зв'язатись з нами"
        lead="Відповідаємо протягом 30 хвилин у робочий час. Поза робочим часом — наступного ранку."
        breadcrumbs={[{ label: "Контакти" }]}
      />

      <section className="f-srv">
        <div className="f-srv-grid">
          {cards.map((c, i) => {
            const inner = (
              <>
                <div className="f-srv-top">
                  <span className="f-stat-l" style={{ margin: 0, color: "var(--g)" }}>
                    {c.label}
                  </span>
                </div>
                <h3 style={{ font: "600 20px var(--hd2)" }}>{c.value}</h3>
                <p>{c.hint}</p>
              </>
            );
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
              >
                {c.href ? (
                  <a href={c.href} className="f-srv-card">
                    {inner}
                  </a>
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

      <AuditForm />
    </>
  );
}
