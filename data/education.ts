import type { EducationItem } from '@/types';

export const education: EducationItem[] = [
  {
    degree: {
      en: "Master's Degree — Instrumentation Engineering",
      ru: 'Магистр — Приборостроение',
    },
    institution: {
      en: 'Technical University',
      ru: 'Технический университет',
    },
    period: '2017 — 2019',
    description: {
      en: 'Specialized in precision measurement systems, sensor data acquisition, and automated control systems.',
      ru: 'Специализация: системы точных измерений, сбор данных с датчиков, автоматизированные системы управления.',
    },
  },
  {
    degree: {
      en: "Bachelor's Degree — Information Technology",
      ru: 'Бакалавр — Информационные технологии',
    },
    institution: {
      en: 'Technical University',
      ru: 'Технический университет',
    },
    period: '2013 — 2017',
    description: {
      en: 'Foundation in software engineering, algorithms, databases, and computer networks. Combined IT coursework with instrumentation lab work.',
      ru: 'Основы программной инженерии, алгоритмы, базы данных, компьютерные сети. Совмещала IT-дисциплины с лабораторными работами по приборостроению.',
    },
  },
];
