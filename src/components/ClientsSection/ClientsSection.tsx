'use client';

import React, { useState } from 'react';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Section from '../Section/Section';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import ClientCard from '../ClientCard/ClientCard';
import { Client } from '@/models/caseStudy.model';

import styles from './ClientsSection.module.scss';

type ClientsSectionProps = {
  id?: string;
  clients?: Client[];
};

const ClientsSection: React.FC<ClientsSectionProps> = ({
  id,
  clients = [],
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const onIsIntersectingChange = (intersecting: boolean) => {
    setIsIntersecting(intersecting);
  };

  return (
    <Section
      id={id}
      className={styles.clients}
      innerClassName={styles['clients__section--inner']}
      onIsIntersectingChange={onIsIntersectingChange}
    >
      <Container>
        <Row>
          <Col sm={12}>
            <AnimatedElement inView={isIntersecting} variant="up">
              <Type
                appearance="h2"
                renderAs="h2"
                className={styles.clients__heading}
              >
                {"Brands i've worked with"}
              </Type>
            </AnimatedElement>
          </Col>
        </Row>
        <Row>
          {clients.map((client, i) => (
            <Col sm={6} md={4} lg={3} key={client.name}>
              <AnimatedElement
                inView={isIntersecting}
                variant="up"
                delay={(i + 1) * 0.15}
              >
                <ClientCard name={client.name} logoUrl={client.logoDarkUrl} />
              </AnimatedElement>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default ClientsSection;
