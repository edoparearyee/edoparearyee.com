'use client';

import { useState } from 'react';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';

import gridConfig from '@/components/GridContainer/gridConfig';
import GridContainer from '@/components/GridContainer/GridContainer';
import Type from '@/components/Type/Type';
import Section from '@/components/Section/Section';
import { CaseStudy } from '@/models/case-study.model';

import styles from './page.module.scss';
import Image from '@/components/Image/Image';
import Devices from '@/components/Devices/Devices';

setConfiguration(gridConfig);

const caseStudyData: CaseStudy = {
  slug: '1',
  imagesDesktop: [
    {
      image: [
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/900/912/590',
          '2x': 'https://picsum.photos/id/900/1824/1180',
        },
      ],
      alt: '',
    },
    {
      image: [
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/522/912/590',
          '2x': 'https://picsum.photos/id/522/1824/1180',
        },
      ],
      alt: '',
    },
    {
      image: [
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/905/912/590',
          '2x': 'https://picsum.photos/id/905/1824/1180',
        },
      ],
      alt: '',
    },
  ],
  title: 'Minim duis duis do est minim.',
  blurb:
    'Ad Lorem ullamco quis magna quis anim reprehenderit exercitation pariatur laborum enim officia. Proident labore et nostrud id exercitation ullamco ex eu ad quis deserunt. Sit incididunt id nostrud adipisicing labore ex proident exercitation aliquip. Magna duis mollit consequat exercitation tempor exercitation tempor commodo amet duis laborum commodo.',
  imagesMobile: [
    {
      image: [
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/900/365/780',
          '2x': 'https://picsum.photos/id/900/730/1560',
        },
      ],
      alt: '',
    },
    {
      image: [
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/522/365/780',
          '2x': 'https://picsum.photos/id/522/730/1560',
        },
      ],
      alt: '',
    },
    {
      image: [
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/905/365/780',
          '2x': 'https://picsum.photos/id/905/730/1560',
        },
      ],
      alt: '',
    },
  ],
  tags: ['React', 'TypeScript'],
};

const WorkDetail = () => {
  const [caseStudy, setCaseStudy] = useState<CaseStudy>(caseStudyData);

  return (
    <main className={styles['work-detail']}>
      <Section className={styles['work-detail__intro-section']}>
        <Image
          className={styles['work-detail__hero-image']}
          imgClassName={styles['work-detail__hero-image-img']}
          sources={[caseStudy.imagesDesktop[0].image[0]]}
          alt=""
        />
        <div className={styles['work-detail__hero-content']}>
          <GridContainer>
            <Container fluid>
              <Row>
                <Col sm={12} md={9} lg={6}>
                  <Type appearance="h1" renderAs="h1">
                    {caseStudy.title}
                  </Type>
                  <Type>{caseStudy.blurb}</Type>
                </Col>
              </Row>
            </Container>
          </GridContainer>
        </div>
      </Section>
      <Section>
        <GridContainer>
          <Container fluid>
            <Row>
              <Col sm={12} lg={12}>
                <div className={styles['work-detail__devices']}>
                  <Devices
                    assetType="image"
                    imagesDesktop={caseStudy.imagesDesktop}
                    imagesMobile={caseStudy.imagesMobile}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </GridContainer>
      </Section>
    </main>
  );
};

export default WorkDetail;
