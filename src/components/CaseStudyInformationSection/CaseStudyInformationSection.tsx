'use client';

import React from 'react';
import classNames from 'classnames';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';
import { CaseStudy } from '../../models/caseStudy.model';

import styles from './CaseStudyInformationSection.module.scss';

export type CaseStudyInformationSectionProps = {
  id?: string;
  caseStudy: CaseStudy;
};

const CaseStudyInformationSection: React.FC<
  CaseStudyInformationSectionProps
> = ({ id, caseStudy }) => {
  return (
    <div id={id} className={styles['case-study-information']}>
      <Container>
        <Row>
          <Col sm={12}>
            <Type
              renderAs="h2"
              appearance="h4"
              className={styles['case-study-information__information-title']}
            >
              Description
            </Type>
          </Col>
          <Col sm={12} md={10} lg={8}>
            <div className={styles['case-study-information__description']}>
              {caseStudy.description.split('\n\n').map((p, i) => (
                <Type key={i} appearance="body">
                  {p}
                </Type>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={5} xxl={5}>
            <Type
              renderAs="h2"
              appearance="h4"
              className={styles['case-study-information__information-title']}
            >
              Client
            </Type>
            <Type
              className={styles['case-study-information__detail']}
              appearance="body"
            >
              {caseStudy.client.name}
            </Type>
          </Col>

          <Col md={6} lg={5} xxl={5}>
            {caseStudy.websiteUrl ? (
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
            ) : null}
          </Col>
          <Col md={6} lg={5} xxl={5}>
            <Type
              renderAs="h2"
              appearance="h4"
              className={styles['case-study-information__information-title']}
            >
              Role
            </Type>
            <Type
              className={styles['case-study-information__detail']}
              appearance="body"
            >
              {caseStudy.role}
            </Type>
          </Col>
          <Col md={6} lg={5} xxl={5}>
            <Type
              renderAs="h2"
              appearance="h4"
              className={styles['case-study-information__information-title']}
            >
              Year
            </Type>
            <Type
              className={styles['case-study-information__detail']}
              appearance="body"
            >
              {caseStudy.year}
            </Type>
          </Col>
          <Col md={6} lg={5} xxl={5}>
            <Type
              renderAs="h2"
              appearance="h4"
              className={styles['case-study-information__information-title']}
            >
              Team
            </Type>
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
          </Col>

          <Col md={6} lg={5} xxl={5}>
            <Type
              renderAs="h2"
              appearance="h4"
              className={styles['case-study-information__information-title']}
            >
              Technology used
            </Type>
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
          </Col>

          <Col md={6} lg={5} xxl={5}>
            {caseStudy.awards?.length ? (
              <>
                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={
                    styles['case-study-information__information-title']
                  }
                >
                  Awards
                </Type>
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
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CaseStudyInformationSection;
