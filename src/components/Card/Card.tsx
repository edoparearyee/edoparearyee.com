import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import Image from '../Image/Image';
import { ResponsiveImage } from '@/models/image.model';

import styles from './Card.module.scss';
import Type from '../Type/Type';
import Badge from '../Badge/Badge';

type CardProps = PropsWithChildren<{
  image: ResponsiveImage;
  imageAlt: string;
  title: string;
  logoUrl: string;
  className?: string;
}>;

const Card: React.FC<CardProps> = ({
  image,
  imageAlt,
  title,
  logoUrl,
  className,
}) => (
  <div className={classNames(styles.card, className)}>
    <Image
      sources={image}
      alt={imageAlt}
      className={styles.card__image}
      imgClassName={styles['card__image-img']}
    />
    <div className={styles['card__logo-wrapper']}>
      <Image
        className={styles['card__client-logo']}
        imgClassName={styles['card__client-logo-img']}
        sources={[
          {
            '1x': logoUrl,
            '2x': logoUrl,
            breakpoint: 375,
          },
        ]}
        alt={title}
      />
    </div>
    <div className={styles.card__body}>
      <Type renderAs="h3" appearance="h2">
        {title}
      </Type>
      <Badge appearance="outline" shape="pill" size="small" color="secondary">
        View project
      </Badge>
    </div>
  </div>
);

export default Card;
