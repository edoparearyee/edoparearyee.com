import React from 'react';
import classNames from 'classnames';

import Button from '../Button/Button';
import Card from '../Card/Card';
import Type from '../Type/Type';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Section from '../Section/Section';
import { ResponsiveImageWithAltText } from '@/models/image.model';

import styles from './WorkSection.module.scss';

export interface WorkCard {
  slug: string;
  image: ResponsiveImageWithAltText;
  title: string;
  blurb: string;
}

export interface WorkSectionProps {
  id?: string;
  cards: WorkCard[];
  ctaText: string;
  ctaLink: string;
}

const WorkSection: React.FC<WorkSectionProps> = ({
  id,
  cards,
  ctaLink,
  ctaText,
}) => (
  <Section
    id={id}
    className={styles['work']}
    innerClassName={styles['work__section--inner']}
  >
    <Container>
      <Row>
        <Col sm={12}>
          <Type renderAs="h2" appearance="h1" className={styles['work__title']}>
            My Work
          </Type>
        </Col>
      </Row>
    </Container>

    <div className={styles.work__cards}>
      <Container>
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
                  image={card.image.image}
                  imageAlt={card.image.alt}
                  title={card.title}
                  blurb={card.blurb}
                />
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

    <Container>
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
  </Section>
);

export default WorkSection;
