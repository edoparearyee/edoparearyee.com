import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import MobileDevice from '../MobileDevice/MobileDevice';
import DesktopDevice from '../DesktopDevice/DesktopDevice';
import Image from '../Image/Image';
import { ResponsiveImages } from '@/models/image.model';

import styles from './Device.module.scss';

export type DeviceProps = PropsWithChildren<{
  type?: 'mobile' | 'desktop';
  assetType?: 'image' | 'video';
  imageSrc?: ResponsiveImages;
  imageAlt?: string;
  videoSrc?: string;
}>;

const Device: React.FC<DeviceProps> = ({
  type = 'mobile',
  assetType = 'image',
  imageSrc,
  imageAlt = '',
}) => {
  const DeviceFrame = type === 'mobile' ? MobileDevice : DesktopDevice;
  return (
    <div
      className={classNames(styles['device'], styles[`device--type-${type}`])}
    >
      {assetType === 'image' && imageSrc ? (
        <Image
          className={styles.device__image}
          sources={imageSrc || []}
          alt={imageAlt}
        />
      ) : null}
      <DeviceFrame className={styles.device__frame} />
    </div>
  );
};

export default Device;
