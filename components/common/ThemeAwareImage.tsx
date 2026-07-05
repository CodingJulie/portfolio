'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import type { Locale, ProjectImage } from '@/types';

interface ThemeAwareImageProps {
  sources: Pick<ProjectImage, 'en' | 'ru'>;
  locale: Locale;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  width: number;
  height: number;
}

export function ThemeAwareImage({
  sources,
  locale,
  alt,
  className,
  fill = false,
  sizes,
  priority,
  width,
  height,
}: ThemeAwareImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const theme = mounted && resolvedTheme === 'dark' ? 'dark' : 'light';
  const src = sources[locale][theme];

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={cn(fill ? className : cn('h-auto w-full', className))}
    />
  );
}
