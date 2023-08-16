import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

const defaultArgs = {
  image: [
    {
      breakpoint: 1024,
      '1x': 'https://picsum.photos/id/195/390/243',
      '2x': 'https://picsum.photos/id/195/780/486',
    },
    {
      breakpoint: 768,
      '1x': 'https://picsum.photos/id/195/384/240',
      '2x': 'https://picsum.photos/id/195/768/480',
    },
    {
      breakpoint: 375,
      '1x': 'https://picsum.photos/id/195/375/234',
      '2x': 'https://picsum.photos/id/195/750/468',
    },
  ],
  imageAlt: 'Lights at night',
  title: 'Mollit ipsum tempor do reprehenderit consectetur',
  blurb:
    'Labore est qui est non veniam irure culpa nulla ullamco incididunt Lorem sit.',
  logoUrl:
    '//images.ctfassets.net/6jfmcr2hylt7/zMbS0ryj08Gc8RDkOZz8Q/290e5dd5a54aa914bddebea2308046bf/google-ar21.svg',
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
