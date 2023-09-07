import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './Loader.module.scss';
import Type from '../Type/Type';

export type LoaderProps = PropsWithChildren<{
  className?: string;
}>;

const Loader: React.FC<LoaderProps> = ({ className }) => (
  <div className={classNames(styles.loader, className)}>
    <div className={styles.loader__cube}>
      <div className={styles.loader__sides}>
        <div
          className={classNames(styles.loader__side, styles.loader__top)}
        ></div>
        <div
          className={classNames(styles.loader__side, styles.loader__right)}
        ></div>
        <div
          className={classNames(styles.loader__side, styles.loader__bottom)}
        ></div>
        <div
          className={classNames(styles.loader__side, styles.loader__left)}
        ></div>
        <div
          className={classNames(styles.loader__side, styles.loader__front)}
        ></div>
        <div
          className={classNames(styles.loader__side, styles.loader__back)}
        ></div>
      </div>
    </div>
    <Type appearance="h4" className={styles.loader__text}>
      Loading…
    </Type>
  </div>
);

export default Loader;
