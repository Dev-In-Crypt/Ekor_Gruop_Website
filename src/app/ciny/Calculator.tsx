"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";

type ObjectType = "field" | "warehouse" | "zhk" | "office" | "industrial" | "event";

const OBJECT_TYPES: { value: ObjectType; label: string; base: number }[] = [
  { value: "field", label: "Поле / Агро", base: 35000 },
  { value: "warehouse", label: "Склад / Логістика", base: 45000 },
  { value: "zhk", label: "ЖК / ОСББ", base: 28000 },
  { value: "office", label: "Офіс / БЦ", base: 30000 },
  { value: "industrial", label: "Промисловість", base: 75000 },
  { value: "event", label: "Захід / Подія", base: 12000 },
];

const REGIME: { value: string; label: string; mult: number }[] = [
  { value: "12h", label: "12 годин", mult: 0.6 },
  { value: "24/7", label: "24/7", mult: 1.0 },
  { value: "24/7-armed", label: "24/7 + озброєння", mult: 1.4 },
];

const SIZE_BUCKETS: { value: string; label: string; mult: number }[] = [
  { value: "s", label: "до 500 м² / 50 га", mult: 1.0 },
  { value: "m", label: "500–3000 м² / 50–300 га", mult: 1.4 },
  { value: "l", label: "3000+ м² / 300+ га", mult: 1.9 },
];

export function Calculator() {
  const [type, setType] = useState<ObjectType>("warehouse");
  const [regime, setRegime] = useState("24/7");
  const [size, setSize] = useState("m");

  const estimate = useMemo(() => {
    const t = OBJECT_TYPES.find((x) => x.value === type)!;
    const r = REGIME.find((x) => x.value === regime)!;
    const s = SIZE_BUCKETS.find((x) => x.value === size)!;
    const low = Math.round((t.base * r.mult * s.mult) / 1000) * 1000;
    const high = Math.round((t.base * r.mult * s.mult * 1.6) / 1000) * 1000;
    return { low, high };
  }, [type, regime, size]);

  const fmt = (n: number) => n.toLocaleString("uk-UA").replace(/,/g, " ");

  return (
    <section className="f-svc-body" style={{ background: "var(--bg2)" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 56px" }} className="f-calc-wrap">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="f-sh-num">Калькулятор</div>
          <div className="f-sh-line" />
          <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
            Орієнтовна вартість
          </h2>
        </div>

        <div className="f-calc">
          <div className="f-calc-form">
            <Field label="Тип об'єкта">
              <select value={type} onChange={(e) => setType(e.target.value as ObjectType)} className="f-cta-inp">
                {OBJECT_TYPES.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </Field>

            <Field label="Режим охорони">
              <select value={regime} onChange={(e) => setRegime(e.target.value)} className="f-cta-inp">
                {REGIME.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </Field>

            <Field label="Розмір об'єкта">
              <select value={size} onChange={(e) => setSize(e.target.value)} className="f-cta-inp">
                {SIZE_BUCKETS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </Field>
          </div>

          <motion.div
            className="f-calc-result"
            key={`${type}-${regime}-${size}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <div className="f-calc-label">Орієнтовна вартість</div>
            <div className="f-calc-amount">
              {fmt(estimate.low)} – {fmt(estimate.high)} ₴
            </div>
            <div className="f-calc-unit">на місяць</div>
            <p className="f-calc-note">
              Розрахунок враховує середні ринкові коефіцієнти. Точну вартість назвемо після безкоштовного аудиту.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        .f-calc {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: stretch;
        }
        .f-calc-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .f-calc-result {
          border: 1px solid var(--brd2);
          background: rgba(var(--g-rgb), .03);
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .f-calc-result::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--g-dk), var(--g), var(--g-lt));
        }
        .f-calc-label {
          font: 500 11px var(--hd2);
          color: var(--tx3);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .f-calc-amount {
          font: 700 clamp(28px, 3.5vw, 42px) var(--hd2);
          color: var(--g);
          line-height: 1.1;
          letter-spacing: -0.5px;
        }
        .f-calc-unit {
          font: 400 14px var(--bd);
          color: var(--tx2);
          margin-top: 6px;
        }
        .f-calc-note {
          font: 300 13px/1.6 var(--bd);
          color: var(--tx3);
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid var(--brd);
        }
        @media (max-width: 768px) {
          .f-calc { grid-template-columns: 1fr; }
          .f-calc-wrap { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span
        style={{
          font: "500 11px var(--hd2)",
          color: "var(--tx3)",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}
