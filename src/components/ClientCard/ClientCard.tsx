import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import Image from '../Image/Image';

import styles from './ClientCard.module.scss';

type ClientCardProps = PropsWithChildren<{
  logoUrl: string;
  className?: string;
  name: string;
}>;

const ClientCard: React.FC<ClientCardProps> = ({
  className,
  logoUrl,
  name,
}) => (
  <div className={classNames(styles['client-card'], className)}>
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
      alt={name}
    />
  </div>
);

export default ClientCard;
