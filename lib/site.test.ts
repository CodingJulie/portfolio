import { describe, expect, it, vi, afterEach } from 'vitest';
import { getSiteUrl } from './site';

describe('getSiteUrl', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('returns default URL when env is missing', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', '');
    expect(getSiteUrl()).toBe('https://julia-trifonova.dev');
  });

  it('returns env URL without trailing slash', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://portfolio.example.com/');
    expect(getSiteUrl()).toBe('https://portfolio.example.com');
  });

  it('falls back for invalid URL', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'not-a-url');
    expect(getSiteUrl()).toBe('https://julia-trifonova.dev');
  });

  it('ignores localhost URL in production builds', () => {
    vi.stubEnv('NODE_ENV', 'production');
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'http://localhost:3000');
    expect(getSiteUrl()).toBe('https://julia-trifonova.dev');
  });
});
