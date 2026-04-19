"use client";

import { useState, useEffect, useRef } from "react";
import { FAQ_ITEMS } from "@/constants/product";

function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid",
        borderColor: open ? "rgba(0,212,170,0.3)" : "#E5E5E7",
        borderRadius: 14,
        overflow: "hidden",
        transition: "border-color 0.25s",
      }}
    >
      <button
        id={`faq-${index}`}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px",
          background: open ? "rgba(0,212,170,0.04)" : "#ffffff",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 16,
          transition: "background 0.25s",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#1C1C1E", lineHeight: 1.5 }}>
          Q. {item.q}
        </span>
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: open ? "rgba(0,212,170,0.12)" : "#F0F0F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open ? "#00D4AA" : "#6E6E73"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: "0 24px 20px",
            background: "#ffffff",
            animation: "fade-up 0.25s ease-out",
          }}
        >
          <div style={{ height: 1, background: "#F0F0F0", marginBottom: 16 }} />
          <p style={{ color: "#6E6E73", fontSize: "0.9375rem", lineHeight: 1.8, margin: 0 }}>
            A. {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Support() {
  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", type: "general", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="support"
      ref={ref}
      style={{ padding: "100px 0", background: "#F8F8F6" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
          <span className="section-label">サポート・保証</span>
          <h2 className="section-title" style={{ color: "#1C1C1E", marginBottom: 16 }}>
            購入後も、安心のサポート。
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            1年保証・メール/チャットサポート・FAQ完備。
            <br />
            あなたのローカルAIライフを全力でサポートします。
          </p>
        </div>

        {/* サポート種別 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            marginBottom: 64,
          }}
          className="reveal"
        >
          {[
            { icon: "🛡️", title: "1年間保証", desc: "初期不良・故障は全額無償対応。安心してお使いください。", color: "#00D4AA" },
            { icon: "✉️", title: "メールサポート", desc: "24時間受付、平日1営業日以内に返信します。", color: "#4F8EF7" },
            { icon: "💬", title: "チャットサポート", desc: "平日 10:00〜18:00 リアルタイム対応。", color: "#F7924F" },
            { icon: "🔧", title: "修理・交換対応", desc: "保証期間内の修理は着払い受付。迅速に対応します。", color: "#D44FAF" },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`card reveal reveal-delay-${i + 1}`}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: 16,
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `${item.color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#1C1C1E", marginBottom: 8 }}>
                {item.title}
              </h3>
              <p style={{ color: "#6E6E73", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ + お問い合わせフォーム */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 40,
          }}
          className="support-grid"
        >
          {/* FAQ */}
          <div className="reveal">
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#1C1C1E",
                marginBottom: 24,
              }}
            >
              よくある質問
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {FAQ_ITEMS.map((item, i) => (
                <FAQItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <div className="reveal reveal-delay-2">
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#1C1C1E",
                marginBottom: 24,
              }}
            >
              お問い合わせ
            </h3>
            {submitted ? (
              <div
                style={{
                  background: "rgba(0,212,170,0.08)",
                  border: "1px solid rgba(0,212,170,0.3)",
                  borderRadius: 16,
                  padding: "48px 32px",
                  textAlign: "center",
                  animation: "fade-up 0.4s ease-out",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>✅</div>
                <h4 style={{ fontWeight: 700, fontSize: "1.125rem", color: "#1C1C1E", marginBottom: 8 }}>
                  送信完了しました
                </h4>
                <p style={{ color: "#6E6E73", fontSize: "0.9375rem" }}>
                  1営業日以内にご返信いたします。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", type: "general", message: "" }); }}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#00D4AA", fontSize: "0.875rem", marginTop: 16 }}
                >
                  別の問い合わせをする
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { id: "contact-name", label: "お名前", type: "text", key: "name", placeholder: "山田 太郎" },
                  { id: "contact-email", label: "メールアドレス", type: "email", key: "email", placeholder: "example@email.com" },
                ].map((field) => (
                  <div key={field.key}>
                    <label
                      htmlFor={field.id}
                      style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#1C1C1E", marginBottom: 8 }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: 10,
                        border: "1.5px solid #E5E5E7",
                        fontSize: "0.9375rem",
                        color: "#1C1C1E",
                        outline: "none",
                        transition: "border-color 0.2s",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#00D4AA")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E5E7")}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="contact-type"
                    style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#1C1C1E", marginBottom: 8 }}
                  >
                    お問い合わせ種別
                  </label>
                  <select
                    id="contact-type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: "1.5px solid #E5E5E7",
                      fontSize: "0.9375rem",
                      color: "#1C1C1E",
                      outline: "none",
                      background: "#ffffff",
                      cursor: "pointer",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="general">製品について</option>
                    <option value="purchase">購入・注文について</option>
                    <option value="support">技術サポート</option>
                    <option value="corporate">法人・まとめ買い</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#1C1C1E", marginBottom: 8 }}
                  >
                    お問い合わせ内容
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="お問い合わせ内容をご記入ください"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: "1.5px solid #E5E5E7",
                      fontSize: "0.9375rem",
                      color: "#1C1C1E",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s",
                      fontFamily: "Noto Sans JP, DM Sans, sans-serif",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#00D4AA")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E5E7")}
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="btn-primary"
                  style={{ justifyContent: "center" }}
                >
                  送信する
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .support-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
