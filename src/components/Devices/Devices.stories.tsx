import type { Meta, StoryObj } from '@storybook/react';

import Devices, { DevicesProps } from './Devices';
import {
  aboutMeCarouselImagesDesktop,
  aboutMeCarouselImagesMobile,
} from '../AboutMeSection/carouselImages';

const meta: Meta<typeof Devices> = {
  title: 'Devices',
  component: Devices,
  argTypes: {
    assetType: { control: 'select', defaultValue: 'image' },
    videoDesktopSrc: { if: { arg: 'assetType', eq: 'video' } },
    videoMobileSrc: { if: { arg: 'assetType', eq: 'video' } },
    videoPosterDesktop: { if: { arg: 'assetType', eq: 'video' } },
    videoPosterMobile: { if: { arg: 'assetType', eq: 'video' } },
    imagesDesktop: { if: { arg: 'assetType', eq: 'image' } },
    imagesMobile: { if: { arg: 'assetType', eq: 'image' } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Devices>;

const defaultArgs: DevicesProps = {
  assetType: 'image',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    imagesMobile: aboutMeCarouselImagesMobile,
    imagesDesktop: aboutMeCarouselImagesDesktop,
  },
};
