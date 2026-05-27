"use client";

import { motion, type Variants } from "motion/react";
import type { PropsWithChildren } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface RevealProps {
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  amount?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "li" | "article" | "header" | "footer" | "h1" | "h2" | "h3" | "p" | "span";
}

const buildVariants = (
  direction: Direction,
  distance: number,
  duration: number,
  delay: number,
): Variants => {
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    fade: {},
  }[direction];

  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 24,
  amount = 0.18,
  className,
  once = true,
  as = "div",
}: PropsWithChildren<RevealProps>) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={buildVariants(direction, distance, duration, delay)}
    >
      {children}
    </MotionTag>
  );
}
