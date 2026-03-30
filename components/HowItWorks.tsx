"use client";

const steps = [
  {
    num: "01",
    title: "10 Dakikada Kurulum",
    desc: "Mevcut telefon numaranızı bağlayın. Asistanınızın ses tonu, konuşma tarzı ve istisnalarını (kimlerin asistana gitmesin) ayarlayın.",
    detail: "Teknik bilgi gerekmez. Bir form doldurmak kadar basit.",
  },
  {
    num: "02",
    title: "Entegrasyon & Özelleştirme",
    desc: "CRM sisteminizle, WhatsApp hattınızla ve takvim uygulamanızla senkronize olsun. FSBO listelerinizi yükleyin, arama sırası otomatik oluşsun.",
    detail: "Zapier, n8n, Google Calendar ve popüler CRM'lerle entegrasyon.",
  },
  {
    num: "03",
    title: "Çalışmaya Başla",
    desc: "AI asistanınız hemen devreye girer. Gelen çağrıları karşılar, giden aramaları yapar, WhatsApp'ı yönetir — siz sadece sıcak leadleri alırsınız.",
    detail: "Gerçek zamanlı dashboard'dan tüm görüşmeleri takip edin.",
  },
];

const metrics = [
  { value: "%47", label: "Ortalama lead dönüşüm artışı" },
  { value: "3+ saat", label: "Günlük geri kazanılan süre" },
  { value: "< 3 sn", label: "Ortalama yanıt süresi" },
  { value: "%98", label: "WhatsApp yanıt oranı" },
];

export default function HowItWorks() {
  return (
    <>
      {/* How it works */}
      <section id="nasil-calisir" className="py-24 relative mesh-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(45,212,216,0.1)",
                border: "1px solid rgba(45,212,216,0.2)",
                color: "var(--cyan)",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              3 Adımda Hazır
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Nasıl Çalışır?
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div
              className="hidden lg:block absolute top-16 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(45,212,216,0.3), transparent)" }}
            />

            <div className="grid lg:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 animate-pulse-glow"
                      style={{
                        background: "var(--navy)",
                        border: "2px solid var(--cyan)",
                        color: "var(--cyan)",
                        fontFamily: "Syne, sans-serif",
                      }}
                    >
                      {step.num}
                    </div>
                    {i < 2 && (
                      <div
                        className="flex-1 h-px lg:hidden"
                        style={{ background: "rgba(45,212,216,0.2)" }}
                      />
                    )}
                  </div>

                  <div
                    className="glass rounded-2xl p-6 h-full"
                    style={{ borderColor: i === 0 ? "rgba(45,212,216,0.25)" : "var(--border)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                      {step.desc}
                    </p>
                    <p
                      className="text-xs italic"
                      style={{
                        color: "var(--cyan)",
                        opacity: 0.8,
                        borderTop: "1px solid var(--border)",
                        paddingTop: "0.75rem",
                      }}
                    >
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics section */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: "var(--navy)", borderTop: "1px solid rgba(45,212,216,0.15)", borderBottom: "1px solid rgba(45,212,216,0.15)" }}
      >
        {/* BG pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(rgba(45,212,216,0.4) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <div
                  className="text-4xl lg:text-5xl font-bold mb-2"
                  style={{ color: "var(--cyan)", fontFamily: "Syne, sans-serif" }}
                >
                  {m.value}
                </div>
                <div className="text-sm" style={{ color: "rgba(232,244,248,0.7)" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
