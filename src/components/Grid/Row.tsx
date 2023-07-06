import React from 'react';

import styles from './Row.module.scss';

interface RowProps {
  children?: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => (
  <div className={styles['row']}>{children}</div>
);

export default Row;
