import { SITE_URL } from '../src/data/seo';
import { PAGE_UPDATES } from '../src/data/page-updates';

export const dynamic = 'force-static';

export default function sitemap() {
  return Object.entries(PAGE_UPDATES).map(([path, lastModified]) => ({
    url: `${SITE_URL}${path === '/' ? '/' : path}`,
    lastModified,
  }));
}
