'use client';

import { usePathname } from 'next/navigation';

export default function LastUpdated() {
  const pathname = usePathname();
  if (!pathname || pathname === '/') return null;

  return (
    <p className="last-updated">Last updated · September 18, 2026</p>
  );
}
