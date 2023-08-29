'use client';

import React from 'react';

import Button from '../Button/Button';
import Type from '../Type/Type';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Section from '../Section/Section';
import LinkedInIcon from '../Icons/LinkedInIcon/LinkedInIcon';
import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';

import styles from './HomeSection.module.scss';

type HomeSectionProps = {
  id?: string;
};

const HomeSection: React.FC<HomeSectionProps> = ({ id }) => {
  const onNavItemClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    selector: string,
  ) => {
    event.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section
      id={id}
      className={styles.home}
      innerClassName={styles['home__section--inner']}
    >
      <header className={styles.home__header}>
        <Container>
          <Row>
            <Col>
              <Type renderAs="h1" appearance="h1">
                Ed Opare-Aryee
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
      </header>

      <nav className={styles.home__navigation}>
        <Container>
          <Row>
            <Col sm={6} md={4} lg={3} xxl={2}>
              <Button
                className={styles['home__navigation-link']}
                renderAs="a"
                appearance="outline"
                color="secondary"
                href="#about-me"
                onClick={($event) => {
                  onNavItemClick($event, '#about-me');
                }}
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
                href="#work"
                onClick={($event) => {
                  onNavItemClick($event, '#work');
                }}
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
                href="#clients"
                onClick={($event) => {
                  onNavItemClick($event, '#clients');
                }}
                fullWidth
              >
                Clients
              </Button>
            </Col>
            <Col sm={6} md={4} lg={3} xxl={2}>
              <Button
                className={styles['home__navigation-link']}
                renderAs="a"
                appearance="outline"
                color="secondary"
                href="#contact"
                onClick={($event) => {
                  onNavItemClick($event, '#contact');
                }}
                fullWidth
              >
                Contact
              </Button>
            </Col>
          </Row>
        </Container>
      </nav>

      <nav className={styles.home__social}>
        <Container>
          <Row>
            <Col sm={12}>
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
      </nav>
    </Section>
  );
};

export default HomeSection;
