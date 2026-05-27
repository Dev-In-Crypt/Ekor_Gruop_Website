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

export default function Home() {
  return (
    <>
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
