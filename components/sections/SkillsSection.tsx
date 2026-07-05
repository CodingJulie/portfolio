'use client';

import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { skills } from '@/data/skills';
import { t as localize } from '@/lib/utils';
import type { Locale } from '@/types';

export function SkillsSection() {
  const { t, i18n } = useTranslation();
  const locale = (i18n.language.startsWith('ru') ? 'ru' : 'en') as Locale;

  return (
    <AnimatedSection id="skills" className="section-padding">
      <div className="container">
        <SectionHeading
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-4 font-semibold text-primary">
                {localize(category.title, locale)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
