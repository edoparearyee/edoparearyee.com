import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import MobileDevice from '../MobileDevice/MobileDevice';
import DesktopDevice from '../DesktopDevice/DesktopDevice';
import Image from '../Image/Image';
import Video from '../Video/Video';
import { ResponsiveImages } from '@/models/image.model';

import styles from './Device.module.scss';

export type DeviceProps = PropsWithChildren<{
  type?: 'mobile' | 'desktop';
  assetType?: 'image' | 'video';
  imageSrc?: ResponsiveImages;
  imageAlt?: string;
  videoSrc?: string;
  videoPoster?: string;
}>;

const Device: React.FC<DeviceProps> = ({
  type = 'mobile',
  assetType = 'image',
  imageSrc,
  videoSrc,
  videoPoster,
  imageAlt = '',
}) => {
  const DeviceFrame = type === 'mobile' ? MobileDevice : DesktopDevice;
  return (
    <div
      className={classNames(styles['device'], styles[`device--type-${type}`])}
    >
      {assetType === 'image' && imageSrc ? (
        <Image
          className={styles.device__asset}
          sources={imageSrc || []}
          alt={imageAlt}
        />
      ) : null}
      {assetType === 'video' && videoSrc ? (
        <Video
          className={classNames(styles.device__asset, styles.device__video)}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          poster={videoPoster}
          loop
        />
      ) : null}
      <DeviceFrame className={styles.device__frame} />
    </div>
  );
};

export default Device;
