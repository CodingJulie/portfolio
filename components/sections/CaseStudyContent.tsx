'use client';

import Link from 'next/link';
import { ThemeAwareImage } from '@/components/common/ThemeAwareImage';
import { ExternalLink, Github, Package, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getProjectBySlug } from '@/data/projects';
import { t as localize } from '@/lib/utils';
import type { Locale, Project } from '@/types';

export function CaseStudyContent({ project }: { project: Project }) {
  const { t, i18n } = useTranslation();
  const locale = (i18n.language.startsWith('ru') ? 'ru' : 'en') as Locale;

  return (
    <article className="container max-w-4xl py-12 md:py-20">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="size-4" />
          {t('projects.back')}
        </Link>
      </Button>

      <header className="mb-12">
        <Badge className="mb-4">{localize(project.role, locale)}</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {localize(project.title, locale)}
        </h1>
        <p className="mt-2 text-muted-foreground">{project.period}</p>
        <p className="mt-6 text-xl text-muted-foreground">
          {localize(project.description, locale)}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" />
                {t('projects.live_demo')}
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                {t('projects.github')}
              </Link>
            </Button>
          )}
          {project.npmUrl && (
            <Button asChild variant="outline">
              <Link href={project.npmUrl} target="_blank" rel="noopener noreferrer">
                <Package className="size-4" />
                {t('projects.npm')}
              </Link>
            </Button>
          )}
        </div>
      </header>

      {project.images.length > 0 && (
        <div className="mb-12 grid gap-4 md:grid-cols-2">
          {project.images.map((image) => (
            <div
              key={image.en.light}
              className="overflow-hidden rounded-xl border border-border bg-muted"
            >
              <ThemeAwareImage
                sources={image}
                locale={locale}
                alt={localize(image.alt, locale)}
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-none">
        {localize(project.longDescription, locale)
          .split('\n\n')
          .map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="mb-4 text-lg leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">{t('projects.technologies')}</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {project.achievements.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">{t('projects.achievements')}</h2>
          <ul className="space-y-3">
            {project.achievements.map((achievement) => (
              <li
                key={localize(achievement, locale)}
                className="flex gap-3 text-muted-foreground"
              >
                <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                {localize(achievement, locale)}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
