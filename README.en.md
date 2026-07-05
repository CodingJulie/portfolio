<div align="center">

**Language:** [Русский](README.md) · [English](README.en.md)

<br />

# 👩‍💻 Julie — Portfolio

### Personal resume site · Frontend · Climate Tech

**React · Next.js 15 · TypeScript · PWA · i18n (ru/en)**

<br />

![Next.js](https://img.shields.io/badge/Next.js_15-000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-149eca?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)

<br />

[Quick start](#-quick-start) · [Structure](#-project-structure) · [PWA](#-pwa) · [i18n & theme](#-localization--theme)

</div>

---

## ✦ About

Personal portfolio with project case studies, work experience, and contact info. Built with the same stack and patterns as **EcoTrackr**, **VisaGuide**, and **Lockbox**:

| | |
|---|---|
| 📱 **PWA** | Install to home screen, Service Worker, offline page |
| 🌍 **i18n** | Russian and English; auto-detect language by geo (RU → ru) |
| 🌓 **Theme** | Light / dark; initial theme from browser system preference |
| 🖨 **Resume** | Printable CV (`public/resume.html`) |
| 🔍 **SEO** | Open Graph, sitemap, robots.txt |

---

## 🚀 Quick start

```bash
git clone <repo-url> && cd portfolio
npm install
npm run dev
```

Open **http://localhost:3000**.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Run production |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript |
| `npm run test` | Vitest (single run) |
| `npm run test:watch` | Vitest watch mode |

---

## 📁 Project structure

```
app/
├── (site)/                 # Pages: home, about, experience, projects, contact
│   └── projects/[slug]/    # Project case studies
├── api/geo/                # Country detection by IP (for i18n)
├── layout.tsx              # Root layout, PWA meta, theme script
├── providers.tsx           # next-themes
├── sitemap.ts
└── robots.ts

components/
├── common/                 # ThemeToggle, LanguageSwitcher, AnimatedSection
├── layout/                 # Header, Footer
├── providers/              # I18nProvider (geo-based locale)
├── sections/               # Hero, Projects, Experience, …
├── ui/                     # Button, Card, Badge
└── workers/                # ServiceWorkerRegister

lib/
├── detect-locale.ts        # Geo + localStorage → language
├── initial-preferences-scripts.ts  # Blocking theme script (no FOUC)
├── i18n.ts
└── site.ts

public/
├── locales/{en,ru}/        # Translations (SW precache)
├── icons/                  # PWA icons (SVG)
├── manifest.webmanifest
├── sw.js                   # Service Worker
├── offline.html
└── projects/               # Project screenshots

data/                       # projects, experience, skills, education
```

---

## 📱 PWA

| Component | Path | Description |
|-----------|------|-------------|
| Manifest | `public/manifest.webmanifest` | Icons, theme_color, standalone |
| Service Worker | `public/sw.js` | Precache shell, offline fallback |
| Offline page | `public/offline.html` | No-network page |
| SW registration | `components/workers/ServiceWorkerRegister.tsx` | Register + redirect on `offline` |
| Headers | `next.config.ts` | `Service-Worker-Allowed`, SW cache-control |

On first visit the SW precaches the offline page, manifest, locales, and icons. The home page is cached on successful load and available offline via `/?fromOffline=1`.

---

## 🌍 Localization & theme

### Language (geo-based, like EcoTrackr / Lockbox)

1. **localStorage** (`i18nextLng`) — if the user already chose a language
2. **`GET /api/geo`** — country `RU` → Russian, otherwise English
3. Fallback → `en`

Files: `lib/detect-locale.ts`, `app/api/geo/route.ts`, `components/providers/I18nProvider.tsx`

### Theme (like VisaGuide)

Blocking script in `<head>` (`lib/initial-preferences-scripts.ts`):

- If `localStorage.theme` is `light` / `dark` — use it
- Otherwise — browser `prefers-color-scheme`
- `next-themes` with `storageKey="theme"` and `defaultTheme="system"`

---

## 🧪 Tests

Minimal Vitest suite:

- `lib/detect-locale.test.ts` — geo logic and localStorage priority
- `lib/initial-preferences-scripts.test.ts` — theme init script

```bash
npm run test
```

---

## 🚢 Deploy

Optimized for [Vercel](https://vercel.com).

### Local setup

```bash
cp .env.example .env.local
# Edit NEXT_PUBLIC_SITE_URL if needed
npm run dev
```

### Vercel

1. Import the repo in [Vercel Dashboard](https://vercel.com/new)
2. Add environment variable:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

3. Deploy runs automatically on push to `main`

`vercel.json` sets the Next.js framework and build commands. GitHub Actions (`.github/workflows/`) run CI and deploy via Vercel CLI.

**GitHub Actions secrets:**

| Secret | Description |
|--------|-------------|
| `VERCEL_TOKEN` | [Vercel Access Token](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Team/account ID (`vercel link`) |
| `VERCEL_PROJECT_ID` | Project ID (`vercel link`) |

```bash
npm run build
npm run start
```

On Vercel, `/api/geo` uses the `x-vercel-ip-country` header. Locally — fallback via `ipapi.co`.

---

## ✏️ Customize

- Links and metadata: `lib/site.ts`
- Content: `data/` and `public/locales/`
- CV: `public/resume.html`
- Project screenshots: `public/projects/`

---

## 📄 License

MIT
