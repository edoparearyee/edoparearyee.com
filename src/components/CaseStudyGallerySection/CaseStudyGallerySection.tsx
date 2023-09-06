'use client';

import React, { useContext } from 'react';
import classNames from 'classnames';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Button from '../Button/Button';
import Image from '../Image/Image';
import Carousel from '../Carousel/Carousel';
import { ModalContext } from '../ModalProvider/ModalProvider';
import { CaseStudy } from '../../models/caseStudy.model';

import styles from './CaseStudyGallerySection.module.scss';

export type CaseStudyGallerySectionProps = {
  id?: string;
  caseStudy: CaseStudy;
};

const CaseStudyGallerySection: React.FC<CaseStudyGallerySectionProps> = ({
  id,
  caseStudy,
}) => {
  const { openModal } = useContext(ModalContext);

  const openGallery = () => {
    openModal({
      title: '',
      variant: 'image',
      content: (
        <Carousel
          images={
            caseStudy[
              caseStudy.platform === 'Mobile App'
                ? 'imagesMobile'
                : 'imagesDesktop'
            ]
          }
          isMobile={caseStudy.platform === 'Mobile App'}
          autoPlay={false}
          transition="slide"
          controls
          fullScreen
          controlsPosition="fixed"
          className={styles['case-study-gallery__carousel']}
        />
      ),
    });
  };

  return (
    <div id={id} className={styles['case-study-gallery']}>
      <Container>
        <Row>
          <Col>
            <Type
              renderAs="h2"
              appearance="h4"
              className={styles['case-study-gallery__information-title']}
            >
              Click To View Gallery
            </Type>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div
              className={classNames({
                [styles['case-study-gallery__screenshot-mobile']]:
                  caseStudy.platform === 'Mobile App',
              })}
            >
              <Button appearance="none" onClick={openGallery} fullWidth>
                <Image
                  className={classNames(
                    styles['case-study-gallery__screenshot'],
                    {
                      [styles['case-study-gallery__screenshot-mobile']]:
                        caseStudy.platform === 'Mobile App',
                    },
                  )}
                  sources={
                    caseStudy[
                      caseStudy.platform === 'Mobile App'
                        ? 'imagesMobile'
                        : 'imagesDesktop'
                    ][0].image
                  }
                  alt={
                    caseStudy[
                      caseStudy.platform === 'Mobile App'
                        ? 'imagesMobile'
                        : 'imagesDesktop'
                    ][0].alt
                  }
                />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CaseStudyGallerySection;
