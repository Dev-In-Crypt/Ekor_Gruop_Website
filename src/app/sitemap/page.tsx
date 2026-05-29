import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { categories, services } from "@/lib/services";
import { solutions } from "@/lib/solutions";
import { cases } from "@/lib/cases";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Карта сайту — усі сторінки ЄКОР",
  description:
    "Повна структура сайту ekorgroup.com.ua — усі категорії послуг, рішення за галузями, регіони, кейси та службові сторінки.",
  alternates: { canonical: "/sitemap" },
};

export default function HTMLSitemap() {
  return (
    <>
      <PageHeader
        title="Карта сайту"
        lead="Усі сторінки сайту в одному місці. ~50 URL у 8 розділах."
        breadcrumbs={[{ label: "Карта сайту" }]}
      />

      <section className="f-svc-body">
        <div className="f-sm-grid">
          <Group title="Основне">
            <Link href="/">Головна</Link>
            <Link href="/poslugy">Усі послуги</Link>
            <Link href="/rishennya">Рішення за галузями</Link>
            <Link href="/regiony">Регіони</Link>
            <Link href="/kejsy">Кейси</Link>
            <Link href="/ciny">Ціни</Link>
            <Link href="/vidguky">Відгуки</Link>
            <Link href="/pro-kompaniyu">Про компанію</Link>
            <Link href="/kontakty">Контакти</Link>
          </Group>

          {categories.map((cat) => {
            const items = services.filter((s) => s.category === cat.key);
            return (
              <Group key={cat.key} title={cat.title}>
                <Link href={`/poslugy/${cat.slug}`} className="f-sm-cat">
                  Категорія: {cat.title}
                </Link>
                {items.map((s) => (
                  <Link key={s.slug} href={`/poslugy/${cat.slug}/${s.slug}`}>
                    {s.menu}
                  </Link>
                ))}
              </Group>
            );
          })}

          <Group title="Рішення">
            <Link href="/rishennya" className="f-sm-cat">
              Усі галузі
            </Link>
            {solutions.map((s) => (
              <Link key={s.slug} href={s.hasPage ? `/rishennya/${s.slug}` : "/rishennya"}>
                {s.title}
              </Link>
            ))}
          </Group>

          <Group title="Регіони">
            <Link href="/regiony" className="f-sm-cat">
              Карта регіонів
            </Link>
            {site.regions.map((r) => (
              <Link key={r.slug} href={`/regiony/${r.slug}`}>
                {r.name}
              </Link>
            ))}
          </Group>

          <Group title="Кейси">
            <Link href="/kejsy" className="f-sm-cat">
              Усі кейси
            </Link>
            {cases.map((c) => (
              <Link key={c.slug} href={`/kejsy/${c.slug}`}>
                {c.client} — {c.category.toLowerCase()}
              </Link>
            ))}
          </Group>

          <Group title="Про компанію">
            <Link href="/pro-kompaniyu">Про нас</Link>
            <Link href="/pro-kompaniyu#licenziya">Ліцензія МВС</Link>
            <Link href="/pro-kompaniyu#komanda">Команда</Link>
            <Link href="/pro-kompaniyu#kliyenty">Клієнти</Link>
            <Link href="/pro-kompaniyu#partnery">Партнери</Link>
            <Link href="/pro-kompaniyu#vakansiyi">Вакансії</Link>
          </Group>

          <Group title="Службові">
            <Link href="/polityka">Політика конфіденційності</Link>
            <Link href="/umovy">Умови використання</Link>
            <Link href="/sitemap.xml">XML-карта сайту (для пошукових систем)</Link>
          </Group>
        </div>
      </section>

      <style>{`
        .f-sm-grid {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 56px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 40px 32px;
        }
        @media (max-width: 768px) {
          .f-sm-grid { padding: 0 24px; gap: 32px 20px; }
        }
      `}</style>
    </>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3
        style={{
          font: "600 11px var(--hd2)",
          color: "var(--g)",
          letterSpacing: 2.5,
          textTransform: "uppercase",
          marginBottom: 16,
          paddingBottom: 12,
          borderBottom: "1px solid var(--brd)",
        }}
      >
        {title}
      </h3>
      <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {Array.isArray(children)
          ? children.map((c, i) => <li key={i}>{c}</li>)
          : <li>{children}</li>}
      </ul>
      <style>{`
        ul a {
          display: block;
          font: 400 14px var(--bd);
          color: var(--tx2);
          transition: color .2s;
        }
        ul a:hover { color: var(--g); }
        ul .f-sm-cat {
          font: 600 14px var(--hd2);
          color: var(--tx);
        }
        ul .f-sm-cat:hover { color: var(--g-lt); }
      `}</style>
    </div>
  );
}
