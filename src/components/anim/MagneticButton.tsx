"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type PropsWithChildren, type MouseEvent } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  href?: string;
  className?: string;
  strength?: number;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  href,
  className,
  strength = 0.25,
  onClick,
  type = "button",
}: PropsWithChildren<MagneticButtonProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {inner}
    </button>
  );
}
