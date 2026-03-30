"use client";

import { useState } from "react";

const plans = [
  {
    name: "Başlangıç",
    subtitle: "Yeni başlayanlar için",
    monthlyPrice: 2499,
    features: [
      { text: "200 dakika/ay çağrı", included: true },
      { text: "WhatsApp AI Botu", included: true },
      { text: "Temel CRM entegrasyonu", included: true },
      { text: "Gerçek zamanlı transkript", included: true },
      { text: "Email destek", included: true },
      { text: "FSBO Aramaları", included: false },
      { text: "Randevu takvimi", included: false },
      { text: "Özel AI kişilik", included: false },
    ],
    cta: "Ücretsiz Başla",
    highlight: false,
    badge: null,
  },
  {
    name: "Profesyonel",
    subtitle: "Aktif danışmanlar için",
    monthlyPrice: 4999,
    features: [
      { text: "600 dakika/ay çağrı", included: true },
      { text: "WhatsApp AI Botu", included: true },
      { text: "Tüm CRM entegrasyonları", included: true },
      { text: "FSBO Aramaları", included: true },
      { text: "Randevu takvimi senkronik", included: true },
      { text: "Öncelikli destek", included: true },
      { text: "Gelişmiş analitik dashboard", included: true },
      { text: "Özel AI kişilik", included: false },
    ],
    cta: "Profesyonele Geç",
    highlight: true,
    badge: "En Popüler",
  },
  {
    name: "Ajans",
    subtitle: "Ekipler & ajanslar için",
    monthlyPrice: 9999,
    features: [
      { text: "Sınırsız dakika çağrı", included: true },
      { text: "WhatsApp AI Botu", included: true },
      { text: "Tüm CRM entegrasyonları", included: true },
      { text: "FSBO Aramaları", included: true },
      { text: "5 danışman hesabı", included: true },
      { text: "Özel AI kişilik & ses", included: true },
      { text: "Özel entegrasyon desteği", included: true },
      { text: "Dedike müşteri temsilcisi", included: true },
    ],
    cta: "Ajansa Geç",
    highlight: false,
    badge: "Tam Güç",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const getPrice = (monthly: number) =>
    yearly ? Math.round(monthly * 12 * 0.8) : monthly;

  return (
    <section id="fiyatlandirma" className="py-24 relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Background effects */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(45,212,216,0.05) 0%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(45,212,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,216,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(45,212,216,0.1)",
              border: "1px solid rgba(45,212,216,0.2)",
              color: "var(--cyan)",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Şeffaf Fiyatlandırma
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            İşinize Uygun{" "}
            <span className="gradient-text">Planı Seçin</span>
          </h2>
          <p className="text-lg max-w-lg mx-auto mb-8" style={{ color: "var(--text-muted)" }}>
            14 günlük ücretsiz deneme — kredi kartı gerekmez.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <button
              onClick={() => setYearly(false)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: !yearly ? "var(--cyan)" : "transparent",
                color: !yearly ? "var(--navy-dark)" : "var(--text-muted)",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Aylık
            </button>
            <button
              onClick={() => setYearly(true)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2"
              style={{
                background: yearly ? "var(--cyan)" : "transparent",
                color: yearly ? "var(--navy-dark)" : "var(--text-muted)",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Yıllık
              <span
                className="text-xs px-2 py-0.5 rounded-full font-bold"
                style={{
                  background: yearly ? "rgba(27,58,92,0.5)" : "rgba(45,212,216,0.15)",
                  color: yearly ? "var(--navy-dark)" : "var(--cyan)",
                }}
              >
                %20 İndirim
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl p-7 transition-all duration-300"
              style={{
                background: plan.highlight
                  ? "linear-gradient(145deg, rgba(45,212,216,0.08) 0%, rgba(17,34,64,0.8) 50%, rgba(45,212,216,0.05) 100%)"
                  : "rgba(17,34,64,0.6)",
                backdropFilter: "blur(12px)",
                border: plan.highlight
                  ? "1.5px solid rgba(45,212,216,0.4)"
                  : "1px solid rgba(45,212,216,0.12)",
                boxShadow: plan.highlight
                  ? "0 0 60px rgba(45,212,216,0.12), 0 20px 60px rgba(0,0,0,0.3)"
                  : "0 4px 30px rgba(0,0,0,0.2)",
                transform: plan.highlight ? "scale(1.03)" : "scale(1)",
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: plan.highlight
                      ? "var(--cyan)"
                      : "rgba(45,212,216,0.15)",
                    color: plan.highlight ? "var(--navy-dark)" : "var(--cyan)",
                    border: plan.highlight ? "none" : "1px solid rgba(45,212,216,0.3)",
                    fontFamily: "DM Sans, sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.highlight && <span className="mr-1">⭐</span>}
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-7">
                <div className="flex items-end gap-1">
                  <span
                    className="text-5xl font-bold"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      color: plan.highlight ? "var(--cyan)" : "var(--text)",
                    }}
                  >
                    ₺{getPrice(plan.monthlyPrice).toLocaleString("tr-TR")}
                  </span>
                  <span className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                    /{yearly ? "yıl" : "ay"}
                  </span>
                </div>
                {yearly && (
                  <div className="mt-1 text-xs" style={{ color: "var(--cyan)", opacity: 0.8 }}>
                    Aylık ₺{Math.round(plan.monthlyPrice * 0.8).toLocaleString("tr-TR")}/ay denk
                  </div>
                )}
              </div>

              {/* CTA */}
              <button
                className="w-full py-3.5 rounded-xl font-semibold text-sm mb-7 transition-all duration-200 flex items-center justify-center gap-2"
                style={
                  plan.highlight
                    ? {
                        background: "var(--cyan)",
                        color: "var(--navy-dark)",
                        boxShadow: "0 4px 20px rgba(45,212,216,0.3)",
                      }
                    : {
                        background: "transparent",
                        color: "var(--cyan)",
                        border: "1.5px solid rgba(45,212,216,0.4)",
                      }
                }
              >
                {plan.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Divider */}
              <div
                className="mb-5 h-px"
                style={{ background: plan.highlight ? "rgba(45,212,216,0.2)" : "var(--border)" }}
              />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                      style={
                        f.included
                          ? { background: "rgba(45,212,216,0.15)", color: "var(--cyan)" }
                          : { background: "rgba(255,255,255,0.04)", color: "rgba(138,180,201,0.3)" }
                      }
                    >
                      {f.included ? "✓" : "×"}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        color: f.included ? "var(--text-muted)" : "rgba(138,180,201,0.3)",
                        textDecoration: f.included ? "none" : "line-through",
                      }}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="mt-10 text-center">
          <p className="text-sm" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
            Tüm planlar 14 günlük ücretsiz deneme içerir &nbsp;·&nbsp; İstediğiniz zaman iptal edin &nbsp;·&nbsp; KDV dahil fiyatlar
          </p>
          <div className="flex items-center justify-center gap-6 mt-4 flex-wrap">
            {["Kredi kartı güvenli", "256-bit SSL şifreleme", "KVKK uyumlu"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
