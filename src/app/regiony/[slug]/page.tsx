import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { regions, regionBySlug } from "@/lib/regions";
import { PageHeader } from "@/components/PageHeader";
import { AuditForm } from "@/components/sections/AuditForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, serviceLd, clampDesc } from "@/lib/seo";
import { RegionBody } from "./RegionBody";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const region = regionBySlug(slug);
  if (!region) return {};
  return {
    title: `Охорона ${region.name}`,
    description: clampDesc(region.lead),
    alternates: { canonical: `/regiony/${region.slug}` },
  };
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const region = regionBySlug(slug);
  if (!region) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Головна", path: "/" },
            { name: "Регіони", path: "/regiony" },
            { name: region.name, path: `/regiony/${region.slug}` },
          ]),
          serviceLd({
            name: `Охорона — ${region.name}`,
            description: clampDesc(region.lead),
            path: `/regiony/${region.slug}`,
            category: "Охоронні послуги",
          }),
        ]}
      />
      <PageHeader
        eyebrow="Регіон"
        title={region.name}
        lead={region.lead}
        breadcrumbs={[
          { label: "Регіони", href: "/regiony" },
          { label: region.name },
        ]}
      />

      <RegionBody region={region} />

      <AuditForm />
    </>
  );
}
