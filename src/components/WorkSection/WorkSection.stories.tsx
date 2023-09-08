import type { Meta, StoryObj } from '@storybook/react';

import WorkSection, { WorkCard } from './WorkSection';

const meta: Meta<typeof WorkSection> = {
  title: 'Sections/Work',
  component: WorkSection,
};

export default meta;
type Story = StoryObj<typeof WorkSection>;

const workCard: WorkCard = {
  image: {
    image: [
      {
        breakpoint: 1024,
        '1x': 'https://picsum.photos/id/905/600/450',
        '2x': 'https://picsum.photos/id/905/1200/900',
      },
      {
        breakpoint: 768,
        '1x': 'https://picsum.photos/id/905/400/350',
        '2x': 'https://picsum.photos/id/905/800/700',
      },
      {
        breakpoint: 375,
        '1x': 'https://picsum.photos/id/905/300/450',
        '2x': 'https://picsum.photos/id/905/600/900',
      },
    ],
    alt: 'Lights at night',
  },
  slug: '1',
  title: 'Card title',
  logoUrl: '',
};

const defaultArgs = {
  initialCards: [
    { ...workCard, slug: '1' },
    { ...workCard, slug: '2' },
    { ...workCard, slug: '3' },
    { ...workCard, slug: '4' },
  ],
  total: 4,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const ForWorkListPage: Story = {
  args: {
    ...defaultArgs,
  },
};
