import { describe, expect, it } from 'vitest';
import { themeInitScript } from './initial-preferences-scripts';

describe('themeInitScript', () => {
  it('reads theme from localStorage or prefers-color-scheme', () => {
    expect(themeInitScript).toContain("localStorage.getItem('theme')");
    expect(themeInitScript).toContain("matchMedia('(prefers-color-scheme: dark)')");
    expect(themeInitScript).toContain("root.classList.add('dark')");
  });
});
