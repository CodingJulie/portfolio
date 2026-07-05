import type { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    id: 'fintech-outsourcing',
    company: {
      en: 'Outsourcing Fintech (NDA)',
      ru: 'Аутсорсинг, fintech (NDA)',
    },
    role: {
      en: 'Middle Frontend Engineer',
      ru: 'Middle Frontend Engineer',
    },
    period: '2023 — Present',
    location: {
      en: 'Remote',
      ru: 'Remote',
    },
    description: {
      en: 'Frontend development for banking and stock exchange products. Pixel-accurate UI from approved design mockups, backend integration, real-time market data, and microfrontend architecture.',
      ru: 'Разработка frontend для банковских и биржевых продуктов. Точная вёрстка по макетам, интеграция с backend, real-time рыночные данные и микрофронтенд-архитектура.',
    },
    achievements: [
      {
        en: 'Built complex forms for banking and exchange workflows',
        ru: 'Реализовала сложные формы для банковских и биржевых сценариев',
      },
      {
        en: 'Integrated backends via REST API and streamed real-time market data over WebSocket',
        ru: 'Интегрировала backend через REST API и real-time рыночные данные через WebSocket',
      },
      {
        en: 'Built electronic signing flows for banking documents',
        ru: 'Реализовала электронное подписание банковских документов',
      },
      {
        en: 'Developed microfrontend modules with Module Federation 5 and global state with Redux',
        ru: 'Разрабатывала микрофронтенды на Module Federation 5 и глобальный state на Redux',
      },
      {
        en: 'Added Vitest unit tests and Playwright e2e coverage',
        ru: 'Покрыла код unit-тестами Vitest и e2e-тестами Playwright',
      },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Module Federation 5',
      'REST API',
      'WebSocket',
      'Vitest',
      'Playwright',
    ],
  },
  {
    id: 'open-source-side-projects',
    company: {
      en: 'Open Source — Side Projects',
      ru: 'Open Source — Side Projects',
    },
    role: {
      en: 'Creator & Maintainer',
      ru: 'Автор и maintainer',
    },
    period: '2025 — Present',
    location: {
      en: 'Personal Projects',
      ru: 'Личные проекты',
    },
    description: {
      en: 'Building EcoTrackr, VisaGuide, Lockbox, and @ecotrackr/co2-calculator — full-stack open-source products from climate tech and social impact to immigration tools.',
      ru: 'Разрабатываю EcoTrackr, VisaGuide, Lockbox и @ecotrackr/co2-calculator — full-stack open-source продукты от climate tech и social impact до иммиграционных инструментов.',
    },
    achievements: [
      {
        en: 'Optimized initial load with code splitting and dynamic imports across side projects',
        ru: 'Оптимизировала первую загрузку через code splitting и dynamic imports в side-проектах',
      },
      {
        en: 'Published tree-shakeable @ecotrackr/co2-calculator npm package',
        ru: 'Опубликовала tree-shakeable npm-пакет @ecotrackr/co2-calculator',
      },
      {
        en: 'Shipped Gemini AI server-side routes with graceful fallback in EcoTrackr',
        ru: 'Реализовала server-side Gemini AI routes с graceful fallback в EcoTrackr',
      },
      {
        en: 'Built analytics dashboards with charts, heatmaps, and progress UI',
        ru: 'Создала аналитические дашборды с графиками, heatmap и progress UI',
      },
      {
        en: 'Designed multi-step form UX with Zod-validated questionnaires in VisaGuide',
        ru: 'Спроектировала multi-step form UX с валидируемыми опросниками на Zod в VisaGuide',
      },
    ],
    technologies: [
      'Next.js 15',
      'Supabase',
      'Gemini AI',
      'PWA',
      'Web Workers',
      'Zod',
    ],
  },
];
