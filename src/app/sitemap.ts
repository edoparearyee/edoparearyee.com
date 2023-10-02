import { MetadataRoute } from 'next';
import { getCaseStudies } from '@/services/contentful';

export default async function sitemap() {
  const limit = 12;
  const baseUrl = 'https://edoparearyee.com';
  let { items: caseStudies, total } = await getCaseStudies({ limit });

  do {
    const { items } = await getCaseStudies({
      limit,
      skip: caseStudies.length,
    });
    caseStudies = [...caseStudies, ...items];
  } while (caseStudies.length < total);

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...caseStudies.map(({ slug }) => ({
      url: `${baseUrl}/work/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ] as unknown as MetadataRoute.Sitemap;
}
