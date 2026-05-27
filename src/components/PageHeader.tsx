"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumbs?: Crumb[];
}

const ease = [0.16, 1, 0.3, 1] as const;

export function PageHeader({ eyebrow, title, lead, breadcrumbs = [] }: PageHeaderProps) {
  return (
    <section className="f-page-head">
      <div className="f-page-head-in">
        {breadcrumbs.length > 0 && (
          <motion.nav
            className="f-crumbs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            aria-label="Хлібні крихти"
          >
            <Link href="/">Головна</Link>
            {breadcrumbs.map((c, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span className="sep">/</span>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </motion.nav>
        )}

        {eyebrow && (
          <motion.div
            className="f-hero-label"
            style={{ marginBottom: 24 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="f-hero-label-bar" />
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          {title}
        </motion.h1>

        {lead && (
          <motion.p
            className="f-page-lead"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            {lead}
          </motion.p>
        )}
      </div>
    </section>
  );
}
