"use client";

import { useEffect, useRef, useState } from "react";
import { MODELS } from "@/constants/product";

const SPECS_TABLE = [
  {
    label: "CPU",
    entry: "Intel Core Ultra 5 125H",
    standard: "Intel Core Ultra 7 165H",
    pro: "Intel Core Ultra 9 185H",
  },
  {
    label: "GPU",
    entry: "Intel Arc Graphics",
    standard: "Intel Arc Graphics",
    pro: "Intel Arc + 独立GPU",
  },
  {
    label: "NPU",
    entry: "10 TOPS",
    standard: "34 TOPS",
    pro: "40 TOPS",
  },
  {
    label: "RAM",
    entry: "16 GB",
    standard: "32 GB",
    pro: "64 GB",
  },
  {
    label: "SSD",
    entry: "512 GB NVMe",
    standard: "1 TB NVMe",
    pro: "2 TB NVMe",
  },
  {
    label: "WiFi",
    entry: "WiFi 6E",
    standard: "WiFi 6E",
    pro: "WiFi 7",
  },
  {
    label: "Bluetooth",
    entry: "5.3",
    standard: "5.3",
    pro: "5.4",
  },
];

const BENCHMARKS = [
  { label: "シングルコア", entry: 68, standard: 85, pro: 100, unit: "pts（相対）" },
  { label: "マルチコア", entry: 62, standard: 81, pro: 100, unit: "pts（相対）" },
  { label: "NPU AI処理", entry: 45, standard: 78, pro: 100, unit: "pts（相対）" },
  { label: "LLM 推論速度", entry: 38, standard: 70, pro: 100, unit: "tokens/sec相対" },
];

const LLM_MODELS = [
  "Llama 3.1 8B", "Mistral 7B", "Gemma 2 9B", "Qwen 2.5 7B",
  "Phi-3 Mini", "DeepSeek-R1 8B", "Command R 7B", "LLaVA 1.6",
];

function AnimatedBarLight({ value, color, label }: { value: number; color: string; label: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), 100);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{ flex: 1 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: "0.75rem", color: "#86868B" }}>{label}</span>
        <span style={{ fontSize: "0.75rem", color, fontWeight: 700 }}>{value}</span>
      </div>
      <div
        style={{
          height: 6,
          background: "#E5E5E7",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: color,
            borderRadius: 3,
            transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
    </div>
  );
}

