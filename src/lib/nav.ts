import { services, categories, categoryByKey } from "./services";
import { solutions } from "./solutions";
import { cases } from "./cases";
import { site } from "./site";

export type NavLeaf = {
  label: string;
  href: string;
};

export type NavGroup = {
  title?: string;
  href?: string;        // якщо група сама клікабельна
  items: NavLeaf[];
  footer?: NavLeaf;
};

export type NavItem = {
  label: string;
  href: string;
  groups?: NavGroup[];
  panelWidth?: number;
  columns?: number;
};

const servicesByCat: NavGroup[] = categories.map((cat) => ({
  title: cat.title.replace(/\s+об'єктів$/, "").replace(/^Детективні та юридичні /, "Детектив + "),
  href: `/poslugy/${cat.slug}`,
  items: services
    .filter((s) => s.category === cat.key)
    .map((s) => ({
      label: s.menu,
      href: `/poslugy/${cat.slug}/${s.slug}`,
    })),
}));

export const navItems: NavItem[] = [
  {
    label: "Послуги",
    href: "/poslugy",
    panelWidth: 880,
    columns: 5,
    groups: servicesByCat,
  },
  {
    label: "Рішення",
    href: "/rishennya",
    panelWidth: 280,
    columns: 1,
    groups: [
      {
        title: "За галузями",
        href: "/rishennya",
        items: solutions.map((s) => ({
          label: s.title,
          href: s.hasPage ? `/rishennya/${s.slug}` : "/rishennya",
        })),
      },
    ],
  },
  {
    label: "Регіони",
    href: "/regiony",
    panelWidth: 320,
    columns: 1,
    groups: [
      {
        title: "Географія",
        href: "/regiony",
        items: site.regions.map((r) => ({
          label: r.name,
          href: `/regiony/${r.slug}`,
        })),
      },
    ],
  },
  {
    label: "Кейси",
    href: "/kejsy",
    panelWidth: 280,
    columns: 1,
    groups: [
      {
        title: "Проєкти",
        href: "/kejsy",
        items: cases.slice(0, 6).map((c) => ({
          label: `${c.client} — ${c.category.toLowerCase()}`,
          href: `/kejsy/${c.slug}`,
        })),
        footer: { label: "Усі кейси →", href: "/kejsy" },
      },
    ],
  },
  {
    label: "Про нас",
    href: "/pro-kompaniyu",
    panelWidth: 260,
    columns: 1,
    groups: [
      {
        items: [
          { label: "Про компанію", href: "/pro-kompaniyu#pro" },
          { label: "Ліцензія МВС", href: "/pro-kompaniyu#licenziya" },
          { label: "Команда", href: "/pro-kompaniyu#komanda" },
          { label: "Клієнти", href: "/pro-kompaniyu#kliyenty" },
          { label: "Партнери", href: "/pro-kompaniyu#partnery" },
          { label: "Вакансії", href: "/pro-kompaniyu#vakansiyi" },
        ],
      },
    ],
  },
  {
    label: "Контакти",
    href: "/kontakty",
  },
];
