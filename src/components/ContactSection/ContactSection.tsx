'use client';

import React, { useState } from 'react';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Section from '../Section/Section';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Button from '../Button/Button';
import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';
import LinkedInIcon from '../Icons/LinkedInIcon/LinkedInIcon';
import EmailIcon from '../Icons/EmailIcon/EmailIcon';

import styles from './ContactSection.module.scss';
import AnimatedElement from '../AnimatedElement/AnimatedElement';

type ContactSectionProps = {
  id?: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const onIsIntersectingChange = (intersecting: boolean) => {
    setIsIntersecting(intersecting);
  };

  return (
    <Section
      id={id}
      className={styles.contact}
      onIsIntersectingChange={onIsIntersectingChange}
    >
      <Container>
        <Row>
          <Col sm={10} lg={7} className={styles['contact__col-info']}>
            <article>
              <AnimatedElement inView={isIntersecting} variant="right">
                <Type
                  appearance="h2"
                  renderAs="h2"
                  className={styles.contact__heading}
                >
                  Get in touch
                </Type>
              </AnimatedElement>
              <AnimatedElement
                inView={isIntersecting}
                variant="right"
                delay={0.1}
              >
                <Type appearance="body" renderAs="p">
                  If you are interested in working together feel free to get in
                  touch.
                </Type>
              </AnimatedElement>
              <AnimatedElement
                inView={isIntersecting}
                variant="right"
                delay={0.2}
              >
                <Button
                  className={styles.contact__email}
                  renderAs="a"
                  size="medium"
                  appearance="solid"
                  color="primary"
                  href="mailto:hello@edoparearyee.com"
                  external
                >
                  Say Hello
                </Button>
              </AnimatedElement>

              <AnimatedElement
                inView={isIntersecting}
                variant="right"
                delay={0.3}
              >
                <Type appearance="h4" renderAs="h3">
                  Connect with me
                </Type>
              </AnimatedElement>
              <div className={styles.contact__social}>
                <AnimatedElement
                  inView={isIntersecting}
                  variant="right"
                  delay={0.4}
                >
                  <Button
                    className={styles['contact__social-link']}
                    renderAs="a"
                    href="mailto:hello@edoparearyee.com"
                    external
                    appearance="none"
                  >
                    <EmailIcon className={styles['contact__social-icon']} />
                    <Type appearance="visually-hidden" renderAs="span">
                      Email
                    </Type>
                  </Button>
                </AnimatedElement>
                <AnimatedElement
                  inView={isIntersecting}
                  variant="right"
                  delay={0.45}
                >
                  <Button
                    className={styles['contact__social-link']}
                    renderAs="a"
                    href="https://www.linkedin.com/in/edoparearyee/"
                    external
                    appearance="none"
                  >
                    <LinkedInIcon className={styles['contact__social-icon']} />
                    <Type appearance="visually-hidden" renderAs="span">
                      LinkedIn
                    </Type>
                  </Button>
                </AnimatedElement>
                <AnimatedElement
                  inView={isIntersecting}
                  variant="right"
                  delay={0.5}
                >
                  <Button
                    className={styles['contact__social-link']}
                    renderAs="a"
                    href="https://github.com/edoparearyee"
                    external
                    appearance="none"
                  >
                    <GitHubIcon className={styles['contact__social-icon']} />
                    <Type appearance="visually-hidden" renderAs="span">
                      GitHub
                    </Type>
                  </Button>
                </AnimatedElement>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default ContactSection;
