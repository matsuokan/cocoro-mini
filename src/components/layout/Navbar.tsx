"use client";

import { useState, useEffect } from "react";
import { BRAND } from "@/constants/product";

const NAV_LINKS = [
  { href: "#highlights", label: "概要" },
  { href: "#performance", label: "仕様" },
  { href: "#pricing", label: "価格" },
  { href: "#purchase", label: "購入" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        ...(scrolled
          ? {
              background: "rgba(255, 255, 255, 0.72)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }
          : {
              background: "transparent",
            }),
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ロゴ */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              background: "linear-gradient(135deg, #00D4AA, #4F8EF7)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#1d1d1f", fontWeight: 700, fontSize: 14 }}>
              c
            </span>
          </div>
          <span
            style={{
              color: "#1d1d1f",
              fontWeight: 700,
              fontSize: "1.0625rem",
              letterSpacing: "-0.01em",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {BRAND.name}
          </span>
        </a>

        {/* デスクトップナビ */}
        <nav
          style={{ display: "flex", gap: 32, alignItems: "center" }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#1d1d1f",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 400,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#6e6e73")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#1d1d1f")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#purchase"
            id="nav-cta"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: "10px 24px", fontSize: "0.875rem" }}
          >
            今すぐ購入
          </a>

          {/* ハンバーガー */}
          <button
            id="mobile-menu-toggle"
            aria-label="メニューを開く"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            className="flex md:hidden"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#1d1d1f",
                  borderRadius: 2,
                  transition: "all 0.3s",
                  ...(menuOpen && i === 0
                    ? { transform: "rotate(45deg) translate(5px, 7px)" }
                    : menuOpen && i === 1
                    ? { opacity: 0 }
                    : menuOpen && i === 2
                    ? { transform: "rotate(-45deg) translate(5px, -7px)" }
                    : {}),
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(255, 255, 255, 0.97)",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            padding: "24px",
            backdropFilter: "blur(20px)",
          }}
          className="md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#1d1d1f",
                textDecoration: "none",
                fontSize: "1.0625rem",
                fontWeight: 400,
                padding: "12px 0",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#purchase"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: 20, width: "100%", justifyContent: "center" }}
          >
            今すぐ購入
          </a>
        </div>
      )}
    </header>
  );
}
