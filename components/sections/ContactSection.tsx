'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { siteLinks } from '@/lib/site';

export function ContactSection() {
  const { t } = useTranslation();

  const links = [
    {
      icon: Mail,
      label: t('contact.email'),
      href: siteLinks.email,
      text: 'julie_sakura@proton.me',
    },
    {
      icon: Github,
      label: t('contact.github'),
      href: siteLinks.github,
      text: 'github.com/CodingJulie',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      href: siteLinks.linkedin,
      text: 'LinkedIn Profile',
    },
  ];

  return (
    <AnimatedSection id="contact" className="section-padding">
      <div className="container">
        <SectionHeading
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {links.map(({ icon: Icon, label, href, text }) => (
            <Card key={label} className="transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold">{label}</h3>
                <Link
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {text}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          {t('contact.form_note')}
        </p>

        <div className="mt-6 flex justify-center">
          <Button asChild size="lg">
            <Link href={siteLinks.email}>{t('hero.cta_contact')}</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
