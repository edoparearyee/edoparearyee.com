import type { Meta, StoryObj } from '@storybook/react';

import MobileDevice from './MobileDevice';

const meta: Meta<typeof MobileDevice> = {
  title: 'MobileDevice',
  component: MobileDevice,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MobileDevice>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
