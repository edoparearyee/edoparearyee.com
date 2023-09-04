/* eslint-disable react/display-name */
import React, { PropsWithChildren, forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Section.module.scss';

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  innerClassName?: string;
}>;

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className, innerClassName, children }, ref) => (
    <section
      ref={ref}
      className={classNames(styles['section'], className)}
      id={id}
    >
      <div className={classNames(styles['section__inner'], innerClassName)}>
        {children}
      </div>
    </section>
  ),
);

export default Section;
