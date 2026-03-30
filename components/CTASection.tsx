"use client";

export default function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--bg-2)" }}>
      {/* Main glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(45,212,216,0.12) 0%, rgba(45,212,216,0.04) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Animated ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(45,212,216,0.08)",
          animation: "ping-slow 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(45,212,216,0.1)",
          animation: "ping-slow 4s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(45,212,216,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,216,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold"
          style={{
            background: "rgba(45,212,216,0.12)",
            border: "1px solid rgba(45,212,216,0.3)",
            color: "var(--cyan)",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Risk Yok — 14 Gün Ücretsiz
        </div>

        {/* Headline */}
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-5 leading-[1.05]"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          <span style={{ color: "var(--text)" }}>14 Gün</span>
          <br />
          <span className="gradient-text">Ücretsiz Dene</span>
        </h2>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl mb-10 max-w-xl mx-auto"
          style={{ color: "var(--text-muted)", fontFamily: "DM Sans, sans-serif" }}
        >
          Kredi kartı gerekmez. 10 dakikada kur.
          <br />
          İstediğin zaman iptal et.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#demo"
            className="btn-primary text-base px-8 py-4"
            style={{ boxShadow: "0 0 40px rgba(45,212,216,0.3), 0 8px 25px rgba(0,0,0,0.3)" }}
          >
            Hemen Başla
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#demo" className="btn-outline text-base px-8 py-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
            </svg>
            Demo İzle
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: "✓", text: "Kredi kartı gerekmez" },
            { icon: "✓", text: "14 gün ücretsiz" },
            { icon: "✓", text: "İstediğin an iptal" },
          ].map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-muted)", fontFamily: "DM Sans, sans-serif" }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ background: "rgba(45,212,216,0.15)", color: "var(--cyan)" }}
              >
                {badge.icon}
              </span>
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
