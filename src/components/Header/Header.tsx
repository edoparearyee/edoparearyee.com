'use client';

import React, { useState } from 'react';
import classNames from 'classnames';

import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Type from '../Type/Type';
import Button from '../Button/Button';
import BurgerMenuIcon from '../Icons/BurgerMenuIcon/BurgerMenuIcon';

import styles from './Header.module.scss';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={classNames(styles.header, {
        [styles['header--menu-open']]: menuOpen,
      })}
    >
      <div className={styles.header__inner}>
        <Container>
          <Row>
            <Col sm={8} className={classNames(styles['header__col-left'])}>
              <Button appearance="none" renderAs="a" href="/">
                <Type
                  className={styles.header__title}
                  appearance="h4"
                  renderAs="span"
                >
                  Edward Opare-Aryee
                </Type>
              </Button>
            </Col>
            <Col sm={4} className={classNames(styles['header__col-right'])}>
              <Button
                appearance="none"
                onClick={() => setMenuOpen(!menuOpen)}
                className={styles['header__menu-button']}
              >
                <BurgerMenuIcon
                  color="secondary"
                  state={menuOpen ? 'close' : 'menu'}
                />
                <Type appearance="visually-hidden">
                  {menuOpen ? 'Close' : 'Open'}
                </Type>
              </Button>
              <nav className={styles.header__nav}>
                <ul className={styles['header__nav-list']}>
                  <li className={styles['header__nav-list-item']}>
                    <Button
                      color="secondary"
                      appearance="link"
                      renderAs="a"
                      href="/#work"
                    >
                      Work
                    </Button>
                  </li>
                  <li className={styles['header__nav-list-item']}>
                    <Button
                      color="secondary"
                      appearance="link"
                      renderAs="a"
                      href="/#about-me"
                    >
                      About Me
                    </Button>
                  </li>
                  <li className={styles['header__nav-list-item']}>
                    <Button
                      color="secondary"
                      appearance="link"
                      renderAs="a"
                      href="/#contact"
                    >
                      Contact
                    </Button>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
