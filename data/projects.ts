import { siteLinks } from '@/lib/site';
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ecotrackr',
    featured: true,
    showcase: true,
    accent: 'emerald',
    title: {
      en: 'EcoTrackr — Carbon Footprint Tracker',
      ru: 'EcoTrackr — трекер углеродного следа',
    },
    description: {
      en: 'Open-source PWA for tracking and reducing personal CO₂e. Real-time dashboard, AI insights via Gemini, community leaderboard, export reports, and installable offline experience.',
      ru: 'Open-source PWA для учёта и снижения личного CO₂e. Дашборд в реальном времени, AI-советы через Gemini, лидерборд сообщества, экспорт отчётов и установка как offline-приложение.',
    },
    longDescription: {
      en: 'EcoTrackr is an open-source progressive web application that helps users understand and reduce their carbon footprint. I designed and built the entire frontend architecture — from landing page to interactive dashboard with real-time CO₂e calculations across 15+ activity categories.\n\nThe app integrates Google Gemini for personalized sustainability insights, Supabase for auth and data persistence, Web Workers for heavy computations off the main thread, and Leaflet maps for geospatial activity visualization. Users can export reports (PDF, CSV, JSON), share public profiles, compete on community leaderboards, and install the app as a PWA.\n\nI extracted the CO₂ calculator into a standalone npm package (@ecotrackr/co2-calculator) that powers both EcoTrackr and can be reused in any React project.',
      ru: 'EcoTrackr — open-source progressive web application, которое помогает пользователям понимать и снижать свой углеродный след. Я спроектировала и реализовала всю frontend-архитектуру — от лендинга до интерактивного дашборда с расчётом CO₂e в реальном времени по 15+ категориям активностей.\n\nПриложение интегрирует Google Gemini для персональных рекомендаций, Supabase для авторизации и хранения данных, Web Workers для тяжёлых вычислений вне main thread и Leaflet для визуализации активностей на карте. Пользователи могут экспортировать отчёты (PDF, CSV, JSON), делиться публичными профилями, участвовать в лидерборде сообщества и устанавливать приложение как PWA.\n\nКалькулятор CO₂ я вынесла в отдельный npm-пакет (@ecotrackr/co2-calculator), который используется в EcoTrackr и может быть переиспользован в любых React-проектах.',
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
        en: 'AI-powered sustainability recommendations via Google Gemini API',
        ru: 'AI-рекомендации по устойчивому образу жизни через Google Gemini API',
      },
    ],
    role: {
      en: 'Creator & Lead Frontend Developer',
      ru: 'Автор и Lead Frontend Developer',
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
      en: 'Lockbox — Secure Evidence Storage',
      ru: 'Lockbox — безопасное хранилище доказательств',
    },
    description: {
      en: 'Privacy-first cloud vault for people experiencing violence. No registration or email — one unique access code, upload files/audio/video/text, share with a trusted person. SHA-256 hashed keys, session-only memory.',
      ru: 'Privacy-first облачное хранилище для людей в ситуации насилия. Без регистрации и email — один уникальный код доступа, загрузка файлов/аудио/видео/текста, передача доверенному лицу. SHA-256 хеш ключей, код только в памяти сессии.',
    },
    longDescription: {
      en: 'Lockbox is a minimal, privacy-first web application that lets people in violent situations store evidence safely in the cloud without leaving traces on their device. There is no registration, no email, and no password — users create a vault with one button and receive a unique access code shown exactly once.\n\nI built the full Next.js application with bilingual i18n (Russian and English access codes), Supabase Storage and PostgreSQL with RLS policies, REST API routes for vault creation, verification, upload, and download. Access codes are hashed with SHA-256 on the server; the plaintext code lives only in browser memory for the session.\n\nThe app supports file, audio, video, and text uploads up to 50 MB, media recording via the Web APIs, and a trusted-person workflow where sharing the code grants full access to materials — designed for use in incognito mode on any device.',
      ru: 'Lockbox — минималистичное privacy-first веб-приложение, которое позволяет людям в ситуации насилия безопасно хранить доказательства в облаке, не оставляя следов на устройстве. Без регистрации, email и пароля — пользователь создаёт хранилище одной кнопкой и получает уникальный код доступа, который показывается ровно один раз.\n\nЯ реализовала полное Next.js-приложение с двуязычной i18n (коды доступа на русском и английском), Supabase Storage и PostgreSQL с RLS-политиками, REST API для создания хранилища, проверки кода, загрузки и скачивания. Коды хешируются SHA-256 на сервере; plaintext-код живёт только в памяти браузера на время сессии.\n\nПриложение поддерживает загрузку файлов, аудио, видео и текста до 50 МБ, запись медиа через Web APIs и сценарий передачи кода доверенному лицу — рассчитано на использование в режиме инкогнито.',
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
        en: 'SHA-256 hashed vault keys with session-only browser memory',
        ru: 'SHA-256 хеш ключей хранилища, код только в памяти браузера',
      },
      {
        en: 'Multi-format evidence upload: files, audio, video, and text notes',
        ru: 'Загрузка материалов: файлы, аудио, видео и текстовые заметки',
      },
      {
        en: 'Bilingual access codes (ru/en) and trusted-person sharing workflow',
        ru: 'Двуязычные коды доступа (ru/en) и сценарий передачи доверенному лицу',
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
      en: '@ecotrackr/co2-calculator — Open-Source NPM Package',
      ru: '@ecotrackr/co2-calculator — open-source NPM-пакет',
    },
    description: {
      en: 'Reusable React component library for CO₂e calculations with 15+ emission categories, i18n support, and Supabase integration hooks.',
      ru: 'Переиспользуемая React-библиотека для расчёта CO₂e: 15+ категорий выбросов, i18n и интеграция с Supabase.',
    },
    longDescription: {
      en: 'I extracted the carbon footprint calculator from EcoTrackr into a standalone, publishable npm package. The library provides a fully-featured React component with form validation, real-time CO₂e calculations, category-based emission factors, and optional Supabase persistence.\n\nThe package is designed for reuse — any React project can import the calculator with minimal setup. It supports i18n via a translation callback, custom styling through Tailwind-compatible classes, and tree-shakeable exports.\n\nPublished on npm as @ecotrackr/co2-calculator with TypeScript definitions, peer dependency management, and comprehensive unit tests.',
      ru: 'Я вынесла калькулятор углеродного следа из EcoTrackr в отдельный npm-пакет. Библиотека предоставляет полнофункциональный React-компонент с валидацией форм, расчётом CO₂e в реальном времени, коэффициентами выбросов по категориям и опциональной записью в Supabase.\n\nПакет спроектирован для переиспользования — любой React-проект может подключить калькулятор с минимальной настройкой. Поддерживает i18n через callback перевода, кастомизацию стилей и tree-shakeable экспорты.\n\nОпубликован на npm как @ecotrackr/co2-calculator с TypeScript-типами, peer dependencies и unit-тестами.',
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
        en: '15+ emission categories with scientifically sourced factors',
        ru: '15+ категорий выбросов с научно обоснованными коэффициентами',
      },
      {
        en: 'Drop-in React component with TypeScript and i18n support',
        ru: 'React-компонент «из коробки» с TypeScript и i18n',
      },
    ],
    role: {
      en: 'Package Author & Maintainer',
      ru: 'Автор и maintainer пакета',
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
