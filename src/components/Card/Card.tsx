import React, { PropsWithChildren } from 'react';

import Image from '../Image/Image';
import Type from '../Type/Type';
import { ResponsiveImages } from '@/models/image.model';

import styles from './Card.module.scss';

type CardProps = PropsWithChildren<{
  image: ResponsiveImages;
  imageAlt: string;
  title: string;
  blurb: string;
}>;

const Card: React.FC<CardProps> = ({ image, imageAlt, title, blurb }) => (
  <div className={styles.card}>
    <Image sources={image} alt={imageAlt} className={styles.card__image} />
    <div className={styles.card__body}>
      <Type renderAs="h3" appearance="h3">
        {title}
      </Type>
      <Type>{blurb}</Type>
    </div>
  </div>
);

export default Card;
