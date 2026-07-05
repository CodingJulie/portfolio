<div align="center">

**Язык:** [Русский](README.md) · [English](README.en.md)

<br />

# 👩‍💻 Julie — Portfolio

### Личный сайт-резюме · Frontend · Climate Tech

**React · Next.js 15 · TypeScript · PWA · i18n (ru/en)**

<br />

![Next.js](https://img.shields.io/badge/Next.js_15-000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-149eca?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)

<br />

[Быстрый старт](#-быстрый-старт) · [Структура](#-структура-проекта) · [PWA](#-pwa) · [i18n & тема](#-локализация-и-тема)

</div>

---

## ✦ О проекте

Персональный портфолио-сайт с кейсами проектов, опытом работы и контактами. Собран на том же стеке и с теми же паттернами, что **EcoTrackr**, **VisaGuide** и **Lockbox**:

| | |
|---|---|
| 📱 **PWA** | Установка на домашний экран, Service Worker, offline-страница |
| 🌍 **i18n** | Русский и английский; автоопределение языка по геолокации (RU → ru) |
| 🌓 **Тема** | Светлая / тёмная; начальная тема — из системных настроек браузера |
| 🖨 **Резюме** | Печатная версия CV (`public/resume.html`) |
| 🔍 **SEO** | Open Graph, sitemap, robots.txt |

---

## 🚀 Быстрый старт

```bash
git clone <repo-url> && cd portfolio
npm install
npm run dev
```

Откройте **http://localhost:3000**.

### Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Dev-сервер |
| `npm run build` | Production-сборка |
| `npm run start` | Запуск production |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript |
| `npm run test` | Vitest (один прогон) |
| `npm run test:watch` | Vitest в watch-режиме |

---

## 📁 Структура проекта

```
app/
├── (site)/                 # Страницы: home, about, experience, projects, contact
│   └── projects/[slug]/    # Кейсы проектов
├── api/geo/                # Определение страны по IP (для i18n)
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
├── detect-locale.ts        # Geo + localStorage → язык
├── initial-preferences-scripts.ts  # Blocking theme script (no FOUC)
├── i18n.ts
└── site.ts

public/
├── locales/{en,ru}/        # Переводы (precache в SW)
├── icons/                  # PWA icons (SVG)
├── manifest.webmanifest
├── sw.js                   # Service Worker
├── offline.html
└── projects/               # Скриншоты проектов

data/                       # projects, experience, skills, education
```

---

## 📱 PWA

| Компонент | Путь | Описание |
|-----------|------|----------|
| Manifest | `public/manifest.webmanifest` | Иконки, theme_color, standalone |
| Service Worker | `public/sw.js` | Precache shell, offline fallback |
| Offline page | `public/offline.html` | Страница без сети |
| Регистрация SW | `components/workers/ServiceWorkerRegister.tsx` | Регистрация + redirect при `offline` |
| Headers | `next.config.ts` | `Service-Worker-Allowed`, cache-control для SW |

При первом визите SW кэширует offline-страницу, manifest, локали и иконки. Главная страница кэшируется при успешной загрузке и доступна offline через `/?fromOffline=1`.

---

## 🌍 Локализация и тема

### Язык (geo-based, как EcoTrackr / Lockbox)

1. **localStorage** (`i18nextLng`) — если пользователь уже выбирал язык
2. **`GET /api/geo`** — страна `RU` → русский, иначе английский
3. Fallback → `en`

Файлы: `lib/detect-locale.ts`, `app/api/geo/route.ts`, `components/providers/I18nProvider.tsx`

### Тема (как VisaGuide)

Blocking-скрипт в `<head>` (`lib/initial-preferences-scripts.ts`):

- Если в `localStorage.theme` сохранено `light` / `dark` — используется оно
- Иначе — `prefers-color-scheme` браузера
- `next-themes` с `storageKey="theme"` и `defaultTheme="system"`

---

## 🧪 Тесты

Минимальный набор на Vitest:

- `lib/detect-locale.test.ts` — geo-логика и приоритет localStorage
- `lib/initial-preferences-scripts.test.ts` — theme init script

```bash
npm run test
```

---

## 🚢 Деплой

Оптимизировано для [Vercel](https://vercel.com).

### Локальная настройка

```bash
cp .env.example .env.local
# Отредактируйте NEXT_PUBLIC_SITE_URL при необходимости
npm run dev
```

### Vercel

1. Импортируйте репозиторий в [Vercel Dashboard](https://vercel.com/new)
2. Добавьте переменную окружения:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

3. Деплой произойдёт автоматически при push в `main`

`vercel.json` задаёт Next.js framework и команды сборки. GitHub Actions (`.github/workflows/`) запускает CI и деплой через Vercel CLI.

**Secrets для GitHub Actions:**

| Secret | Описание |
|--------|----------|
| `VERCEL_TOKEN` | [Vercel Access Token](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | ID команды/аккаунта (`vercel link`) |
| `VERCEL_PROJECT_ID` | ID проекта (`vercel link`) |

```bash
npm run build
npm run start
```

---

## ✏️ Кастомизация

- Ссылки и метаданные: `lib/site.ts`
- Контент: `data/` и `public/locales/`
- CV: `public/resume.html`
- Скриншоты проектов: `public/projects/`

---

## 📄 Лицензия

MIT
