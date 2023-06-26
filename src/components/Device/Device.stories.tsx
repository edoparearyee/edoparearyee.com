import type { Meta, StoryObj } from '@storybook/react';

import Device, { DeviceProps } from './Device';

const meta: Meta<typeof Device> = {
  title: 'Device',
  component: Device,
  argTypes: {
    type: { control: 'select', defaultValue: 'mobile' },
    assetType: { control: 'select', defaultValue: 'image' },
    videoSrc: { if: { arg: 'assetType', eq: 'video' } },
    videoPoster: { if: { arg: 'assetType', eq: 'video' } },
    imageSrc: { if: { arg: 'assetType', eq: 'image' } },
    imageAlt: { if: { arg: 'assetType', eq: 'image' } },
  },
};

export default meta;
type Story = StoryObj<typeof Device>;

const defaultArgs: DeviceProps = {
  type: 'mobile',
  assetType: 'image',
};

export const Mobile: Story = {
  args: {
    ...defaultArgs,
    imageSrc: [
      {
        breakpoint: 375,
        '1x': 'https://picsum.photos/id/215/365/780',
        '2x': 'https://picsum.photos/id/215/730/1560',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Desktop: Story = {
  args: {
    ...defaultArgs,
    type: 'desktop',
    imageSrc: [
      {
        breakpoint: 375,
        '1x': 'https://picsum.photos/id/215/912/590',
        '2x': 'https://picsum.photos/id/215/1824/1180',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MobileWithVideo: Story = {
  args: {
    ...defaultArgs,
    type: 'mobile',
    assetType: 'video',
    videoSrc:
      'https://res.cloudinary.com/edoparearyee/video/upload/c_fill,h_780,w_365/v1552765866/samples/sea-turtle.webm',
    videoPoster:
      'https://res.cloudinary.com/edoparearyee/video/upload/c_fill,h_780,w_365/v1552765866/samples/sea-turtle.jpg',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const DesktopWithVideo: Story = {
  args: {
    ...defaultArgs,
    type: 'desktop',
    assetType: 'video',
    videoSrc:
      'https://res.cloudinary.com/edoparearyee/video/upload/c_fill,h_590,w_912/v1552765866/samples/sea-turtle.webm',
    videoPoster:
      'https://res.cloudinary.com/edoparearyee/video/upload/c_fill,h_590,w_912/v1552765866/samples/sea-turtle.jpg',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
};
