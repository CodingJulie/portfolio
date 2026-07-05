'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { useEffect, useState, type MouseEvent } from 'react';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/scroll-to-section';
import { useScrollSpy } from '@/lib/use-scroll-spy';

const sectionIds = [
  'home',
  'experience',
  'showcase',
  'skills',
  'education',
  'contact',
] as const;

const navItems = [
  { href: '/#home', key: 'home', sectionId: 'home' },
  { href: '/#experience', key: 'experience', sectionId: 'experience', pagePath: '/experience' },
  { href: '/#showcase', key: 'projects', sectionId: 'showcase', pagePath: '/projects' },
  { href: '/#skills', key: 'skills', sectionId: 'skills' },
  { href: '/#education', key: 'education', sectionId: 'education' },
  { href: '/#contact', key: 'contact', sectionId: 'contact', pagePath: '/contact' },
] as const;

function isNavItemActive(
  item: (typeof navItems)[number],
  pathname: string,
  activeSection: string | null
) {
  if (pathname === '/') {
    return activeSection === item.sectionId;
  }

  if ('pagePath' in item && item.pagePath === pathname) {
    return true;
  }

  return false;
}

function handleSectionNavClick(
  event: MouseEvent<HTMLAnchorElement>,
  item: (typeof navItems)[number],
  pathname: string,
  onNavigate?: () => void
) {
  if (pathname !== '/') return;

  event.preventDefault();
  scrollToSection(item.sectionId);
  window.history.replaceState(null, '', item.href);
  onNavigate?.();
}

export function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds, { enabled: pathname === '/' });

  useEffect(() => {
    if (pathname !== '/') return;

    const hash = window.location.hash.replace('#', '');
    if (!sectionIds.includes(hash as (typeof sectionIds)[number])) return;

    const timer = window.setTimeout(() => scrollToSection(hash), 100);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <header className="no-print sticky top-0 z-50 glass">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight print-hide-link"
        >
          JT<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleSectionNavClick(event, item, pathname)}
              className={cn(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                isNavItemActive(item, pathname, activeSection)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) =>
                  handleSectionNavClick(event, item, pathname, () => setOpen(false))
                }
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium',
                  isNavItemActive(item, pathname, activeSection)
                    ? 'bg-accent text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
