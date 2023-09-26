import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

type ButtonColor = 'primary' | 'secondary' | 'light';
type ButtonRenderAs = 'a' | 'button';
type ButtonAppearance = 'solid' | 'outline' | 'link' | 'none';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonPropsBase = {
  color?: ButtonColor;
  renderAs?: ButtonRenderAs;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
  fullWidth?: boolean;
};

type ButtonPropsButton = ButtonPropsBase & {
  renderAs?: 'button';
  external?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonPropsLink = ButtonPropsBase & {
  renderAs?: 'a';
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonPropsButton | ButtonPropsLink;

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  appearance = 'solid',
  size = 'medium',
  renderAs = 'button',
  className,
  external = false,
  fullWidth = false,
  children,
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element: any = renderAs;
  const externalLinkProps =
    renderAs === 'a' && external
      ? {
          rel: 'noreferrer noopener',
          target: '_blank',
        }
      : {};
  return (
    <Element
      className={classNames(
        styles.button,
        styles[`button--variant-${appearance}`],
        styles[`button--variant-${appearance}-${color}`],
        {
          [styles[`button--size-${size}`]]: appearance !== 'none',
          [styles[`button--full-width`]]: fullWidth,
        },
        className,
      )}
      {...externalLinkProps}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Button;
