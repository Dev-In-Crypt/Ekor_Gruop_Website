"use client";

import { motion } from "motion/react";

interface TextSplitProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}

/**
 * Splits a string into lines (by newline) and animates each line with a
 * mask-up reveal. Lines further apart stagger.
 */
export function TextSplit({
  text,
  className,
  delay = 0,
  staggerChildren = 0.08,
}: TextSplitProps) {
  const lines = text.split("\n");

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em" }}
        >
          <motion.span
            style={{ display: "inline-block", willChange: "transform" }}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.9,
              delay: delay + i * staggerChildren,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
