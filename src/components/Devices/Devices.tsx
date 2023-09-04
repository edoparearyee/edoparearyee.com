import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import Device from '../Device/Device';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import { ResponsiveImageWithAltText } from '../../models/image.model';

import styles from './Devices.module.scss';

export type DevicesProps = PropsWithChildren<{
  assetType?: 'image' | 'video';
  imagesMobile?: ResponsiveImageWithAltText[];
  imagesDesktop?: ResponsiveImageWithAltText[];
  videoDesktopSrc?: string;
  videoMobileSrc?: string;
  videoPosterDesktop?: string;
  videoPosterMobile?: string;
  isIntersecting?: boolean;
  delay?: number;
}>;

const Devices: React.FC<DevicesProps> = ({
  assetType = 'image',
  imagesMobile = [],
  imagesDesktop = [],
  videoMobileSrc,
  videoDesktopSrc,
  videoPosterDesktop,
  videoPosterMobile,
  isIntersecting,
  delay,
}) => {
  return (
    <div className={classNames(styles.devices)}>
      <div className={styles.devices__desktop}>
        <AnimatedElement inView={isIntersecting} variant="left" delay={delay}>
          <Device
            assetType={assetType}
            type="desktop"
            images={imagesDesktop}
            videoSrc={videoDesktopSrc}
            videoPoster={videoPosterDesktop}
          />
        </AnimatedElement>
      </div>
      <div className={styles.devices__mobile}>
        <AnimatedElement inView={isIntersecting} variant="right" delay={delay}>
          <Device
            assetType={assetType}
            type="mobile"
            images={imagesMobile}
            videoSrc={videoMobileSrc}
            videoPoster={videoPosterMobile}
          />
        </AnimatedElement>
      </div>
    </div>
  );
};

export default Devices;
