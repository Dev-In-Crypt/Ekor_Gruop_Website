"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { site } from "@/lib/site";

type StatItem = {
  num?: number;
  display?: string;
  sfx?: string;
  label: string;
  fill: string;
};

export function Stats() {
  return (
    <section className="f-stats">
      <div className="f-stats-grid">
        {site.metrics.map((s, i) => (
          <StatCell key={i} item={s} />
        ))}
      </div>
    </section>
  );
}

function StatCell({ item }: { item: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || item.num === undefined) return;
    const target = item.num;
    const start = performance.now();
    const dur = 2400;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, item.num]);

  return (
    <div ref={ref} className={"f-stat" + (inView ? " vis" : "")}>
      <div className="f-stat-n">
        {item.display ? (
          item.display
        ) : (
          <>
            {n}
            {item.sfx && <span className="f-stat-sfx">{item.sfx}</span>}
          </>
        )}
      </div>
      <div className="f-stat-l">{item.label}</div>
      <div className="f-stat-bar">
        <div className="f-stat-bar-fill" style={{ "--fill": item.fill } as React.CSSProperties} />
      </div>
    </div>
  );
}
