import { siteLinks } from '@/lib/site';
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ecotrackr',
    featured: true,
    showcase: true,
    accent: 'emerald',
    title: {
      en: 'EcoTrackr — Personal CO₂e Tracker',
      ru: 'EcoTrackr — личный трекер CO₂e',
    },
    description: {
      en: 'Personal open-source PWA to log everyday activities and estimate CO₂e. Dashboard, optional Gemini tips, Web Workers, bilingual (en/ru), installable offline.',
      ru: 'Личное open-source PWA: записи повседневных активностей и оценка CO₂e. Дашборд, опциональные подсказки Gemini, Web Workers, en/ru, можно поставить на устройство.',
    },
    longDescription: {
      en: 'EcoTrackr is a personal open-source PWA I built to log everyday activities and estimate CO₂e. I designed the frontend from the landing page to a dashboard with calculations across 15+ activity categories.\n\nThe app uses Google Gemini for optional tips (with a fallback when the API key is missing), Supabase for auth and storage, Web Workers for heavier work off the main thread, and Leaflet for an activity map. Reports can be exported as PDF, CSV, or JSON. The app is bilingual and installable.\n\nI extracted the calculator UI into an npm package (@ecotrackr/co2-calculator) used by EcoTrackr.',
      ru: 'EcoTrackr — личное open-source PWA, которое я собрала, чтобы записывать повседневные активности и оценивать CO₂e. Спроектировала frontend от лендинга до дашборда с расчётом по 15+ категориям.\n\nВ приложении — опциональные подсказки Google Gemini (с fallback без API-ключа), Supabase для auth и хранения, Web Workers для тяжёлых расчётов вне main thread и Leaflet для карты активностей. Отчёты можно выгрузить в PDF, CSV или JSON. Есть en/ru и установка как PWA.\n\nКалькулятор я вынесла в npm-пакет (@ecotrackr/co2-calculator), который используется в EcoTrackr.',
    },
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Supabase',
      'Gemini AI',
      'Tailwind CSS',
      'PWA',
      'Web Workers',
    ],
    liveUrl: siteLinks.ecotrackr,
    githubUrl: 'https://github.com/CodingJulie/ecotrackr',
    images: [
      {
        en: {
          light: '/projects/ecotrackr/hero-light-en.png',
          dark: '/projects/ecotrackr/hero-dark-en.png',
        },
        ru: {
          light: '/projects/ecotrackr/hero-light-ru.png',
          dark: '/projects/ecotrackr/hero-dark-ru.png',
        },
        alt: { en: 'EcoTrackr landing page', ru: 'Лендинг EcoTrackr' },
        width: 1024,
        height: 591,
      },
    ],
    achievements: [
      {
        en: '15+ CO₂e metrics across transport, food, energy, shopping, and lifestyle',
        ru: '15+ метрик CO₂e: транспорт, питание, энергия, покупки, быт',
      },
      {
        en: 'Web Workers for leaderboard ranking and report export off the main thread',
        ru: 'Web Workers для лидерборда и экспорта отчётов вне main thread',
      },
      {
        en: 'Bilingual PWA (en/ru) with offline support and installable manifest',
        ru: 'Двуязычное PWA (en/ru) с offline-режимом и установкой на устройство',
      },
      {
        en: 'Optional Gemini tips with a server-side fallback when the API key is missing',
        ru: 'Опциональные подсказки Gemini с server-side fallback без API-ключа',
      },
    ],
    role: {
      en: 'Author',
      ru: 'Автор',
    },
    period: '2025 — Present',
  },
  {
    slug: 'visa-guide',
    featured: true,
    showcase: true,
    accent: 'blue',
    title: {
      en: 'VisaGuide — US Visa Step-by-Step Guide',
      ru: 'VisaGuide — пошаговый гид по визам США',
    },
    description: {
      en: 'Educational PWA that guides users through a visa questionnaire, rule-based eligibility recommendations, step-by-step guides, document checklists with PDF export, and an anonymized case archive.',
      ru: 'Образовательная PWA: анкета, rule-based рекомендации по типу визы, пошаговые гайды, чеклист документов с PDF-экспортом и архив анонимизированных кейсов.',
    },
    longDescription: {
      en: 'VisaGuide is an educational progressive web app for self-guided US visa preparation. Users complete a structured questionnaire covering citizenship, purpose of travel, employment, finances, and visa history — then receive deterministic eligibility recommendations powered by a custom rule engine (B-1/B-2, F-1, H-1B and more).\n\nI built the full Next.js frontend with bilingual i18n, Supabase auth and CMS admin panel for managing visa types, steps, rules, and legal updates. The app includes interactive guides with progress tracking, document checklists with PDF export, an anonymized case stories archive, and Google Gemini-powered explanations with server-side API routes.\n\nDesigned as a PWA with Service Worker caching, offline fallback, and install prompt — so users can prepare for their visa journey on any device.',
      ru: 'VisaGuide — образовательное PWA для самостоятельной подготовки к визе в США. Пользователь проходит структурированную анкету (гражданство, цель поездки, работа, финансы, визовая история) и получает детерминированные рекомендации через собственный rule engine (B-1/B-2, F-1, H-1B и др.).\n\nЯ реализовала полный Next.js frontend с двуязычной i18n, Supabase auth и CMS-админкой для управления типами виз, шагами, правилами и legal updates. В приложении — интерактивные гайды с прогрессом, чеклист документов с PDF-экспортом, архив анонимизированных кейсов и AI-объяснения через Google Gemini на серверных API routes.\n\nСпроектировано как PWA с Service Worker, offline fallback и кнопкой установки — чтобы пользователи могли готовиться к визе на любом устройстве.',
    },
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Supabase',
      'Gemini AI',
      'Tailwind CSS',
      'shadcn/ui',
      'PWA',
      'Vitest',
    ],
    liveUrl: siteLinks.visaGuide,
    githubUrl: 'https://github.com/CodingJulie/visa-guide',
    images: [
      {
        en: {
          light: '/projects/visa-guide/hero-light-en.png',
          dark: '/projects/visa-guide/hero-dark-en.png',
        },
        ru: {
          light: '/projects/visa-guide/hero-light-ru.png',
          dark: '/projects/visa-guide/hero-dark-ru.png',
        },
        alt: { en: 'VisaGuide homepage', ru: 'Главная страница VisaGuide' },
        width: 994,
        height: 958,
      },
    ],
    achievements: [
      {
        en: 'Rule-based eligibility engine for multiple US visa categories',
        ru: 'Rule-based движок рекомендаций для нескольких типов виз США',
      },
      {
        en: 'Admin CMS for visa types, steps, rules, and legal content updates',
        ru: 'CMS-админка для типов виз, шагов, правил и legal updates',
      },
      {
        en: 'Document checklist with PDF export and progress tracking',
        ru: 'Чеклист документов с PDF-экспортом и отслеживанием прогресса',
      },
      {
        en: 'Bilingual PWA (en/ru) with offline page and install button',
        ru: 'Двуязычное PWA (en/ru) с offline-страницей и кнопкой установки',
      },
    ],
    role: {
      en: 'Creator & Full-Stack Developer',
      ru: 'Автор и Full-Stack Developer',
    },
    period: '2025 — Present',
  },
  {
    slug: 'lockbox',
    featured: true,
    showcase: true,
    accent: 'rose',
    title: {
      en: 'Lockbox — Private Cloud Vault',
      ru: 'Lockbox — приватное облачное хранилище',
    },
    description: {
      en: 'Privacy-first cloud vault. No registration or email — one unique access code, upload files/audio/video/text, share a scoped code with someone you trust. AES-256-GCM, Argon2id, session-only memory.',
      ru: 'Privacy-first облачное хранилище. Без регистрации и email — один уникальный код доступа, загрузка файлов/аудио/видео/текста, отдельный код с ограниченными правами. AES-256-GCM, Argon2id, код только в памяти сессии.',
    },
    longDescription: {
      en: 'Lockbox is a minimal, privacy-first web application for storing private files in the cloud without leaving traces on the device. There is no registration, no email, and no password — users create a vault with one button and receive a unique access code shown exactly once.\n\nI built the full Next.js application with bilingual i18n (Russian and English access codes), Supabase Storage and PostgreSQL with RLS policies, REST API routes for vault creation, verification, upload, and download. The vault address is SHA-256; code verification uses Argon2id with a server-side pepper. Files are encrypted in the browser with AES-256-GCM; the plaintext code lives only in session memory.\n\nThe app supports file, audio, video, and text uploads up to 50 MB, in-browser recording, revocable share codes with expiry, and an integrity ZIP export — designed for incognito use on any device.',
      ru: 'Lockbox — минималистичное privacy-first веб-приложение для хранения личных файлов в облаке без следов на устройстве. Без регистрации, email и пароля — пользователь создаёт хранилище одной кнопкой и получает уникальный код доступа, который показывается ровно один раз.\n\nЯ реализовала полное Next.js-приложение с двуязычной i18n (коды доступа на русском и английском), Supabase Storage и PostgreSQL с RLS-политиками, REST API для создания хранилища, проверки кода, загрузки и скачивания. Адрес хранилища — SHA-256; проверка кода — Argon2id с server-side pepper. Файлы шифруются в браузере AES-256-GCM; plaintext-код живёт только в памяти сессии.\n\nПриложение поддерживает загрузку файлов, аудио, видео и текста до 50 МБ, запись в браузере, отзывные коды с ограниченными правами и экспорт ZIP с хешами — рассчитано на использование в режиме инкогнито.',
    },
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Supabase',
      'Tailwind CSS 4',
      'shadcn/ui',
      'Vitest',
      'i18n',
    ],
    liveUrl: siteLinks.lockbox,
    githubUrl: 'https://github.com/CodingJulie/lockbox',
    images: [
      {
        en: {
          light: '/projects/lockbox/hero-light-en.png',
          dark: '/projects/lockbox/hero-dark-en.png',
        },
        ru: {
          light: '/projects/lockbox/hero-light-ru.png',
          dark: '/projects/lockbox/hero-dark-ru.png',
        },
        alt: { en: 'Lockbox secure vault interface', ru: 'Интерфейс Lockbox' },
        width: 994,
        height: 958,
      },
    ],
    achievements: [
      {
        en: 'Zero-identity auth: no email, phone, or account — one-time access code only',
        ru: 'Авторизация без личных данных: без email, телефона и аккаунта — только одноразовый код',
      },
      {
        en: 'SHA-256 vault addressing, Argon2id code check, session-only browser memory',
        ru: 'Адрес хранилища SHA-256, проверка кода Argon2id, код только в памяти браузера',
      },
      {
        en: 'Multi-format upload: files, audio, video, and text notes',
        ru: 'Загрузка материалов: файлы, аудио, видео и текстовые заметки',
      },
      {
        en: 'Bilingual access codes (ru/en) and revocable scoped share codes',
        ru: 'Двуязычные коды доступа (ru/en) и отзывные коды с ограниченными правами',
      },
    ],
    role: {
      en: 'Creator & Full-Stack Developer',
      ru: 'Автор и Full-Stack Developer',
    },
    period: '2025 — Present',
  },
  {
    slug: 'co2-calculator',
    featured: true,
    title: {
      en: '@ecotrackr/co2-calculator — NPM Package',
      ru: '@ecotrackr/co2-calculator — npm-пакет',
    },
    description: {
      en: 'React component for CO₂e estimates, extracted from EcoTrackr and published on npm. Categories, i18n (en/ru), optional Supabase hook.',
      ru: 'React-компонент для оценки CO₂e: вынесен из EcoTrackr и опубликован в npm. Категории, i18n (en/ru), опциональный хук Supabase.',
    },
    longDescription: {
      en: 'I extracted the CO₂e calculator from EcoTrackr into a small npm package. It is a React component with form validation, category-based estimates, charts, and an optional Supabase hook.\n\nThe package supports en/ru via a translation callback and Tailwind-compatible classes. It is used inside EcoTrackr.\n\nPublished as @ecotrackr/co2-calculator with TypeScript types, peer dependencies, and unit tests.',
      ru: 'Я вынесла калькулятор CO₂e из EcoTrackr в небольшой npm-пакет. Это React-компонент с валидацией формы, оценкой по категориям, графиками и опциональным хуком Supabase.\n\nЕсть en/ru через callback перевода и классы, совместимые с Tailwind. Пакет используется в EcoTrackr.\n\nОпубликован как @ecotrackr/co2-calculator с TypeScript-типами, peer dependencies и unit-тестами.',
    },
    technologies: [
      'React',
      'TypeScript',
      'Rollup',
      'Vitest',
      'i18n',
      'Supabase',
      'npm',
    ],
    githubUrl: siteLinks.co2CalculatorGithub,
    npmUrl: siteLinks.co2CalculatorNpm,
    images: [],
    achievements: [
      {
        en: 'Published as @ecotrackr/co2-calculator on npm registry',
        ru: 'Опубликован как @ecotrackr/co2-calculator в npm registry',
      },
      {
        en: 'Emission categories for transport, food, energy, shopping, and household',
        ru: 'Категории: транспорт, питание, энергия, покупки, быт',
      },
      {
        en: 'React component with TypeScript types and en/ru i18n',
        ru: 'React-компонент с TypeScript-типами и i18n en/ru',
      },
    ],
    role: {
      en: 'Author',
      ru: 'Автор',
    },
    period: '2025 — Present',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getShowcaseProjects(): Project[] {
  return projects.filter((p) => p.showcase);
}
