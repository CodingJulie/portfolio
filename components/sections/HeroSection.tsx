'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { siteLinks } from '@/lib/site';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative flex min-h-[85vh] scroll-mt-0 items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-2 text-lg text-muted-foreground">{t('hero.greeting')}</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            {t('hero.name')}
          </h1>
          <p className="mt-4 text-xl font-medium text-gradient md:text-2xl">
            {t('hero.title')} | {t('hero.subtitle')}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t('hero.summary')}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#showcase">{t('hero.cta_projects')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/resume.html" target="_blank" rel="noopener noreferrer">
                <Download className="size-4" />
                {t('hero.cta_cv')}
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/contact">{t('hero.cta_contact')}</Link>
            </Button>
          </div>

          <div className="mt-8 flex gap-4">
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 no-print"
        >
          <ArrowDown className="size-5 animate-bounce text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
