import React from 'react';
import classNames from 'classnames';

import { ResponsiveImage } from '../../models/image.model';

import styles from './Image.module.scss';

export type ImageProps = {
  sources: ResponsiveImage;
  alt?: string;
  className?: string;
  imgClassName?: string;
} & React.VideoHTMLAttributes<HTMLVideoElement>;

const Image: React.FC<ImageProps> = ({
  className,
  imgClassName,
  alt = '',
  sources = [],
  ...props
}) => {
  return (
    <picture className={classNames(styles.picture, className)} {...props}>
      {sources
        .sort((a, b) => b.breakpoint - a.breakpoint)
        .map((source) => (
          <source
            key={source.breakpoint}
            media={`(min-width: ${source.breakpoint}px)`}
            srcSet={`${source['1x']}, ${source['2x']} 2x`}
          />
        ))}
      <img
        className={classNames(styles.image, imgClassName)}
        src={
          sources.sort((a, b) => b.breakpoint - a.breakpoint)[
            sources.length - 1
          ]['1x']
        }
        alt={alt}
      />
    </picture>
  );
};

export default Image;
