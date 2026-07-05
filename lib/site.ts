import type { SiteLinks } from '@/types';

const DEFAULT_SITE_URL = 'https://julia-trifonova.dev';

/** Safe site URL for metadata — never throws during build */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;

  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return DEFAULT_SITE_URL;
    }
    if (
      process.env.NODE_ENV === 'production' &&
      (parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1')
    ) {
      return DEFAULT_SITE_URL;
    }
    return parsed.href.replace(/\/$/, '');
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteLinks: SiteLinks = {
  github: 'https://github.com/CodingJulie',
  linkedin: 'https://www.linkedin.com/in/julia-trifonova',
  email: 'mailto:julie_sakura@proton.me',
  ecotrackr: 'https://ecotrackr-beta.vercel.app/',
  visaGuide: 'https://visa-guide-liard.vercel.app/',
  lockbox: 'https://lockbox-sigma.vercel.app/',
  co2CalculatorGithub: 'https://github.com/CodingJulie/co2-calculator',
  co2CalculatorNpm: 'https://www.npmjs.com/package/@ecotrackr/co2-calculator',
};

export const siteConfig = {
  name: 'Julie',
  get url() {
    return getSiteUrl();
  },
  ogImage: '/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
};
