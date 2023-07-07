import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './Section.module.scss';

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  innerClassName?: string;
}>;

const Section: React.FC<SectionProps> = ({
  id,
  className,
  innerClassName,
  children,
}) => (
  <section className={classNames(styles['section'], className)} id={id}>
    <div className={classNames(styles['section__inner'], innerClassName)}>
      {children}
    </div>
  </section>
);

export default Section;
