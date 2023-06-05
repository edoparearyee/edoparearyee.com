import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

type ButtonColor = 'primary' | 'secondary';
type ButtonRenderAs = 'a' | 'button';
type ButtonAppearance = 'solid' | 'outline' | 'link' | 'none';
type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  /**
   * Set the color of the button
   */
  color?: ButtonColor;
  /**
   * Defines the appearance e.g. visual look of the Action.
   * Has no effect on the rendered html element
   */
  appearance?: ButtonAppearance;
  /**
   * Sets the physical size of button
   */
  size?: ButtonSize;
  /**
   * HTML element to output either `<a>` or `<button>`
   */
  renderAs?: ButtonRenderAs;
  /**
   * Set to true if link goes to an external site
   */
  external?: boolean;
  /**
   * URL to navigate to when clicked
   */
  href?: string;
} & React.HTMLAttributes<HTMLElement>;

const Button: React.FC<ButtonProps> = ({
  className,
  color = 'primary',
  appearance = 'solid',
  size = 'medium',
  renderAs = 'button',
  external = false,
  children,
  ...props
}) => {
  const Element = renderAs;
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
        styles[`button--variant-${appearance}-${color}`],
        { [styles[`button--size-${size}`]]: appearance !== 'none' },
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