export default function Performance() {
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
      id="performance"
      ref={ref}
      style={{ padding: "100px 0", background: "#F8F8F6" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
          <span className="section-label">AI性能・スペック</span>
          <h2 className="section-title" style={{ color: "#1C1C1E", marginBottom: 16 }}>
            本格スペック。ローカルAIを動かす力。
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            最新の Intel Core Ultra シリーズと専用 NPU で、
            <br />
            クラウド不要のローカルLLMが快適に動作します。
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 32,
            marginBottom: 32,
          }}
          className="perf-grid"
        >
          {/* スペック表 */}
          <div
            className="reveal card"
            style={{ padding: 0, overflow: "hidden" }}
          >
            <div
              style={{
                padding: "24px 32px",
                borderBottom: "1px solid #E5E5E7",
                background: "#f5f5f7",
              }}
            >
              <h3 style={{ color: "#1C1C1E", fontWeight: 700, fontSize: "1.0625rem", margin: 0 }}>
                スペック比較表
              </h3>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 400 }}>
                <thead>
                  <tr style={{ background: "#F8F8F6" }}>
                    <th style={{ padding: "14px 20px", textAlign: "left", fontSize: "0.8125rem", color: "#6E6E73", fontWeight: 600, borderBottom: "1px solid #E5E5E7" }}>項目</th>
                    {MODELS.map((m) => (
                      <th key={m.id} style={{ padding: "14px 16px", textAlign: "center", fontSize: "0.8125rem", color: m.badge ? "#0071e3" : "#6E6E73", fontWeight: 700, borderBottom: "1px solid #E5E5E7", borderLeft: "1px solid #E5E5E7", background: m.badge ? "rgba(0,113,227,0.05)" : "transparent" }}>
                        {m.name}
                        {m.badge && (
                          <span style={{ display: "block", fontSize: "0.625rem", color: "#0071e3", marginTop: 2 }}>★ おすすめ</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SPECS_TABLE.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 0 ? "#ffffff" : "#FAFAFA" }}>
                      <td style={{ padding: "13px 20px", fontSize: "0.875rem", color: "#6E6E73", fontWeight: 600, borderBottom: "1px solid #F0F0F0" }}>{row.label}</td>
                      {[row.entry, row.standard, row.pro].map((val, j) => (
                        <td key={j} style={{ padding: "13px 16px", textAlign: "center", fontSize: "0.8125rem", color: "#1C1C1E", borderBottom: "1px solid #F0F0F0", borderLeft: "1px solid #F0F0F0", background: j === 1 ? "rgba(0,113,227,0.03)" : "transparent" }}>
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr style={{ background: "#f5f5f7" }}>
                    <td style={{ padding: "16px 20px", fontSize: "0.875rem", color: "#6E6E73", fontWeight: 600 }}>価格（税込）</td>
                    {MODELS.map((m) => (
                      <td key={m.id} style={{ padding: "16px 16px", textAlign: "center", borderLeft: "1px solid #E5E5E7", background: m.badge ? "rgba(0,113,227,0.05)" : "transparent" }}>
                        <span style={{ color: m.badge ? "#0071e3" : "#1C1C1E", fontSize: "1rem", fontWeight: 700 }}>{m.price}</span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ベンチマーク */}
          <div className="reveal reveal-delay-2" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                background: "#ffffff",
                borderRadius: 20,
                padding: "32px",
                flex: 1,
                border: "1px solid #E5E5E7",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ color: "#1C1C1E", fontWeight: 700, fontSize: "1.0625rem", marginBottom: 6 }}>
                ベンチマーク比較
              </h3>
              <p style={{ color: "#86868B", fontSize: "0.8125rem", marginBottom: 28 }}>
                プロモデルを100とした相対スコア
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {BENCHMARKS.map((bench) => (
                  <div key={bench.label}>
                    <div style={{ fontSize: "0.8125rem", color: "#6E6E73", fontWeight: 600, marginBottom: 10 }}>
                      {bench.label}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <AnimatedBar value={bench.entry} color="#F7924F" label="エントリー" />
                      <AnimatedBar value={bench.standard} color="#0071e3" label="スタンダード" />
                      <AnimatedBar value={bench.pro} color="#00D4AA" label="プロ" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LLM対応モデル */}
        <div
          className="reveal"
          style={{
            background: "#ffffff",
            borderRadius: 20,
            padding: "36px 40px",
            border: "1px solid #E5E5E7",
            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <div>
              <h3 style={{ color: "#1C1C1E", fontWeight: 700, fontSize: "1.0625rem", marginBottom: 4 }}>
                ローカルLLM 動作確認済みモデル
              </h3>
              <p style={{ color: "#86868B", fontSize: "0.8125rem" }}>
                スタンダードモデル以上で快適動作（7B〜13Bクラス）
              </p>
            </div>
            <span
              style={{
                background: "rgba(0,212,170,0.08)",
                border: "1px solid rgba(0,212,170,0.25)",
                borderRadius: 8,
                padding: "6px 14px",
                color: "#00A882",
                fontSize: "0.8125rem",
                fontWeight: 700,
              }}
            >
              8+ モデル対応
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {LLM_MODELS.map((m) => (
              <span
                key={m}
                style={{
                  background: "#F5F5F7",
                  border: "1px solid #E5E5E7",
                  borderRadius: 8,
                  padding: "8px 16px",
                  color: "#1C1C1E",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "all 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,212,170,0.08)";
                  e.currentTarget.style.borderColor = "rgba(0,212,170,0.35)";
                  e.currentTarget.style.color = "#00A882";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F5F5F7";
                  e.currentTarget.style.borderColor = "#E5E5E7";
                  e.currentTarget.style.color = "#1C1C1E";
                }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .perf-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
