'use client';

import React from 'react';

import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Image from '../Image/Image';
import Type from '../Type/Type';
import { CaseStudy } from '../../models/caseStudy.model';

import styles from './CaseStudyHeroSection.module.scss';

export type CaseStudyHeroSectionProps = {
  id?: string;
  caseStudy: CaseStudy;
};

const CaseStudyHeroSection: React.FC<CaseStudyHeroSectionProps> = ({
  id,
  caseStudy,
}) => {
  return (
    <div id={id} className={styles['case-study-hero']}>
      <Image
        className={styles['case-study-hero__hero-image']}
        imgClassName={styles['case-study-hero__hero-image-img']}
        sources={caseStudy.hero.image}
        alt={caseStudy.hero.alt}
      />
      <div className={styles['case-study-hero__hero-content']}>
        <Container>
          <Row>
            <Col sm={12} md={9} lg={9} xl={8}>
              <Type appearance="h1" renderAs="h1">
                {caseStudy.title}
              </Type>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CaseStudyHeroSection;
