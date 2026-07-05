'use client';

import { useEffect, useState } from 'react';
import { HEADER_OFFSET } from '@/lib/scroll-to-section';

export function useScrollSpy(
  sectionIds: readonly string[],
  { offset = HEADER_OFFSET, enabled = true }: { offset?: number; enabled?: boolean } = {}
) {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) return;

    const getActiveSection = () => {
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      return current;
    };

    const onScroll = () => setActiveId(getActiveSection());

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds, offset, enabled]);

  return activeId;
}
