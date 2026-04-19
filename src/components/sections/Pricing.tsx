"use client";

import { useState, useEffect, useRef } from "react";
import { MODELS, type ProductModel } from "@/constants/product";

function PricingCard({ model, index }: { model: ProductModel; index: number }) {
  const [selectedRam, setSelectedRam] = useState(0);
  const [selectedSsd, setSelectedSsd] = useState(0);

  const basePrice = parseInt(model.price.replace(/[¥,]/g, ""));
  const totalPrice = basePrice + model.ramOptions[selectedRam].price + model.ssdOptions[selectedSsd].price;
  const isRecommended = !!model.badge;

  return (
    <div
      id={`pricing-card-${model.id}`}
      style={{
        background: isRecommended ? "#1d1d1f" : "#ffffff",
        borderRadius: 20,
        border: isRecommended ? "none" : "1px solid #d2d2d7",
        padding: "36px 32px",
        position: "relative",
        transition: "transform 0.3s, box-shadow 0.3s",
        boxShadow: isRecommended
          ? "0 24px 64px rgba(0,0,0,0.18)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        animation: `fade-up 0.6s ease-out ${index * 0.15}s both`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        if (!isRecommended) e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        if (!isRecommended) e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
      }}
    >
      {isRecommended && (
        <div
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#0071e3",
            borderRadius: 100,
            padding: "5px 18px",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#ffffff",
            whiteSpace: "nowrap",
          }}
        >
          ★ {model.badge}
        </div>
      )}

      {/* モデル名 */}
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: isRecommended ? "#00D4AA" : "#6E6E73",
            marginBottom: 8,
          }}
        >
          {model.name}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 4,
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              color: isRecommended ? "#ffffff" : "#1C1C1E",
              fontFamily: "DM Sans, sans-serif",
              letterSpacing: "-0.02em",
              transition: "all 0.2s",
            }}
          >
            ¥{totalPrice.toLocaleString()}
          </span>
          <span style={{ color: isRecommended ? "rgba(255,255,255,0.5)" : "#6E6E73", fontSize: "0.875rem" }}>
            {model.priceNote}
          </span>
        </div>
        <p style={{ color: isRecommended ? "rgba(255,255,255,0.6)" : "#6E6E73", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
          {model.description}
        </p>
      </div>

      {/* スペック */}
      <div
        style={{
          background: isRecommended ? "rgba(255,255,255,0.07)" : "#f5f5f7",
          borderRadius: 10,
          padding: "16px",
          marginBottom: 24,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {[
          { label: "CPU", value: model.cpu },
          { label: "NPU", value: model.npu },
          { label: "OS", value: model.os },
        ].map((spec) => (
          <div key={spec.label} style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
            <span style={{ color: isRecommended ? "rgba(255,255,255,0.45)" : "#6E6E73", fontSize: "0.8125rem", flexShrink: 0 }}>
              {spec.label}
            </span>
            <span style={{ color: isRecommended ? "rgba(255,255,255,0.85)" : "#1C1C1E", fontSize: "0.8125rem", textAlign: "right" }}>
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      {/* カスタマイズ */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ color: isRecommended ? "rgba(255,255,255,0.5)" : "#6E6E73", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 12 }}>
          カスタマイズ
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {/* RAM */}
          <div>
            <label style={{ fontSize: "0.8125rem", color: isRecommended ? "rgba(255,255,255,0.5)" : "#6E6E73", display: "block", marginBottom: 6 }}>
              RAM
            </label>
            <select
              id={`ram-select-${model.id}`}
              value={selectedRam}
              onChange={(e) => setSelectedRam(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 10,
                border: isRecommended ? "1px solid rgba(255,255,255,0.15)" : "1px solid #E5E5E7",
                background: isRecommended ? "rgba(255,255,255,0.06)" : "#ffffff",
                color: isRecommended ? "#ffffff" : "#1C1C1E",
                fontSize: "0.875rem",
                cursor: "pointer",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236E6E73' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                paddingRight: 36,
              }}
            >
              {model.ramOptions.map((opt, i) => (
                <option key={i} value={i}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* SSD */}
          <div>
            <label style={{ fontSize: "0.8125rem", color: isRecommended ? "rgba(255,255,255,0.5)" : "#6E6E73", display: "block", marginBottom: 6 }}>
              SSD
            </label>
            <select
              id={`ssd-select-${model.id}`}
              value={selectedSsd}
              onChange={(e) => setSelectedSsd(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 10,
                border: isRecommended ? "1px solid rgba(255,255,255,0.15)" : "1px solid #E5E5E7",
                background: isRecommended ? "rgba(255,255,255,0.06)" : "#ffffff",
                color: isRecommended ? "#ffffff" : "#1C1C1E",
                fontSize: "0.875rem",
                cursor: "pointer",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236E6E73' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                paddingRight: 36,
              }}
            >
              {model.ssdOptions.map((opt, i) => (
                <option key={i} value={i}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* CTAボタン */}
      <button
        id={`add-to-cart-${model.id}`}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: 980,
          border: "none",
          background: "#0071e3",
          color: "#ffffff",
          fontSize: "0.9375rem",
          fontWeight: 500,
          cursor: "pointer",
          transition: "opacity 0.2s, transform 0.2s",
          fontFamily: "DM Sans, Noto Sans JP, sans-serif",
          letterSpacing: "-0.01em",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.9";
          e.currentTarget.style.transform = "scale(1.01)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "scale(1)";
        }}
        onClick={() => {
          alert(`${model.name} モデル（¥${totalPrice.toLocaleString()}）をカートに追加しました。\n（EC連携後に実装予定）`);
        }}
      >
        カートに追加 →
      </button>
    </div>
  );
}

export default function Pricing() {
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

  return (
    <section
      id="pricing"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #F8F8F6 0%, #EEEEE8 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
          <span className="section-label">モデル・価格</span>
          <h2 className="section-title" style={{ color: "#1C1C1E", marginBottom: 16 }}>
            あなたに最適なモデルを選ぼう。
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            3つのラインナップから、用途と予算に合わせて選択できます。
            <br />
            RAM・SSDは購入時にカスタマイズ可能。
          </p>
        </div>

        {/* カードグリッド */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            alignItems: "center",
          }}
          className="pricing-grid"
        >
          {MODELS.map((model, i) => (
            <PricingCard key={model.id} model={model} index={i} />
          ))}
        </div>

        {/* 注記 */}
        <p
          className="reveal"
          style={{
            textAlign: "center",
            color: "#6E6E73",
            fontSize: "0.8125rem",
            marginTop: 32,
          }}
        >
          ※ 表示価格はすべて税込。配送料無料。法人向け請求書払い対応。
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
