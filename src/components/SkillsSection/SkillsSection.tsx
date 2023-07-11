import React from 'react';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Section from '../Section/Section';

import styles from './SkillsSection.module.scss';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Badge from '../Badge/Badge';

type SkillsSectionProps = {
  id?: string;
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ id }) => (
  <Section
    id={id}
    className={styles.skills}
    innerClassName={styles['skills__section--inner']}
  >
    <Container>
      <Row>
        <Col sm={8} md={6}>
          <Type
            appearance="h1"
            renderAs="h2"
            className={styles.skills__heading}
          >
            Skills & Proficiencies
          </Type>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row>
            <Col className={styles.skills__group}>
              <Type
                renderAs="h3"
                appearance="h3"
                className={styles['skills__list-subheading']}
              >
                AWS
              </Type>
              <ul className={styles.skills__list}>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Lambda
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    App Runner
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    EC2
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    EKS
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    S3
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    DynamoDB
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    ECR
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    SQS
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Coginto
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    IAM
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    API Gateway
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Cloudfront
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Route53
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Cloudwatch
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    ACM
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    WAF
                  </Badge>
                </li>
              </ul>
            </Col>
            <Col className={styles.skills__group}>
              <Type
                renderAs="h3"
                appearance="h3"
                className={styles['skills__list-subheading']}
              >
                Google Cloud
              </Type>
              <ul className={styles.skills__list}>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Firebase
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Firestore
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Cloud Storage
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Firebase Authentication
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Cloud Run
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    App Engine
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Cloud Functions
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    IAM
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Artifact Registry
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Big Query
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Pub/Sub
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    KMS
                  </Badge>
                </li>
              </ul>
            </Col>
            <Col className={styles.skills__group}>
              <Type
                renderAs="h3"
                appearance="h3"
                className={styles['skills__list-subheading']}
              >
                DevOps
              </Type>
              <ul className={styles.skills__list}>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Terraform
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Docker
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Kubernetes
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Microservices
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    CI/CD
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    CircleCI
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Github Actions
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Gitlab CI
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Bitbucket pipelines
                  </Badge>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col className={styles.skills__group}>
              <Type
                renderAs="h3"
                appearance="h3"
                className={styles['skills__list-subheading']}
              >
                Frontend
              </Type>
              <ul className={styles.skills__list}>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    React
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Next.js
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    React Native
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Typescript
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Angular
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    NgRx
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    NativeScript
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Web Components
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    HTML 5
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    SCSS
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    CSS Modules
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Styled Components
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Storybook
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Design Systems
                  </Badge>
                </li>
              </ul>
            </Col>
            <Col className={styles.skills__group}>
              <Type
                renderAs="h3"
                appearance="h3"
                className={styles['skills__list-subheading']}
              >
                Backend
              </Type>
              <ul className={styles.skills__list}>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Node.js
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Express.js
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Electron
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    REST API{"'"}s
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Python
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Flask
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Fast API
                  </Badge>
                </li>
              </ul>
            </Col>
            <Col className={styles.skills__group}>
              <Type
                renderAs="h3"
                appearance="h3"
                className={styles['skills__list-subheading']}
              >
                Testing & Tooling
              </Type>
              <ul className={styles.skills__list}>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Jest
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    React Testing Library
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Cypress
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Chromatic
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Puppeteer
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Playwright
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Jasmine
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Mocha
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Supertest
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Pytest
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Git
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Bash/Shell
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Webpack
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    NPM
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Yarn
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Prettier
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    ESLint
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    PIP
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Swagger Docs
                  </Badge>
                </li>
                <li className={styles['skills__list-item']}>
                  <Badge shape="pill" size="small" color="secondary">
                    Postman
                  </Badge>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default SkillsSection;
