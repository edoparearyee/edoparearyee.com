import React from 'react';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Section from '../Section/Section';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Button from '../Button/Button';

import styles from './ErrorSection.module.scss';

type ErrorSectionProps = {
  id?: string;
  title?: string;
  text?: string;
  ctaHref?: string;
  ctaText?: string;
};

const ErrorSection: React.FC<ErrorSectionProps> = ({
  id,
  title = 'Sorry something went wrong!',
  text = "I'm working on it but in the meantime please feel free to get in touch",
  ctaHref = 'mailto:hello@edoparearyee.com',
  ctaText = 'Get in touch',
}) => (
  <Section
    id={id}
    className={styles.Error}
    innerClassName={styles['error__section--inner']}
  >
    <Container>
      <Row>
        <Col sm={12}>
          <Type appearance="h2" renderAs="h1" className={styles.error__heading}>
            {title}
          </Type>
        </Col>
      </Row>
      <Row>
        <Col>
          <Type>{text}</Type>
          <Button renderAs="a" href={ctaHref}>
            {ctaText}
          </Button>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default ErrorSection;
