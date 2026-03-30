"use client";

const problems = [
  "Meşgulken gelen önemli çağrıları kaçırıyorsunuz",
  "FSBO listelerini manuel olarak aramak saatler alıyor",
  "Lead'ler ilk saatte yanıt alamayınca soğuyor",
  "WhatsApp sorularına mesai saati dışında cevap veremiyorsunuz",
];

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.77 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.14a16 16 0 006.95 6.95l1.41-1.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    title: "Giden Çağrı Asistanı",
    subtitle: "FSBO & Lead Aramaları",
    desc: "Sahibinden satılık listelerini ve gelen leadleri AI asistanınız otomatik olarak arar, nitelendirir ve sıcak potansiyeli doğrudan size aktarır.",
    highlights: ["FSBO listesi otomasyonu", "Lead nitelendirme", "Sıcak transfer"],
    badge: "Günde 50+ arama",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
      </svg>
    ),
    title: "Gelen Çağrı Asistanı",
    subtitle: "Meşgul Yönlendirme",
    desc: "Bir görüşmedeyken gelen önemli aramalar AI asistanına yönlenir. Anneniz arıyorsa — asistana gitmesin. Müşteri ise — hiçbir şeyi kaçırmayın.",
    highlights: ["Kişi bazlı istisna", "Akıllı yönlendirme", "Özet transkript"],
    badge: "Sıfır kaçırılan lead",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: "Otomatik Takip",
    subtitle: "FSBO & Lead Nurturing",
    desc: "İlk temastan anlaşmaya kadar tüm takip süreçleri otomatik. FSBO görüşmesi bittikten sonra 24 saat içinde AI geri arar, itirazları ele alır.",
    highlights: ["Zamanlı takip sekansı", "İtiraz yönetimi", "CRM entegrasyonu"],
    badge: "%47 daha fazla dönüşüm",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: "WhatsApp AI Botu",
    subtitle: "7/24 Müşteri Hizmetleri",
    desc: "Fiyat sorguları, bölge bilgileri, randevu taleplerine anında yanıt. Gece yarısı gelen 'Bu daire satılık mı?' sorusu cevapsız kalmaz.",
    highlights: ["Anlık yanıt < 3 sn", "Randevu oluşturma", "Çoklu dil desteği"],
    badge: "%98 yanıt oranı",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 relative" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Problem section */}
        <div className="text-center mb-16">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(255,100,100,0.1)",
              border: "1px solid rgba(255,100,100,0.2)",
              color: "#ff6b6b",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Tanıdık geliyor mu?
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Emlak Danışmanlarının<br />
            <span style={{ color: "#ff6b6b" }}>En Büyük 4 Sorunu</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
            {problems.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 p-4 rounded-xl text-left"
                style={{
                  background: "rgba(255,100,100,0.05)",
                  border: "1px solid rgba(255,100,100,0.12)",
                }}
              >
                <span className="text-lg flex-shrink-0">❌</span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16 max-w-sm mx-auto">
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          <div
            className="px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: "rgba(45,212,216,0.1)", color: "var(--cyan)", border: "1px solid rgba(45,212,216,0.2)" }}
          >
            EmlakAsistan Çözümleri
          </div>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass rounded-2xl p-6 group hover:border-[rgba(45,212,216,0.3)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at top left, rgba(45,212,216,0.05) 0%, transparent 60%)" }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(45,212,216,0.1)",
                        color: "var(--cyan)",
                        border: "1px solid rgba(45,212,216,0.2)",
                      }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base" style={{ fontFamily: "Syne, sans-serif" }}>
                        {s.title}
                      </h3>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>{s.subtitle}</p>
                    </div>
                  </div>
                  <span
                    className="text-xs px-3 py-1 rounded-full flex-shrink-0 ml-2"
                    style={{
                      background: "rgba(45,212,216,0.12)",
                      color: "var(--cyan)",
                      border: "1px solid rgba(45,212,216,0.2)",
                    }}
                  >
                    {s.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                  {s.desc}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--text-muted)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span style={{ color: "var(--cyan)" }}>✓</span>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
