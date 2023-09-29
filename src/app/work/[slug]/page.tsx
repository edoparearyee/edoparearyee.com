import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { getCaseStudy } from '@/services/contentful';
import CaseStudyInformationSection from '@/components/CaseStudyInformationSection/CaseStudyInformationSection';
import CaseStudyGallerySection from '@/components/CaseStudyGallerySection/CaseStudyGallerySection';
import CaseStudyHeroSection from '@/components/CaseStudyHeroSection/CaseStudyHeroSection';
import { metadata } from '@/app/layout';

import styles from './page.module.scss';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getData = async (slug: string) => {
  return getCaseStudy(slug);
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = await getData(params.slug);
  const title = `${caseStudy?.title} | Work | Ed Opare-Aryee`;
  const description = caseStudy?.description.split('\n\n')[0];
  const images = caseStudy ? [caseStudy.hero.image[0]['1x']] : [];
  const url = `https://edoparearyee.com/work/${caseStudy?.slug}`;

  return {
    title,
    description,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      title,
      description,
      url,
      images,
    },
    twitter: {
      ...metadata.twitter,
      title,
      description,
      images,
    },
  };
}

const WorkDetail = async ({ params }: Props) => {
  const caseStudy = await getData(params.slug);

  if (!caseStudy) {
    return notFound();
  }

  return (
    <main className={styles['work-detail']}>
      <CaseStudyHeroSection caseStudy={caseStudy} />
      <CaseStudyInformationSection caseStudy={caseStudy} />
      <CaseStudyGallerySection caseStudy={caseStudy} />
    </main>
  );
};

export default WorkDetail;
