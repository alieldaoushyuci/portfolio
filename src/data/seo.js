export const SITE_URL = 'https://alieldaoushy.com';

export function pageMetadata(title, description, path) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Ali Eldaoushy`,
      description,
      url: path,
      siteName: 'Ali Eldaoushy',
      type: 'website',
    },
  };
}
