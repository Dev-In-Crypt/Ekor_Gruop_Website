"use client";

import { motion } from "motion/react";
import { SectionHead } from "../SectionHead";

const items = [
  { n: "01", t: "Ліцензія МВС", d: "Офіційна ліцензія на провадження охоронної діяльності", fill: "85%" },
  { n: "02", t: "Матеріальна відповідальність", d: "Повна фінансова відповідальність за збереження вашого майна", fill: "92%" },
  { n: "03", t: "Озброєна охорона", d: "Ліцензована озброєна охорона для об'єктів підвищеної цінності", fill: "78%" },
  { n: "04", t: "Власний автопарк", d: "Оперативне реагування завдяки власному парку автомобілів", fill: "70%" },
  { n: "05", t: "Персональний менеджер", d: "Виділений менеджер для кожного клієнта — на зв'язку 24/7", fill: "95%" },
  { n: "06", t: "Досвід 5+ років", d: "Понад п'ять років успішної роботи на ринку охоронних послуг", fill: "88%" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function WhyUs() {
  return (
    <section className="f-adv" id="f-adv">
      <SectionHead num="Переваги" title="Чому обирають нас" />
      <div className="f-adv-grid">
        {items.map((a, i) => (
          <motion.div
            key={i}
            className="f-adv-card"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: i * 0.1, ease } }}
            viewport={{ once: true, amount: 0.2 }}
            onViewportEnter={(e) => {
              (e?.target as HTMLElement | null)?.classList.add("vis");
            }}
          >
            <div className="f-adv-num">{a.n}</div>
            <div className="f-adv-info">
              <h3>{a.t}</h3>
              <p>{a.d}</p>
              <div className="f-adv-bar">
                <div className="f-adv-bar-fill" style={{ "--fill": a.fill } as React.CSSProperties} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
