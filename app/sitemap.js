export default function sitemap() {
  const base = 'https://pixelnest.studio';

  return ['', '/services', '/portfolio', '/about', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8
  }));
}
