import React from 'react';

import styles from './GridContainer.module.scss';

interface GridContainerProps {
  children?: React.ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = ({ children }) => (
  <div className={styles['grid-container']}>{children}</div>
);

export default GridContainer;
