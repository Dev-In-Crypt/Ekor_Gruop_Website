"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionHead } from "../SectionHead";
import { testimonials } from "@/lib/testimonials";

const ease = [0.16, 1, 0.3, 1] as const;

// На головній — лише топ-3 відгуки
const homeTestimonials = testimonials.slice(0, 3);

export function Testimonials() {
  return (
    <section className="f-rev" id="f-rv">
      <div className="f-rev-inner">
        <SectionHead num="Відгуки" title="Що кажуть клієнти" />
        <div className="f-rev-cards">
          {homeTestimonials.map((r, i) => (
            <motion.div
              key={r.author}
              className="f-rev-card"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.1, ease }}
            >
              <div className="f-rev-stars">★★★★★</div>
              <div className="f-rev-qt">
                <p className="f-rev-text">«{r.text}»</p>
              </div>
              <div className="f-rev-author">{r.author}</div>
              <div className="f-rev-role">
                {r.role} · {r.company}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/vidguky" className="f-btn-out">
            Усі відгуки
          </Link>
        </div>
      </div>
    </section>
  );
}
