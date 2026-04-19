"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BRAND, STARTING_PRICE } from "@/constants/product";

// 製品フォト
function ProductPhoto() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 560,
        margin: "0 auto",
      }}
      className="animate-float"
    >
      {/* 製品写真 */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Image
          src="/product-hero.png"
          alt="cocoro mini — ローカルAI搭載 miniPC"
          width={560}
          height={560}
          priority
          style={{
            width: "100%",
            height: "auto",
            filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.25))",
          }}
        />
      </div>

      {/* バッジ */}
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 16,
          background: "rgba(0,212,170,0.12)",
          border: "1px solid rgba(0,212,170,0.35)",
          borderRadius: 100,
          padding: "8px 16px",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          zIndex: 2,
        }}
      >
        <span style={{ color: "#00A882", fontSize: "0.8125rem", fontWeight: 600 }}>
          🤖 ローカルAI搭載
        </span>
      </div>

      {/* スペックバッジ */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: 16,
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(0,0,0,0.06)",
          borderRadius: 16,
          padding: "12px 20px",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <span style={{ color: "#6e6e73", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Intel NPU 搭載
        </span>
        <span style={{ color: "#1d1d1f", fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
          40 TOPS AI 処理
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // パーティクル風の装飾
    const el = containerRef.current;
    if (!el) return;

    // スクロールパララックス
    const onScroll = () => {
      const scrollY = window.scrollY;
      const parallax = el.querySelector<HTMLElement>(".hero-parallax");
      if (parallax) {
        parallax.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        minHeight: "100vh",
        background: "#f5f5f7",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 64,
      }}
    >
      {/* 背景アクセント（薄いグリッド） */}
      <div
        className="hero-parallax"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />



      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
        className="hero-inner"
      >
        {/* テキスト */}
        <div style={{ animation: "fade-up 0.8s ease-out forwards" }}>
          {/* ラベル */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0,212,170,0.1)",
              border: "1px solid rgba(0,212,170,0.25)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "#00D4AA",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            <span
              style={{
                color: "#00D4AA",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              New — {BRAND.os} 搭載
            </span>
          </div>

          {/* メインキャッチ */}
          <h1
            style={{
              color: "#1d1d1f",
              fontFamily: "DM Sans, Noto Sans JP, sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            {BRAND.tagline}
          </h1>

          {/* サブコピー */}
          <p
            style={{
              color: "#6e6e73",
              fontSize: "clamp(1rem, 2vw, 1.1875rem)",
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 480,
            }}
          >
            {BRAND.subTagline}
          </p>

          {/* 価格 */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 8,
              marginBottom: 40,
              padding: "16px 24px",
              background: "#ffffff",
              borderRadius: 16,
              border: "1px solid #d2d2d7",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <span style={{ color: "#6e6e73", fontSize: "0.875rem" }}>
              エントリーモデル
            </span>
            <span
              style={{
                color: "#1d1d1f",
                fontSize: "2rem",
                fontWeight: 700,
                fontFamily: "DM Sans, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              {STARTING_PRICE}
            </span>
            <span style={{ color: "#6e6e73", fontSize: "0.875rem" }}>
              税込から
            </span>
          </div>

          {/* CTAボタン */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#purchase" id="hero-cta-buy" className="btn-primary">
              購入する
            </a>
            <a href="#highlights" id="hero-cta-learn" className="btn-secondary">
              詳しく見る →
            </a>
          </div>

          {/* 補足 */}
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: "🚚", text: "全国送料無料" },
              { icon: "🛡️", text: "1年保証" },
              { icon: "🔒", text: "セキュア決済" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#86868b",
                  fontSize: "0.8125rem",
                }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 製品イラスト */}
        <div
          style={{ animation: "fade-in 1s ease-out 0.3s forwards", opacity: 0 }}
        >
          <ProductPhoto />
        </div>
      </div>

      {/* スクロールヒント */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "#86868b",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>スクロール</span>
        <div
          style={{
            width: 1.5,
            height: 40,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
            animation: "fade-up 1.5s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 100px 24px 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
