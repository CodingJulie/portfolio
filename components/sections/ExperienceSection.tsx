'use client';

import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { experience } from '@/data/experience';
import { t as localize } from '@/lib/utils';
import type { Locale } from '@/types';

export function ExperienceSection({ limit }: { limit?: number }) {
  const { t, i18n } = useTranslation();
  const locale = (i18n.language.startsWith('ru') ? 'ru' : 'en') as Locale;
  const items = limit ? experience.slice(0, limit) : experience;

  return (
    <AnimatedSection id="experience" className="section-padding">
      <div className="container">
        <SectionHeading
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent md:before:ml-[8.5rem]">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col gap-4 md:flex-row md:gap-10"
            >
              <div className="flex items-center gap-4 md:w-32 md:flex-col md:items-end md:pt-1">
                <div className="absolute left-5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-[8.5rem]" />
                <time className="ml-10 whitespace-nowrap text-sm font-mono text-muted-foreground md:ml-0">
                  {item.period}
                </time>
              </div>

              <Card className="flex-1 transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {localize(item.role, locale)}
                  </CardTitle>
                  <p className="font-medium text-primary">
                    {localize(item.company, locale)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {localize(item.location, locale)}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {localize(item.description, locale)}
                  </p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement) => (
                      <li
                        key={localize(achievement, locale)}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {localize(achievement, locale)}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="muted">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
