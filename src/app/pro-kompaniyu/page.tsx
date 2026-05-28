"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PageHeader } from "@/components/PageHeader";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

const values = [
  { word: "Прозорість", text: "Звіти, регламенти, аудит — без сірих схем." },
  { word: "Відповідальність", text: "Договір з повною матеріальною відповідальністю." },
  { word: "Технологічність", text: "БПЛА, прилади нічного бачення, поліграф, інтегровані системи." },
  { word: "Кваліфікація", text: "Багаторівневий відбір та регулярний інструктаж кожного охоронця." },
];

const companyFacts = [
  { num: "5+", label: "років на охоронному ринку" },
  { num: "550+", label: "штатних фахівців" },
  { num: "12", label: "регіонів присутності" },
  { num: "100%", label: "офіційне працевлаштування" },
];

const principles = [
  {
    title: "Багаторічна експертиза",
    text: "Команда формувалась з фахівців, які мають за плечима десятки років роботи у безпеці — від лінійних охоронців до керівників служб безпеки великих холдингів. Наші провідні спеціалісти — практикуючі експерти з 10-20+ роками профільного досвіду.",
  },
  {
    title: "Профільна підготовка",
    text: "Кожен співробітник проходить багаторівневий відбір: перевірка біографії, медичний огляд, психологічне тестування, поліграф для критичних позицій. Далі — профільна підготовка з тактики, права, надання першої допомоги, регулярна атестація 2 рази на рік.",
  },
  {
    title: "Сертифікації та членство",
    text: "Ліцензія МВС на охоронну діяльність. Дозволи на зброю та спецзасоби. Членство в ASIS Ukraine, Асоціації Професіоналів Корпоративної Безпеки України, Всеукраїнській Асоціації Поліграфологів — це підтверджена професійна спільнота, до якої ми належимо.",
  },
  {
    title: "Безперервне навчання",
    text: "Регулярні навчання з тактичної підготовки, технічних засобів охорони, нових загроз. Запрошені експерти з МВС, ЗСУ, СБУ діляться актуальним досвідом. Технічна команда щомісяця проходить підготовку з нових систем БПЛА, інтеграцій, аналітики.",
  },
];

const vacancies = [
  { title: "Охоронець (Київ)", region: "Київ", salary: "від 25 000 ₴", schedule: "1/2" },
  { title: "Старший зміни ГШР", region: "Київ", salary: "від 35 000 ₴", schedule: "2/2" },
  { title: "Оператор пультового центру", region: "Київ", salary: "від 28 000 ₴", schedule: "12 год." },
  { title: "Оператор БПЛА", region: "Одеса/Львів", salary: "від 40 000 ₴", schedule: "позмінно" },
];

const keyPartners = [
  {
    name: "ГК «Ковальська»",
    type: "Промисловість",
    text: "Київський промисловий холдинг: бетонні заводи, кар'єри, девелопмент. Партнерство з 2022 року — повний цикл фізичної охорони виробничих майданчиків та кар'єрів, контроль ТМЦ, поліграф-скринінг.",
  },
  {
    name: "ГК «Нібулон»",
    type: "Агросектор",
    text: "Один з найбільших приватних інвесторів в аграрну логістику України. Партнерство з 2023 року — інтегрована охорона 14 елеваторів, БПЛА-моніторинг полів площею 120+ тис. га, супровід зернових вантажів.",
  },
  {
    name: "ГК «Просперіс»",
    type: "Агросектор",
    text: "Український агрохолдинг з потужною елеваторною та польовою інфраструктурою. Партнерство з 2023 року — охорона елеваторів, складських приміщень, сезонна охорона полів.",
  },
];

