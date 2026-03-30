"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  experience: string;
  monthlyLeads: string;
  currentProblem: string[];
  hearAbout: string;
}

const PROBLEMS = [
  "Meşgulken çağrı kaçırıyorum",
  "FSBO aramaları çok zaman alıyor",
  "Lead takibi zorlaşıyor",
  "WhatsApp sorularına yetiştirelemiyorum",
  "Gece/hafta sonu çağrıları kaçıyorum",
  "Randevu ayarlamak çok vakit alıyor",
];

export default function DemoForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    monthlyLeads: "",
    currentProblem: [],
    hearAbout: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const toggleProblem = (p: string) => {
    setData((prev) => ({
      ...prev,
      currentProblem: prev.currentProblem.includes(p)
        ? prev.currentProblem.filter((x) => x !== p)
        : [...prev.currentProblem, p],
    }));
  };

  const next = () => setStep((s) => Math.min(s + 1, 4) as Step);
  const back = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const progress = ((step - 1) / 3) * 100;

  if (submitted) {
    return (
      <div className="text-center py-10">
        {/* Success animation */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow"
          style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--cyan) 100%)" }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
          Harika, {data.name.split(" ")[0]}!
        </h3>
        <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
          Bilgilerinizi aldık. Ekibimiz size özel AI asistanınızı hazırlıyor.
          <br />
          <strong style={{ color: "var(--cyan)" }}>{data.email}</strong> adresine en kısa sürede ulaşacağız.
        </p>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
          style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", color: "#22c55e" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Ortalama yanıt süresi: 2 saat
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Adım {step} / 3
          </span>
          <span className="text-xs" style={{ color: "var(--cyan)" }}>
            {Math.round(progress)}% tamamlandı
          </span>
        </div>
        <div className="h-1.5 rounded-full" style={{ background: "var(--surface)" }}>
          <div
            className="h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: "var(--cyan)" }}
          />
        </div>
      </div>

      {/* Step 1 — Personal info */}
      {step === 1 && (
        <div className="space-y-5 animate-fade-up">
          <div>
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
              Sizi tanıyalım
            </h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Size özel demo için birkaç bilgiye ihtiyacımız var.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium block mb-1.5" style={{ color: "var(--text-muted)" }}>
                Ad Soyad *
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Ahmet Yılmaz"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(17,34,64,0.8)",
                  border: "1px solid rgba(45,212,216,0.15)",
                  color: "var(--text)",
                  fontFamily: "DM Sans, sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(45,212,216,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(45,212,216,0.15)")}
              />
            </div>
            <div>
              <label className="text-xs font-medium block mb-1.5" style={{ color: "var(--text-muted)" }}>
                Şehir *
              </label>
              <input
                type="text"
                value={data.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="İstanbul"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(17,34,64,0.8)",
                  border: "1px solid rgba(45,212,216,0.15)",
                  color: "var(--text)",
                  fontFamily: "DM Sans, sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(45,212,216,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(45,212,216,0.15)")}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium block mb-1.5" style={{ color: "var(--text-muted)" }}>
              E-posta *
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="ahmet@emlak.com"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
              style={{
                background: "rgba(17,34,64,0.8)",
                border: "1px solid rgba(45,212,216,0.15)",
                color: "var(--text)",
                fontFamily: "DM Sans, sans-serif",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(45,212,216,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(45,212,216,0.15)")}
            />
          </div>

          <div>
            <label className="text-xs font-medium block mb-1.5" style={{ color: "var(--text-muted)" }}>
              Telefon *
            </label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+90 555 000 00 00"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
              style={{
                background: "rgba(17,34,64,0.8)",
                border: "1px solid rgba(45,212,216,0.15)",
                color: "var(--text)",
                fontFamily: "DM Sans, sans-serif",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(45,212,216,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(45,212,216,0.15)")}
            />
          </div>

          <button
            onClick={next}
            disabled={!data.name || !data.email || !data.phone || !data.city}
            className="btn-primary w-full justify-center"
            style={
              !data.name || !data.email || !data.phone || !data.city
                ? { opacity: 0.4, cursor: "not-allowed" }
                : {}
            }
          >
            Devam Et
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Step 2 — Experience & leads */}
      {step === 2 && (
        <div className="space-y-5 animate-fade-up">
          <div>
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
              Mesleğiniz hakkında
            </h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Size en uygun asistanı kurgulayabilmek için.
            </p>
          </div>

          <div>
            <label className="text-xs font-medium block mb-2" style={{ color: "var(--text-muted)" }}>
              Kaç yıldır emlak danışmanlığı yapıyorsunuz?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["0-1 yıl", "1-3 yıl", "3-5 yıl", "5+ yıl"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => update("experience", opt)}
                  className="py-2.5 rounded-xl text-xs font-medium transition-all duration-200"
                  style={{
                    background: data.experience === opt ? "var(--cyan)" : "rgba(17,34,64,0.8)",
                    color: data.experience === opt ? "var(--navy-dark)" : "var(--text-muted)",
                    border: data.experience === opt ? "1.5px solid var(--cyan)" : "1px solid rgba(45,212,216,0.15)",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium block mb-2" style={{ color: "var(--text-muted)" }}>
              Aylık kaç lead ile çalışıyorsunuz?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["1-10", "10-30", "30-60", "60+"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => update("monthlyLeads", opt)}
                  className="py-2.5 rounded-xl text-xs font-medium transition-all duration-200"
                  style={{
                    background: data.monthlyLeads === opt ? "var(--cyan)" : "rgba(17,34,64,0.8)",
                    color: data.monthlyLeads === opt ? "var(--navy-dark)" : "var(--text-muted)",
                    border: data.monthlyLeads === opt ? "1.5px solid var(--cyan)" : "1px solid rgba(45,212,216,0.15)",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={back} className="btn-outline flex-1 justify-center text-sm py-3">
              ← Geri
            </button>
            <button
              onClick={next}
              disabled={!data.experience || !data.monthlyLeads}
              className="btn-primary flex-1 justify-center text-sm py-3"
              style={!data.experience || !data.monthlyLeads ? { opacity: 0.4, cursor: "not-allowed" } : {}}
            >
              Devam Et →
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Problems */}
      {step === 3 && (
        <div className="space-y-5 animate-fade-up">
          <div>
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
              En büyük zorluğunuz ne?
            </h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Birden fazla seçebilirsiniz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2">
            {PROBLEMS.map((p) => {
              const selected = data.currentProblem.includes(p);
              return (
                <button
                  key={p}
                  onClick={() => toggleProblem(p)}
                  className="p-3 rounded-xl text-xs text-left transition-all duration-200 flex items-center gap-2"
                  style={{
                    background: selected ? "rgba(45,212,216,0.1)" : "rgba(17,34,64,0.8)",
                    border: selected ? "1.5px solid rgba(45,212,216,0.4)" : "1px solid rgba(45,212,216,0.12)",
                    color: selected ? "var(--cyan)" : "var(--text-muted)",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  <span
                    className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
                    style={{
                      background: selected ? "var(--cyan)" : "transparent",
                      border: selected ? "none" : "1px solid rgba(45,212,216,0.3)",
                    }}
                  >
                    {selected && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--navy-dark)" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                  {p}
                </button>
              );
            })}
          </div>

          <div className="flex gap-3">
            <button onClick={back} className="btn-outline flex-1 justify-center text-sm py-3">
              ← Geri
            </button>
            <button
              onClick={next}
              disabled={data.currentProblem.length === 0}
              className="btn-primary flex-1 justify-center text-sm py-3"
              style={data.currentProblem.length === 0 ? { opacity: 0.4, cursor: "not-allowed" } : {}}
            >
              Son Adım →
            </button>
          </div>
        </div>
      )}

      {/* Step 4 — Final */}
      {step === 4 && (
        <div className="space-y-5 animate-fade-up">
          <div>
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
              Neredeyse hazır!
            </h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Bizi nereden duydunuz?
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {["Google", "Instagram", "LinkedIn", "Arkadaş tavsiyesi", "YouTube", "Diğer"].map((opt) => (
              <button
                key={opt}
                onClick={() => update("hearAbout", opt)}
                className="py-3 rounded-xl text-xs font-medium transition-all duration-200"
                style={{
                  background: data.hearAbout === opt ? "var(--cyan)" : "rgba(17,34,64,0.8)",
                  color: data.hearAbout === opt ? "var(--navy-dark)" : "var(--text-muted)",
                  border: data.hearAbout === opt ? "1.5px solid var(--cyan)" : "1px solid rgba(45,212,216,0.15)",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Summary */}
          <div
            className="rounded-xl p-4 text-sm"
            style={{ background: "rgba(45,212,216,0.04)", border: "1px solid rgba(45,212,216,0.12)" }}
          >
            <p className="font-medium mb-1" style={{ color: "var(--cyan)", fontFamily: "Syne, sans-serif" }}>
              Size Özel Demo Paketi
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              {data.experience} deneyimli danışman · Aylık {data.monthlyLeads} lead ·{" "}
              {data.currentProblem.length} temel sorun tespit edildi
            </p>
          </div>

          <div className="flex gap-3">
            <button onClick={back} className="btn-outline flex-shrink-0 px-5 py-3 text-sm">
              ← Geri
            </button>
            <button
              onClick={handleSubmit}
              className="btn-primary flex-1 justify-center text-sm py-3"
              style={{ boxShadow: "0 0 25px rgba(45,212,216,0.25)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.77 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.14a16 16 0 006.95 6.95l1.41-1.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Özel Asistan Demo Sunum İste
            </button>
          </div>

          <p className="text-center text-xs" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
            Spam yok. Sadece size özel demo sunumu için arayacağız.
          </p>
        </div>
      )}
    </div>
  );
}
