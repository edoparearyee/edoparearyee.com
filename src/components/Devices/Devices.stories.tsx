import type { Meta, StoryObj } from '@storybook/react';

import Devices, { DevicesProps } from './Devices';

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
    imagesMobile: [
      {
        image: [
          {
            breakpoint: 375,
            '1x': 'https://picsum.photos/id/900/365/780',
            '2x': 'https://picsum.photos/id/900/730/1560',
          },
        ],
        alt: '',
      },
      {
        image: [
          {
            breakpoint: 375,
            '1x': 'https://picsum.photos/id/522/365/780',
            '2x': 'https://picsum.photos/id/522/730/1560',
          },
        ],
        alt: '',
      },
      {
        image: [
          {
            breakpoint: 375,
            '1x': 'https://picsum.photos/id/905/365/780',
            '2x': 'https://picsum.photos/id/905/730/1560',
          },
        ],
        alt: '',
      },
    ],
    imagesDesktop: [
      {
        image: [
          {
            breakpoint: 375,
            '1x': 'https://picsum.photos/id/900/912/590',
            '2x': 'https://picsum.photos/id/900/1824/1180',
          },
        ],
        alt: '',
      },
      {
        image: [
          {
            breakpoint: 375,
            '1x': 'https://picsum.photos/id/522/912/590',
            '2x': 'https://picsum.photos/id/522/1824/1180',
          },
        ],
        alt: '',
      },
      {
        image: [
          {
            breakpoint: 375,
            '1x': 'https://picsum.photos/id/905/912/590',
            '2x': 'https://picsum.photos/id/905/1824/1180',
          },
        ],
        alt: '',
      },
    ],
  },
};
