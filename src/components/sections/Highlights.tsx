"use client";

import { useEffect, useRef } from "react";
import { HIGHLIGHTS } from "@/constants/product";

const ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "trending-down": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
      <polyline points="17 18 23 18 23 12" />
    </svg>
  ),
  sliders: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  ),
  zap: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
};

export default function Highlights() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="highlights"
      style={{
        padding: "100px 0",
        background: "#F8F8F6",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ヘッダー */}
        <div
          style={{ textAlign: "center", marginBottom: 64 }}
          className="reveal"
        >
          <span className="section-label">なぜ cocoro mini か</span>
          <h2
            className="section-title"
            style={{ color: "#1C1C1E", marginBottom: 16 }}
          >
            4つの理由で、選ばれている。
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            ローカルAI・コスパ・互換性・カスタマイズ。すべてが揃った miniPC。
          </p>
        </div>

        {/* カードグリッド */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
          className="highlights-grid"
        >
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={item.icon}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "#ffffff",
                borderRadius: 20,
                padding: "36px 32px",
                border: "1px solid #E5E5E7",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)";
                e.currentTarget.style.borderColor = item.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.05)";
                e.currentTarget.style.borderColor = "#E5E5E7";
              }}
            >
              {/* 背景アクセント */}
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: `${item.color}10`,
                  pointerEvents: "none",
                }}
              />

              {/* アイコン */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `${item.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: item.color,
                  marginBottom: 24,
                }}
              >
                {ICONS[item.icon]}
              </div>

              {/* 番号 */}
              <div
                style={{
                  position: "absolute",
                  top: 28,
                  right: 32,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: `${item.color}60`,
                  fontFamily: "DM Sans, sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                0{i + 1}
              </div>

              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#1C1C1E",
                  marginBottom: 12,
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#6E6E73",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {item.description}
              </p>

              {/* アクセントライン */}
              <div
                style={{
                  width: 32,
                  height: 3,
                  background: item.color,
                  borderRadius: 2,
                  marginTop: 24,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .highlights-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
