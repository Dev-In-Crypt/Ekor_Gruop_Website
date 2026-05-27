import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AuditForm } from "@/components/sections/AuditForm";
import { categories, services } from "@/lib/services";
import { PriceTable } from "./PriceTable";
import { Calculator } from "./Calculator";

export const metadata: Metadata = {
  title: "Вартість послуг охорони",
  description:
    "Стартові ціни на послуги охорони ЄКОР: фізична охорона від 28 000 ₴/міс, БПЛА від 60 000 ₴, поліграф від 4 500 ₴. Калькулятор орієнтовної вартості.",
};

export default function CinyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Прозоро"
        title="Вартість послуг"
        lead="Стартові ціни по кожному напрямку. Точну вартість розраховуємо після безкоштовного аудиту об'єкта — без сюрпризів у договорі."
        breadcrumbs={[{ label: "Ціни" }]}
      />

      <PriceTable categories={categories} services={services} />

      <Calculator />

      <AuditForm />
    </>
  );
}
