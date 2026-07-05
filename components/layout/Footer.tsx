'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { siteConfig, siteLinks } from '@/lib/site';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-border bg-muted/30">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t('footer.built_with')}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            © {year} {siteConfig.name}. {t('footer.rights')}.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={siteLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </Link>
          <Link
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </Link>
          <Link
            href={siteLinks.email}
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
