import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, categoryBySlug, servicesByCategory } from "@/lib/services";
import { PageHeader } from "@/components/PageHeader";
import { AuditForm } from "@/components/sections/AuditForm";
import { CategoryBody } from "./CategoryBody";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categoryBySlug(category);
  if (!cat) return {};
  return { title: cat.title, description: cat.description };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categoryBySlug(category);
  if (!cat) notFound();

  const items = servicesByCategory(cat.key);

  return (
    <>
      <PageHeader
        eyebrow="Категорія послуг"
        title={cat.title}
        lead={cat.description}
        breadcrumbs={[
          { label: "Послуги", href: "/poslugy" },
          { label: cat.title },
        ]}
      />

      <CategoryBody category={cat} services={items} />

      <AuditForm />
    </>
  );
}
