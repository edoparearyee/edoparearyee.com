import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './BurgerMenuIcon.module.scss';

export type BurgerMenuIconProps = PropsWithChildren<{
  state?: 'menu' | 'close';
  color?: 'primary' | 'secondary';
  className?: string;
}>;

const BurgerMenuIcon: React.FC<BurgerMenuIconProps> = ({
  state = 'menu',
  color = 'primary',
  className,
}) => (
  <div
    className={classNames(
      styles['burger-menu-icon'],
      styles[`burger-menu-icon--${state}`],
      styles[`burger-menu-icon--${color}`],
      className,
    )}
  >
    <span className={styles['burger-menu-icon__line']}></span>
    <span className={styles['burger-menu-icon__line']}></span>
    <span className={styles['burger-menu-icon__line']}></span>
  </div>
);

export default BurgerMenuIcon;
