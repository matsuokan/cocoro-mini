"use client";

import { BRAND } from "@/constants/product";

const FOOTER_LINKS = [
  {
    title: "製品",
    links: [
      { label: "概要", href: "#highlights" },
      { label: "仕様・AI性能", href: "#performance" },
      { label: "cocoro-OS", href: "#cocoro-os" },
      { label: "価格・モデル", href: "#pricing" },
    ],
  },
  {
    title: "購入",
    links: [
      { label: "今すぐ購入", href: "#purchase" },
      { label: "法人・まとめ買い", href: "#purchase" },
      { label: "サポート・保証", href: "#support" },
      { label: "よくある質問", href: "#support" },
    ],
  },
  {
    title: "会社情報",
    links: [
      { label: "会社概要", href: "#" },
      { label: "特定商取引法に基づく表記", href: "#" },
      { label: "プライバシーポリシー", href: "#" },
      { label: "お問い合わせ", href: "#support" },
    ],
  },
];

const SNS_LINKS = [
  { label: "X (Twitter)", href: "#", icon: "𝕏" },
  { label: "YouTube", href: "#", icon: "▶" },
  { label: "GitHub", href: "#", icon: "⌥" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0D0D1A",
        color: "rgba(255,255,255,0.6)",
        padding: "64px 0 32px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* 上段 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr repeat(3, auto)",
            gap: 48,
            marginBottom: 56,
          }}
          className="footer-grid"
        >
          {/* ブランド */}
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}
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
                <span style={{ color: "#1d1d1f", fontWeight: 700, fontSize: 14 }}>c</span>
              </div>
              <span
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {BRAND.name}
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.8, maxWidth: 260 }}>
              プライバシーを守るローカルAI PC。
              <br />
              データはすべてあなたのデバイスの中で。
            </p>
            {/* SNS */}
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {SNS_LINKS.map((sns) => (
                <a
                  key={sns.label}
                  href={sns.href}
                  aria-label={sns.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    fontSize: "0.875rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,212,170,0.15)";
                    e.currentTarget.style.color = "#00D4AA";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  {sns.icon}
                </a>
              ))}
            </div>
          </div>

          {/* リンク */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3
                style={{
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  marginBottom: 16,
                  letterSpacing: "0.02em",
                }}
              >
                {group.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {group.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 10 }}>
                    <a
                      href={link.href}
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#00D4AA")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 区切り線 */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.06)",
            marginBottom: 28,
          }}
        />

        {/* 下段 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: "0.8125rem", margin: 0 }}>
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["特定商取引法", "プライバシーポリシー"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                }
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
