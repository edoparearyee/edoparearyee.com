import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './Section.module.scss';

type SectionProps = PropsWithChildren<{
  className?: string;
  innerClassName?: string;
}>;

const Section: React.FC<SectionProps> = ({
  className,
  innerClassName,
  children,
}) => (
  <section className={classNames(styles['section'], className)}>
    <div className={classNames(styles['section__inner'], innerClassName)}>
      {children}
    </div>
  </section>
);

export default Section;
