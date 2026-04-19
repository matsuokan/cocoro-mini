"use client";

import { useEffect, useRef } from "react";
import { COCORO_OS_FEATURES, BRAND } from "@/constants/product";

const ICON_MAP: Record<string, React.ReactNode> = {
  "message-square": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  "file-text": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  mic: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  ),
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  lock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  settings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
};

// プライバシーフロー図（ライトモード版）
function PrivacyFlowLight() {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #E5E5E7",
        borderRadius: 20,
        padding: "32px",
        textAlign: "center",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ fontSize: "0.75rem", color: "#00A882", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 24 }}>
        DATA FLOW
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flexWrap: "wrap", rowGap: 20 }}>
        {[
          { icon: "🎙️", label: "あなたの入力", color: "#4F8EF7" },
          { icon: "→", label: "", color: "transparent", arrow: true },
          { icon: "🖥️", label: "cocoro mini", color: "#00D4AA" },
          { icon: "→", label: "", color: "transparent", arrow: true },
          { icon: "🤖", label: "ローカルLLM", color: "#D44FAF" },
          { icon: "→", label: "", color: "transparent", arrow: true },
          { icon: "💬", label: "AIの回答", color: "#F7924F" },
        ].map((item, i) =>
          item.arrow ? (
            <div key={i} style={{ color: "#C7C7CC", fontSize: "1.25rem", padding: "0 8px" }}>
              →
            </div>
          ) : (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `${item.color}12`,
                  border: `1px solid ${item.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                {item.icon}
              </div>
              <span style={{ fontSize: "0.75rem", color: "#86868B", textAlign: "center" }}>
                {item.label}
              </span>
            </div>
          )
        )}
      </div>

      <div
        style={{
          marginTop: 28,
          padding: "14px 20px",
          background: "rgba(0,212,170,0.06)",
          border: "1px solid rgba(0,212,170,0.2)",
          borderRadius: 12,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ fontSize: "1rem" }}>🔒</span>
        <span style={{ color: "#00A882", fontSize: "0.875rem", fontWeight: 600 }}>
          すべてデバイス内で完結 — インターネット送信なし
        </span>
      </div>
    </div>
  );
}

// ターミナル風デモ（ダーク維持 — コードターミナルはダークが自然）
function TerminalDemo() {
  return (
    <div
      style={{
        background: "#0D0D0D",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "'Courier New', monospace",
        fontSize: "0.8125rem",
      }}
    >
      {/* タイトルバー */}
      <div
        style={{
          background: "#1A1A1A",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", marginLeft: 8 }}>
          cocoro-OS — AI Terminal
        </span>
      </div>
      {/* コンテンツ */}
      <div style={{ padding: "20px" }}>
        {[
          { prefix: "$ ", text: "cocoro chat --model llama3.1-8b", color: "#00D4AA" },
          { prefix: "", text: "✓ モデル読み込み完了 (0.8s)", color: "rgba(255,255,255,0.4)" },
          { prefix: "You: ", text: "明日の会議の議事録を要約して", color: "#4F8EF7" },
          { prefix: "AI: ", text: "承知しました。議事録を分析しています...", color: "#D44FAF" },
          { prefix: "", text: "→ 決定事項 (3件) を抽出中...", color: "rgba(255,255,255,0.3)" },
          { prefix: "", text: "→ アクションアイテム (5件) を特定中...", color: "rgba(255,255,255,0.3)" },
          { prefix: "", text: "✓ 要約完了 ─ すべてローカルで処理", color: "#00D4AA" },
        ].map((line, i) => (
          <div
            key={i}
            style={{
              color: line.color,
              marginBottom: 6,
              lineHeight: 1.6,
              animation: `fade-in 0.3s ease-out ${i * 0.15}s both`,
            }}
          >
            <span style={{ opacity: 0.5 }}>{line.prefix}</span>
            {line.text}
          </div>
        ))}
        <span
          style={{
            display: "inline-block",
            width: 8,
            height: 16,
            background: "#00D4AA",
            animation: "pulse-glow 1s ease-in-out infinite",
            marginTop: 4,
          }}
        />
      </div>
    </div>
  );
}

export default function CocoroOS() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="cocoro-os"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "#F8F8F6",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
          <span className="section-label">{BRAND.os}</span>
          <h2 className="section-title" style={{ color: "#1C1C1E", marginBottom: 16 }}>
            AIが、もっと身近になる。
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            届いたらすぐ使えるローカルAIランタイム。
            <br />
            セットアップ不要、クラウド不要、プライバシー完全保護。
          </p>
        </div>

        {/* メインコンテンツ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
          className="os-grid"
        >
          {/* 左: ターミナルデモ + プライバシーフロー */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <TerminalDemo />
            <PrivacyFlowLight />
          </div>

          {/* 右: 機能一覧 */}
          <div
            className="reveal reveal-delay-2"
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {COCORO_OS_FEATURES.map((feat) => (
              <div
                key={feat.icon}
                style={{
                  background: "#ffffff",
                  border: "1px solid #E5E5E7",
                  borderRadius: 16,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  transition: "all 0.3s",
                  cursor: "default",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,212,170,0.04)";
                  e.currentTarget.style.borderColor = "rgba(0,212,170,0.3)";
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.borderColor = "#E5E5E7";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(0,212,170,0.08)",
                    border: "1px solid rgba(0,212,170,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00A882",
                    flexShrink: 0,
                  }}
                >
                  {ICON_MAP[feat.icon]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9375rem", marginBottom: 4, color: "#1C1C1E" }}>
                    {feat.title}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#86868B", lineHeight: 1.7 }}>
                    {feat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* セットアップバナー */}
        <div
          className="reveal"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,170,0.06) 0%, rgba(0,113,227,0.04) 100%)",
            border: "1px solid rgba(0,212,170,0.18)",
            borderRadius: 20,
            padding: "36px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: "1.375rem", fontWeight: 700, marginBottom: 8, color: "#1C1C1E" }}>
              📦 届いたらすぐ使えます。
            </div>
            <p style={{ color: "#6E6E73", fontSize: "0.9375rem", margin: 0 }}>
              電源を入れて初回ウィザードに従うだけ。技術知識は一切不要。
            </p>
          </div>
          <a href="#purchase" className="btn-primary" style={{ flexShrink: 0 }}>
            今すぐ注文する
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .os-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
