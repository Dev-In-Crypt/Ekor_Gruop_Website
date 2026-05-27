"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="f-hero" style={{ minHeight: "80vh" }}>
      <div className="f-hero-grid" />
      <div className="f-hero-vignette" />
      <motion.div
        className="f-hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="f-hero-t2" style={{ marginBottom: 16, letterSpacing: 0 }}>
          404
        </div>
        <h1 style={{ marginBottom: 16, fontSize: "clamp(28px, 4vw, 48px)" }}>
          Сторінку не знайдено
        </h1>
        <p className="f-hero-sub">Можливо, посилання застаріло. Спробуйте з головної.</p>
        <div className="f-hero-btns">
          <Link href="/" className="f-btn-gold">
            На головну
          </Link>
          <a href={site.phoneHref} className="f-btn-out">
            {site.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
