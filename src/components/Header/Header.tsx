'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { animateScroll } from 'react-scroll';

import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Type from '../Type/Type';
import Button from '../Button/Button';
import BurgerMenuIcon from '../Icons/BurgerMenuIcon/BurgerMenuIcon';
import useWindowScroll from '../../hooks/useWindowScroll';

import styles from './Header.module.scss';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollState] = useWindowScroll();
  const pathname = usePathname();

  const onNavItemClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    selector: string,
  ) => {
    if (pathname !== '/') return;
    const rect = document.querySelector(selector)?.getBoundingClientRect();
    animateScroll.scrollTo(window.scrollY + (rect?.y || 0), {
      smooth: 'easeInOutCubic',
      duration: (scrollDistance: number) => {
        scrollDistance;
      },
    });
    setMenuOpen(false);
  };

  return (
    <header
      className={classNames(styles.header, {
        [styles['header--menu-open']]: menuOpen,
        [styles['header--is-scrolled']]:
          pathname !== '/' || (scrollState.y && scrollState.y > 100),
      })}
    >
      <div className={styles.header__inner}>
        <Container>
          <Row>
            <Col
              sm={8}
              md={6}
              className={classNames(styles['header__col-left'])}
            >
              <Button
                appearance="none"
                renderAs="a"
                href={pathname === '/' ? '/#home' : '/'}
                onClick={($event) => {
                  onNavItemClick($event, '#home');
                }}
              >
                <Type
                  className={styles.header__title}
                  appearance="h4"
                  renderAs="span"
                >
                  Ed Opare-Aryee
                </Type>
              </Button>
            </Col>
            <Col
              sm={4}
              md={6}
              className={classNames(styles['header__col-right'])}
            >
              <Button
                appearance="none"
                onClick={() => setMenuOpen(!menuOpen)}
                className={styles['header__menu-button']}
              >
                <BurgerMenuIcon
                  color="primary"
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
                      color="primary"
                      appearance="link"
                      renderAs="a"
                      href="/#about-me"
                      onClick={($event) => {
                        onNavItemClick($event, '#about-me');
                      }}
                    >
                      About Me
                    </Button>
                  </li>
                  <li className={styles['header__nav-list-item']}>
                    <Button
                      color="primary"
                      appearance="link"
                      renderAs="a"
                      href="/#work"
                      onClick={($event) => {
                        onNavItemClick($event, '#work');
                      }}
                    >
                      Work
                    </Button>
                  </li>
                  <li className={styles['header__nav-list-item']}>
                    <Button
                      color="primary"
                      appearance="link"
                      renderAs="a"
                      href="/#clients"
                      onClick={($event) => {
                        onNavItemClick($event, '#clients');
                      }}
                    >
                      Clients
                    </Button>
                  </li>
                  <li className={styles['header__nav-list-item']}>
                    <Button
                      color="primary"
                      appearance="link"
                      renderAs="a"
                      href="/#contact"
                      onClick={($event) => {
                        onNavItemClick($event, '#contact');
                      }}
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
