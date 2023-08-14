'use client';

import { useState } from 'react';
import classNames from 'classnames';

import Container from '@/components/Grid/Container';
import Row from '@/components/Grid/Row';
import Col from '@/components/Grid/Col';
import Type from '@/components/Type/Type';
import Section from '@/components/Section/Section';
import Image from '@/components/Image/Image';
import Devices from '@/components/Devices/Devices';
import Button from '@/components/Button/Button';
import { CaseStudy } from '@/models/case-study.model';

import styles from './page.module.scss';

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
  description:
    'Ad Lorem ullamco quis magna quis anim reprehenderit exercitation pariatur laborum enim officia. Proident labore et nostrud id exercitation ullamco ex eu ad quis deserunt. Sit incididunt id nostrud adipisicing labore ex proident exercitation aliquip. Magna duis mollit consequat exercitation tempor exercitation tempor commodo amet duis laborum commodo.',
  clientName: 'Nike',
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
  role: 'Technical Lead',
  tags: ['React', 'TypeScript'],
  contributors: ['John Smith', 'Dan Owens', 'Sarah Richards'],
  year: '2022',
  awards: [
    {
      title: "People's Voice Winner",
      url: 'https://winners.webbyawards.com/2015/websites-and-mobile-sites/general-websites-and-mobile-sites/associations/159821/doit',
      year: '2015',
    },
    {
      title: "People's Voice Winner",
      url: 'https://winners.webbyawards.com/2015/websites-and-mobile-sites/general-websites-and-mobile-sites/associations/159821/doit',
      year: '2015',
    },
  ],
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
          <Container>
            <Row>
              <Col sm={12} md={9} lg={6}>
                <Type appearance="h1" renderAs="h1">
                  {caseStudy.title}
                </Type>
                <Type>{caseStudy.description}</Type>
              </Col>
            </Row>
          </Container>
        </div>
      </Section>
      <Section className={styles['work-detail__information']}>
        <Container>
          <Row>
            <Col sm={12} xl={10} offset={{ xl: 1 }}>
              <div className={styles['work-detail__devices']}>
                <Devices
                  assetType="image"
                  imagesDesktop={caseStudy.imagesDesktop}
                  imagesMobile={caseStudy.imagesMobile}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Type renderAs="h2" appearance="h2">
                Role
              </Type>
              <Type className={styles['work-detail__detail']}>
                {caseStudy.role}
              </Type>

              <Type renderAs="h2" appearance="h2">
                Awards
              </Type>
              <ul
                className={classNames(
                  styles['work-detail__awards-list'],
                  styles['work-detail__detail'],
                )}
              >
                {caseStudy.awards?.map((award) => (
                  <li
                    key={award.title}
                    className={styles['work-detail__awards-list-item']}
                  >
                    <Button appearance="link" renderAs="a" href={award.url}>
                      {award.title}
                    </Button>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={6}>
              <Type renderAs="h2" appearance="h2">
                Year
              </Type>
              <Type className={styles['work-detail__detail']}>
                {caseStudy.year}
              </Type>
              <Type renderAs="h2" appearance="h2">
                Other contributors
              </Type>
              <Type className={styles['work-detail__detail']}>
                {caseStudy.contributors?.join(', ')}
              </Type>
            </Col>
          </Row>
        </Container>
      </Section>
    </main>
  );
};

export default WorkDetail;
