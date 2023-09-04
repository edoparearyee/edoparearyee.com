'use client';

import React, { useState } from 'react';

import Button from '../Button/Button';
import Type from '../Type/Type';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Section from '../Section/Section';
import LinkedInIcon from '../Icons/LinkedInIcon/LinkedInIcon';
import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';
import EmailIcon from '../Icons/EmailIcon/EmailIcon';
import HomeBackground from '../HomeBackground/HomeBackground';
import AnimatedElement from '../AnimatedElement/AnimatedElement';

import styles from './HomeSection.module.scss';

type HomeSectionProps = {
  id?: string;
};

const HomeSection: React.FC<HomeSectionProps> = ({ id }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const onIsIntersectingChange = (intersecting: boolean) => {
    setIsIntersecting(intersecting);
  };

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
      onIsIntersectingChange={onIsIntersectingChange}
    >
      <HomeBackground />
      <header className={styles.home__header}>
        <Container>
          <Row>
            <Col>
              <AnimatedElement inView={isIntersecting} variant="right">
                <Type renderAs="h1" appearance="h1">
                  Ed Opare-Aryee
                </Type>
              </AnimatedElement>
              <AnimatedElement
                inView={isIntersecting}
                variant="right"
                delay={0.1}
              >
                <Type
                  renderAs="p"
                  appearance="body"
                  className={styles.home__title}
                >
                  Technical Lead | Technical Architect | Lead Full Stack
                  Developer
                </Type>
              </AnimatedElement>
            </Col>
          </Row>
        </Container>
      </header>

      <nav className={styles.home__navigation}>
        <Container>
          <Row>
            <Col sm={6} md={4} lg={3} xxl={2}>
              <AnimatedElement inView={isIntersecting} variant="up" delay={0.2}>
                <Button
                  className={styles['home__navigation-link']}
                  renderAs="a"
                  appearance="outline"
                  color="primary"
                  href="#about-me"
                  onClick={($event) => {
                    onNavItemClick($event, '#about-me');
                  }}
                  fullWidth
                >
                  About Me
                </Button>
              </AnimatedElement>
            </Col>
            <Col sm={6} md={4} lg={3} xxl={2}>
              <AnimatedElement inView={isIntersecting} variant="up" delay={0.3}>
                <Button
                  className={styles['home__navigation-link']}
                  renderAs="a"
                  appearance="outline"
                  color="primary"
                  href="#work"
                  onClick={($event) => {
                    onNavItemClick($event, '#work');
                  }}
                  fullWidth
                >
                  My Work
                </Button>
              </AnimatedElement>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={4} lg={3} xxl={2}>
              <AnimatedElement inView={isIntersecting} variant="up" delay={0.4}>
                <Button
                  className={styles['home__navigation-link']}
                  renderAs="a"
                  appearance="outline"
                  color="primary"
                  href="#clients"
                  onClick={($event) => {
                    onNavItemClick($event, '#clients');
                  }}
                  fullWidth
                >
                  Clients
                </Button>
              </AnimatedElement>
            </Col>
            <Col sm={6} md={4} lg={3} xxl={2}>
              <AnimatedElement inView={isIntersecting} variant="up" delay={0.5}>
                <Button
                  className={styles['home__navigation-link']}
                  renderAs="a"
                  appearance="outline"
                  color="primary"
                  href="#contact"
                  onClick={($event) => {
                    onNavItemClick($event, '#contact');
                  }}
                  fullWidth
                >
                  Contact
                </Button>
              </AnimatedElement>
            </Col>
          </Row>
        </Container>
      </nav>

      <nav className={styles.home__social}>
        <Container>
          <Row>
            <Col sm={12}>
              <div className={styles['home__social-inner']}>
                <AnimatedElement
                  inView={isIntersecting}
                  variant="up"
                  delay={0.6}
                >
                  <Button
                    className={styles['home__social-link']}
                    renderAs="a"
                    href="mailto:hello@edoparearyee.com"
                    external
                    appearance="none"
                  >
                    <EmailIcon className={styles['home__social-icon']} />
                    <Type appearance="visually-hidden" renderAs="span">
                      Email
                    </Type>
                  </Button>
                </AnimatedElement>
                <AnimatedElement
                  inView={isIntersecting}
                  variant="up"
                  delay={0.65}
                >
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
                </AnimatedElement>
                <AnimatedElement
                  inView={isIntersecting}
                  variant="up"
                  delay={0.7}
                >
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
                </AnimatedElement>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    </Section>
  );
};

export default HomeSection;
