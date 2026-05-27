"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, type PropsWithChildren, type MouseEvent } from "react";

interface TiltCardProps {
  className?: string;
  max?: number;
  href?: string;
}

export function TiltCard({
  children,
  className,
  max = 6,
  href,
}: PropsWithChildren<TiltCardProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 18 });
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} style={{ display: "block" }}>
        {content}
      </a>
    );
  }

  return content;
}
