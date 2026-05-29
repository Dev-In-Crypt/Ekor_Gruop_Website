import { site } from "./site";
import { regions } from "./regions";

export const SITE_URL = "https://ekor-ukraine.com.ua";

/** Обрізає опис до межі по словах (за замовчуванням ~158 символів для SEO). */
export function clampDesc(text: string, max = 158): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max - 25 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:\s]+$/, "") + "…";
}

/** Абсолютний URL з відносного шляху. */
export const abs = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Organization + LocalBusiness — для всього сайту (рендериться у layout). */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "SecurityService"],
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    alternateName: site.altName,
    legalName: site.legal,
    url: SITE_URL,
    logo: abs("/ekor-emblem.png"),
    image: abs("/og-image.png"),
    description: site.description,
    telephone: site.phone,
    email: site.email,
    foundingDate: String(site.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.replace(/^м\.\s*[^,]+,\s*/, ""),
      addressLocality: site.city,
      addressCountry: "UA",
    },
    areaServed: regions.map((r) => ({ "@type": "AdministrativeArea", name: r.name })),
    memberOf: site.memberships.map((m) => ({ "@type": "Organization", name: m })),
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

/** WebSite — для головної. */
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    inLanguage: "uk-UA",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** BreadcrumbList з пар {name, path}. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** Service. */
export function serviceLd(opts: {
  name: string;
  description: string;
  path: string;
  category: string;
  priceFrom?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.category,
    url: abs(opts.path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Україна" },
    ...(opts.priceFrom && /\d/.test(opts.priceFrom)
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "UAH",
            description: `Стартова ціна — ${opts.priceFrom}`,
          },
        }
      : {}),
  };
}

/** Article — для кейсів. */
export function articleLd(opts: {
  headline: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline.slice(0, 110),
    description: opts.description,
    url: abs(opts.path),
    image: abs("/og-image.png"),
    inLanguage: "uk-UA",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** FAQPage з масиву {q, a}. */
export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}
