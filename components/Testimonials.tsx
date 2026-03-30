"use client";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "Emlak Danışmanı",
    city: "İstanbul",
    initials: "AY",
    quote: "EmlakAsistan ile artık hiçbir çağrıyı kaçırmıyorum. Geçen ay 12 randevu aldı, 3'ü satışa döndü. Harika!",
    result: "3 satış / ay",
    color: "#2DD4D8",
  },
  {
    name: "Fatma Kaya",
    role: "Kıdemli Danışman",
    city: "Ankara",
    initials: "FK",
    quote: "FSBO aramalarını otomatize ettim. Haftada 8 saat tasarruf ediyorum ve dönüşüm oranım %40 arttı.",
    result: "8 saat/hafta tasarruf",
    color: "#5DE0E4",
  },
  {
    name: "Mehmet Demir",
    role: "Bağımsız Danışman",
    city: "İzmir",
    initials: "MD",
    quote: "WhatsApp botu gece yarısı müşteri sorularını yanıtlıyor. Sabah uyandığımda randevu ayarlanmış oluyor.",
    result: "%98 yanıt oranı",
    color: "#2DD4D8",
  },
  {
    name: "Zeynep Arslan",
    role: "Gayrimenkul Uzmanı",
    city: "Bursa",
    initials: "ZA",
    quote: "Başlangıçta şüpheliydim ama ilk hafta 5 yeni lead geldi. Kurulumu gerçekten 10 dakika sürdü.",
    result: "5 lead / ilk hafta",
    color: "#1BA8AC",
  },
  {
    name: "Can Öztürk",
    role: "Turizm & Emlak",
    city: "Antalya",
    initials: "CÖ",
    quote: "Yabancı müşterilerle İngilizce de çalışıyor. Çok dilli destek benim için oyunu değiştirdi.",
    result: "Çok dilli destek",
    color: "#5DE0E4",
  },
  {
    name: "Selin Çelik",
    role: "Lüks Konut Uzmanı",
    city: "İstanbul",
    initials: "SÇ",
    quote: "Premium müşterilerimi kaybetmekten korkuyordum. Aksine, hızlı yanıt sayesinde daha çok kapandı.",
    result: "%47 daha fazla kapanış",
    color: "#2DD4D8",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--bg-2)" }}>
      {/* Decorative background */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(45,212,216,0.04) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(27,58,92,0.3) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(45,212,216,0.1)",
              border: "1px solid rgba(45,212,216,0.2)",
              color: "var(--cyan)",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
            500+ Danışman Güveniyor
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Gerçek Sonuçlar,{" "}
            <span className="gradient-text">Gerçek Danışmanlar</span>
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Türkiye&apos;nin dört bir yanından emlak danışmanları EmlakAsistan&apos;ı nasıl kullanıyor.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group glass rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-[rgba(45,212,216,0.3)]"
              style={{ cursor: "default" }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at top left, rgba(45,212,216,0.05) 0%, transparent 60%)" }}
              />

              <div className="relative z-10">
                {/* Stars */}
                <div className="mb-4">
                  <StarRating />
                </div>

                {/* Quote */}
                <blockquote
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-muted)", fontStyle: "normal" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Result badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold mb-5"
                  style={{
                    background: "rgba(45,212,216,0.08)",
                    border: "1px solid rgba(45,212,216,0.15)",
                    color: "var(--cyan)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  {t.result}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, var(--navy) 0%, ${t.color}40 100%)`,
                      border: `1.5px solid ${t.color}40`,
                      color: t.color,
                      fontFamily: "Syne, sans-serif",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.7 }}>
                      {t.role} · {t.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust */}
        <div className="mt-12 text-center">
          <div
            className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl flex-wrap justify-center"
            style={{
              background: "rgba(17,34,64,0.6)",
              border: "1px solid rgba(45,212,216,0.12)",
            }}
          >
            {[
              { value: "4.9/5", label: "Ortalama puan" },
              { value: "500+", label: "Aktif danışman" },
              { value: "%47", label: "Ort. dönüşüm artışı" },
              { value: "3+ saat", label: "Günlük tasarruf" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl font-bold"
                  style={{ color: "var(--cyan)", fontFamily: "Syne, sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)", opacity: 0.7 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
