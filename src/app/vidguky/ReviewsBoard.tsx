"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Testimonial, IndustryTag } from "@/lib/testimonials";

const ease = [0.16, 1, 0.3, 1] as const;

export function ReviewsBoard({
  items,
  industries,
}: {
  items: Testimonial[];
  industries: { value: IndustryTag | "all"; label: string }[];
}) {
  const [filter, setFilter] = useState<IndustryTag | "all">("all");
  const filtered = filter === "all" ? items : items.filter((t) => t.industry === filter);

  return (
    <section className="f-rev" style={{ background: "var(--bg)" }}>
      <div className="f-rev-inner">
        {/* Filter chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
            marginBottom: 48,
          }}
        >
          {industries.map((ind) => {
            const active = ind.value === filter;
            const count =
              ind.value === "all"
                ? items.length
                : items.filter((t) => t.industry === ind.value).length;
            return (
              <button
                key={ind.value}
                type="button"
                onClick={() => setFilter(ind.value)}
                className={"f-rev-chip" + (active ? " is-active" : "")}
              >
                {ind.label}
                <span className="f-rev-chip-c">{count}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="f-rev-cards"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease }}
          >
            {filtered.map((r, i) => (
              <motion.article
                key={`${r.author}-${i}`}
                className="f-rev-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease }}
              >
                <div className="f-rev-stars">{"★".repeat(r.rating || 5)}</div>
                <div className="f-rev-qt">
                  <p className="f-rev-text">«{r.text}»</p>
                </div>
                <div className="f-rev-author">{r.author}</div>
                <div className="f-rev-role">
                  {r.role} · {r.company}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p
            style={{
              textAlign: "center",
              padding: "60px 0",
              color: "var(--tx3)",
              font: "300 15px var(--bd)",
            }}
          >
            Поки що немає відгуків у цій галузі. Спробуйте інший фільтр.
          </p>
        )}
      </div>

      <style>{`
        .f-rev-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border: 1px solid var(--brd2);
          background: transparent;
          color: var(--tx2);
          font: 500 12px var(--hd2);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all .25s;
        }
        .f-rev-chip:hover {
          border-color: rgba(var(--g-rgb), .35);
          color: var(--tx);
        }
        .f-rev-chip.is-active {
          background: var(--g);
          border-color: var(--g);
          color: var(--bg-deep);
        }
        .f-rev-chip-c {
          font: 600 10px var(--hd2);
          opacity: .7;
          padding: 2px 6px;
          border: 1px solid currentColor;
          border-radius: 2px;
        }
        .f-rev-chip.is-active .f-rev-chip-c { opacity: 1; }
      `}</style>
    </section>
  );
}
