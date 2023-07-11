import React from 'react';
import classNames from 'classnames';

import styles from './Row.module.scss';

interface RowProps {
  children?: React.ReactNode;
  className?: string;
}

const Row: React.FC<RowProps> = ({ className, children }) => (
  <div className={classNames(styles['row'], className)}>{children}</div>
);

export default Row;
