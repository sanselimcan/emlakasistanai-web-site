"use client";

import { useState, useCallback, useRef } from "react";

type CallStatus = "idle" | "loading" | "active" | "ended" | "error";

export default function VapiDemo() {
  const [status, setStatus] = useState<CallStatus>("idle");
  const [transcript, setTranscript] = useState<string>("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const vapiRef = useRef<unknown>(null);

  const startCall = useCallback(async () => {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
    const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;

    if (!publicKey || publicKey === "your_vapi_public_key_here") {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setTranscript("");

    try {
      const { default: Vapi } = await import("@vapi-ai/web");
      const vapi = new Vapi(publicKey);
      vapiRef.current = vapi;

      vapi.on("call-start", () => setStatus("active"));
      vapi.on("call-end", () => {
        setStatus("ended");
        setIsSpeaking(false);
        vapiRef.current = null;
      });
      vapi.on("speech-start", () => setIsSpeaking(true));
      vapi.on("speech-end", () => setIsSpeaking(false));
      vapi.on("message", (msg: { type: string; role?: string; transcriptType?: string; transcript?: string }) => {
        if (msg.type === "transcript" && msg.transcriptType === "final" && msg.transcript) {
          const prefix = msg.role === "assistant" ? "🤖" : "👤";
          setTranscript((prev) =>
            prev ? `${prev}\n${prefix} ${msg.transcript}` : `${prefix} ${msg.transcript}`
          );
        }
      });
      vapi.on("error", () => setStatus("error"));

      await vapi.start(assistantId!);
    } catch {
      setStatus("error");
    }
  }, []);

  const endCall = useCallback(() => {
    if (vapiRef.current) {
      (vapiRef.current as { stop: () => void }).stop();
    }
    setStatus("ended");
  }, []);

  const reset = () => {
    setStatus("idle");
    setTranscript("");
  };

  const isKeyMissing =
    !process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY ||
    process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY === "your_vapi_public_key_here";

  return (
    <section id="demo" className="py-24 relative" style={{ background: "var(--bg-2)" }}>
      {/* BG glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,212,216,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(45,212,216,0.1)",
              border: "1px solid rgba(45,212,216,0.2)",
              color: "var(--cyan)",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Canlı Demo
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            AI Asistanı Şimdi Dene
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Gerçek bir emlak müşterisi gibi konuş. Asistanın nasıl yanıt verdiğini,
            randevu nasıl aldığını kendin gör.
          </p>
        </div>

        {/* Demo card */}
        <div className="glass rounded-3xl p-8 lg:p-10 max-w-xl mx-auto">
          {/* Status indicator */}
          <div className="flex items-center gap-3 mb-8">
            <div className="relative flex items-center justify-center" style={{ width: 56, height: 56 }}>
              {/* Pulse rings when AI is speaking */}
              {isSpeaking && (
                <>
                  <span className="absolute inline-flex rounded-full opacity-30 animate-ping" style={{ width: 56, height: 56, background: "rgba(45,212,216,0.4)" }} />
                  <span className="absolute inline-flex rounded-full opacity-20 animate-ping" style={{ width: 72, height: 72, background: "rgba(45,212,216,0.2)", animationDelay: "0.2s" }} />
                </>
              )}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center relative z-10"
                style={{
                  background: status === "active"
                    ? "linear-gradient(135deg, #1B3A5C 0%, #2DD4D8 100%)"
                    : "var(--surface)",
                  border: `2px solid ${isSpeaking ? "#2DD4D8" : status === "active" ? "rgba(45,212,216,0.5)" : "var(--border)"}`,
                  boxShadow: isSpeaking ? "0 0 20px rgba(45,212,216,0.5)" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                {status === "loading" ? (
                  <svg className="animate-spin w-6 h-6" style={{ color: "var(--cyan)" }} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25"/>
                    <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : status === "active" ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: isSpeaking ? "#2DD4D8" : "rgba(45,212,216,0.7)" }}>
                    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                    <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>
                  </svg>
                ) : (
                  <span style={{ fontSize: 22 }}>🤖</span>
                )}
              </div>
              {status === "active" && (
                <span
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 z-20"
                  style={{ background: "#22c55e", borderColor: "var(--surface)" }}
                />
              )}
            </div>
            <div>
              <div className="font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
                EmlakAsistan Demo
              </div>
              <div
                className="text-sm"
                style={{
                  color: status === "active" ? "#22c55e" : status === "error" ? "#ff6b6b" : "var(--text-muted)",
                }}
              >
                {status === "idle" && "Konuşmaya hazır"}
                {status === "loading" && "Bağlanıyor..."}
                {status === "active" && "● Canlı görüşme"}
                {status === "ended" && "Görüşme tamamlandı"}
                {status === "error" && (isKeyMissing ? "Demo henüz yapılandırılmadı" : "Bağlantı hatası")}
              </div>
            </div>

            {status === "active" && (
              <div className="ml-auto voice-wave">
                <span /><span /><span /><span /><span />
              </div>
            )}
          </div>

          {/* Info box — when key missing */}
          {isKeyMissing && (
            <div
              className="rounded-xl p-4 mb-6 text-sm"
              style={{
                background: "rgba(45,212,216,0.06)",
                border: "1px solid rgba(45,212,216,0.2)",
                color: "var(--text-muted)",
              }}
            >
              <p className="font-medium mb-1" style={{ color: "var(--cyan)" }}>🎧 Canlı Demo Yakında</p>
              <p style={{ opacity: 0.85 }}>
                Demo asistanımız hazırlanıyor. Şimdi formu doldurarak size özel bir demo randevusu alın.
              </p>
            </div>
          )}

          {/* Transcript */}
          {transcript && (
            <div
              className="rounded-xl p-4 mb-6 text-sm max-h-40 overflow-y-auto"
              style={{
                background: "rgba(45,212,216,0.04)",
                border: "1px solid rgba(45,212,216,0.12)",
                color: "var(--text-muted)",
                whiteSpace: "pre-line",
                lineHeight: "1.7",
              }}
            >
              {transcript}
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            {(status === "idle" || status === "error") && (
              <button
                onClick={startCall}
                disabled={isKeyMissing}
                className="btn-primary w-full justify-center text-base py-4"
                style={isKeyMissing ? { opacity: 0.4, cursor: "not-allowed" } : {}}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                  <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>
                </svg>
                {isKeyMissing ? "Demo Yakında Aktif" : "Konuşmayı Başlat"}
              </button>
            )}

            {status === "loading" && (
              <div className="btn-outline w-full justify-center text-base py-4 cursor-wait" style={{ opacity: 0.7 }}>
                Bağlanıyor...
              </div>
            )}

            {status === "active" && (
              <button
                onClick={endCall}
                className="w-full justify-center text-base py-4 rounded-lg font-semibold transition-all"
                style={{
                  background: "rgba(255,100,100,0.12)",
                  border: "1.5px solid rgba(255,100,100,0.4)",
                  color: "#ff6b6b",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                  <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2.5"/>
                </svg>
                Görüşmeyi Bitir
              </button>
            )}

            {status === "ended" && (
              <div className="space-y-3">
                <div
                  className="rounded-xl p-4 text-sm text-center"
                  style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", color: "#22c55e" }}
                >
                  ✓ Demo tamamlandı! Gördüğünüz gibi — hızlı, doğal, etkili.
                </div>
                <button onClick={reset} className="btn-outline w-full justify-center">
                  Tekrar Dene
                </button>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs mt-4" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
            Mikrofon erişimi gereklidir · Tarayıcıda çalışır, uygulama gerekmez
          </p>
        </div>
      </div>
    </section>
  );
}
