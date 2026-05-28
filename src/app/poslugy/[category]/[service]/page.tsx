import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  categories,
  categoryBySlug,
  findService,
  services,
} from "@/lib/services";
import { PageHeader } from "@/components/PageHeader";
import { AuditForm } from "@/components/sections/AuditForm";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbLd, serviceLd, faqLd, clampDesc } from "@/lib/seo";
import { ServiceBody } from "./ServiceBody";

interface Props {
  params: Promise<{ category: string; service: string }>;
}

export function generateStaticParams() {
  const params: { category: string; service: string }[] = [];
  for (const c of categories) {
    for (const s of services.filter((x) => x.category === c.key)) {
      params.push({ category: c.slug, service: s.slug });
    }
  }
  return params;
}

function serviceDescription(s: NonNullable<ReturnType<typeof findService>>) {
  const parts = [s.short, s.priceFrom ? `Стартова ціна — ${s.priceFrom}.` : ""].filter(Boolean);
  let description = parts.join(" ");
  if (description.length < 140 && s.about) {
    description = `${description} ${s.about}`.trim();
  }
  return clampDesc(description);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, service } = await params;
  const s = findService(category, service);
  if (!s) return {};
  // Для надто довгих назв — коротка назва з меню, щоб title не обрізався у видачі
  const title =
    s.title.length > 50 ? { absolute: `${s.menu} — ${site.name}` } : s.title;
  return {
    title,
    description: serviceDescription(s),
    alternates: { canonical: `/poslugy/${category}/${service}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { category, service } = await params;
  const cat = categoryBySlug(category);
  const svc = findService(category, service);
  if (!cat || !svc) notFound();

  const related = services
    .filter((s) => s.category === cat.key && s.slug !== svc.slug)
    .slice(0, 3);

  const ld: object[] = [
    breadcrumbLd([
      { name: "Головна", path: "/" },
      { name: "Послуги", path: "/poslugy" },
      { name: cat.title, path: `/poslugy/${cat.slug}` },
      { name: svc.menu, path: `/poslugy/${cat.slug}/${svc.slug}` },
    ]),
    serviceLd({
      name: svc.title,
      description: serviceDescription(svc),
      path: `/poslugy/${cat.slug}/${svc.slug}`,
      category: cat.title,
      priceFrom: svc.priceFrom,
    }),
  ];
  if (svc.faq && svc.faq.length > 0) ld.push(faqLd(svc.faq));

  return (
    <>
      <JsonLd data={ld} />
      <PageHeader
        eyebrow={cat.title}
        title={svc.title}
        lead={svc.description}
        breadcrumbs={[
          { label: "Послуги", href: "/poslugy" },
          { label: cat.title, href: `/poslugy/${cat.slug}` },
          { label: svc.menu },
        ]}
      />

      <ServiceBody service={svc} category={cat} related={related} />

      <AuditForm />
    </>
  );
}
