import type { Meta, StoryObj } from '@storybook/react';

import Carousel, { CarouselProps } from './Carousel';
import { aboutMeCarouselImagesDesktop } from '../AboutMeSection/carouselImages';

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
  images: aboutMeCarouselImagesDesktop,
  duration: 5000,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
