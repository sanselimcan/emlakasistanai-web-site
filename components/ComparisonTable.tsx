"use client";

const rows = [
  {
    feature: "Emlak'a Özel AI",
    us: { value: "✓", label: "Tam emlak odaklı", positive: true },
    them: { value: "✗", label: "Genel amaçlı", positive: false },
  },
  {
    feature: "FSBO Aramaları",
    us: { value: "✓", label: "Otomatik", positive: true },
    them: { value: "✗", label: "Yok", positive: false },
  },
  {
    feature: "WhatsApp Bot",
    us: { value: "✓", label: "Dahil", positive: true },
    them: { value: "✗", label: "Ekstra ücret", positive: false },
  },
  {
    feature: "7/24 Gelen & Giden Çağrı",
    us: { value: "✓", label: "Her ikisi dahil", positive: true },
    them: { value: "⚠", label: "Kısıtlı", positive: false },
  },
  {
    feature: "Randevu Takvimi",
    us: { value: "✓", label: "Dahil", positive: true },
    them: { value: "⚠", label: "Bazılarında", positive: false },
  },
  {
    feature: "Lead Nitelendirme",
    us: { value: "✓", label: "Dahil", positive: true },
    them: { value: "✗", label: "Yok", positive: false },
  },
  {
    feature: "Çok Dilli Destek",
    us: { value: "✓", label: "TR + EN", positive: true },
    them: { value: "✓", label: "Çok dilli", positive: true },
  },
  {
    feature: "14 Gün Ücretsiz Deneme",
    us: { value: "✓", label: "Kredi kartı yok", positive: true },
    them: { value: "✗", label: "Yok", positive: false },
  },
  {
    feature: "Kurulum Süresi",
    us: { value: "✓", label: "2-3 gün", positive: true },
    them: { value: "✗", label: "Haftalar", positive: false },
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(45,212,216,0.05) 0%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(45,212,216,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
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
            Rakip Karşılaştırması
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Neden Genel Değil,{" "}
            <span className="gradient-text">Uzman?</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Genel amaçlı AI asistanlar emlak sektörünün ihtiyaçlarını karşılamaz.
            EmlakAsistan, sadece sizin için tasarlandı.
          </p>
        </div>

        {/* Table */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(45,212,216,0.15)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-3 gap-0"
            style={{ background: "var(--navy-dark)", borderBottom: "1px solid rgba(45,212,216,0.15)" }}
          >
            <div className="px-6 py-4">
              <span className="text-sm font-semibold" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
                Özellik
              </span>
            </div>
            <div
              className="px-6 py-4 text-center relative"
              style={{ background: "rgba(45,212,216,0.08)", borderLeft: "1px solid rgba(45,212,216,0.2)", borderRight: "1px solid rgba(45,212,216,0.2)" }}
            >
              {/* Glow top border */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: "linear-gradient(90deg, transparent, var(--cyan), transparent)" }}
              />
              <div className="flex items-center justify-center gap-2">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <rect width="40" height="40" rx="10" fill="#2DD4D8" opacity="0.15"/>
                  <path d="M20 8L6 18.5V34h10V25h8v9h10V18.5L20 8z" fill="#2DD4D8"/>
                </svg>
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--cyan)", fontFamily: "Syne, sans-serif" }}
                >
                  EmlakAsistan
                </span>
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}
              >
                Genel Platformlar
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-3 gap-0 transition-colors duration-200 hover:bg-white/[0.01]"
              style={{
                borderBottom: i < rows.length - 1 ? "1px solid rgba(45,212,216,0.07)" : "none",
              }}
            >
              {/* Feature */}
              <div
                className="px-6 py-4 flex items-center"
                style={{ background: "rgba(7,17,30,0.5)" }}
              >
                <span className="text-sm font-medium" style={{ color: "var(--text-muted)", fontFamily: "DM Sans, sans-serif" }}>
                  {row.feature}
                </span>
              </div>

              {/* Us */}
              <div
                className="px-6 py-4 flex flex-col items-center justify-center text-center"
                style={{
                  background: "rgba(45,212,216,0.04)",
                  borderLeft: "1px solid rgba(45,212,216,0.15)",
                  borderRight: "1px solid rgba(45,212,216,0.15)",
                }}
              >
                <span
                  className="text-base font-bold mb-0.5"
                  style={{ color: row.us.positive ? "var(--cyan)" : "#ff6b6b" }}
                >
                  {row.us.value}
                </span>
                <span className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.7 }}>
                  {row.us.label}
                </span>
              </div>

              {/* Them */}
              <div
                className="px-6 py-4 flex flex-col items-center justify-center text-center"
                style={{ background: "rgba(7,17,30,0.5)" }}
              >
                <span
                  className="text-base font-bold mb-0.5"
                  style={{
                    color: row.them.positive ? "var(--cyan)" : row.them.value === "⚠" ? "#f59e0b" : "rgba(138,180,201,0.3)",
                  }}
                >
                  {row.them.value}
                </span>
                <span className="text-xs" style={{ color: "rgba(138,180,201,0.35)" }}>
                  {row.them.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a href="#ozel-demo" className="btn-primary text-base px-8">
            Ücretsiz Demo Al
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="mt-3 text-xs" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
            2-3 günde kurulum · Kredi kartı gerekmez
          </p>
        </div>
      </div>
    </section>
  );
}
