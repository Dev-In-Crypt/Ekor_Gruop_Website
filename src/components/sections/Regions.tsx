"use client";

import { motion } from "motion/react";
import { SectionHead } from "../SectionHead";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

/* Approximate normalized [x%, y%] coordinates of Ukrainian cities on a 16:9 canvas */
const cityPins: Record<string, { x: number; y: number }> = {
  kyiv: { x: 47, y: 30 },
  vinnycya: { x: 36, y: 44 },
  odesa: { x: 46, y: 72 },
  sumska: { x: 62, y: 22 },
  chernihivska: { x: 50, y: 14 },
  cherkaska: { x: 52, y: 42 },
  mykolaivska: { x: 45, y: 62 },
  khersonska: { x: 56, y: 68 },
  rivnenska: { x: 24, y: 26 },
  khmelnytska: { x: 28, y: 42 },
  lvivska: { x: 14, y: 38 },
  zhytomyrska: { x: 33, y: 32 },
};

export function Regions() {
  return (
    <section
      style={{ padding: "100px 0", background: "var(--bg2)" }}
      id="f-reg"
    >
      <SectionHead num="Регіони" title="Де ми працюємо" />

      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 56px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
        className="f-regions-grid"
      >
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease }}
          style={{
            position: "relative",
            aspectRatio: "16 / 11",
            border: "1px solid var(--brd2)",
            background:
              "radial-gradient(ellipse at center, rgba(var(--g-rgb), .04) 0%, transparent 70%)",
            padding: 24,
          }}
        >
          {/* Stylized Ukraine silhouette */}
          <svg
            viewBox="0 0 800 550"
            style={{ width: "100%", height: "100%" }}
            fill="none"
            stroke="rgba(var(--g-rgb), .45)"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
            aria-hidden
          >
            {/* Основний контур України (materik) */}
            <path
              d="
                M 130 130
                Q 145 100, 200 100
                L 280 95
                Q 340 92, 400 90
                Q 470 85, 540 70
                Q 590 60, 605 75
                Q 610 95, 600 115
                Q 615 135, 645 155
                Q 680 175, 715 205
                Q 750 240, 770 280
                Q 775 315, 745 335
                Q 705 350, 660 358
                Q 620 366, 585 380
                Q 555 395, 530 410
                L 510 420
                L 495 410
                Q 470 408, 440 412
                Q 395 415, 350 422
                Q 305 428, 265 425
                Q 230 420, 205 400
                Q 185 375, 175 345
                Q 165 320, 145 312
                Q 110 308, 85 295
                Q 65 275, 65 245
                Q 70 210, 90 175
                Q 110 145, 130 130
                Z
              "
            />

            {/* Крим — окрема форма під'єднана перешийком */}
            <path
              d="
                M 510 420
                L 525 432
                Q 555 445, 585 452
                Q 620 462, 640 480
                Q 645 498, 615 505
                Q 580 510, 540 510
                Q 500 508, 475 495
                Q 458 478, 462 458
                Q 470 438, 495 425
                Z
              "
            />

            {/* Перешийок (тонка лінія з'єднання) */}
            <path
              d="M 505 415 L 500 425"
              strokeWidth="1.2"
            />

            {/* Дніпро — стилізована річкова лінія */}
            <path
              d="M 410 95 Q 430 180, 450 270 T 490 405"
              stroke="rgba(var(--g-rgb), .15)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="2 4"
            />
          </svg>

          {/* Pins */}
          {site.regions.map((r, i) => {
            const pin = cityPins[r.slug];
            if (!pin) return null;
            return (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease }}
                style={{
                  position: "absolute",
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--g)",
                    boxShadow: "0 0 14px rgba(var(--g-rgb), .55)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: -5,
                      borderRadius: "50%",
                      border: "1px solid var(--g)",
                      animation: "pulseDot 2.4s ease-out infinite",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 11,
                    left: "50%",
                    transform: "translateX(-50%)",
                    whiteSpace: "nowrap",
                    font: "500 9px var(--hd2)",
                    color: "var(--g-lt)",
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    pointerEvents: "none",
                  }}
                >
                  {r.name.replace(" та область", "").replace(" область", "")}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right column — list */}
        <div>
          <p
            style={{
              font: "300 16px/1.7 var(--bd)",
              color: "var(--tx2)",
              marginBottom: 32,
              maxWidth: 480,
            }}
          >
            Власні групи реагування у 12 регіонах України. Готові розширюватись під
            ваш об'єкт у будь-якій точці країни.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {site.regions.map((r, i) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.07, ease }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "18px 22px",
                  border: "1px solid var(--brd)",
                  background: "rgba(var(--g-rgb), .02)",
                  transition: "all .35s",
                }}
                className="f-region-row"
              >
                <span style={{ font: "600 14px var(--hd2)", color: "var(--tx)" }}>
                  {r.name}
                </span>
                <span
                  style={{
                    font: "500 11px var(--hd2)",
                    color: "var(--g)",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  активно
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .f-region-row:hover {
          border-color: rgba(var(--g-rgb), .3) !important;
          background: rgba(var(--g-rgb), .05) !important;
          transform: translateX(4px);
        }
        @media (max-width: 1024px) {
          .f-regions-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .f-regions-grid { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
