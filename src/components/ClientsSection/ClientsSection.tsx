import React from 'react';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Section from '../Section/Section';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import { Client } from '@/models/caseStudy.model';

import styles from './ClientsSection.module.scss';
import ClientCard from '../ClientCard/ClientCard';

type ClientsSectionProps = {
  id?: string;
  clients?: Client[];
};

const ClientsSection: React.FC<ClientsSectionProps> = ({
  id,
  clients = [],
}) => (
  <Section
    id={id}
    className={styles.clients}
    innerClassName={styles['clients__section--inner']}
  >
    <Container>
      <Row>
        <Col sm={12}>
          <Type
            appearance="h2"
            renderAs="h2"
            className={styles.clients__heading}
          >
            {"Brands i've worked with"}
          </Type>
        </Col>
      </Row>
      <Row>
        {clients.map((client) => (
          <Col sm={6} md={4} lg={3} key={client.name}>
            <ClientCard name={client.name} logoUrl={client.logoDarkUrl} />
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
);

export default ClientsSection;
