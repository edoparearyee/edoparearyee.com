import React from 'react';
import classNames from 'classnames';

import styles from './Type.module.scss';

type TypeAppearance =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'small'
  | 'x-small'
  | 'monospace-1'
  | 'monospace-2';

type TagName = keyof HTMLElementTagNameMap;

export type TypeProps = {
  appearance?: TypeAppearance;
  renderAs?: TagName;
} & React.HTMLAttributes<HTMLElement>;

const Type: React.FC<TypeProps> = ({
  className,
  renderAs = 'p',
  appearance = 'body',
  children,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      className={classNames(
        styles.type,
        styles[`type--appearance-${appearance}`],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Type;
