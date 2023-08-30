import React from 'react';

import Type from '../Type/Type';
import Container from '../Grid/Container';
import Section from '../Section/Section';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Button from '../Button/Button';
import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';
import LinkedInIcon from '../Icons/LinkedInIcon/LinkedInIcon';

import styles from './ContactSection.module.scss';
import EmailIcon from '../Icons/EmailIcon/EmailIcon';

type ContactSectionProps = {
  id?: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => (
  <Section id={id} className={styles.contact}>
    <Container>
      <Row>
        <Col sm={10} lg={7} className={styles['contact__col-info']}>
          <article>
            <Type
              appearance="h2"
              renderAs="h1"
              className={styles.contact__heading}
            >
              Get in touch
            </Type>
            <Type appearance="body" renderAs="p">
              If you are interested in working together feel free to get in
              touch.
            </Type>
            <Button
              className={styles.contact__email}
              renderAs="a"
              size="medium"
              appearance="solid"
              color="primary"
              href="mailto:hi@edoparearyee.com"
              external
            >
              Say Hello
            </Button>

            <Type appearance="h4">Connect with me</Type>
            <div className={styles.contact__social}>
              <Button
                className={styles['contact__social-link']}
                renderAs="a"
                href="mailto:hi@edoparearyee.com"
                external
                appearance="none"
              >
                <EmailIcon className={styles['contact__social-icon']} />
                <Type appearance="visually-hidden" renderAs="span">
                  Email
                </Type>
              </Button>
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
      </Row>
    </Container>
  </Section>
);

export default ContactSection;
