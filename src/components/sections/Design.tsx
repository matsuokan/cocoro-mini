"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const ANGLES = [
  {
    id: "front",
    label: "フロント",
    desc: "コンパクトでスタイリッシュな正面デザイン",
    image: "/product-hero.png",
    imageAlt: "cocoro mini 正面",
  },
  {
    id: "back",
    label: "バック",
    desc: "多彩なポートを背面に集約",
    image: "/product-back.png",
    imageAlt: "cocoro mini 背面ポート",
  },
  {
    id: "side",
    label: "サイド",
    desc: "薄型設計で省スペース設置が可能",
    image: "/product-side.png",
    imageAlt: "cocoro mini 側面",
  },
  {
    id: "ports",
    label: "ポート",
    desc: "フル装備のI/Oで拡張性も万全",
    image: null,
    imageAlt: "",
    svg: (
      <>
        <rect x="20" y="40" width="280" height="140" rx="12" fill="#F5F5F7" stroke="#E5E5E7" strokeWidth="1" />
        <text x="160" y="70" textAnchor="middle" fill="#86868B" fontSize="10" fontFamily="DM Sans, sans-serif" letterSpacing="2">— REAR I/O —</text>
        {[
          { x: 40, y: 90, w: 36, h: 22, label: "HDMI 2.1", color: "#4F8EF7" },
          { x: 84, y: 90, w: 28, h: 22, label: "DisplayPort", color: "#F7924F" },
          { x: 120, y: 93, w: 18, h: 16, label: "USB-C×2", color: "#00D4AA" },
          { x: 146, y: 93, w: 18, h: 16, label: "", color: "#00D4AA" },
          { x: 172, y: 93, w: 14, h: 16, label: "USB-A×3", color: "#D44FAF" },
          { x: 190, y: 93, w: 14, h: 16, label: "", color: "#D44FAF" },
          { x: 208, y: 93, w: 14, h: 16, label: "", color: "#D44FAF" },
          { x: 228, y: 90, w: 38, h: 22, label: "Ethernet", color: "#0071e3" },
          { x: 274, y: 93, w: 14, h: 16, label: "Audio", color: "#6E6E73" },
        ].map((p, i) => (
          <g key={i}>
            <rect x={p.x} y={p.y} width={p.w} height={p.h} rx="3" fill={`${p.color}15`} stroke={`${p.color}50`} strokeWidth="1" />
            {p.label && (
              <text x={p.x + p.w / 2} y={p.y + p.h + 12} textAnchor="middle" fill={p.color} fontSize="6.5" fontFamily="DM Sans, sans-serif" opacity="0.9">{p.label}</text>
            )}
          </g>
        ))}
        <text x="160" y="165" textAnchor="middle" fill="#86868B" fontSize="9" fontFamily="DM Sans, sans-serif">+ フロント: SD Card / USB-A / USB-C</text>
      </>
    ),
    viewBox: "0 0 320 220",
  },
];

const SPECS_MINI = [
  { label: "サイズ", value: "約 127 mm × 127 mm × 37 mm" },
  { label: "重量", value: "約 780 g" },
  { label: "カラー", value: "スペースグレイ" },
  { label: "冷却", value: "ファンレス + 銅製ヒートパイプ" },
];

export default function Design() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="design"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "#ffffff",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
          <span className="section-label">デザイン</span>
          <h2 className="section-title" style={{ color: "#1C1C1E", marginBottom: 16 }}>
            小さく、美しく、機能的に。
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Mac mini にインスパイアされたコンパクトフォームファクタ。
            <br />
            どこにでも置けて、どんな用途にも応える。
          </p>
        </div>

        {/* アングルグリッド */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            marginBottom: 64,
          }}
        >
          {ANGLES.map((angle, i) => (
            <div
              key={angle.id}
              id={`design-${angle.id}`}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "#F5F5F7",
                border: "1px solid #E5E5E7",
                borderRadius: 20,
                padding: angle.image ? "0" : "32px 24px 24px",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                cursor: "default",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#EBEBED";
                e.currentTarget.style.borderColor = "rgba(0,212,170,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#F5F5F7";
                e.currentTarget.style.borderColor = "#E5E5E7";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
              }}
            >
              {angle.image ? (
                <>
                  {/* 実製品写真 */}
                  <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                    <Image
                      src={angle.image}
                      alt={angle.imageAlt}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, transparent 60%, rgba(245,245,247,0.85) 100%)",
                    }} />
                  </div>
                  <div style={{ padding: "20px 24px 24px" }}>
                    <div
                      style={{
                        display: "inline-block",
                        background: "rgba(0,212,170,0.08)",
                        border: "1px solid rgba(0,212,170,0.25)",
                        borderRadius: 6,
                        padding: "3px 10px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#00A882",
                        marginBottom: 8,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {angle.label}
                    </div>
                    <p style={{ color: "#6E6E73", fontSize: "0.875rem", margin: 0 }}>
                      {angle.desc}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <svg
                    viewBox={angle.viewBox}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "100%", height: "auto", marginBottom: 16 }}
                  >
                    {angle.svg}
                  </svg>
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(0,212,170,0.08)",
                      border: "1px solid rgba(0,212,170,0.25)",
                      borderRadius: 6,
                      padding: "3px 10px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#00A882",
                      marginBottom: 8,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {angle.label}
                  </div>
                  <p style={{ color: "#6E6E73", fontSize: "0.875rem", margin: 0 }}>
                    {angle.desc}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* スペック簡易表 */}
        <div
          className="reveal"
          style={{
            background: "#F5F5F7",
            border: "1px solid #E5E5E7",
            borderRadius: 20,
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
          }}
        >
          {SPECS_MINI.map((spec) => (
            <div key={spec.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  color: "#86868B",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {spec.label}
              </div>
              <div style={{ color: "#1C1C1E", fontSize: "1rem", fontWeight: 600 }}>
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
