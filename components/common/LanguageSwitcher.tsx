'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import type { AppLanguage } from '@/lib/detect-locale';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n, t } = useTranslation();

  const toggle = () => {
    const next: AppLanguage = i18n.language.startsWith('ru') ? 'en' : 'ru';
    void i18n.changeLanguage(next);
    localStorage.setItem('i18nextLng', next);
    document.documentElement.lang = next;
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className={cn('font-mono text-xs', className)}
      aria-label="Switch language"
    >
      {i18n.language.startsWith('ru') ? t('lang.en') : t('lang.ru')}
    </Button>
  );
}
