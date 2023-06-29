import type { Meta, StoryObj } from '@storybook/react';

import WorkSection from './WorkSection';

const meta: Meta<typeof WorkSection> = {
  title: 'Sections/Work',
  component: WorkSection,
};

export default meta;
type Story = StoryObj<typeof WorkSection>;

const workCard = {
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
  imageAlt: 'Lights at night',
  title: 'Card title',
  blurb:
    'Labore est qui est non veniam irure culpa nulla ullamco incididunt Lorem sit.',
};

const defaultArgs = {
  cards: [
    { ...workCard, slug: '1' },
    { ...workCard, slug: '2' },
    { ...workCard, slug: '3' },
  ],
  ctaText: 'See more',
  ctaLink: '/work',
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
    cards: [
      { ...workCard, slug: '1' },
      { ...workCard, slug: '2' },
      { ...workCard, slug: '3' },
      { ...workCard, slug: '4' },
      { ...workCard, slug: '5' },
      { ...workCard, slug: '6' },
      { ...workCard, slug: '7' },
      { ...workCard, slug: '8' },
      { ...workCard, slug: '9' },
      { ...workCard, slug: '10' },
      { ...workCard, slug: '11' },
      { ...workCard, slug: '12' },
    ],
    ctaText: 'Go back',
    ctaLink: '/',
  },
};
