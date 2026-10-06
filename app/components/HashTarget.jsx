'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Client-side navigation doesn't update :target, so mirror it with a class.
export default function HashTarget() {
  const pathname = usePathname();

  useEffect(() => {
    const mark = () => {
      document
        .querySelectorAll('.is-targeted')
        .forEach((el) => el.classList.remove('is-targeted'));
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) document.getElementById(id)?.classList.add('is-targeted');
    };
    mark();
    window.addEventListener('hashchange', mark);
    return () => window.removeEventListener('hashchange', mark);
  }, [pathname]);

  return null;
}
