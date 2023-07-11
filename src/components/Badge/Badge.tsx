import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './Badge.module.scss';

type BadgeColor =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'success'
  | 'destructive';
type BadgeAppearance = 'solid' | 'outline';
type BadgeShape = 'square' | 'pill';
type BadgeSize = 'small' | 'medium' | 'large';

export type BadgeProps = PropsWithChildren<{
  appearance?: BadgeAppearance;
  shape?: BadgeShape;
  color?: BadgeColor;
  size?: BadgeSize;
  className?: string;
}>;

const Badge: React.FC<BadgeProps> = ({
  color = 'primary',
  appearance = 'solid',
  shape = 'square',
  size = 'medium',
  children,
  className,
}) => (
  <div
    className={classNames(
      styles.badge,
      styles[`badge--variant-${appearance}-${color}-${shape}`],
      styles[`badge--size-${size}`],
      className,
    )}
  >
    {children}
  </div>
);

export default Badge;
