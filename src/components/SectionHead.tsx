"use client";

import { motion } from "motion/react";

interface SectionHeadProps {
  num: string;
  title: string;
}

export function SectionHead({ num, title }: SectionHeadProps) {
  return (
    <motion.div
      className="f-sh"
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="f-sh-num">{num}</div>
      <div className="f-sh-line" />
      <h2>{title}</h2>
    </motion.div>
  );
}
