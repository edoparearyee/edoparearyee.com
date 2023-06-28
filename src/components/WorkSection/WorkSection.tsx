import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Button from '../Button/Button';
import Card from '../Card/Card';
import GridContainer from '../GridContainer/GridContainer';
import Section from '../Section/Section';
import Type from '../Type/Type';
import { ResponsiveImage } from '@/models/image.model';

import styles from './WorkSection.module.scss';
import classNames from 'classnames';

export interface WorkCard {
  slug: string;
  image: ResponsiveImage;
  imageAlt: string;
  title: string;
  blurb: string;
}

export interface WorkSectionProps {
  cards: WorkCard[];
  ctaText: string;
  ctaLink: string;
}

const WorkSection: React.FC<WorkSectionProps> = ({
  cards,
  ctaLink,
  ctaText,
}) => (
  <Section
    className={styles['work']}
    innerClassName={styles['work__section--inner']}
  >
    <GridContainer>
      <Container fluid>
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
        <Container fluid>
          <Row>
            {cards.map((card, i) => (
              <Col sm={12} md={4} key={card.slug}>
                <Button
                  appearance="none"
                  renderAs="a"
                  href={`/work/${card.slug}`}
                >
                  <Card
                    className={classNames(styles.work__card, {
                      [styles['work__card--last']]: i === cards.length - 1,
                    })}
                    image={card.image}
                    imageAlt={card.imageAlt}
                    title={card.title}
                    blurb={card.blurb}
                  />
                </Button>
              </Col>
            ))}
          </Row>
        </Container>
      </GridContainer>
    </div>

    <GridContainer>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Button
              color="secondary"
              appearance="link"
              renderAs="a"
              size="large"
              href={ctaLink}
            >
              {ctaText}
            </Button>
          </Col>
        </Row>
      </Container>
    </GridContainer>
  </Section>
);

export default WorkSection;
