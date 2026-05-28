import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Cases } from "@/components/sections/Cases";
import { Clients } from "@/components/sections/Clients";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Regions } from "@/components/sections/Regions";
import { AuditForm } from "@/components/sections/AuditForm";
import { JsonLd } from "@/components/JsonLd";
import { websiteLd } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteLd()} />
      <Hero />
      <Stats />
      <Services />
      <Solutions />
      <Cases />
      <Clients />
      <WhyUs />
      <Testimonials />
      <Regions />
      <AuditForm />
    </>
  );
}
