# EmlakAsistan AI — Site Referans Dosyası

Bu dosya siteyi yeniden kurarken veya geliştirirken başvurulacak tam referanstır.

---

## Tech Stack

| Katman | Teknoloji |
|---|---|
| Framework | Next.js 14.2 (App Router) |
| Dil | TypeScript |
| Stil | Tailwind CSS 3.4 + custom CSS variables |
| AI Voice | Vapi AI (`@vapi-ai/web ^2.5.2`) |
| Form Backend | n8n webhook |
| Deploy | Coolify (self-hosted, Docker) |
| Repo | GitHub: `sanselimcan/emlakasistanai-web-site` |
| Domain | emlakasistanai.com |

---

## Dizin Yapısı

```
app/
  layout.tsx          # Root layout, metadata, fonts
  page.tsx            # Ana sayfa — tüm section'ları sıralar
  globals.css         # CSS variables, utility class'lar, animasyonlar
  icon.png            # Favicon (Next.js App Router otomatik algılar)
  blog/               # Blog sayfası (route)
  fonts/              # Local font dosyaları (varsa)

components/
  Navbar.tsx          # Fixed top navbar, scroll blur efekti, mobil menü
  Hero.tsx            # Hero section — ana başlık, CTA butonları, stats
  Services.tsx        # Hizmetler section (#hizmetler)
  HowItWorks.tsx      # Nasıl Çalışır section (#nasil-calisir)
  VapiDemo.tsx        # Canlı AI sesli demo (#demo) — Vapi entegrasyonu
  Testimonials.tsx    # Müşteri yorumları
  ComparisonTable.tsx # Rakip karşılaştırma tablosu
  DemoFormSection.tsx # DemoForm'u wrap eden section
  DemoForm.tsx        # 4 adımlı lead capture formu — n8n webhook ile
  FAQ.tsx             # Sık sorulan sorular (accordion)
  CTASection.tsx      # Son CTA
  BlogPreview.tsx     # Blog yazıları önizleme
  Footer.tsx          # Footer
  Pricing.tsx         # ⚠️ Sayfada KULLANILMIYOR (dosya var, import yok)

public/
  logo.png            # Tam logo (ev ikonu + "EmlakAsistan" yazısı, şeffaf bg)
  icon.png            # Sadece ev ikonu (favicon için, şeffaf bg)
```

---

## Sayfa Section Sırası (app/page.tsx)

```
Navbar → Hero → Services → HowItWorks → VapiDemo →
Testimonials → ComparisonTable → DemoFormSection →
FAQ → CTASection → BlogPreview → Footer
```

---

## Tasarım Sistemi

### Renkler (globals.css CSS variables)

```css
--cyan: #2DD4D8          /* Ana brand rengi */
--cyan-light: #5DE0E4
--cyan-dark: #1BA8AC
--navy: #1B3A5C
--navy-light: #254d7a
--navy-dark: #0f2236
--bg: #07111e             /* Sayfa arka planı */
--bg-2: #0d1f32
--surface: #112240        /* Card arka planı */
--surface-2: #162d4a
--text: #e8f4f8           /* Ana metin */
--text-muted: #8ab4c9     /* Yardımcı metin */
--border: rgba(45,212,216,0.15)
```

### Fontlar (Google Fonts)

- **Syne** — Başlıklar (400–800 weight)
- **DM Sans** — Body metin (300–600 weight)

### CSS Utility Class'lar

- `.glass` — Glassmorphism efekti (backdrop-blur + semi-transparent bg)
- `.gradient-text` — Cyan gradient metin
- `.mesh-bg` — Sayfa arka plan gradyanı
- `.animated-underline` — Hover'da altı çizili link animasyonu
- `.btn-primary` — Ana CTA butonu stili
- `.btn-secondary` — İkincil buton stili

---

## Entegrasyonlar

### Vapi AI (Sesli Demo)

