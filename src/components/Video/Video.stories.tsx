import type { Meta, StoryObj } from '@storybook/react';

import Video, { VideoProps } from './Video';

const meta: Meta<typeof Video> = {
  title: 'Video',
  component: Video,
  argTypes: {
    src: {
      name: 'src',
      type: 'string',
      defaultValue:
        'https://res.cloudinary.com/edoparearyee/video/upload/c_fill,h_590,w_912/v1552765866/samples/sea-turtle.webm',
    },
    autoPlay: { type: 'boolean', defaultValue: false },
    controls: { type: 'boolean', defaultValue: true },
    onPlay: { action: 'onPlay' },
    onPause: { action: 'onPause' },
  },
};

export default meta;
type Story = StoryObj<typeof Video>;

const defaultArgs: VideoProps = {
  controls: true,
  autoPlay: false,
  playsInline: true,
  muted: true,
  loop: true,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
    src: 'https://res.cloudinary.com/edoparearyee/video/upload/c_fill,h_590,w_912/v1552765866/samples/sea-turtle.webm',
    poster:
      'https://res.cloudinary.com/edoparearyee/video/upload/c_fill,h_590,w_912/v1552765866/samples/sea-turtle.jpg',
  },
};

export const AutoplayInView: Story = {
  args: {
    autoPlay: true,
    muted: true,
    playsInline: true,
    src: 'https://res.cloudinary.com/edoparearyee/video/upload/c_fill,h_590,w_912/v1552765866/samples/sea-turtle.webm',
    poster:
      'https://res.cloudinary.com/edoparearyee/video/upload/c_fill,h_590,w_912/v1552765866/samples/sea-turtle.jpg',
    controls: false,
  },
  decorators: [
    (Story) => (
      <div>
        Scroll down
        <div style={{ paddingTop: '150vh' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};
