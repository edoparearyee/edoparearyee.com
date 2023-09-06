import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import Container from '@/components/Grid/Container';
import Row from '@/components/Grid/Row';
import Col from '@/components/Grid/Col';
import Type from '@/components/Type/Type';
import Image from '@/components/Image/Image';
import Video from '@/components/Video/Video';
import { getCaseStudy } from '@/services/contentful';

import styles from './page.module.scss';
import CaseStudyInformationSection from '@/components/CaseStudyInformationSection/CaseStudyInformationSection';
import CaseStudyGallerySection from '@/components/CaseStudyGallerySection/CaseStudyGallerySection';

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
      <div className={styles['work-detail__intro-section']}>
        <Image
          className={styles['work-detail__hero-image']}
          imgClassName={styles['work-detail__hero-image-img']}
          sources={caseStudy.hero.image}
          alt={caseStudy.hero.alt}
        />
        <div className={styles['work-detail__hero-content']}>
          <Container>
            <Row>
              <Col sm={12} md={9} lg={8}>
                <Type appearance="h1" renderAs="h1">
                  {caseStudy.title}
                </Type>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <CaseStudyInformationSection caseStudy={caseStudy} />
      <CaseStudyGallerySection caseStudy={caseStudy} />
      {caseStudy.video ? (
        <Container>
          <Row>
            <Col>
              <Type
                renderAs="h2"
                appearance="h4"
                className={styles['work-detail__information-title']}
              >
                Demo
              </Type>
            </Col>
          </Row>
          <Row>
            <Col>
              <Video
                className={styles['work-detail__video']}
                src={caseStudy.video?.url}
                poster={caseStudy.video?.poster.image[0]['2x']}
                controls
                playsInline
              />
            </Col>
          </Row>
        </Container>
      ) : null}
    </main>
  );
};

export default WorkDetail;
