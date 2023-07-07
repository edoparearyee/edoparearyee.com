import React from 'react';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Section from '../Section/Section';

import styles from './AboutMeSection.module.scss';
import Image from '../Image/Image';
import Row from '../Grid/Row';
import Col from '../Grid/Col';

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
        <Col sm={12} md={6} className={styles['about-me__col']}>
          <article className={styles['about-me__article']}>
            <Type renderAs="h1" appearance="h2">
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
            <Type>
              I lead the technical solution design as well as leading the
              hands-on development of frontend and backend code and DevOps tasks
              across multiple projects simultaneously. I design and develop
              performant and secure technical solutions built upon industry
              leading cloud service solutions such as AWS and Google Cloud to
              implement microservice based solutions.
            </Type>
          </article>
        </Col>
        <Col sm={12} md={6} className={styles['about-me__col']}>
          <Image
            className={styles['about-me__img']}
            sources={[
              {
                breakpoint: 1200,
                '1x': 'https://picsum.photos/id/195/488/610',
                '2x': 'https://picsum.photos/id/195/976/1220',
              },
              {
                breakpoint: 1024,
                '1x': 'https://picsum.photos/id/195/384/480',
                '2x': 'https://picsum.photos/id/195/768/960',
              },
              {
                breakpoint: 768,
                '1x': 'https://picsum.photos/id/195/356/445',
                '2x': 'https://picsum.photos/id/195/712/890',
              },
              {
                breakpoint: 375,
                '1x': 'https://picsum.photos/id/195/335/268',
                '2x': 'https://picsum.photos/id/195/670/536',
              },
            ]}
            alt=""
          ></Image>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default AboutMeSection;
