'use client';

import { setConfiguration, Col, Container, Row } from 'react-grid-system';
import {} from 'react-grid-system';

import Type from '@/components/Type/Type';
import Button from '@/components/Button/Button';
import GridContainer from '@/components/GridContainer/GridContainer';
import gridConfig from '@/components/GridContainer/gridConfig';

import styles from './page.module.scss';

setConfiguration(gridConfig);

const Home = () => {
  return (
    <main className={styles.main}>
      <GridContainer>
        <Container fluid>
          <Row>
            <Col>
              <Type renderAs="h1" appearance="h1">
                Edward Opare-Aryee
              </Type>
              <Type renderAs="p" appearance="monospace-2">
                Technical Lead | Technical Architect | Lead Full Stack Developer
              </Type>
            </Col>
          </Row>
        </Container>
      </GridContainer>

      <div className={styles['home__navigation']}>
        <GridContainer>
          <Container fluid>
            <Row>
              <Col xs={6}>
                <Button
                  className={styles['home__navigation-link']}
                  renderAs="a"
                  href="#"
                  fullWidth
                >
                  About Me
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  className={styles['home__navigation-link']}
                  renderAs="a"
                  href="#"
                  fullWidth
                >
                  Work
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  className={styles['home__navigation-link']}
                  renderAs="a"
                  href="#"
                  fullWidth
                >
                  Skills
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  className={styles['home__navigation-link']}
                  renderAs="a"
                  href="#"
                  fullWidth
                >
                  Experience
                </Button>
              </Col>
            </Row>
          </Container>
        </GridContainer>
      </div>
    </main>
  );
};

export default Home;
