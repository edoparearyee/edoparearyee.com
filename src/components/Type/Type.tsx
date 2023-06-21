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
  | 'monospace-2'
  | 'visually-hidden';

type TagName = keyof JSX.IntrinsicElements;

export type TypeProps = {
  appearance?: TypeAppearance;
  renderAs?: TagName;
} & React.HTMLAttributes<HTMLOrSVGElement>;

const Type: React.FC<TypeProps> = ({
  className,
  renderAs: Element = 'p',
  appearance = 'body',
  ...props
}) => {
  return (
    <Element
      className={classNames(
        styles.type,
        styles[`type--appearance-${appearance}`],
        className,
      )}
      {...props}
    ></Element>
  );
};

export default Type;
