import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { getCaseStudy } from '@/services/contentful';

import styles from './page.module.scss';
import CaseStudyInformationSection from '@/components/CaseStudyInformationSection/CaseStudyInformationSection';
import CaseStudyGallerySection from '@/components/CaseStudyGallerySection/CaseStudyGallerySection';
import CaseStudyHeroSection from '@/components/CaseStudyHeroSection/CaseStudyHeroSection';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getData = async (slug: string) => {
  return getCaseStudy(slug);
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = await getData(params.slug);

  return {
    title: `${caseStudy?.title} | Ed Opare-Aryee`,
    description: caseStudy?.description,
    twitter: {
      images: caseStudy ? [caseStudy.hero.image[0]['1x']] : [],
    },
    openGraph: {
      images: caseStudy ? [caseStudy.hero.image[0]['1x']] : [],
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
