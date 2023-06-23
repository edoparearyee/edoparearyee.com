import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px' }}>
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
      breakpoint: 375,
      '1x': 'https://picsum.photos/id/195/300/450',
      '2x': 'https://picsum.photos/id/195/600/900',
    },
  ],
  imageAlt: 'Lights at night',
  title: 'Card title',
  blurb:
    'Labore est qui est non veniam irure culpa nulla ullamco incididunt Lorem sit.',
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
