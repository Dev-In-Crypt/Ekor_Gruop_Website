"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TowerLogo } from "./TowerLogo";
import { site } from "@/lib/site";
import { navItems, type NavItem } from "@/lib/nav";

const OPEN_DELAY = 80;
const CLOSE_DELAY = 220;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const clear = () => {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleOpen = (label: string) => {
    clear();
    openTimer.current = window.setTimeout(() => setActive(label), OPEN_DELAY);
  };

  const scheduleClose = () => {
    clear();
    closeTimer.current = window.setTimeout(() => setActive(null), CLOSE_DELAY);
  };

  return (
    <header className={"fh" + (scrolled || active ? " scrolled" : "")}>
      <div className="fh-in">
        <Link href="/" className="fh-logo" aria-label="EKOR GROUP — на головну">
          <TowerLogo size={32} />
          <div className="fh-logo-text">
            EKOR<span> GROUP</span>
          </div>
        </Link>

        <nav className="fh-nav" aria-label="Основна навігація" onMouseLeave={scheduleClose}>
          {navItems.map((item) => {
            const hasMenu = !!item.groups?.length;
            const isOpen = hasMenu && active === item.label;
            return (
              <div
                key={item.label}
                className="fh-nav-slot"
                onMouseEnter={() => (hasMenu ? scheduleOpen(item.label) : scheduleClose())}
                onFocus={() => (hasMenu ? scheduleOpen(item.label) : undefined)}
              >
                <Link
                  href={item.href}
                  className={"fh-nav-link" + (isOpen ? " is-open" : "")}
                  aria-expanded={hasMenu ? isOpen : undefined}
                  aria-haspopup={hasMenu ? "true" : undefined}
                >
                  {item.label}
                </Link>

                <AnimatePresence>
                  {isOpen && item.groups && (
                    <MegaPanel
                      item={item}
                      onMouseEnter={clear}
                      onMouseLeave={scheduleClose}
                      onClose={() => setActive(null)}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="fh-r">
          <Link href={site.phoneHref} className="fh-ph">
            <span className="fh-dot" />
            {site.phone}
          </Link>
          <Link href="/kontakty" className="fh-btn">
            Замовити аудит
          </Link>
          <button
            type="button"
            className={"fh-burger" + (mobileOpen ? " is-open" : "")}
            aria-label={mobileOpen ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={mobileOpen}
            aria-controls="fh-mobile"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu navItems={navItems} onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}

interface MegaPanelProps {
  item: NavItem;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

function MegaPanel({ item, onMouseEnter, onMouseLeave, onClose }: MegaPanelProps) {
  const width = item.panelWidth ?? 280;
  const columns = item.columns ?? 1;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const adjust = () => {
      const slotRect = parent.getBoundingClientRect();
      const centerX = slotRect.left + slotRect.width / 2;
      const margin = 16;
      const maxLeft = window.innerWidth - width - margin;
      const idealLeft = centerX - width / 2;
      const finalLeft = Math.max(margin, Math.min(idealLeft, maxLeft));
      const offsetFromSlot = finalLeft - slotRect.left;
      el.style.left = `${offsetFromSlot}px`;
      el.style.transform = "translateX(0)";
    };
    adjust();
    window.addEventListener("resize", adjust);
    return () => window.removeEventListener("resize", adjust);
  }, [width]);

  return (
    <motion.div
      ref={ref}
      className="fh-mega"
      role="menu"
      aria-label={item.label}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ width }}
    >
      <div
        className="fh-mega-inner"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {item.groups?.map((g, gi) => (
          <div key={gi} className="fh-mega-group">
            {g.title && <div className="fh-mega-title">{g.title}</div>}
            <ul className="fh-mega-list">
              {g.items.map((leaf) => (
                <li key={leaf.href + leaf.label}>
                  <Link
                    href={leaf.href}
                    className="fh-mega-link"
                    onClick={onClose}
                    role="menuitem"
                  >
                    {leaf.label}
                  </Link>
                </li>
              ))}
            </ul>
            {g.footer && (
              <Link
                href={g.footer.href}
                className="fh-mega-footer"
                onClick={onClose}
                role="menuitem"
              >
                {g.footer.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function MobileMenu({
  navItems,
  onClose,
}: {
  navItems: NavItem[];
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <motion.div
      id="fh-mobile"
      className="fh-mobile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="fh-mobile-panel"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="fh-mobile-scroll">
          <ul className="fh-mobile-list">
            {navItems.map((item) => {
              const has = !!item.groups?.length;
              const isExp = expanded === item.label;
              return (
                <li key={item.label} className="fh-mobile-item">
                  <div className="fh-mobile-row">
                    <Link
                      href={item.href}
                      className="fh-mobile-link"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                    {has && (
                      <button
                        type="button"
                        className={"fh-mobile-toggle" + (isExp ? " is-open" : "")}
                        aria-label={isExp ? "Згорнути" : "Розгорнути"}
                        aria-expanded={isExp}
                        onClick={() => setExpanded(isExp ? null : item.label)}
                      >
                        +
                      </button>
                    )}
                  </div>
                  <AnimatePresence initial={false}>
                    {isExp && item.groups && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="fh-mobile-sub">
                          {item.groups.map((g, gi) => (
                            <div key={gi}>
                              {g.title && (
                                <div className="fh-mobile-sub-title">{g.title}</div>
                              )}
                              <ul className="fh-mobile-sub-list">
                                {g.items.map((leaf) => (
                                  <li key={leaf.href + leaf.label}>
                                    <Link
                                      href={leaf.href}
                                      className="fh-mobile-sub-link"
                                      onClick={onClose}
                                    >
                                      {leaf.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              {g.footer && (
                                <Link
                                  href={g.footer.href}
                                  className="fh-mobile-sub-link"
                                  style={{ color: "var(--g)", marginTop: 6 }}
                                  onClick={onClose}
                                >
                                  {g.footer.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="fh-mobile-foot">
            <a href={site.phoneHref} className="fh-mobile-phone" onClick={onClose}>
              <span className="fh-dot" />
              {site.phone}
            </a>
            <a href={site.emailHref} className="fh-mobile-email" onClick={onClose}>
              {site.email}
            </a>
            <Link
              href="/kontakty"
              className="f-btn-gold"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={onClose}
            >
              Замовити аудит
            </Link>
          </div>
        </div>
      </motion.div>

      <button
        type="button"
        className="fh-mobile-backdrop"
        aria-label="Закрити меню"
        onClick={onClose}
      />
    </motion.div>
  );
}
