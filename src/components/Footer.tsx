import Link from "next/link";
import { TowerLogo } from "./TowerLogo";
import { site } from "@/lib/site";
import { categories } from "@/lib/services";
import { solutions } from "@/lib/solutions";

// Колонки футера повторюють карту сайту з брифу
const topSolutions = solutions.slice(0, 4);
const topCategories = categories.slice(0, 4);
const topRegions = site.regions.slice(0, 6);

export function Footer() {
  return (
    <footer className="f-foot">
      <div className="f-foot-gold" />

      <div className="f-foot-grid">
        <div className="f-foot-brand">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <TowerLogo size={28} />
            <div style={{ font: "700 16px var(--hd2)", color: "var(--tx)" }}>
              EKOR<span style={{ color: "var(--g)" }}> GROUP</span>
            </div>
          </div>
          <p>
            {site.license}. Професійна охорона по всій Україні з {site.foundedYear} року.
          </p>
        </div>

        <div className="f-foot-col">
          <h4>Послуги</h4>
          {topCategories.map((c) => (
            <Link key={c.key} href={`/poslugy/${c.slug}`}>
              {c.title}
            </Link>
          ))}
          <Link href="/poslugy" style={{ color: "var(--g)", marginTop: 8 }}>
            Усі категорії →
          </Link>
        </div>

        <div className="f-foot-col">
          <h4>Рішення</h4>
          {topSolutions.map((s) => (
            <Link key={s.slug} href={s.hasPage ? `/rishennya/${s.slug}` : "/rishennya"}>
              {s.title}
            </Link>
          ))}
          <Link href="/rishennya" style={{ color: "var(--g)", marginTop: 8 }}>
            Усі рішення →
          </Link>
        </div>

        <div className="f-foot-col">
          <h4>Регіони</h4>
          {topRegions.map((r) => (
            <Link key={r.slug} href={`/regiony/${r.slug}`}>
              {r.name}
            </Link>
          ))}
          <Link href="/regiony" style={{ color: "var(--g)", marginTop: 8 }}>
            Усі регіони →
          </Link>
        </div>

        <div className="f-foot-col">
          <h4>Компанія</h4>
          <Link href="/pro-kompaniyu">Про нас</Link>
          <Link href="/kejsy">Кейси</Link>
          <Link href="/kontakty">Контакти</Link>
        </div>

        <div className="f-foot-col">
          <h4>Контакти</h4>
          <a href={site.phoneHref} style={{ color: "var(--tx)", fontWeight: 600 }}>
            {site.phone}
          </a>
          <a href={site.emailHref}>{site.email}</a>
          <span style={{ color: "var(--tx3)", fontSize: 13 }}>{site.address}</span>
        </div>
      </div>

      <div className="f-foot-btm">
        <span>
          © {new Date().getFullYear()} {site.legal}. Усі права захищені.
        </span>
        <div className="f-foot-legal">
          <Link href="/polityka">Конфіденційність</Link>
          <Link href="/umovy">Умови</Link>
          <Link href="/sitemap">Карта сайту</Link>
        </div>
        {(site.social.facebook || site.social.instagram || site.social.linkedin) && (
          <div className="f-foot-social">
            {site.social.facebook && (
              <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            )}
            {site.social.instagram && (
              <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            )}
            {site.social.linkedin && (
              <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
