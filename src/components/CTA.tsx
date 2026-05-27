import Link from "next/link";
import { site } from "@/lib/site";

interface CTAProps {
  title?: string;
  text?: string;
}

export function CTA({
  title = "Готові обговорити вашу безпеку?",
  text = "Замовте безкоштовний аудит або зателефонуйте — порадимо рішення за 15 хвилин.",
}: CTAProps) {
  return (
    <section className="f-cta">
      <div className="f-cta-glow" />
      <div className="f-cta-form-wrap" style={{ textAlign: "center" }}>
        <div style={{ font: "700 clamp(24px, 2.6vw, 32px) var(--hd2)", color: "var(--tx)", textTransform: "uppercase", letterSpacing: -0.3, marginBottom: 14 }}>
          {title}
        </div>
        <p style={{ font: "300 15px/1.7 var(--bd)", color: "var(--tx2)", marginBottom: 32 }}>{text}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <Link href="/kontakty" className="f-btn-gold">
            Замовити аудит
          </Link>
          <Link href={site.phoneHref} className="f-btn-out">
            {site.phone}
          </Link>
        </div>
      </div>
    </section>
  );
}