export default function ProKompaniyuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Хто ми"
        title="Про ЄКОР"
        lead="Охоронно-детективна компанія, що поєднує фізичну охорону, технічні засоби, детективні розслідування та юридичний супровід під одним дахом."
        breadcrumbs={[{ label: "Про компанію" }]}
      />

      <Stats />

      {/* === ПРО / МІСІЯ === */}
      <section id="pro" className="f-svc-body">
        <div className="f-svc-grid">
          <div>
            <h2 className="f-svc-h2">Місія</h2>
            <p className="f-svc-lead">
              Створюємо безпеку, на яку можна спертись. Не «охороняємо для галочки», а
              беремо повну матеріальну відповідальність за результат.
            </p>

            <h2 className="f-svc-h2" style={{ marginTop: 56 }}>
              Цінності
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {values.map((v, i) => (
                <motion.div
                  key={v.word}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  style={{
                    padding: "20px 24px",
                    border: "1px solid var(--brd)",
                    background: "rgba(var(--g-rgb), .02)",
                    transition: "all .3s",
                  }}
                  className="f-val-row"
                >
                  <h3 style={{ font: "600 16px var(--hd2)", color: "var(--g-lt)", marginBottom: 6 }}>
                    {v.word}
                  </h3>
                  <p style={{ font: "300 14px/1.65 var(--bd)", color: "var(--tx2)" }}>{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <aside className="f-svc-aside">
            <h4>Експертиза компанії</h4>
            <div
              style={{
                font: "700 22px var(--hd2)",
                color: "var(--tx)",
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: -0.5,
              }}
            >
              Команда практиків
            </div>
            <ul>
              <li>· Юридична підтримка — к.ю.н., доценти</li>
              <li>· Поліграфологи з 11+ років практики</li>
              <li>· Тактична підготовка від екс-спеціалістів МВС/ЗСУ</li>
              <li>· Технічні фахівці з БПЛА-моніторингу та інтеграцій</li>
              <li>· Членство в ASIS Ukraine та ВАП</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* === ЛІЦЕНЗІЯ === */}
      <section id="licenziya" className="f-svc-body" style={{ background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-licenze-wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="f-sh-num">Ліцензія МВС</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
              Працюємо офіційно
            </h2>
          </div>
          <div className="f-license-grid">
            <div className="f-license-card">
              <div className="f-license-label">Ліцензія МВС</div>
              <div className="f-license-value">Наказ №548 · 21.07.2020</div>
              <p>Наказ МВС України про видачу ліцензії на провадження охоронної діяльності відповідно до ЗУ «Про охоронну діяльність»</p>
            </div>
            <div className="f-license-card">
              <div className="f-license-label">Зброя та спецзасоби</div>
              <div className="f-license-value">Повний пакет</div>
              <p>Дозволи на придбання, зберігання та використання у службових цілях</p>
            </div>
            <div className="f-license-card">
              <div className="f-license-label">{site.legal}</div>
              <div className="f-license-value">З {site.foundedYear} року</div>
              <p>Зареєстровано в ЄДРПОУ, підтверджена платоспроможність</p>
            </div>
          </div>
        </div>
        <style>{`
          .f-license-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
          .f-license-card {
            padding: 28px;
            border: 1px solid var(--brd2);
            background: rgba(var(--g-rgb), .02);
          }
          .f-license-label {
            font: 500 11px var(--hd2);
            color: var(--g);
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 12px;
          }
          .f-license-value {
            font: 700 22px var(--hd2);
            color: var(--tx);
            margin-bottom: 12px;
          }
          .f-license-card p {
            font: 300 13px/1.6 var(--bd);
            color: var(--tx2);
          }
          @media (max-width: 900px) {
            .f-license-grid { grid-template-columns: 1fr; }
            .f-licenze-wrap { padding: 0 24px !important; }
          }
        `}</style>
      </section>

      {/* === КОМАНДА (де-персоналізовано) === */}
      <section id="komanda" className="f-svc-body">
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-team-wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="f-sh-num">Команда</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
              За цифрами ЄКОР
            </h2>
          </div>

          {/* Facts row */}
          <div className="f-cf-grid">
            {companyFacts.map((f, i) => (
              <motion.div
                key={f.label}
                className="f-cf-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
              >
                <div className="f-cf-n">{f.num}</div>
                <div className="f-cf-l">{f.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Lead paragraph */}
          <p
            style={{
              maxWidth: 880,
              margin: "40px auto 12px",
              textAlign: "center",
              font: "300 16px/1.75 var(--bd)",
              color: "var(--tx2)",
            }}
          >
            За кожним об'єктом ЄКОР стоїть структурована команда фахівців — від операторів пультового центру
            до керівників груп реагування, юристів та поліграфологів. Ми не будуємо культ особистості — ми
            будуємо систему, що працює стабільно незалежно від конкретної зміни чи регіону. Це принцип,
            який клієнти цінують найбільше: коли ваш менеджер у відпустці, його заміна знає об'єкт так само
            добре, бо протоколи документовані, а навчання — безперервне.
          </p>
          <p
            style={{
              maxWidth: 880,
              margin: "0 auto 48px",
              textAlign: "center",
              font: "300 16px/1.75 var(--bd)",
              color: "var(--tx2)",
            }}
          >
            550+ фахівців у 12 регіонах України. Серед нас — практикуючі юристи зі ступенями к.ю.н.,
            поліграфологи з 11+ років досвіду, екс-офіцери МВС та ЗСУ, технічні спеціалісти з БПЛА-моніторингу
            та ERP-інтеграцій. Усі — на офіційному працевлаштуванні, з повним соц.пакетом, регулярною
            атестацією та чітко прописаною матеріальною відповідальністю.
          </p>

          {/* Principles */}
          <div className="f-team-grid">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                className="f-team-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="f-team-role">0{i + 1}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </motion.div>
            ))}
          </div>
          <p
            style={{
              maxWidth: 600,
              margin: "32px auto 0",
              textAlign: "center",
              font: "300 14px var(--bd)",
              color: "var(--tx3)",
            }}
          >
            Усі охоронці проходять багаторівневий відбір, профільну підготовку та регулярний інструктаж.
          </p>
        </div>
        <style>{`
          .f-cf-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
          }
          .f-cf-card {
            padding: 28px 22px;
            border: 1px solid var(--brd2);
            background: rgba(var(--g-rgb), .03);
            text-align: center;
          }
          .f-cf-n {
            font: 700 clamp(28px, 3.2vw, 44px) var(--hd2);
            color: var(--g);
            margin-bottom: 8px;
          }
          .f-cf-l {
            font: 500 11px var(--hd2);
            color: var(--tx3);
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          .f-team-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .f-team-card {
            padding: 28px;
            border: 1px solid var(--brd);
            background: var(--bg);
          }
          .f-team-role {
            font: 700 13px var(--hd2);
            color: var(--g);
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 12px;
          }
          .f-team-card h3 {
            font: 600 18px var(--hd2);
            color: var(--tx);
            margin-bottom: 10px;
          }
          .f-team-card p {
            font: 300 14px/1.7 var(--bd);
            color: var(--tx2);
          }
          @media (max-width: 900px) {
            .f-cf-grid { grid-template-columns: repeat(2, 1fr); }
            .f-team-grid { grid-template-columns: 1fr; }
            .f-team-wrap { padding: 0 24px !important; }
          }
        `}</style>
      </section>

      {/* === КЛІЄНТИ === */}
      <section id="kliyenty" className="f-svc-body" style={{ background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-clients-wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="f-sh-num">Клієнти</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
              Нам довіряють
            </h2>
          </div>
          <div className="f-clients-grid">
            {site.clients.map((c, i) => (
              <motion.div
                key={c.name}
                className="f-client-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
              >
                <div className="f-client-name">{c.name}</div>
                <div className="f-client-type">{c.type}</div>
              </motion.div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 32 }}>
            {site.memberships.map((m) => (
              <div key={m} className="f-badge">
                {m}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .f-clients-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 14px;
          }
          .f-client-card {
            padding: 28px 20px;
            border: 1px solid var(--brd);
            background: var(--bg);
            text-align: center;
            transition: all .3s;
          }
          .f-client-card:hover {
            border-color: rgba(var(--g-rgb), .25);
          }
          .f-client-name {
            font: 700 24px var(--hd2);
            color: var(--tx);
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 6px;
          }
          .f-client-type {
            font: 500 10px var(--hd2);
            color: var(--g);
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          @media (max-width: 768px) {
            .f-clients-wrap { padding: 0 24px !important; }
          }
        `}</style>
      </section>

      {/* === ПАРТНЕРИ === */}
      <section id="partnery" className="f-svc-body">
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-partner-wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="f-sh-num">Партнери</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
              Наші ключові партнери
            </h2>
            <p
              style={{
                maxWidth: 720,
                margin: "16px auto 0",
                font: "300 15px/1.7 var(--bd)",
                color: "var(--tx2)",
              }}
            >
              Великі холдинги, з якими ми побудували довгострокові відносини на основі прозорості,
              матеріальної відповідальності та галузевої експертизи.
            </p>
          </div>
          <div className="f-keypartner-grid">
            {keyPartners.map((p, i) => (
              <motion.div
                key={p.name}
                className="f-keypartner-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <div className="f-keypartner-logo" aria-hidden>
                  {p.name.replace(/^ГК\s«|»$/g, "").charAt(0)}
                </div>
                <div className="f-keypartner-type">{p.type}</div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 72, marginBottom: 32 }}>
            <div className="f-sh-num">Партнерська програма</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(22px, 2.4vw, 32px) var(--hd2)", color: "var(--tx)" }}>
              На кого розраховуємо
            </h2>
          </div>
          <div className="f-partner-grid">
            {[
              { t: "Страхові компанії", d: "Спільні пакети «охорона + страхування» зі знижкою для клієнтів" },
              { t: "Ріелтори та забудовники", d: "Безпекова інфраструктура з нуля для нових ЖК та БЦ" },
              { t: "Інсталятори сигналізації", d: "Партнерська програма зі сертифікації та комерційних кросс-продажів" },
              { t: "Юридичні бюро", d: "Спільні рішення з безпеки + юридичного супроводу для корпоративних клієнтів" },
            ].map((p, i) => (
              <motion.div
                key={p.t}
                className="f-partner-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease }}
              >
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/kontakty" className="f-btn-out">
              Стати партнером
            </Link>
          </div>
        </div>
        <style>{`
          .f-keypartner-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
          .f-keypartner-card {
            padding: 32px 28px;
            border: 1px solid var(--brd2);
            background: rgba(var(--g-rgb), .03);
          }
          .f-keypartner-logo {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--g-dk), var(--g));
            color: var(--bg-deep);
            display: flex;
            align-items: center;
            justify-content: center;
            font: 700 26px var(--hd2);
            margin-bottom: 18px;
          }
          .f-keypartner-type {
            font: 500 10px var(--hd2);
            color: var(--g);
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 8px;
          }
          .f-keypartner-card h3 {
            font: 700 19px var(--hd2);
            color: var(--tx);
            margin-bottom: 12px;
          }
          .f-keypartner-card p {
            font: 300 14px/1.7 var(--bd);
            color: var(--tx2);
          }
          .f-partner-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .f-partner-card {
            padding: 28px;
            border: 1px solid var(--brd);
            background: var(--bg);
          }
          .f-partner-card h3 {
            font: 600 18px var(--hd2);
            color: var(--g-lt);
            margin-bottom: 10px;
          }
          .f-partner-card p {
            font: 300 14px/1.6 var(--bd);
            color: var(--tx2);
          }
          @media (max-width: 900px) {
            .f-keypartner-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 768px) {
            .f-partner-grid { grid-template-columns: 1fr; }
            .f-partner-wrap { padding: 0 24px !important; }
          }
        `}</style>
      </section>

      {/* === ВАКАНСІЇ === */}
      <section id="vakansiyi" className="f-svc-body" style={{ background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }} className="f-vac-wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="f-sh-num">Вакансії</div>
            <div className="f-sh-line" />
            <h2 style={{ font: "700 clamp(26px, 3vw, 40px) var(--hd2)", color: "var(--tx)" }}>
              Робота в ЄКОР
            </h2>
          </div>
          <div className="f-vac-grid">
            {vacancies.map((v, i) => (
              <motion.div
                key={v.title}
                className="f-vac-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease }}
              >
                <h3>{v.title}</h3>
                <div className="f-vac-meta">
                  <div>
                    <span className="f-vac-l">Зарплата</span>
                    <span className="f-vac-v">{v.salary}</span>
                  </div>
                  <div>
                    <span className="f-vac-l">Регіон</span>
                    <span className="f-vac-v">{v.region}</span>
                  </div>
                  <div>
                    <span className="f-vac-l">Графік</span>
                    <span className="f-vac-v">{v.schedule}</span>
                  </div>
                </div>
                <a href={site.phoneHref} className="f-btn-out" style={{ marginTop: 16 }}>
                  Відгукнутись
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          .f-vac-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .f-vac-card {
            padding: 28px;
            border: 1px solid var(--brd);
            background: var(--bg);
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .f-vac-card h3 {
            font: 600 18px var(--hd2);
            color: var(--tx);
          }
          .f-vac-meta {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .f-vac-meta > div {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid var(--brd);
          }
          .f-vac-meta > div:last-child { border-bottom: 0; }
          .f-vac-l {
            font: 500 11px var(--hd2);
            color: var(--tx3);
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          .f-vac-v {
            font: 600 14px var(--hd2);
            color: var(--g);
          }
          @media (max-width: 768px) {
            .f-vac-grid { grid-template-columns: 1fr; }
            .f-vac-wrap { padding: 0 24px !important; }
          }
        `}</style>
      </section>

      <CTA />
    </>
  );
}
