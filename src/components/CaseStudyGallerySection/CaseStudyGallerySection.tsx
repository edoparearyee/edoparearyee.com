'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Button from '../Button/Button';
import Image from '../Image/Image';
import Carousel from '../Carousel/Carousel';
import { ModalContext } from '../ModalProvider/ModalProvider';
import { CaseStudy } from '../../models/caseStudy.model';
import Badge from '../Badge/Badge';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import styles from './CaseStudyGallerySection.module.scss';
import AnimatedElement from '../AnimatedElement/AnimatedElement';

export type CaseStudyGallerySectionProps = {
  id?: string;
  caseStudy: CaseStudy;
};

const CaseStudyGallerySection: React.FC<CaseStudyGallerySectionProps> = ({
  id,
  caseStudy,
}) => {
  const { openModal } = useContext(ModalContext);
  const [imagesKey, setImagesKey] = useState<'imagesDesktop' | 'imagesMobile'>(
    caseStudy.platform === 'Mobile App' ? 'imagesMobile' : 'imagesDesktop',
  );
  const ref = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useIntersectionObserver(ref, {
    threshold: 0,
    root: null,
    rootMargin: '-10%',
  });

  useEffect(() => {
    const key =
      caseStudy.platform === 'Mobile App' ? 'imagesMobile' : 'imagesDesktop';
    setImagesKey(key);
  }, [caseStudy.platform]);

  const openGallery = () => {
    openModal({
      title: '',
      variant: 'image',
      content: (
        <Carousel
          images={caseStudy[imagesKey]}
          video={caseStudy.video}
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
    <div id={id} className={styles['case-study-gallery']} ref={ref}>
      <Container>
        <Row>
          <Col sm={12}>
            <AnimatedElement inView={isIntersecting} variant="up">
              <Button
                appearance="none"
                onClick={openGallery}
                fullWidth
                className={styles['case-study-gallery__cta']}
              >
                <Badge className={styles['case-study-gallery__cta-text']}>
                  View Gallery
                </Badge>
                <Image
                  className={classNames(
                    styles['case-study-gallery__screenshot'],
                    {
                      [styles['case-study-gallery__screenshot-mobile']]:
                        caseStudy.platform === 'Mobile App',
                    },
                  )}
                  imgClassName={styles['case-study-gallery__screenshot-img']}
                  sources={caseStudy[imagesKey][0].image}
                  alt={caseStudy[imagesKey][0].alt}
                />
              </Button>
            </AnimatedElement>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CaseStudyGallerySection;
