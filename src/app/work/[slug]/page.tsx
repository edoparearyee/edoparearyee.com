'use client';

import { useState } from 'react';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';

import gridConfig from '@/components/GridContainer/gridConfig';
import GridContainer from '@/components/GridContainer/GridContainer';
import Type from '@/components/Type/Type';
import { CaseStudy } from '@/models/case-study.model';

import styles from './page.module.scss';

setConfiguration(gridConfig);

const caseStudyData: CaseStudy = {
  slug: '1',
  imagesDesktop: [
    {
      image: [
        {
          breakpoint: 1024,
          '1x': 'https://picsum.photos/id/905/600/450',
          '2x': 'https://picsum.photos/id/905/1200/900',
        },
        {
          breakpoint: 768,
          '1x': 'https://picsum.photos/id/905/400/350',
          '2x': 'https://picsum.photos/id/905/800/700',
        },
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/905/300/450',
          '2x': 'https://picsum.photos/id/905/600/900',
        },
      ],
      alt: 'Non sunt ad enim enim culpa.',
    },
  ],
  title: 'Minim duis duis do est minim.',
  blurb:
    'Labore est qui est non veniam irure culpa nulla ullamco incididunt Lorem sit.',
  imagesMobile: [
    {
      image: [
        {
          breakpoint: 1024,
          '1x': 'https://picsum.photos/id/905/600/450',
          '2x': 'https://picsum.photos/id/905/1200/900',
        },
        {
          breakpoint: 768,
          '1x': 'https://picsum.photos/id/905/400/350',
          '2x': 'https://picsum.photos/id/905/800/700',
        },
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/905/300/450',
          '2x': 'https://picsum.photos/id/905/600/900',
        },
      ],
      alt: 'Non sunt ad enim enim culpa.',
    },
  ],
  tags: ['React', 'TypeScript'],
};

const WorkDetail = () => {
  const [caseStudy, setCaseStudy] = useState<CaseStudy>(caseStudyData);

  return (
    <main className={styles.main}>
      <GridContainer>
        <Container fluid>
          <Row>
            <Col>
              <Type appearance="h1" renderAs="h1">
                {caseStudy.title}
              </Type>
            </Col>
          </Row>
        </Container>
      </GridContainer>
    </main>
  );
};

export default WorkDetail;
