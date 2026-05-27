import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { solutions } from "@/lib/solutions";
import { services, categoryByKey } from "@/lib/services";
import { PageHeader } from "@/components/PageHeader";
import { AuditForm } from "@/components/sections/AuditForm";
import { SolutionBody } from "./SolutionBody";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return solutions.filter((s) => s.hasPage).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.description };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const linkedServices = solution.services
    .map((ref) => {
      const service = services.find((s) => s.category === ref.category && s.slug === ref.slug);
      if (!service) return null;
      const category = categoryByKey(ref.category);
      return { service, category };
    })
    .filter((x): x is { service: NonNullable<typeof x>["service"]; category: NonNullable<typeof x>["category"] } => Boolean(x));

  return (
    <>
      <PageHeader
        eyebrow="Галузеве рішення"
        title={solution.title}
        lead={solution.description}
        breadcrumbs={[
          { label: "Рішення", href: "/rishennya" },
          { label: solution.title },
        ]}
      />

      <SolutionBody solution={solution} linkedServices={linkedServices} />

      <AuditForm />
    </>
  );
}
