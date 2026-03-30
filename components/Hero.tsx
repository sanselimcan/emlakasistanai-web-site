"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center mesh-bg overflow-hidden">
      {/* Decorative orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,212,216,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(27,58,92,0.5) 0%, transparent 70%)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(45,212,216,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(45,212,216,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-medium"
              style={{
                background: "rgba(45,212,216,0.1)",
                border: "1px solid rgba(45,212,216,0.25)",
                color: "var(--cyan)",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
              Emlak Danışmanları İçin Özel Tasarım
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <span style={{ color: "var(--text)" }}>Kaçırdığın Her Çağrı,</span>
              <br />
              <span className="gradient-text">Kaybettiğin</span>
              <br />
              <span style={{ color: "var(--text)" }}>Bir Komisyon.</span>
            </h1>

            {/* Sub */}
            <p
              className="text-lg mb-8 leading-relaxed max-w-lg"
              style={{ color: "var(--text-muted)", fontFamily: "DM Sans, sans-serif" }}
            >
              FSBO aramalarından lead takibine, meşgul anlarınızda gelen çağrılardan
              WhatsApp sorularına kadar — AI asistanınız 7/24 çalışır,
              siz dinlenirken randevu alır.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: "%31", label: "Daha Yüksek Cevap Oranı" },
                { value: "7/24", label: "Kesintisiz Çalışır" },
                { value: "3+ Saat", label: "Günlük Tasarruf" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "var(--cyan)", fontFamily: "Syne, sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#demo" className="btn-primary text-base">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.77 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.14a16 16 0 006.95 6.95l1.41-1.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                AI Asistanı Dene
              </a>
              <a href="#nasil-calisir" className="btn-outline text-base">
                Nasıl Çalışır?
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-6 text-sm" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
              Kurulum 10 dakika • Kredi kartı gerekmez • İptal her zaman mümkün
            </p>
          </div>

          {/* Right — Visual */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main card */}
            <div className="relative w-full max-w-sm">
              {/* Ping ring */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "rgba(45,212,216,0.04)",
                  border: "1px solid rgba(45,212,216,0.2)",
                  boxShadow: "0 0 60px rgba(45,212,216,0.08)",
                }}
              />

              {/* AI Card */}
              <div className="glass rounded-2xl p-6 relative z-10 animate-float">
                {/* Avatar + status */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-2xl animate-pulse-glow"
                      style={{ background: "linear-gradient(135deg, #1B3A5C 0%, #2DD4D8 100%)" }}
                    >
                      🤖
                    </div>
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2"
                      style={{
                        background: "#22c55e",
                        borderColor: "var(--surface)",
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>
                      EmlakAsistan AI
                    </div>
                    <div className="text-xs" style={{ color: "#22c55e" }}>● Aktif — Şu an 3 görüşme</div>
                  </div>
                </div>

                {/* Voice wave */}
                <div className="flex items-center gap-3 mb-5 p-3 rounded-xl" style={{ background: "rgba(45,212,216,0.06)" }}>
                  <div className="voice-wave">
                    <span /><span /><span /><span /><span /><span /><span />
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                    &quot;Evet, yarın saat 14:00 randevunuzu oluşturdum...&quot;
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: "📞", label: "Bugün Aranan", value: "24 Lead" },
                    { icon: "📅", label: "Alınan Randevu", value: "7 Randevu" },
                    { icon: "💬", label: "WhatsApp Yanıt", value: "98%" },
                    { icon: "⚡", label: "Ort. Yanıt Süresi", value: "< 3 sn" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl p-3"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(45,212,216,0.1)" }}
                    >
                      <div className="text-lg mb-1">{item.icon}</div>
                      <div className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>{item.label}</div>
                      <div className="text-sm font-semibold" style={{ color: "var(--cyan)", fontFamily: "Syne, sans-serif" }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification */}
              <div
                className="hidden sm:block absolute -top-4 -right-4 glass rounded-xl px-4 py-3 text-xs shadow-xl"
                style={{ border: "1px solid rgba(45,212,216,0.2)", minWidth: "160px" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
                  <span className="font-medium" style={{ color: "#22c55e" }}>Yeni Randevu!</span>
                </div>
                <div style={{ color: "var(--text-muted)" }}>Ahmet B. — Yarın 14:00</div>
              </div>

              {/* Floating stat */}
              <div
                className="hidden sm:block absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 text-xs shadow-xl"
                style={{ border: "1px solid rgba(45,212,216,0.2)" }}
              >
                <div className="font-bold text-base" style={{ color: "var(--cyan)", fontFamily: "Syne, sans-serif" }}>+%47</div>
                <div style={{ color: "var(--text-muted)" }}>Lead dönüşüm artışı</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
