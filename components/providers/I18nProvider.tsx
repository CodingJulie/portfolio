'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import { resolveInitialLanguage } from '@/lib/detect-locale';

function ensureSsrLanguage() {
  if (typeof window === 'undefined' || i18n.resolvedLanguage === 'en') {
    return;
  }

  i18n.changeLanguage('en');
}

ensureSsrLanguage();

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let cancelled = false;

    void resolveInitialLanguage().then((lang) => {
      if (!cancelled && i18n.language !== lang) {
        void i18n.changeLanguage(lang);
      }
      if (!cancelled) {
        document.documentElement.lang = lang;
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
