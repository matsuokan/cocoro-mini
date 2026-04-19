"use client";

import { useState, useEffect, useRef } from "react";
import { USE_CASES } from "@/constants/product";

const ICON_MAP: Record<string, string> = {
  home: "🏠",
  palette: "🎨",
  code: "💻",
  building: "🏢",
  heart: "❤️",
};

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const active = USE_CASES[activeTab];

  return (
    <section
      id="usecases"
      ref={ref}
      style={{ padding: "100px 0", background: "#F8F8F6" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: 56 }} className="reveal">
          <span className="section-label">ユースケース</span>
          <h2 className="section-title" style={{ color: "#1C1C1E", marginBottom: 16 }}>
            あなたの使い方に、寄り添う。
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            在宅ワークからAI開発まで。あらゆるシーンで活躍します。
          </p>
        </div>

        {/* タブ */}
        <div
          className="reveal"
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 32,
            overflowX: "auto",
            paddingBottom: 4,
            scrollbarWidth: "none",
          }}
        >
          {USE_CASES.map((uc, i) => (
            <button
              key={uc.id}
              id={`usecase-tab-${uc.id}`}
              onClick={() => setActiveTab(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 100,
                border: "1.5px solid",
                borderColor: activeTab === i ? "#0071e3" : "#d2d2d7",
                background: activeTab === i ? "#0071e3" : "transparent",
                color: activeTab === i ? "#ffffff" : "#6e6e73",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              <span>{ICON_MAP[uc.icon]}</span>
              {uc.label}
            </button>
          ))}
        </div>

        {/* コンテンツ */}
        <div
          key={activeTab}
          className="usecase-panel reveal reveal-delay-1"
          style={{
            background: "#ffffff",
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid #E5E5E7",
            boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
            display: "grid",
            minHeight: 360,
            animation: "fade-in 0.35s ease-out",
          }}
        >
          {/* 左: テキスト */}
          <div
            style={{
              padding: "56px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: 24,
              }}
            >
              {ICON_MAP[active.icon]}
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#1C1C1E",
                marginBottom: 16,
                lineHeight: 1.3,
              }}
            >
              {active.title}
            </h3>
            <p
              style={{
                color: "#6E6E73",
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              {active.description}
            </p>
            <a href="#purchase" className="btn-outline" style={{ width: "fit-content" }}>
              購入して試す
            </a>
          </div>

          {/* 右: フィーチャーリスト */}
          <div
            style={{
              background: "#1d1d1f",
              padding: "56px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#00D4AA",
                marginBottom: 24,
                textTransform: "uppercase",
              }}
            >
              主な機能
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {active.features.map((feature, i) => (
                <div
                  key={feature}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    animation: `fade-up 0.4s ease-out ${i * 0.08}s both`,
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      background: "rgba(0,212,170,0.15)",
                      border: "1px solid rgba(0,212,170,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .usecase-panel {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .usecase-panel {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
