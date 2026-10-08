'use client';

import { usePathname } from 'next/navigation';
import { PAGE_UPDATES } from '@/data/page-updates';

export default function LastUpdated() {
  const pathname = usePathname();
  const route = pathname?.replace(/^\/portfolio(?=\/|$)/, '').replace(/\/$/, '') || '/';
  const date = PAGE_UPDATES[route];
  if (!date) return null;
  const label = new Intl.DateTimeFormat('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`));

  return (
    <p className="last-updated">Last updated · <time dateTime={date}>{label}</time></p>
  );
}
