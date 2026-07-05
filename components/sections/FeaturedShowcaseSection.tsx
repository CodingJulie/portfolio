'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ThemeAwareImage } from '@/components/common/ThemeAwareImage';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { t as localize } from '@/lib/utils';
import type { Locale, Project } from '@/types';
import { cn } from '@/lib/utils';

const accentStyles = {
  emerald: {
    ring: 'group-hover:ring-emerald-500/40',
    badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  },
  blue: {
    ring: 'group-hover:ring-blue-500/40',
    badge: 'border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300',
  },
  rose: {
    ring: 'group-hover:ring-rose-500/40',
    badge: 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300',
  },
} as const;

function ShowcaseCard({ project, locale, index }: { project: Project; locale: Locale; index: number }) {
  const { t } = useTranslation();
  const image = project.images[0];
  const accent = project.accent ?? 'emerald';
  const styles = accentStyles[accent];
  const primaryHref = project.liveUrl ?? `/projects/${project.slug}`;
  const isExternal = Boolean(project.liveUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex h-full flex-col"
    >
      <div
        className={cn(
          'flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm ring-1 ring-transparent transition-all duration-300',
          'hover:-translate-y-0.5 hover:shadow-lg',
          styles.ring,
        )}
      >
        <Link
          href={primaryHref}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="relative block shrink-0 overflow-hidden"
        >
          <div className="relative overflow-hidden bg-muted">
            {image ? (
              <ThemeAwareImage
                sources={image}
                locale={locale}
                alt={localize(image.alt, locale)}
                width={image.width}
                height={image.height}
                className="transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                priority={index < 2}
              />
            ) : (
              <div className="flex h-40 items-center justify-center bg-muted/50">
                <Package className="size-8 text-muted-foreground/50" />
              </div>
            )}
            <div className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full border border-border/60 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <ArrowUpRight className="size-3.5 text-primary" />
            </div>
          </div>
        </Link>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="space-y-1.5">
            <div className="flex items-start justify-between gap-2">
              <Badge variant="outline" className={cn('text-[10px] font-medium', styles.badge)}>
                {localize(project.role, locale)}
              </Badge>
              <span className="shrink-0 text-[11px] text-muted-foreground">{project.period}</span>
            </div>
            <h3 className="text-sm font-bold leading-snug tracking-tight md:text-base">
              <Link
                href={primaryHref}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="transition-colors hover:text-primary"
              >
                {localize(project.title, locale)}
              </Link>
            </h3>
          </div>

          <p className="line-clamp-3 flex-1 text-xs leading-relaxed text-muted-foreground">
            {localize(project.description, locale)}
          </p>

          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="muted" className="px-1.5 py-0 text-[10px]">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.liveUrl && (
              <Button asChild variant="default" size="sm" className="h-7 px-2 text-xs">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="size-3" />
                  {t('projects.live_demo')}
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="sm" className="h-7 px-2 text-xs">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="size-3" />
                  {t('projects.github')}
                </Link>
              </Button>
            )}
            {project.npmUrl && (
              <Button asChild variant="outline" size="sm" className="h-7 px-2 text-xs">
                <Link href={project.npmUrl} target="_blank" rel="noopener noreferrer">
                  <Package className="size-3" />
                  {t('projects.npm')}
                </Link>
              </Button>
            )}
            <Button asChild variant="ghost" size="sm" className="h-7 px-2 text-xs">
              <Link href={`/projects/${project.slug}`}>{t('projects.case_study')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedShowcaseSection() {
  const { t, i18n } = useTranslation();
  const locale = (i18n.language.startsWith('ru') ? 'ru' : 'en') as Locale;

  return (
    <AnimatedSection id="showcase" className="section-padding">
      <div className="container">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t('showcase.eyebrow')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t('showcase.title')}
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">{t('showcase.subtitle')}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ShowcaseCard key={project.slug} project={project} locale={locale} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
