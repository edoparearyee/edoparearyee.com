import React from 'react';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Section from '../Section/Section';

import styles from './SkillsSection.module.scss';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Badge from '../Badge/Badge';
import { skillsList } from './skillsList';

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
        {skillsList.map((list) => (
          <Col md={6} key={list.category}>
            <Row>
              <Col className={styles.skills__group}>
                <Type
                  renderAs="h3"
                  appearance="h4"
                  className={styles['skills__list-subheading']}
                >
                  {list.category}
                </Type>
                <ul className={styles.skills__list}>
                  {list.skills.map((skill) => (
                    <li className={styles['skills__list-item']} key={skill}>
                      <Badge shape="pill" size="x-small" color="secondary">
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
);

export default SkillsSection;
