"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { SectionHead } from "../SectionHead";
import { TowerLogo } from "../TowerLogo";

const ease = [0.16, 1, 0.3, 1] as const;

export function AuditForm() {
  const [f, setF] = useState({ name: "", phone: "", type: "", city: "", website: "" });
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitErr, setSubmitErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, boolean> = {};
    if (!f.name.trim()) next.name = true;
    if (!f.phone.trim()) next.phone = true;
    if (!f.type) next.type = true;
    if (!f.city.trim()) next.city = true;
    setErr(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    setSubmitErr(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.name,
          phone: f.phone,
          type: f.type,
          city: f.city,
          website: f.website, // honey-pot
          source: "Форма «Аудит безпеки» — головна / сторінки сервісів",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setSubmitErr("Не вдалося відправити. Зателефонуйте, будь ласка, на наш номер.");
        return;
      }
      setOk(true);
    } catch {
      setSubmitErr("Помилка мережі. Зателефонуйте, будь ласка, на наш номер.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="f-cta" id="f-ct">
      <div className="f-cta-glow" />
      <SectionHead num="Контакти" title="Аудит безпеки вашого об'єкта" />

      {ok ? (
        <motion.div
          className="f-cta-form-wrap"
          style={{ textAlign: "center" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
        >
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <TowerLogo size={48} />
          </div>
          <div style={{ font: "700 28px var(--hd2)", marginBottom: 8 }}>Дякуємо!</div>
          <div style={{ font: "300 15px var(--bd)", color: "var(--tx2)" }}>
            Менеджер зв'яжеться протягом 15 хвилин.
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="f-cta-form-wrap"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease }}
        >
          <p style={{ font: "300 15px/1.7 var(--bd)", color: "var(--tx2)", textAlign: "center" }}>
            Залиште заявку — ми зателефонуємо протягом 15 хвилин
          </p>
          <form className="f-cta-form" onSubmit={submit} noValidate>
            {/* honey-pot: невидиме поле для ботів */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={f.website}
              onChange={(e) => setF({ ...f, website: e.target.value })}
              style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
              aria-hidden="true"
            />
            <input
              className="f-cta-inp"
              placeholder="Ім'я"
              aria-label="Ім'я"
              aria-invalid={err.name || undefined}
              aria-required="true"
              value={f.name}
              style={{ borderLeftColor: err.name ? "#DC2626" : undefined }}
              onChange={(e) => {
                setF({ ...f, name: e.target.value });
                setErr({ ...err, name: false });
              }}
            />
            <input
              className="f-cta-inp"
              type="tel"
              placeholder="Телефон"
              aria-label="Телефон"
              aria-invalid={err.phone || undefined}
              aria-required="true"
              value={f.phone}
              style={{ borderLeftColor: err.phone ? "#DC2626" : undefined }}
              onChange={(e) => {
                setF({ ...f, phone: e.target.value });
                setErr({ ...err, phone: false });
              }}
            />
            <select
              className="f-cta-inp"
              aria-label="Тип об'єкта"
              aria-invalid={err.type || undefined}
              aria-required="true"
              value={f.type}
              style={{
                borderLeftColor: err.type ? "#DC2626" : undefined,
                color: f.type ? "var(--tx)" : "var(--tx3)",
              }}
              onChange={(e) => {
                setF({ ...f, type: e.target.value });
                setErr({ ...err, type: false });
              }}
            >
              <option value="" disabled>
                Тип об'єкта
              </option>
              <option>Поле</option>
              <option>Склад</option>
              <option>ЖК</option>
              <option>Будівництво</option>
              <option>Школа</option>
              <option>Інше</option>
            </select>
            <input
              className="f-cta-inp"
              placeholder="Місто"
              aria-label="Місто"
              aria-invalid={err.city || undefined}
              aria-required="true"
              value={f.city}
              style={{ borderLeftColor: err.city ? "#DC2626" : undefined }}
              onChange={(e) => {
                setF({ ...f, city: e.target.value });
                setErr({ ...err, city: false });
              }}
            />
            <button
              type="submit"
              className="f-btn-gold"
              style={{ width: "100%", justifyContent: "center", marginTop: 4, opacity: submitting ? 0.6 : 1, cursor: submitting ? "wait" : "pointer" }}
              disabled={submitting}
            >
              {submitting ? "Відправляємо…" : "Замовити безкоштовний аудит"}
            </button>
            {(submitErr || Object.values(err).some(Boolean)) && (
              <div
                role="alert"
                style={{
                  marginTop: 8,
                  padding: "10px 14px",
                  border: "1px solid #DC2626",
                  background: "rgba(220, 38, 38, .08)",
                  font: "400 13px var(--bd)",
                  color: "#FCA5A5",
                }}
              >
                {submitErr ?? "Будь ласка, заповніть обов'язкові поля, виділені червоним."}
              </div>
            )}
          </form>
        </motion.div>
      )}
    </section>
  );
}
