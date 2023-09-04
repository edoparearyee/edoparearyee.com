'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Button from '../Button/Button';
import Card from '../Card/Card';
import Type from '../Type/Type';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Section from '../Section/Section';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import { ResponsiveImageWithAltText } from '../../models/image.model';
import { CaseStudy } from '../../models/caseStudy.model';
import { mapCaseStudyToCard } from '../../utils/mapCaseStudy';

import styles from './WorkSection.module.scss';

export interface WorkCard {
  slug: string;
  image: ResponsiveImageWithAltText;
  title: string;
  logoUrl: string;
}

export interface WorkSectionProps {
  id?: string;
  initialCards: WorkCard[];
  total: number;
  ctaText: string;
}

const WorkSection: React.FC<WorkSectionProps> = ({
  id,
  initialCards,
  total,
  ctaText,
}) => {
  const [cards, setCards] = useState<WorkCard[]>([]);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const onIsIntersectingChange = (intersecting: boolean) => {
    setIsIntersecting(intersecting);
  };

  const handleLoadMore = async () => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const options: RequestInit = {
      headers,
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/case-studies?skip=${cards.length}`,
      options,
    );
    const data: { items: CaseStudy[] } = await response.json();
    setCards((c) => [...c, ...data.items.map(mapCaseStudyToCard)]);
  };

  useEffect(() => {
    setCards(initialCards);
  }, [initialCards]);

  return (
    <Section
      id={id}
      className={styles.work}
      innerClassName={styles['work__section--inner']}
      onIsIntersectingChange={onIsIntersectingChange}
    >
      <Container>
        <Row>
          <Col sm={12}>
            <AnimatedElement inView={isIntersecting} variant="up">
              <Type
                renderAs="h2"
                appearance="h2"
                className={styles['work__title']}
              >
                Latest Work
              </Type>
            </AnimatedElement>
          </Col>
        </Row>
      </Container>

      <div className={styles.work__cards}>
        <Container>
          <Row>
            {cards.map((card, i) => (
              <Col sm={12} md={6} lg={4} key={card.slug}>
                <AnimatedElement
                  inView={isIntersecting}
                  variant="up"
                  delay={(i + 1) * 0.15}
                >
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
                      logoUrl={card.logoUrl}
                      title={card.title}
                    />
                  </Button>
                </AnimatedElement>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {cards.length < total ? (
        <Container>
          <Row>
            <Col sm={12}>
              <AnimatedElement
                inView={isIntersecting}
                variant="up"
                delay={(initialCards.length + 1) * 0.15 + 0.1}
              >
                <Button
                  color="secondary"
                  appearance="link"
                  renderAs="button"
                  size="large"
                  onClick={handleLoadMore}
                >
                  {ctaText}
                </Button>
              </AnimatedElement>
            </Col>
          </Row>
        </Container>
      ) : null}
    </Section>
  );
};

export default WorkSection;
