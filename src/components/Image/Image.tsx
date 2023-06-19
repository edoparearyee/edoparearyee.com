import React from 'react';
import classNames from 'classnames';

import { ResponsiveImages } from '../../models/image.model';

import styles from './Image.module.scss';

export type ImageProps = {
  sources: ResponsiveImages;
  alt?: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({
  className,
  alt = '',
  sources = [],
  ...props
}) => {
  return (
    <picture className={classNames(styles.picture, className)} {...props}>
      {sources.map((source) => (
        <source
          key={source.breakpoint}
          media={`(min-width: ${source.breakpoint}px)`}
          srcSet={`${source['1x']}, ${source['2x']} 2x`}
        />
      ))}
      <img
        className={classNames(styles.image)}
        src={sources[sources.length - 1]['1x']}
        alt={alt}
      />
    </picture>
  );
};

export default Image;
