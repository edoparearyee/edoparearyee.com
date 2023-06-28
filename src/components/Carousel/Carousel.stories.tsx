import type { Meta, StoryObj } from '@storybook/react';

import Carousel, { CarouselProps } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const defaultArgs: CarouselProps = {
  images: [
    {
      image: [
        {
          breakpoint: 1024,
          '1x': 'https://picsum.photos/id/900/1024/576',
          '2x': 'https://picsum.photos/id/900/2048/1152',
        },
        {
          breakpoint: 768,
          '1x': 'https://picsum.photos/id/900/768/1365',
          '2x': 'https://picsum.photos/id/900/1536/2730',
        },
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/900/375/666',
          '2x': 'https://picsum.photos/id/900/750/1332',
        },
      ],
      alt: '',
    },
    {
      image: [
        {
          breakpoint: 1024,
          '1x': 'https://picsum.photos/id/522/1024/576',
          '2x': 'https://picsum.photos/id/522/2048/1152',
        },
        {
          breakpoint: 768,
          '1x': 'https://picsum.photos/id/522/768/1365',
          '2x': 'https://picsum.photos/id/522/1536/2730',
        },
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/522/375/666',
          '2x': 'https://picsum.photos/id/522/750/1332',
        },
      ],
      alt: '',
    },
    {
      image: [
        {
          breakpoint: 1024,
          '1x': 'https://picsum.photos/id/905/1024/576',
          '2x': 'https://picsum.photos/id/905/2048/1152',
        },
        {
          breakpoint: 768,
          '1x': 'https://picsum.photos/id/905/768/1365',
          '2x': 'https://picsum.photos/id/905/1536/2730',
        },
        {
          breakpoint: 375,
          '1x': 'https://picsum.photos/id/905/375/666',
          '2x': 'https://picsum.photos/id/905/750/1332',
        },
      ],
      alt: '',
    },
  ],
  duration: 5000,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
