"use client";

import DemoForm from "./DemoForm";

export default function DemoFormSection() {
  return (
    <section id="ozel-demo" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-2)" }}>
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,212,216,0.06) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(27,58,92,0.3) 0%, transparent 70%)" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(45,212,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,216,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <div className="lg:pt-4">
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-medium"
              style={{
                background: "rgba(45,212,216,0.1)",
                border: "1px solid rgba(45,212,216,0.25)",
                color: "var(--cyan)",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
              Ücretsiz Kişisel Demo
            </div>

            <h2
              className="text-4xl lg:text-5xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Formu Doldur,{" "}
              <span className="gradient-text">Sana Özel</span>
              <br />
              Asistan Demo Sunalım
            </h2>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-muted)", fontFamily: "DM Sans, sans-serif" }}
            >
              Herkese aynı demoyu göstermiyoruz. Senin iş modelini, lead hacmini
              ve zorluklarını anlıyoruz — sonra tam ihtiyacına göre demo hazırlıyoruz.
            </p>

            {/* What you get */}
            <div className="space-y-3 mb-8">
              {[
                { icon: "🎯", title: "Kişiselleştirilmiş Demo", desc: "İş modelinize özel senaryo" },
                { icon: "📊", title: "ROI Hesaplaması", desc: "Sizin rakamlarınızla tasarruf analizi" },
                { icon: "🚀", title: "Hızlı Kurulum", desc: "İstersen aynı gün aktif olun" },
                { icon: "💬", title: "Sorularınızı Yanıtlıyoruz", desc: "Ekibimiz 1-1 görüşme sunar" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <span className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
                      {item.title}
                    </span>
                    <span className="text-sm ml-2" style={{ color: "var(--text-muted)" }}>
                      — {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: "rgba(17,34,64,0.6)", border: "1px solid rgba(45,212,216,0.1)" }}
            >
              <div className="flex -space-x-2">
                {["AY", "FK", "MD"].map((init) => (
                  <div
                    key={init}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2"
                    style={{
                      background: "linear-gradient(135deg, var(--navy) 0%, rgba(45,212,216,0.3) 100%)",
                      borderColor: "var(--bg-2)",
                      color: "var(--cyan)",
                      fontFamily: "Syne, sans-serif",
                    }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                Bu hafta <strong style={{ color: "var(--text)" }}>23 danışman</strong> demo talep etti
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="glass rounded-3xl p-8"
            style={{ boxShadow: "0 0 60px rgba(45,212,216,0.06), 0 20px 60px rgba(0,0,0,0.3)" }}
          >
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
