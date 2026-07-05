export type Locale = 'en' | 'ru';

export interface LocalizedString {
  en: string;
  ru: string;
}

export interface ThemeImagePair {
  light: string;
  dark: string;
}

export interface ProjectImage {
  en: ThemeImagePair;
  ru: ThemeImagePair;
  alt: LocalizedString;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  featured: boolean;
  showcase?: boolean;
  comingSoon?: boolean;
  accent?: 'emerald' | 'blue' | 'rose';
  title: LocalizedString;
  description: LocalizedString;
  longDescription: LocalizedString;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  npmUrl?: string;
  images: ProjectImage[];
  achievements: LocalizedString[];
  role: LocalizedString;
  period: string;
}

export interface ExperienceItem {
  id: string;
  company: LocalizedString;
  role: LocalizedString;
  period: string;
  location: LocalizedString;
  description: LocalizedString;
  achievements: LocalizedString[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  title: LocalizedString;
  skills: string[];
}

export interface EducationItem {
  degree: LocalizedString;
  institution: LocalizedString;
  period: string;
  description: LocalizedString;
}

export interface SiteLinks {
  github: string;
  linkedin: string;
  email: string;
  ecotrackr: string;
  visaGuide: string;
  lockbox: string;
  co2CalculatorGithub: string;
  co2CalculatorNpm: string;
}
