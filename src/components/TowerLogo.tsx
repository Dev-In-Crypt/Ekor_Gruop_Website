interface TowerLogoProps {
  size?: number;
  color?: string;
  className?: string;
}

export function TowerLogo({ size = 32, color = "var(--g)", className }: TowerLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 72"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Left tower */}
      <rect x="4" y="24" width="14" height="48" fill={color} opacity=".85" />
      <rect x="6" y="18" width="10" height="8" fill={color} />
      <rect x="5" y="14" width="4" height="6" fill={color} opacity=".7" />
      <rect x="13" y="14" width="4" height="6" fill={color} opacity=".7" />
      {/* Center tower */}
      <rect x="22" y="8" width="20" height="64" fill={color} />
      <rect x="25" y="0" width="14" height="12" fill={color} opacity=".9" />
      <rect x="24" y="0" width="5" height="4" fill={color} opacity=".6" />
      <rect x="35" y="0" width="5" height="4" fill={color} opacity=".6" />
      {/* Right tower */}
      <rect x="46" y="24" width="14" height="48" fill={color} opacity=".85" />
      <rect x="48" y="18" width="10" height="8" fill={color} />
      <rect x="47" y="14" width="4" height="6" fill={color} opacity=".7" />
      <rect x="55" y="14" width="4" height="6" fill={color} opacity=".7" />
      {/* Windows */}
      <rect x="28" y="20" width="3" height="4" fill={color} opacity=".2" />
      <rect x="33" y="20" width="3" height="4" fill={color} opacity=".2" />
      <rect x="28" y="28" width="3" height="4" fill={color} opacity=".2" />
      <rect x="33" y="28" width="3" height="4" fill={color} opacity=".2" />
      <rect x="28" y="36" width="3" height="4" fill={color} opacity=".2" />
      <rect x="33" y="36" width="3" height="4" fill={color} opacity=".2" />
      {/* Gate */}
      <rect x="28" y="54" width="8" height="18" rx="4" fill="rgba(0,0,0,.5)" />
    </svg>
  );
}

export function HeroTower() {
  return (
    <svg
      className="f-hero-tower"
      viewBox="0 0 64 84"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <rect x="4" y="28" width="14" height="56" fill="currentColor" />
      <rect x="6" y="22" width="10" height="8" fill="currentColor" />
      <rect x="5" y="16" width="4" height="8" fill="currentColor" opacity=".6" />
      <rect x="13" y="16" width="4" height="8" fill="currentColor" opacity=".6" />
      <rect x="22" y="8" width="20" height="76" fill="currentColor" />
      <rect x="25" y="0" width="14" height="12" fill="currentColor" opacity=".9" />
      <rect x="24" y="0" width="5" height="4" fill="currentColor" opacity=".5" />
      <rect x="35" y="0" width="5" height="4" fill="currentColor" opacity=".5" />
      <rect x="46" y="28" width="14" height="56" fill="currentColor" />
      <rect x="48" y="22" width="10" height="8" fill="currentColor" />
      <rect x="47" y="16" width="4" height="8" fill="currentColor" opacity=".6" />
      <rect x="55" y="16" width="4" height="8" fill="currentColor" opacity=".6" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <path d="M8 1L2 4v4c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V4L8 1z" />
      <path d="M6 8l2 2 3-3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type SvcIconType = "field" | "silo" | "warehouse" | "building" | "crane" | "school" | "drone" | "truck" | "search" | "shield" | "doc";

export function ServiceIcon({ type }: { type: SvcIconType }) {
  const cls = "f-srv-icon";
  switch (type) {
    case "field":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 36V16" />
          <path d="M20 16c-3-3-8-7-14-7" strokeLinecap="round" />
          <path d="M20 16c3-3 8-7 14-7" strokeLinecap="round" />
          <path d="M20 22c-3-2.5-7-5.5-12-5.5" strokeLinecap="round" />
          <path d="M20 22c3-2.5 7-5.5 12-5.5" strokeLinecap="round" />
          <path d="M20 28c-2.5-2-5.5-4.5-10-4.5" strokeLinecap="round" />
          <path d="M20 28c2.5-2 5.5-4.5 10-4.5" strokeLinecap="round" />
        </svg>
      );
    case "silo":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 14v22h20V14" />
          <path d="M10 14c0-5.5 4.5-10 10-10s10 4.5 10 10" />
          <line x1="10" y1="20" x2="30" y2="20" strokeOpacity=".3" />
          <line x1="10" y1="26" x2="30" y2="26" strokeOpacity=".3" />
        </svg>
      );
    case "warehouse":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 18L20 6l16 12" />
          <rect x="6" y="18" width="28" height="18" />
          <rect x="14" y="24" width="12" height="12" />
        </svg>
      );
    case "building":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="8" y="4" width="24" height="32" />
          <rect x="13" y="9" width="4" height="4" strokeOpacity=".5" />
          <rect x="23" y="9" width="4" height="4" strokeOpacity=".5" />
          <rect x="13" y="17" width="4" height="4" strokeOpacity=".5" />
          <rect x="23" y="17" width="4" height="4" strokeOpacity=".5" />
          <rect x="16" y="30" width="8" height="6" />
        </svg>
      );
    case "crane":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="36" x2="12" y2="6" />
          <line x1="8" y1="36" x2="16" y2="36" />
          <line x1="12" y1="6" x2="34" y2="6" />
          <line x1="34" y1="6" x2="34" y2="14" strokeOpacity=".6" />
          <rect x="30" y="14" width="8" height="6" strokeOpacity=".6" />
        </svg>
      );
    case "school":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 4L4 14l16 10 16-10L20 4z" />
          <path d="M8 17v12c0 0 4 5 12 5s12-5 12-5V17" strokeOpacity=".5" />
          <line x1="36" y1="14" x2="36" y2="30" />
        </svg>
      );
    case "drone":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="20" r="3" />
          <line x1="20" y1="20" x2="8" y2="8" />
          <line x1="20" y1="20" x2="32" y2="8" />
          <line x1="20" y1="20" x2="8" y2="32" />
          <line x1="20" y1="20" x2="32" y2="32" />
          <circle cx="8" cy="8" r="4" strokeOpacity=".6" />
          <circle cx="32" cy="8" r="4" strokeOpacity=".6" />
          <circle cx="8" cy="32" r="4" strokeOpacity=".6" />
          <circle cx="32" cy="32" r="4" strokeOpacity=".6" />
        </svg>
      );
    case "truck":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="14" width="20" height="14" />
          <path d="M24 18h7l5 6v4H24z" />
          <circle cx="12" cy="30" r="3" />
          <circle cx="30" cy="30" r="3" />
        </svg>
      );
    case "search":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="18" cy="18" r="11" />
          <line x1="26" y1="26" x2="34" y2="34" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 4L6 9v11c0 8 6 14 14 16 8-2 14-8 14-16V9L20 4z" />
          <path d="M14 20l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "doc":
      return (
        <svg className={cls} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 4h16l8 8v24H10z" />
          <path d="M26 4v8h8" strokeOpacity=".5" />
          <line x1="14" y1="22" x2="30" y2="22" strokeOpacity=".4" />
          <line x1="14" y1="28" x2="30" y2="28" strokeOpacity=".4" />
        </svg>
      );
  }
}
