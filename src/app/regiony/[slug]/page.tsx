import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { regions, regionBySlug } from "@/lib/regions";
import { PageHeader } from "@/components/PageHeader";
import { AuditForm } from "@/components/sections/AuditForm";
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
    description: region.lead.slice(0, 158),
  };
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const region = regionBySlug(slug);
  if (!region) notFound();

  return (
    <>
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
