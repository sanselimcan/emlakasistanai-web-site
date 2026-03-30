import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy-dark)",
        borderTop: "1px solid rgba(45,212,216,0.12)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <rect width="40" height="40" rx="10" fill="#2DD4D8" opacity="0.15"/>
                  <path d="M20 8L6 18.5V34h10V25h8v9h10V18.5L20 8z" fill="#2DD4D8"/>
                  <path d="M17 34V25h6v9" fill="#1B3A5C"/>
                </svg>
              </div>
              <span className="font-syne font-700 text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
                <span style={{ color: "#2DD4D8" }}>Emlak</span>
                <span style={{ color: "#e8f4f8" }}>Asistan</span>
                <span style={{ color: "#2DD4D8", fontSize: "0.65em", verticalAlign: "super" }}>AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)", opacity: 0.7 }}>
              Emlak danışmanlarına özel yapay zeka asistanı. 7/24 çalışır, lead kaçırmaz.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#demo"
                className="btn-primary text-sm py-2 px-4"
              >
                Demo Dene
              </a>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
              Hizmetler
            </h4>
            <ul className="space-y-2">
              {[
                "Giden Çağrı Asistanı",
                "Gelen Çağrı Asistanı",
                "Otomatik Takip",
                "WhatsApp AI Botu",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#hizmetler"
                    className="text-sm animated-underline"
                    style={{ color: "var(--text-muted)", opacity: 0.7 }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kaynaklar */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
              Kaynaklar
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Nasıl Çalışır?", href: "#nasil-calisir" },
                { label: "Demo Dene", href: "#demo" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm animated-underline"
                    style={{ color: "var(--text-muted)", opacity: 0.7 }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(45,212,216,0.08)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.4 }}>
            © 2025 EmlakAsistan AI. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            {["Gizlilik Politikası", "Kullanım Koşulları"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs"
                style={{ color: "var(--text-muted)", opacity: 0.4 }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
