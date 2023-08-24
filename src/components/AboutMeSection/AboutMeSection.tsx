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
        <Col sm={12} md={10} xl={5} className={styles['about-me__col']}>
          <article className={styles['about-me__article']}>
            <Type renderAs="h1" appearance="monospace-1">
              About Me
            </Type>
            <Type>
              I am a Technical Lead and Technical Architect with over 11 years
              of commercial experience architecting and building web and mobile
              applications and well as backend services and api{"'"}s for
              clients across a wide range of industries including Automotive,
              Banking, E-Commerce, Public Sector and more. Some of the clients I
              have worked for include Google, Meta, Fox, UK Home Office, Nike,
              LEGO, HSBC, AstraZeneca, Ford, Shell, Klarna and many more.
            </Type>
          </article>
        </Col>

        <Col sm={12} xl={7} className={styles['about-me__col']}>
          <Devices
            assetType="image"
            imagesDesktop={aboutMeCarouselImagesDesktop}
            imagesMobile={aboutMeCarouselImagesMobile}
          />
        </Col>
      </Row>
    </Container>
  </Section>
);

export default AboutMeSection;
