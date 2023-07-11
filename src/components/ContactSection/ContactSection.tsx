import React from 'react';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Section from '../Section/Section';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Image from '../Image/Image';
import Button from '../Button/Button';
import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';
import LinkedInIcon from '../Icons/LinkedInIcon/LinkedInIcon';

import styles from './ContactSection.module.scss';

type ContactSectionProps = {
  id?: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => (
  <Section id={id} className={styles.contact}>
    <Container>
      <Row>
        <Col
          md={5}
          offset={{ md: 1 }}
          lg={7}
          className={styles['contact__col-info']}
        >
          <article>
            <Type
              appearance="h2"
              renderAs="h1"
              className={styles.contact__heading}
            >
              Get in touch
            </Type>
            <Type
              appearance="h3"
              renderAs="h4"
              className={styles.contact__name}
            >
              Edward Opare-Aryee
            </Type>
            <Button
              className={styles.contact__email}
              renderAs="a"
              size="large"
              appearance="link"
              color="secondary"
              href="mailto:hello@example.com"
              external
            >
              hello@example.com
            </Button>

            <Type appearance="h5">CONNECT WITH ME</Type>
            <div className={styles.social__links}>
              <Button
                className={styles['contact__social-link']}
                renderAs="a"
                href="https://www.linkedin.com/in/edoparearyee/"
                external
                appearance="none"
              >
                <LinkedInIcon className={styles['contact__social-icon']} />
                <Type appearance="visually-hidden" renderAs="span">
                  LinkedIn
                </Type>
              </Button>
              <Button
                className={styles['contact__social-link']}
                renderAs="a"
                href="https://github.com/edoparearyee"
                external
                appearance="none"
              >
                <GitHubIcon className={styles['contact__social-icon']} />
                <Type appearance="visually-hidden" renderAs="span">
                  GitHub
                </Type>
              </Button>
            </div>
          </article>
        </Col>
        <Col md={5} lg={4} className={styles['contact__col-image']}>
          <Image
            className={styles.contact__img}
            sources={[
              {
                breakpoint: 1200,
                '1x': 'https://picsum.photos/id/195/488/610',
                '2x': 'https://picsum.photos/id/195/976/1220',
              },
              {
                breakpoint: 1024,
                '1x': 'https://picsum.photos/id/195/384/480',
                '2x': 'https://picsum.photos/id/195/768/960',
              },
              {
                breakpoint: 768,
                '1x': 'https://picsum.photos/id/195/356/445',
                '2x': 'https://picsum.photos/id/195/712/890',
              },
              {
                breakpoint: 375,
                '1x': 'https://picsum.photos/id/195/335/268',
                '2x': 'https://picsum.photos/id/195/670/536',
              },
            ]}
            alt=""
          />
        </Col>
      </Row>
    </Container>
  </Section>
);

export default ContactSection;
