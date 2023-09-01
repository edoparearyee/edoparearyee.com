import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import MobileDevice from '../MobileDevice/MobileDevice';
import DesktopDevice from '../DesktopDevice/DesktopDevice';
import Carousel from '../Carousel/Carousel';
import Video from '../Video/Video';
import { ResponsiveImageWithAltText } from '@/models/image.model';

import styles from './Device.module.scss';

export type DeviceProps = PropsWithChildren<{
  type?: 'mobile' | 'desktop';
  assetType?: 'image' | 'video';
  images?: ResponsiveImageWithAltText[];
  videoSrc?: string;
  videoPoster?: string;
}>;

const Device: React.FC<DeviceProps> = ({
  type = 'mobile',
  assetType = 'image',
  images = [],
  videoSrc,
  videoPoster,
}) => {
  const DeviceFrame = type === 'mobile' ? MobileDevice : DesktopDevice;
  return (
    <div
      className={classNames(styles['device'], styles[`device--type-${type}`])}
    >
      <div className={classNames(styles.device__asset)}>
        {assetType === 'image' && images?.length ? (
          <Carousel images={images} />
        ) : null}
        {assetType === 'video' && videoSrc ? (
          <Video
            className={styles.device__video}
            src={videoSrc}
            autoPlay
            muted
            playsInline
            poster={videoPoster}
            loop
          />
        ) : null}
      </div>
      <DeviceFrame className={styles.device__frame} />
    </div>
  );
};

export default Device;
