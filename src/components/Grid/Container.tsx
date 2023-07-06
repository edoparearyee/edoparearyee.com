import React from 'react';

import styles from './Container.module.scss';

interface GridContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<GridContainerProps> = ({ children }) => (
  <div className={styles['grid']}>
    <div className={styles['container']}>{children}</div>
  </div>
);

export default Container;
