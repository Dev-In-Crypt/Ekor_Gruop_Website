"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Region } from "@/lib/regions";
import { categories, services } from "@/lib/services";
import { ServiceIcon } from "@/components/TowerLogo";
import { IntroBlock } from "@/components/sections/IntroBlock";
import { FactsRow } from "@/components/sections/FactsRow";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function RegionBody({ region }: { region: Region }) {
  const mainItems = region.mainServices
    .map((sl) => {
      const svc = services.find((s) => s.slug === sl);
      if (!svc) return null;
      const cat = categories.find((c) => c.key === svc.category);
      if (!cat) return null;
      return { svc, cat };
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      {/* Intro */}
      <IntroBlock
        eyebrow="Про регіон"
        title={`Наша робота у регіоні ${region.shortName}`}
        paragraphs={region.intro}
      />

      {/* Facts */}
      <FactsRow
        variant="alt"
        facts={[
          { value: `${region.objects}+`, label: "об'єктів" },
          { value: `${region.teamSize}`, label: "команда" },
          { value: region.reactionTime, label: "реагування" },
          { value: region.specializations.length.toString(), label: "спеціалізацій" },
        ]}
      />

      {/* Contacts card (центральні — локальних офісів у регіонах немає) */}
      <section style={{ padding: "60px 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-office-wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="f-sh-num">Контакти</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(24px, 2.6vw, 36px) var(--hd2)", color: "var(--tx)" }}>
              Замовити охорону у регіоні {region.shortName}
            </h2>
            <p
              style={{
                maxWidth: 640,
                margin: "16px auto 0",
                font: "300 15px/1.7 var(--bd)",
                color: "var(--tx2)",
              }}
            >
              Усі регіональні запити обслуговує центральний офіс ЄКОР. Команди ГШР працюють
              цілодобово; виїзд менеджера на об'єкт — у межах 1-2 діб після першого контакту.
            </p>
          </div>
          <motion.div
            className="f-office-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="f-office-grid">
              <div>
                <div className="f-office-label">Телефон</div>
                <div className="f-office-value">
                  <a href={site.phoneHref} style={{ color: "var(--tx)" }}>
                    {site.phone}
                  </a>
                </div>
              </div>
              <div>
                <div className="f-office-label">Графік пульта</div>
                <div className="f-office-value">24/7 без вихідних</div>
              </div>
            </div>
          </motion.div>
        </div>
        <style>{`
          .f-office-card {
            border: 1px solid var(--brd2);
            background: rgba(var(--g-rgb), .02);
            padding: 36px 40px;
            position: relative;
          }
          .f-office-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--g-dk), var(--g), var(--g-lt));
          }
          .f-office-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 48px;
          }
          .f-office-label {
            font: 500 11px var(--hd2);
            color: var(--tx3);
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 8px;
          }
          .f-office-value {
            font: 500 16px var(--hd2);
            color: var(--tx);
          }
          @media (max-width: 768px) {
            .f-office-grid { grid-template-columns: 1fr; }
            .f-office-wrap { padding: 0 24px !important; }
            .f-office-card { padding: 28px 24px; }
          }
        `}</style>
      </section>

      {/* Specializations */}
      <section style={{ padding: "80px 0", background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-spec-wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="f-sh-num">Спеціалізація</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
              На чому фокусуємось у регіоні
            </h2>
          </div>
          <div className="f-spec-grid">
            {region.specializations.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease }}
                style={{
                  padding: "28px",
                  border: "1px solid var(--brd)",
                  background: "var(--bg)",
                }}
              >
                <div className="f-adv-num" style={{ marginBottom: 12 }}>0{i + 1}</div>
                <h3 style={{ font: "600 17px var(--hd2)", color: "var(--g-lt)", marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ font: "300 14px/1.65 var(--bd)", color: "var(--tx2)" }}>{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          .f-spec-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          @media (max-width: 768px) {
            .f-spec-grid { grid-template-columns: 1fr; }
            .f-spec-wrap { padding: 0 24px !important; }
          }
        `}</style>
      </section>

      {/* Market context */}
      {region.marketContext && (
        <IntroBlock
          eyebrow="Ринок"
          title="Ринковий контекст"
          paragraphs={[region.marketContext]}
        />
      )}

      {/* Main services */}
      <section className="f-srv" style={{ background: "var(--bg2)" }}>
        <div style={{ textAlign: "center", maxWidth: 1320, margin: "0 auto 48px", padding: "0 56px" }}>
          <div className="f-sh-num">Послуги</div>
          <div className="f-sh-line" />
          <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
            Топ-послуги у регіоні {region.shortName}
          </h2>
        </div>
        <div className="f-srv-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {mainItems.map(({ svc, cat }, i) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease }}
            >
              <Link href={`/poslugy/${cat.slug}/${svc.slug}`} className="f-srv-card" style={{ height: "100%" }}>
                <div className="f-srv-top">
                  <ServiceIcon type={svc.iconType} />
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.short}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
