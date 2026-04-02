import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "EmlakAsistan AI — Emlak Danışmanları İçin Yapay Zeka Asistanı",
  description:
    "Emlak danışmanlarına özel AI çağrı asistanı. FSBO aramaları, lead takibi, WhatsApp botu ve 7/24 gelen çağrı yönetimi.",
  keywords: "emlak AI asistanı, emlak yapay zeka, FSBO arama, emlak lead yönetimi, WhatsApp emlak botu, Türkiye emlak",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "EmlakAsistan AI — Emlak Danışmanları İçin Yapay Zeka Asistanı",
    description: "7/24 çalışan AI asistanınız. Kaçırdığınız her çağrı, kaybettiğiniz bir komisyon.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
