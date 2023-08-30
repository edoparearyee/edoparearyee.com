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
};

const ErrorSection: React.FC<ErrorSectionProps> = ({ id }) => (
  <Section
    id={id}
    className={styles.Error}
    innerClassName={styles['error__section--inner']}
  >
    <Container>
      <Row>
        <Col sm={12}>
          <Type appearance="h2" renderAs="h1" className={styles.error__heading}>
            Page not found
          </Type>
        </Col>
      </Row>
      <Row>
        <Col>
          <Type>Could not find the requested page</Type>
          <Button renderAs="a" href="/">
            Return Home
          </Button>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default ErrorSection;
