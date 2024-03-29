import type { Meta, StoryObj } from '@storybook/react';

import Image, { ImageProps } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Image',
  component: Image,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Image>;

const defaultArgs: ImageProps = {
  sources: [
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
  alt: 'Pariatur est ut minim aute laboris reprehenderit ullamco id.',
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
