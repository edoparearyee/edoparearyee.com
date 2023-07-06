import React from 'react';
import classNames from 'classnames';

import styles from './Col.module.scss';

type GridCol = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface Offset {
  sm?: GridCol;
  md?: GridCol;
  lg?: GridCol;
  xl?: GridCol;
  xxl?: GridCol;
}

interface ColProps {
  children?: React.ReactNode;
  sm?: GridCol;
  md?: GridCol;
  lg?: GridCol;
  xl?: GridCol;
  xxl?: GridCol;
  offset?: Offset;
  className?: string;
}

const Col: React.FC<ColProps> = ({
  sm = 12,
  md,
  lg,
  xl,
  xxl,
  offset,
  children,
  className,
}) => (
  <div
    className={classNames(styles['col'], className, [styles[`col--sm-${sm}`]], {
      [styles[`col--md-${md}`]]: md !== undefined,
      [styles[`col--lg-${lg}`]]: lg !== undefined,
      [styles[`col--xl-${xl}`]]: xl !== undefined,
      [styles[`col--xxl-${xxl}`]]: xxl !== undefined,
      [styles[`col--offset-sm-${offset?.sm}`]]: offset?.sm !== undefined,
      [styles[`col--offset-md-${offset?.md}`]]: offset?.md !== undefined,
      [styles[`col--offset-lg-${offset?.lg}`]]: offset?.lg !== undefined,
      [styles[`col--offset-xl-${offset?.xl}`]]: offset?.xl !== undefined,
      [styles[`col--offset-xxl-${offset?.xxl}`]]: offset?.xxl !== undefined,
    })}
  >
    {children}
  </div>
);

export default Col;
