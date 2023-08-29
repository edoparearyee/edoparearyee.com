import React from 'react';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Section from '../Section/Section';
import Devices from '../Devices/Devices';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import {
  aboutMeCarouselImagesDesktop,
  aboutMeCarouselImagesMobile,
} from './carouselImages';

import styles from './AboutMeSection.module.scss';

type AboutMeSectionProps = {
  id?: string;
};

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ id }) => (
  <Section
    id={id}
    className={styles['about-me']}
    innerClassName={styles['about-me__section--inner']}
  >
    <Container>
      <Row>
        <Col sm={12} md={10} xl={5} xxl={4} className={styles['about-me__col']}>
          <article className={styles['about-me__article']}>
            <Type
              renderAs="h2"
              appearance="h2"
              className={styles['about-me__title']}
            >
              About Me
            </Type>
            <Type appearance="small">
              I am a Technical Lead, Technical Architect and Lead Full Stack
              Developer with over 11 years of commercial experience architecting
              and building web/mobile applications and services for clients
              across a wide range of industries.
            </Type>
            <Type appearance="small">
              I lead the technical solution design as well as leading the
              hands-on development of frontend and backend code and deployment
              tasks across multiple projects simultaneously. I design and
              develop performant and secure technical solutions built upon
              industry leading cloud service solutions such as AWS and Google
              Cloud and utilising tools such as Terraform and Docker to
              implement microservice based solutions.
            </Type>
          </article>
        </Col>

        <Col sm={12} xl={7} xxl={8} className={styles['about-me__col']}>
          <div className={styles['about-me__device']}>
            <Devices
              assetType="image"
              imagesDesktop={aboutMeCarouselImagesDesktop}
              imagesMobile={aboutMeCarouselImagesMobile}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default AboutMeSection;
