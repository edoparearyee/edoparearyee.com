import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import Image from '../Image/Image';
import Type from '../Type/Type';
import { ResponsiveImage } from '@/models/image.model';

import styles from './Card.module.scss';

type CardProps = PropsWithChildren<{
  image: ResponsiveImage;
  imageAlt: string;
  title: string;
  blurb: string;
  className?: string;
}>;

const Card: React.FC<CardProps> = ({
  image,
  imageAlt,
  title,
  blurb,
  className,
}) => (
  <div className={classNames(styles.card, className)}>
    <Image sources={image} alt={imageAlt} className={styles.card__image} />
    <div className={styles.card__body}>
      <Type renderAs="h3" appearance="h3">
        {title}
      </Type>
      <Type className={styles.card__blurb}>{blurb}</Type>
    </div>
  </div>
);

export default Card;
