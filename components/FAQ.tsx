"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Kurulum gerçekten 10 dakika mı sürüyor?",
    a: "Evet! Tek yapmanız gereken telefon numaranızı bağlamak ve asistanınızın sesini, adını ve kurallarını belirlemek. Teknik bilgi gerekmez. Ortalama kurulum süresi 8 dakika.",
  },
  {
    q: "Hangi CRM sistemleriyle entegre olur?",
    a: "HubSpot, Salesforce, Zoho CRM, Pipedrive ve Türkiye'deki popüler sistemlerle entegrasyon mevcut. Zapier ve n8n üzerinden 1000+ uygulama bağlanabilir.",
  },
  {
    q: "AI asistanı sesim gibi mi konuşuyor?",
    a: "Asistanınızın ses tonu, konuşma tarzı ve kişiliğini tamamen özelleştirebilirsiniz. İster resmi ister samimi bir ton seçebilirsiniz.",
  },
  {
    q: "Önemli kişilerin aramaları asistana gidecek mi?",
    a: "Hayır! İstisna listesi oluşturabilirsiniz. Anneniz, eşiniz veya VIP müşterileriniz doğrudan sizi arar, geri kalanlar asistana yönlenir.",
  },
  {
    q: "Konuşmaları dinleyebilir miyim?",
    a: "Evet, tüm görüşmelerin kaydı ve transkripti gerçek zamanlı dashboard'unuzda görüntülenebilir. Hiçbir şeyi kaçırmıyorsunuz.",
  },
  {
    q: "Aylık ne kadar arama yapabilir?",
    a: "Plana göre değişir: Başlangıç 200 dakika, Profesyonel 600 dakika, Ajans ise sınırsız dakika sunmaktadır. Dakikanız biterse üst plana geçebilirsiniz.",
  },
  {
    q: "İptal etmek istersen ne olur?",
    a: "İstediğiniz zaman, hiçbir ceza ödemeden iptal edebilirsiniz. Mevcut dönem sonuna kadar erişiminiz devam eder.",
  },
  {
    q: "14 günlük deneme gerçekten ücretsiz mi?",
    a: "Evet, kredi kartı gerekmez. 14 gün boyunca tüm özelliklere tam erişim. Beğenmezseniz hiçbir ücret ödemezsiniz.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 relative" style={{ background: "var(--bg)" }}>
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(45,212,216,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
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
            Sıkça Sorulan Sorular
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Aklınızdaki{" "}
            <span className="gradient-text">Sorular</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "rgba(45,212,216,0.05)" : "rgba(17,34,64,0.5)",
                  border: isOpen ? "1px solid rgba(45,212,216,0.3)" : "1px solid rgba(45,212,216,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span
                    className="font-medium text-sm leading-snug"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      color: isOpen ? "var(--cyan)" : "var(--text)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen ? "rgba(45,212,216,0.15)" : "rgba(45,212,216,0.08)",
                      border: "1px solid rgba(45,212,216,0.2)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: "var(--cyan)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "300px" : "0px" }}
                >
                  <div
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
