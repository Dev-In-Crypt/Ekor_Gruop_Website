"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { TowerLogo } from "@/components/TowerLogo";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ThanksPage() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        background: "var(--bg)",
      }}
    >
      <motion.div
        style={{ textAlign: "center", maxWidth: 600 }}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        <motion.div
          style={{ marginBottom: 32, display: "inline-block" }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          <TowerLogo size={72} />
        </motion.div>

        <motion.h1
          style={{
            font: "700 clamp(40px, 6vw, 72px) var(--hd2)",
            color: "var(--tx)",
            textTransform: "uppercase",
            letterSpacing: -1,
            marginBottom: 16,
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          Дякуємо!
        </motion.h1>

        <motion.p
          style={{
            font: "300 18px/1.6 var(--bd)",
            color: "var(--tx2)",
            marginBottom: 48,
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease }}
        >
          Ваша заявка прийнята. Наш менеджер зв'яжеться з вами протягом
          <strong style={{ color: "var(--g)" }}> 15 хвилин</strong> у робочий час
          (Пн–Пт, 9:00–18:00). Поза робочим часом — наступного ранку.
        </motion.p>

        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 48,
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
        >
          <Link href="/" className="f-btn-gold">
            На головну
          </Link>
          <a href={site.phoneHref} className="f-btn-out">
            {site.phone}
          </a>
        </motion.div>

        <motion.p
          style={{
            font: "300 13px var(--bd)",
            color: "var(--tx3)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Поки ви чекаєте — <Link href="/kejsy" style={{ color: "var(--g)" }}>подивіться наші кейси</Link> або
          ознайомтесь з <Link href="/poslugy" style={{ color: "var(--g)" }}>повним каталогом послуг</Link>.
        </motion.p>
      </motion.div>
    </section>
  );
}
