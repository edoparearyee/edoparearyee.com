import type { Meta, StoryObj } from '@storybook/react';

import ClientCard from './ClientCard';

const meta: Meta<typeof ClientCard> = {
  title: 'ClientCard',
  component: ClientCard,
  parameters: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ClientCard>;

const defaultArgs = {
  logoUrl:
    'https://images.ctfassets.net/6jfmcr2hylt7/14c4DoTgQhdbkb0SNLSHGk/1a2381aafbab288be880ab4774d5eb71/WWE_Logo_Vector.svg',
  name: 'WWE',
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
