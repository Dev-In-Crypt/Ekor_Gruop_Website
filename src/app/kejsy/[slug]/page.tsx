import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases } from "@/lib/cases";
import { categories, services } from "@/lib/services";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { AuditForm } from "@/components/sections/AuditForm";
import { CaseBody } from "./CaseBody";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const k = cases.find((c) => c.slug === slug);
  if (!k) return {};
  return {
    title: k.title,
    description: `${k.short}. ${k.description}`.slice(0, 158),
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const k = cases.find((c) => c.slug === slug);
  if (!k) notFound();

  // Прив'язані послуги з повними даними
  const linkedServices = (k.services ?? [])
    .map((ref) => {
      const svc = services.find((s) => s.category === ref.category && s.slug === ref.slug);
      if (!svc) return null;
      const cat = categories.find((c) => c.key === ref.category);
      if (!cat) return null;
      return { svc, cat };
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const region = k.regionSlug ? site.regions.find((r) => r.slug === k.regionSlug) : null;

  const otherCases = cases.filter((c) => c.slug !== k.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`${k.category} · ${k.region}`}
        title={k.title}
        lead={k.description}
        breadcrumbs={[
          { label: "Кейси", href: "/kejsy" },
          { label: k.client },
        ]}
      />

      <CaseBody
        kase={k}
        linkedServices={linkedServices}
        region={region ?? null}
        otherCases={otherCases}
      />

      <AuditForm />
    </>
  );
}
