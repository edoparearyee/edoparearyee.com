import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Button from '../Button/Button';
import Type from '../Type/Type';
import GridContainer from '../GridContainer/GridContainer';
import Section from '../Section/Section';

import styles from './HomeSection.module.scss';
import LinkedInIcon from '../Icons/LinkedInIcon/LinkedInIcon';
import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';

type HomeSectionProps = {};

const HomeSection: React.FC<HomeSectionProps> = () => (
  <Section
    className={styles.home}
    innerClassName={styles['home__section--inner']}
  >
    <header className={styles.home__header}>
      <GridContainer>
        <Container fluid>
          <Row>
            <Col>
              <Type renderAs="h1" appearance="h1">
                Edward Opare-Aryee
              </Type>
              <Type
                renderAs="p"
                appearance="monospace-2"
                className={styles.home__title}
              >
                Technical Lead | Technical Architect | Lead Full Stack Developer
              </Type>
            </Col>
          </Row>
        </Container>
      </GridContainer>
    </header>

    <nav className={styles.home__navigation}>
      <GridContainer>
        <Container fluid>
          <Row>
            <Col sm={6} md={4} lg={3} xxl={2}>
              <Button
                className={styles['home__navigation-link']}
                renderAs="a"
                appearance="outline"
                color="secondary"
                href="#"
                fullWidth
              >
                About Me
              </Button>
            </Col>
            <Col sm={6} md={4} lg={3} xxl={2}>
              <Button
                className={styles['home__navigation-link']}
                renderAs="a"
                appearance="outline"
                color="secondary"
                href="#"
                fullWidth
              >
                My Work
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={4} lg={3} xxl={2}>
              <Button
                className={styles['home__navigation-link']}
                renderAs="a"
                appearance="outline"
                color="secondary"
                href="#"
                fullWidth
              >
                Skills
              </Button>
            </Col>
            <Col sm={6} md={4} lg={3} xxl={2}>
              <Button
                className={styles['home__navigation-link']}
                renderAs="a"
                appearance="outline"
                color="secondary"
                href="#"
                fullWidth
              >
                Experience
              </Button>
            </Col>
          </Row>
        </Container>
      </GridContainer>
    </nav>

    <nav className={styles.home__social}>
      <GridContainer>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <Button
                className={styles['home__social-link']}
                renderAs="a"
                href="https://www.linkedin.com/in/edoparearyee/"
                external
                appearance="none"
              >
                <LinkedInIcon className={styles['home__social-icon']} />
                <Type appearance="visually-hidden" renderAs="span">
                  LinkedIn
                </Type>
              </Button>
              <Button
                className={styles['home__social-link']}
                renderAs="a"
                href="https://github.com/edoparearyee"
                external
                appearance="none"
              >
                <GitHubIcon className={styles['home__social-icon']} />
                <Type appearance="visually-hidden" renderAs="span">
                  GitHub
                </Type>
              </Button>
            </Col>
          </Row>
        </Container>
      </GridContainer>
    </nav>
  </Section>
);

export default HomeSection;
