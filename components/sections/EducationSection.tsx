'use client';

import { GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { education } from '@/data/education';
import { t as localize } from '@/lib/utils';
import type { Locale } from '@/types';

export function EducationSection() {
  const { t, i18n } = useTranslation();
  const locale = (i18n.language.startsWith('ru') ? 'ru' : 'en') as Locale;

  return (
    <AnimatedSection id="education" className="section-padding bg-muted/30 print-break">
      <div className="container">
        <SectionHeading title={t('education.title')} />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <Card key={localize(item.degree, locale)}>
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <GraduationCap className="size-6 text-primary" />
                </div>
                <div>
                  <CardTitle>{localize(item.degree, locale)}</CardTitle>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {localize(item.institution, locale)}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {localize(item.description, locale)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
