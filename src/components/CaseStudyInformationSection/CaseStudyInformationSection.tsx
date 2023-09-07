'use client';

import React, { useRef } from 'react';
import classNames from 'classnames';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';
import { CaseStudy } from '../../models/caseStudy.model';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import AnimatedElement from '../AnimatedElement/AnimatedElement';

import styles from './CaseStudyInformationSection.module.scss';

export type CaseStudyInformationSectionProps = {
  id?: string;
  caseStudy: CaseStudy;
};

const CaseStudyInformationSection: React.FC<
  CaseStudyInformationSectionProps
> = ({ id, caseStudy }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useIntersectionObserver(ref, {
    threshold: 0,
    root: null,
    rootMargin: '-10%',
  });

  return (
    <div id={id} className={styles['case-study-information']} ref={ref}>
      <Container>
        <Row>
          <Col sm={12}>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.1}>
              <Type
                renderAs="h2"
                appearance="h4"
                className={styles['case-study-information__information-title']}
              >
                Description
              </Type>
            </AnimatedElement>
          </Col>
          <Col sm={12} md={10} lg={8}>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.1}>
              <div className={styles['case-study-information__description']}>
                {caseStudy.description.split('\n\n').map((p, i) => (
                  <Type key={i}>{p}</Type>
                ))}
              </div>
            </AnimatedElement>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={5} xxl={5}>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.2}>
              <Type
                renderAs="h2"
                appearance="h4"
                className={styles['case-study-information__information-title']}
              >
                Client
              </Type>
            </AnimatedElement>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.2}>
              <Type
                className={styles['case-study-information__detail']}
                appearance="body"
              >
                {caseStudy.client.name}
              </Type>
            </AnimatedElement>
          </Col>

          <Col md={6} lg={5} xxl={5}>
            {caseStudy.websiteUrl ? (
              <AnimatedElement inView={isIntersecting} variant="up" delay={0.2}>
                <Button
                  className={
                    styles['case-study-information__view-website-button']
                  }
                  appearance="solid"
                  external
                  color="primary"
                  renderAs="a"
                  size="small"
                  href={caseStudy.websiteUrl}
                >
                  View Website
                </Button>
              </AnimatedElement>
            ) : null}
          </Col>
          <Col md={6} lg={5} xxl={5}>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.3}>
              <Type
                renderAs="h2"
                appearance="h4"
                className={styles['case-study-information__information-title']}
              >
                Role
              </Type>
            </AnimatedElement>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.3}>
              <Type
                className={styles['case-study-information__detail']}
                appearance="body"
              >
                {caseStudy.role}
              </Type>
            </AnimatedElement>
          </Col>
          <Col md={6} lg={5} xxl={5}>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.3}>
              <Type
                renderAs="h2"
                appearance="h4"
                className={styles['case-study-information__information-title']}
              >
                Year
              </Type>
            </AnimatedElement>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.3}>
              <Type
                className={styles['case-study-information__detail']}
                appearance="body"
              >
                {caseStudy.year}
              </Type>
            </AnimatedElement>
          </Col>
          <Col md={6} lg={5} xxl={5}>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.4}>
              <Type
                renderAs="h2"
                appearance="h4"
                className={styles['case-study-information__information-title']}
              >
                Team
              </Type>
            </AnimatedElement>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.4}>
              <ul className={styles['case-study-information__team-list']}>
                {caseStudy.team.map((member) => (
                  <li key={member.name}>
                    <Type
                      className={classNames(
                        styles['case-study-information__detail'],
                        styles['case-study-information__team-member'],
                      )}
                      appearance="body"
                    >
                      <strong>{member.name}</strong> - {member.role}
                    </Type>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          </Col>

          <Col md={6} lg={5} xxl={5}>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.4}>
              <Type
                renderAs="h2"
                appearance="h4"
                className={styles['case-study-information__information-title']}
              >
                Technology used
              </Type>
            </AnimatedElement>
            <AnimatedElement inView={isIntersecting} variant="up" delay={0.4}>
              <ul
                className={classNames(
                  styles['case-study-information__tag-list'],
                  styles['case-study-information__detail'],
                )}
              >
                {caseStudy.tags?.map((tag: string) => (
                  <li
                    key={tag}
                    className={styles['case-study-information__tag-list-item']}
                  >
                    <Badge shape="square" color="primary" size="x-small">
                      {tag}
                    </Badge>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          </Col>

          <Col md={6} lg={5} xxl={5}>
            {caseStudy.awards?.length ? (
              <>
                <AnimatedElement
                  inView={isIntersecting}
                  variant="up"
                  delay={0.5}
                >
                  <Type
                    renderAs="h2"
                    appearance="h4"
                    className={
                      styles['case-study-information__information-title']
                    }
                  >
                    Awards
                  </Type>
                </AnimatedElement>
                <AnimatedElement
                  inView={isIntersecting}
                  variant="up"
                  delay={0.5}
                >
                  <ul
                    className={classNames(
                      styles['case-study-information__awards-list'],
                      styles['case-study-information__detail'],
                    )}
                  >
                    {caseStudy.awards?.map(
                      (award: { title: string; url: string }) => (
                        <li
                          key={award.title}
                          className={
                            styles['case-study-information__awards-list-item']
                          }
                        >
                          <Button
                            className={
                              styles['case-study-information__awards-button']
                            }
                            appearance="link"
                            color="light"
                            renderAs="a"
                            external
                            size="large"
                            href={award.url}
                          >
                            {award.title}
                          </Button>
                        </li>
                      ),
                    )}
                  </ul>
                </AnimatedElement>
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CaseStudyInformationSection;
