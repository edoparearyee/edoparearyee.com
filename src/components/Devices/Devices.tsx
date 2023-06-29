import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import { ResponsiveImageWithAltText } from '@/models/image.model';
import Device from '../Device/Device';

import styles from './Devices.module.scss';

export type DevicesProps = PropsWithChildren<{
  assetType?: 'image' | 'video';
  imagesMobile?: ResponsiveImageWithAltText[];
  imagesDesktop?: ResponsiveImageWithAltText[];
  videoDesktopSrc?: string;
  videoMobileSrc?: string;
  videoPosterDesktop?: string;
  videoPosterMobile?: string;
}>;

const Devices: React.FC<DevicesProps> = ({
  assetType = 'image',
  imagesMobile = [],
  imagesDesktop = [],
  videoMobileSrc,
  videoDesktopSrc,
  videoPosterDesktop,
  videoPosterMobile,
}) => {
  return (
    <div className={classNames(styles.devices)}>
      <div className={styles.devices__desktop}>
        <Device
          assetType={assetType}
          type="desktop"
          images={imagesDesktop}
          videoSrc={videoDesktopSrc}
          videoPoster={videoPosterDesktop}
        />
      </div>
      <div className={styles.devices__mobile}>
        <Device
          assetType={assetType}
          type="mobile"
          images={imagesMobile}
          videoSrc={videoMobileSrc}
          videoPoster={videoPosterMobile}
        />
      </div>
    </div>
  );
};

export default Devices;
