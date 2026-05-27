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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, service } = await params;
  const s = findService(category, service);
  if (!s) return {};
  // Розгорнутий description 140-160 символів для SEO
  const parts = [s.short, s.priceFrom ? `Стартова ціна — ${s.priceFrom}.` : ""].filter(Boolean);
  let description = parts.join(" ");
  if (description.length < 140 && s.about) {
    description = `${description} ${s.about}`.trim();
  }
  description = description.slice(0, 158);
  return { title: s.title, description };
}

export default async function ServicePage({ params }: Props) {
  const { category, service } = await params;
  const cat = categoryBySlug(category);
  const svc = findService(category, service);
  if (!cat || !svc) notFound();

  const related = services
    .filter((s) => s.category === cat.key && s.slug !== svc.slug)
    .slice(0, 3);

  return (
    <>
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
