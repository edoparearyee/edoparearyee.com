import React from 'react';
import classNames from 'classnames';

import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Type from '../Type/Type';
import Button from '../Button/Button';
import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';
import LinkedInIcon from '../Icons/LinkedInIcon/LinkedInIcon';

import styles from './Footer.module.scss';
import EmailIcon from '../Icons/EmailIcon/EmailIcon';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={styles.footer__inner}>
        <Container>
          <Row>
            <Col
              sm={8}
              md={6}
              className={classNames(styles['footer__col-left'])}
            >
              <Type appearance="small" className={styles.footer__copyright}>
                &copy; 2023 Ed Opare-Aryee
              </Type>
            </Col>
            <Col
              sm={4}
              md={6}
              className={classNames(styles['footer__col-right'])}
            >
              <div className={styles.footer__social}>
                <Button
                  className={styles['footer__social-link']}
                  renderAs="a"
                  href="mailto:hello@edoparearyee.com"
                  external
                  appearance="none"
                >
                  <EmailIcon className={styles['footer__social-icon']} />
                  <Type appearance="visually-hidden" renderAs="span">
                    Email
                  </Type>
                </Button>
                <Button
                  className={styles['footer__social-link']}
                  renderAs="a"
                  href="https://www.linkedin.com/in/edoparearyee/"
                  external
                  appearance="none"
                >
                  <LinkedInIcon className={styles['footer__social-icon']} />
                  <Type appearance="visually-hidden" renderAs="span">
                    LinkedIn
                  </Type>
                </Button>
                <Button
                  className={styles['footer__social-link']}
                  renderAs="a"
                  href="https://github.com/edoparearyee"
                  external
                  appearance="none"
                >
                  <GitHubIcon className={styles['footer__social-icon']} />
                  <Type appearance="visually-hidden" renderAs="span">
                    GitHub
                  </Type>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