- **Paket:** `@vapi-ai/web ^2.5.2`
- **Component:** `components/VapiDemo.tsx`
- **Env Variables (Coolify'a eklenecek):**
  ```
  NEXT_PUBLIC_VAPI_PUBLIC_KEY=...
  NEXT_PUBLIC_VAPI_ASSISTANT_ID=...
  ```
- ⚠️ Bu env var'lar henüz Coolify'a eklenmedi

### n8n Form Webhook

- **n8n URL:** https://n8n-s.taklops.com
- **n8n API:** https://n8n-s.taklops.com/api/v1
- **Webhook endpoint:** `https://n8n-s.taklops.com/webhook/emlak-form-lead`
- **Kullanım:** DemoForm.tsx handleSubmit → POST form verisi → n8n workflow
- **Gönderilen alanlar:** `name, email, phone, city, experience, monthlyLeads, currentProblem[], hearAbout`
- ⚠️ n8n'de bu webhook'u alan workflow henüz kurulmadı

### MCP Araçları (.mcp.json)

```json
{
  "mcpServers": {
    "apify": { "type": "sse", "url": "https://mcp.apify.com/sse?token=..." },
    "magic-mcp-docs": { "type": "sse", "url": "https://gitmcp.io/21st-dev/magic-mcp.git" },
    "n8n": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "n8n-mcp"],
      "env": {
        "N8N_API_URL": "https://n8n-s.taklops.com/api/v1",
        "N8N_API_KEY": "JWT_TOKEN_BURAYA"
      }
    }
  }
}
```

---

## Deploy (Coolify)

- **Platform:** Coolify self-hosted (VPS'te çalışıyor)
- **Kaynak:** GitHub repo `sanselimcan/emlakasistanai-web-site`, `main` branch
- **Build:** Next.js Nixpacks (otomatik)
- **Auto-deploy:** Kurulmadı — her güncellemede Coolify'da manuel "Redeploy" gerekiyor
- **GitHub push → Coolify Redeploy adımları:**
  1. Kod değişikliği yap
  2. `git push` ile GitHub'a gönder
  3. Coolify → Uygulama → "Redeploy" butonu
- **Domain ayarı:** Coolify → Uygulama → Configuration → Domains → `emlakasistanai.com` ekle

---

## Logolar / Görseller

- **`public/logo.png`** — Tam logo (ev + yazı), şeffaf arka plan. Navbar'da kullanılıyor.
- **`public/icon.png`** — Sadece ev ikonu, şeffaf arka plan, 256×256px. Favicon için.
- **`app/icon.png`** — `public/icon.png` ile aynı dosya. Next.js App Router buradan favicon üretiyor.
- Orijinal kaynak dosyalar: `1.png` (ev+yazı), `arka plansız.png` (şeffaf logo versiyonu)

---

## Navbar Linkleri

```
Hizmetler  → #hizmetler
Nasıl Çalışır → #nasil-calisir
Demo       → #demo
Blog       → /blog
Demo Dene  → #demo (CTA butonu)
```

---

## DemoForm Alanları (4 Adım)

**Step 1:** Ad Soyad, Email, Telefon  
**Step 2:** Şehir, Deneyim (yıl), Aylık lead sayısı  
**Step 3:** Mevcut sorunlar (çoktan seçmeli):
- Meşgulken çağrı kaçırıyorum
- FSBO aramaları çok zaman alıyor
- Lead takibi zorlaşıyor
- WhatsApp sorularına yetiştirelemiyorum
- Gece/hafta sonu çağrıları kaçıyorum
- Randevu ayarlamak çok vakit alıyor

**Step 4:** Bizi nereden duydunuz + Submit

---

## Bekleyen Görevler

- [ ] **n8n webhook workflow kurulumu** — `emlak-form-lead` endpoint'i için workflow oluştur, e-posta/bildirim ayarla
- [ ] **Vapi env var'ları** — `NEXT_PUBLIC_VAPI_PUBLIC_KEY` ve `NEXT_PUBLIC_VAPI_ASSISTANT_ID` Coolify'a ekle
- [ ] **Domain** — Coolify'da `emlakasistanai.com` domain'ini uygulama Configuration → Domains'e ekle
- [ ] **Auto-deploy** — Coolify GitHub App entegrasyonu kur (push → otomatik deploy)

---

## Sık Kullanılan Komutlar

```bash
# Lokal geliştirme
npm run dev         # http://localhost:3000

# GitHub'a push (token gerekiyor)
git push https://TOKEN@github.com/sanselimcan/emlakasistanai-web-site.git main

# Build kontrolü
npm run build
```

---

## Favicon Notu

- `app/icon.png` Next.js'in kendi favicon sistemi — otomatik olarak `<link rel="icon">` üretiyor
- `layout.tsx`'te ayrıca `icons` metadata'sı tanımlamaya gerek yok
- Tarayıcılar favicon'ı cache'ler — değişiklik sonrası görünmesi için: Chrome'da cache temizle veya farklı tarayıcıda aç
