import React, { useState } from 'react';

import styles from './AnimatedElement.module.scss';

interface AnimatedElementProps {
  children: React.ReactNode;
  inView?: boolean;
  variant?: 'right' | 'left' | 'up';
  delay?: number;
  className?: string;
}

const baseDelay = 0.15;

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  inView = false,
  variant = 'left',
  delay,
  className,
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div
      className={`${styles['animated-element']}
      ${variant === 'up' ? styles['animated-element--up'] : ''}
      ${variant === 'right' ? styles['animated-element--right'] : ''}
      ${variant === 'left' ? styles['animated-element--left'] : ''}
      ${inView || hasAnimated ? styles['animated-element--active'] : ''}
      ${className ? className : ''}`}
      style={delay ? { transitionDelay: `${delay * baseDelay}s` } : {}}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
