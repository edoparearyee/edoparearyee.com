import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Type from '../Type/Type';
import GridContainer from '../GridContainer/GridContainer';
import Section from '../Section/Section';

import styles from './WorkSection.module.scss';
import Card from '../Card/Card';
import classNames from 'classnames';
import Button from '../Button/Button';

type WorkSectionProps = {};

const WorkSection: React.FC<WorkSectionProps> = () => (
  <Section
    className={styles['work']}
    innerClassName={styles['work__section--inner']}
  >
    <GridContainer>
      <Container>
        <Row>
          <Col sm={12}>
            <Type
              renderAs="h2"
              appearance="h1"
              className={styles['work__title']}
            >
              My Work
            </Type>
          </Col>
        </Row>
      </Container>
    </GridContainer>

    <div className={styles.work__cards}>
      <GridContainer>
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <Button appearance="none" renderAs="a" href="#">
                <Card
                  className={styles.work__card}
                  image={[
                    {
                      breakpoint: 1024,
                      '1x': 'https://picsum.photos/id/195/300/350',
                      '2x': 'https://picsum.photos/id/195/600/700',
                    },
                    {
                      breakpoint: 375,
                      '1x': 'https://picsum.photos/id/195/300/450',
                      '2x': 'https://picsum.photos/id/195/600/900',
                    },
                  ]}
                  imageAlt="Lights at night"
                  title="Card title"
                  blurb="Labore est qui est non veniam irure culpa nulla ullamco incididunt Lorem sit."
                />
              </Button>
            </Col>
            <Col sm={12} md={4}>
              <Button appearance="none" renderAs="a" href="#">
                <Card
                  className={styles.work__card}
                  image={[
                    {
                      breakpoint: 375,
                      '1x': 'https://picsum.photos/id/195/300/350',
                      '2x': 'https://picsum.photos/id/195/600/700',
                    },
                  ]}
                  imageAlt="Lights at night"
                  title="Card title"
                  blurb="Labore est qui est non veniam irure culpa nulla ullamco incididunt Lorem sit."
                />
              </Button>
            </Col>
            <Col sm={12} md={4}>
              <Button appearance="none" renderAs="a" href="#">
                <Card
                  className={classNames(
                    styles.work__card,
                    styles['work__card--last'],
                  )}
                  image={[
                    {
                      breakpoint: 1024,
                      '1x': 'https://picsum.photos/id/195/300/350',
                      '2x': 'https://picsum.photos/id/195/600/700',
                    },
                    {
                      breakpoint: 375,
                      '1x': 'https://picsum.photos/id/195/300/450',
                      '2x': 'https://picsum.photos/id/195/600/900',
                    },
                  ]}
                  imageAlt="Lights at night"
                  title="Card title"
                  blurb="Labore est qui est non veniam irure culpa nulla ullamco incididunt Lorem sit."
                />
              </Button>
            </Col>
          </Row>
        </Container>
      </GridContainer>
    </div>

    <GridContainer>
      <Container>
        <Row>
          <Col sm={12}>
            <Button
              color="secondary"
              appearance="link"
              renderAs="a"
              size="large"
              href="#"
            >
              See More
            </Button>
          </Col>
        </Row>
      </Container>
    </GridContainer>
  </Section>
);

export default WorkSection;
