"use client";

import { useEffect, useRef } from "react";

const PAYMENT_METHODS = [
  { icon: "💳", label: "クレジットカード", desc: "Visa / Mastercard / JCB / Amex" },
  { icon: "🏦", label: "銀行振込", desc: "ご注文後3営業日以内にご入金" },
  { icon: "📄", label: "請求書払い", desc: "法人・個人事業主向け（審査あり）" },
];

const SHIPPING_INFO = [
  { icon: "🚚", title: "全国送料無料", desc: "沖縄・離島を含む全国一律無料" },
  { icon: "⚡", title: "最短3営業日発送", desc: "在庫あり品は最短3営業日以内に出荷" },
  { icon: "📦", title: "丁寧な梱包", desc: "精密機器対応の専用梱包材で発送" },
];

export default function Purchase() {
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
      id="purchase"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "#ffffff",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
          <span className="section-label">購入する</span>
          <h2 className="section-title" style={{ color: "#1C1C1E", marginBottom: 16 }}>
            今日から、ローカルAIを始めよう。
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            安心の決済・配送・保証で、スムーズにお届けします。
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            marginBottom: 32,
          }}
          className="purchase-grid"
        >
          {/* 決済方法 */}
          <div className="reveal">
            <h3
              style={{
                fontSize: "1.0625rem",
                fontWeight: 700,
                color: "#1C1C1E",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "rgba(0,212,170,0.1)",
                  border: "1px solid rgba(0,212,170,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.875rem",
                }}
              >
                💳
              </span>
              お支払い方法
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {PAYMENT_METHODS.map((pm) => (
                <div
                  key={pm.label}
                  style={{
                    background: "#F5F5F7",
                    border: "1px solid #E5E5E7",
                    borderRadius: 14,
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,212,170,0.05)";
                    e.currentTarget.style.borderColor = "rgba(0,212,170,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#F5F5F7";
                    e.currentTarget.style.borderColor = "#E5E5E7";
                  }}
                >
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{pm.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9375rem", marginBottom: 3, color: "#1C1C1E" }}>{pm.label}</div>
                    <div style={{ color: "#86868B", fontSize: "0.8125rem" }}>{pm.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 配送 */}
          <div className="reveal reveal-delay-2">
            <h3
              style={{
                fontSize: "1.0625rem",
                fontWeight: 700,
                color: "#1C1C1E",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "rgba(79,142,247,0.1)",
                  border: "1px solid rgba(79,142,247,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.875rem",
                }}
              >
                🚚
              </span>
              配送・発送
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {SHIPPING_INFO.map((info) => (
                <div
                  key={info.title}
                  style={{
                    background: "#F5F5F7",
                    border: "1px solid #E5E5E7",
                    borderRadius: 14,
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(79,142,247,0.05)";
                    e.currentTarget.style.borderColor = "rgba(79,142,247,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#F5F5F7";
                    e.currentTarget.style.borderColor = "#E5E5E7";
                  }}
                >
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{info.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9375rem", marginBottom: 3, color: "#1C1C1E" }}>{info.title}</div>
                    <div style={{ color: "#86868B", fontSize: "0.8125rem" }}>{info.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 法人向けバナー */}
        <div
          className="reveal"
          style={{
            background: "linear-gradient(135deg, rgba(247,146,79,0.06) 0%, rgba(247,146,79,0.03) 100%)",
            border: "1px solid rgba(247,146,79,0.2)",
            borderRadius: 20,
            padding: "36px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "rgba(247,146,79,0.1)",
                border: "1px solid rgba(247,146,79,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                flexShrink: 0,
              }}
            >
              🏢
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: 6, color: "#1C1C1E" }}>
                法人・まとめ買いのご相談
              </h3>
              <p style={{ color: "#6E6E73", fontSize: "0.9375rem", margin: 0, lineHeight: 1.7 }}>
                10台以上のご注文・請求書払い・導入サポートは専用窓口にてご相談ください。
                <br />
                ボリュームディスカウントも対応しております。
              </p>
            </div>
          </div>
          <a
            href="#support"
            id="corporate-inquiry"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "11px 22px",
              background: "transparent",
              color: "#F7924F",
              fontWeight: 500,
              fontFamily: "DM Sans, Noto Sans JP, sans-serif",
              borderRadius: 980,
              border: "1.5px solid #F7924F",
              cursor: "pointer",
              transition: "all 0.3s",
              textDecoration: "none",
              whiteSpace: "nowrap",
              fontSize: "0.9375rem",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F7924F";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#F7924F";
            }}
          >
            法人窓口へ →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .purchase-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
