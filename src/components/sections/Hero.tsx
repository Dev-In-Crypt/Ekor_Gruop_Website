"use client";

import Link from "next/link";
import { HeroTower, ShieldIcon } from "../TowerLogo";

export function Hero() {
  return (
    <section className="f-hero">
      <div className="f-hero-grid" />
      <div className="f-hero-scan" />
      <HeroTower />
      <div className="f-hero-vignette" />

      <div className="f-hero-content f-hero-st">
        <div className="f-hero-label">
          <span className="f-hero-label-bar" />
          Ліцензована охоронно-детективна компанія
          <span className="f-hero-label-bar" style={{ transform: "rotate(180deg)" }} />
        </div>

        <h1>
          ЄКОР
          <br />
          УКРАЇНА
        </h1>

        <p className="f-hero-sub">
          Поля, склади, підприємства та житлові комплекси — під цілодобовим
          професійним захистом по всій Україні
        </p>

        <div className="f-hero-btns">
          <Link href="/kontakty" className="f-btn-gold">
            Безкоштовний аудит
          </Link>
          <Link href="/poslugy" className="f-btn-out">
            Дізнатись вартість
          </Link>
        </div>

        <div className="f-hero-badges">
          <div className="f-badge">
            <ShieldIcon />
            Ліцензія МВС
          </div>
          <div className="f-badge">
            <ShieldIcon />
            Озброєна охорона
          </div>
          <div className="f-badge">
            <ShieldIcon />
            Матеріальна відповідальність
          </div>
        </div>
      </div>
    </section>
  );
}
