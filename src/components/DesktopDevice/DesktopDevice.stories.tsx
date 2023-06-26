import type { Meta, StoryObj } from '@storybook/react';

import DesktopDevice from './DesktopDevice';

const meta: Meta<typeof DesktopDevice> = {
  title: 'DesktopDevice',
  component: DesktopDevice,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DesktopDevice>;

const defaultArgs = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
