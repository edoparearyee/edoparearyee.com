/* eslint-disable react/display-name */
'use client';

import React, { PropsWithChildren, useEffect, useRef } from 'react';
import classNames from 'classnames';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import styles from './Section.module.scss';

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  innerClassName?: string;
  onIsIntersectingChange?: (isIntersecting: boolean) => void;
}>;

const Section: React.FC<SectionProps> = ({
  id,
  className,
  innerClassName,
  children,
  onIsIntersectingChange,
}) => {
  const ref = useRef<HTMLElement>(null);
  const { isIntersecting } = useIntersectionObserver(ref, {
    threshold: 0,
    root: null,
    rootMargin: '-10%',
  });

  useEffect(() => {
    onIsIntersectingChange && onIsIntersectingChange(isIntersecting);
  }, [isIntersecting, onIsIntersectingChange]);

  return (
    <section
      ref={ref}
      className={classNames(styles['section'], className)}
      id={id}
    >
      <div className={classNames(styles['section__inner'], innerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
